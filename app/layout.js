import "./globals.css";

export const metadata = {
  title: "Study Hub",
  description: "Course revision and exam preparation hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
