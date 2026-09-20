import Link from "next/link";

export default function Sobre() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Sobre o Projeto</h1>
        <p className="text-gray-600 mb-6">
          Esta é a página extra criada para o Desafio da Aula 05. O projeto utiliza Next.js, 
          Tailwind CSS e consome a Fake Store API via Axios.
        </p>
        <Link 
          href="/" 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Voltar para a Vitrine
        </Link>
      </div>
    </main>
  );
}