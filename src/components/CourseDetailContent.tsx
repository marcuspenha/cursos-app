import type { Course } from "../types/course";

interface CourseDetailContentProps {
  course: Course;
}

export default function CourseDetailContent({
  course,
}: CourseDetailContentProps) {
  const { titulo, descricao, cargaHoraria, nivel, categoria } = course;

  return (
    <div>
      <h2>{titulo}</h2>
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
