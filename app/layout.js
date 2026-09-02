import "./globals.css";

export const metadata = {
  title: "SCS5102 Discrete Mathematics Quiz",
  description: "Exam-focused quizzes for SCS5102."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}