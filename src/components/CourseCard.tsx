import type { Course } from "../types/course";
import { Link } from "react-router-dom";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { id, titulo, descricao, cargaHoraria, nivel, categoria } = course;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
      }}
    >
      <h3>
        <Link to={`/cursos/${id}`}>{titulo}</Link>
      </h3>

      <p>{descricao}</p>

      <p>
        <strong>Carga horária:</strong> {cargaHoraria}h
      </p>
      <p>
        <strong>Nível:</strong> {nivel}
      </p>
      <p>
        <strong>Categoria:</strong> {categoria}
      </p>
    </div>
  );
}
