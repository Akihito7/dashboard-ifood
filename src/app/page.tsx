export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark">
      {/* Conteúdo da página */}
      <h1 className="text-4xl">Bem-vindo ao Tema Escuro/Claro!</h1>
      <p className="text-lg">Isso é um exemplo de aplicação do tema claro e escuro com Tailwind CSS.</p>
    </div>
  );
}
