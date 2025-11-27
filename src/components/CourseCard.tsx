import type { Course } from "../types/course";
import { Link } from "react-router-dom";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 16, borderRadius: 8, marginBottom: 12 }}>
      <h3>
        <Link to={`/cursos/${course.id}`}>{course.titulo}</Link>
      </h3>
      <p>{course.descricao}</p>
      <p><strong>Carga horária:</strong> {course.cargaHoraria}h</p>
      <p><strong>Nível:</strong> {course.nivel}</p>
      <p><strong>Categoria:</strong> {course.categoria}</p>
    </div>
  );
}
