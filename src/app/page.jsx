import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center max-w-2xl gap-9">
          <h1 className="text-4xl font-bold">Bem-vindo à Calculadora RPV</h1>
          <h2 className="text-xl font-bold">
            Projeto base Next.js + Tailwind + shadcn + integração backend
          </h2>
          <p className="leading-relaxed text-lg text-center">
            Este projeto foi criado para demonstrar uma calculadora de operações matemáticas integrando frontend moderno com backend externo, utilizando as melhores práticas do ecossistema React/Next.js.
          </p>
          <Button>Ir para a calculadora</Button>
        </div>
      </div>
    </>
  );
}
