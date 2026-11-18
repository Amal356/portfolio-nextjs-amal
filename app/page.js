// Portfolio généré par Backstage (template portfolio-nextjs-template) – version 1
const competences = ["Linux", "Docker", "Kubernetes", "CI/CD", "GitOps", "Next.js"];

export default function Accueil() {
  return (
    <main>
      <header>
        <h1>Amal Jemli</h1>
        <p className="titre">Étudiante en Master DevOps et Cloud Computing – ISET Tozeur</p>
      </header>

      <section>
        <h2>À propos</h2>
        <p>Je construis des applications web et j'automatise leur livraison (conteneurs, CI/CD, GitOps).</p>
      </section>

      <section>
        <h2>Compétences</h2>
        <ul className="badges">
          {competences.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </section>

      <footer>Version {process.env.APP_VERSION || "dev"} – déployée par Backstage</footer>
    </main>
  );
}
