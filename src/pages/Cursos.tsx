import { useEffect, useState } from "react";
import type { Course, DummyProduct } from "../types/course";
import { getCursos } from "../services/api";
import CourseList from "../components/CourseList";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import FilterBar from "../components/FilterBar";

export default function Cursos() {
  const [cursos, setCursos] = useState<Course[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    async function carregarCursos() {
      try {
        setCarregando(true);
        setErro(null);

        const produtos = await getCursos();

        const cursosAdaptados: Course[] = produtos.map((produto: DummyProduct) => ({
          id: produto.id,
          titulo: produto.title,
          descricao: produto.description,
          cargaHoraria: produto.stock ?? 40,
          nivel: produto.rating > 4 ? "Avançado" : "Básico",
          categoria: produto.category,
        }));

        setCursos(cursosAdaptados);
      } catch {
        setErro("Erro ao buscar cursos. Tente novamente mais tarde.");
      } finally {
        setCarregando(false);
      }
    }

    carregarCursos();
  }, []);

  const cursosFiltrados = cursos.filter((curso) =>
    curso.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <section>
      <h2>Lista de Cursos</h2>
      <FilterBar filtro={filtro} onChangeFiltro={setFiltro} />
      {carregando && <Loading />}
      {erro && <ErrorMessage message={erro} />}
      {!carregando && !erro && <CourseList courses={cursosFiltrados} />}
    </section>
  );
}
