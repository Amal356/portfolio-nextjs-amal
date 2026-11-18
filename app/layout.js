import "./globals.css";

export const metadata = {
  title: "Amal Jemli – Portfolio",
  description: "Je construis des applications web et j'automatise leur livraison (conteneurs, CI/CD, GitOps).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
