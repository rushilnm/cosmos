import type { Metadata } from "next";
import QuizHub from "@/components/pages/QuizHub";

export const metadata: Metadata = {
  title: "Quizzes",
  description: "Test your knowledge of the solar system, stars, space exploration, and more.",
};

export default function Page() { return <QuizHub />; }
