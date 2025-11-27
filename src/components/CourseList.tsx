import type { Course } from "../types/course";
import CourseCard from "./CourseCard";

interface CourseListProps {
  courses: Course[];
}

export default function CourseList({ courses }: CourseListProps) {
  if (courses.length === 0) {
    return <p>Nenhum curso encontrado.</p>;
  }

  return (
    <div>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
