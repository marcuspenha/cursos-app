import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCursos } from "../services/api";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import CourseDetailContent from "../components/CourseDetailContent";
import type { Course, DummyProduct } from "../types/course";


export default function CursoDetalhe() {
  const { id } = useParams();
  const [curso, setCurso] = useState<Course | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function carregarCurso() {
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


        const encontrado = cursosAdaptados.find((c) => c.id === Number(id));

        if (!encontrado) {
          setErro("Curso não encontrado.");
        } else {
          setCurso(encontrado);
        }
      } catch (e) {
        setErro("Erro ao buscar curso.");
      } finally {
        setCarregando(false);
      }
    }

    carregarCurso();
  }, [id]);

  if (carregando) return <Loading />;
  if (erro) return <ErrorMessage message={erro} />;
  if (!curso) return null;

  return (
    <section>
      <CourseDetailContent course={curso} />
    </section>
  );
}
