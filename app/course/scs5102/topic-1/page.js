import Quiz from "../../../../components/Quiz";
import Link from "next/link";
import { questions } from "../../../../data/scs5102-topic1";

export default function TopicOne() {
  return (
    <main className="quiz-page">
      <header className="topbar quiz-topbar">
        <Link href="/course/scs5102">← SCS5102</Link>
        <span>Topic 1</span>
      </header>
      <Quiz questions={questions} />
    </main>
  );
}