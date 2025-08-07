'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SearchBar from "./atoms/SearchBar";
import CategoryBar from "./organisms/CategoryBar";
import { useRouter } from "next/navigation";
import { appRoutes } from "@/constants/app-routes";

type NavbarProps = {
  categories: string[];
};

export default function Navbar({ categories }: NavbarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      router.push(`/buscar?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 gradient-primary shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            <Link href={`${appRoutes.home}`} className="flex-shrink-0">
              <Image
                src="/assets/only-logo-blanco.png"
                alt="Logo MaxiCompra"
                width={60}
                height={40}
                priority
              />
            </Link>

            <form onSubmit={handleSubmit} className="flex-grow">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </form>
          </div>
        </div>

        <CategoryBar categories={categories} />
      </nav>
      <div className="h-32"></div>
    </>
  );
}
