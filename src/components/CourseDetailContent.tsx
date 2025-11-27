import type { Course } from "../types/course";

interface CourseDetailContentProps {
  course: Course;
}

export default function CourseDetailContent({ course }: CourseDetailContentProps) {
  return (
    <div>
      <h2>{course.titulo}</h2>
      <p>{course.descricao}</p>
      <p><strong>Carga horária:</strong> {course.cargaHoraria}h</p>
      <p><strong>Nível:</strong> {course.nivel}</p>
      <p><strong>Categoria:</strong> {course.categoria}</p>
    </div>
  );
}
