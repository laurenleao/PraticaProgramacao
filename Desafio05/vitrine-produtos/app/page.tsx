"use client"; // Necessário pois estamos usando hooks (useState, useEffect)

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { formatarPreco } from "../utils/formatarPreco";

// Tipagem dos dados da API
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Home() {
  // useState com array vazio como exigido
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect com array de dependências vazio
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos da API", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <header className="flex justify-between items-center mb-10 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800">Vitrine FakeStore</h1>
        <Link href="/sobre" className="text-blue-600 font-semibold hover:underline">
          Ir para Sobre
        </Link>
      </header>

      {/* Grid responsivo com Tailwind (sm, md, lg, xl) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
          >
            <img 
              src={product.image} 
              alt={product.title} 
              className="h-40 w-auto object-contain mb-4" 
            />
            <h2 className="text-sm font-semibold text-center text-gray-700 line-clamp-2 mb-3">
              {product.title}
            </h2>
            {/* Usando a função utilitária que criamos o teste */}
            <p className="text-lg font-bold text-emerald-600 mt-auto">
              {formatarPreco(product.price)}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}