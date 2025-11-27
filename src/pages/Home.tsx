import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { usuario } = useAuth();

  return (
    <section>
      <h2>Bem-vindo ao Catálogo de Cursos</h2>
      {usuario ? (
        <p>Explore nossos cursos, {usuario}!</p>
      ) : (
        <p>Explore nossos cursos e faça contato para se cadastrar.</p>
      )}
      <Link to="/cursos">Ver cursos</Link>
    </section>
  );
}
