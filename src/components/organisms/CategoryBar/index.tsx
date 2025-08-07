"use client"; 

import { useRef, useEffect } from "react";
import Link from "next/link";
import { appRoutes } from "@/constants/app-routes";

type CategoryBarProps = {
  categories: string[];
};

export default function CategoryBar({ categories }: CategoryBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, right } = container.getBoundingClientRect();
      const mouseX = e.clientX;

      const scrollSpeed = 5;

      if (mouseX - left < 100) {
        container.scrollLeft -= scrollSpeed;
      } else if (right - mouseX < 100) {
        container.scrollLeft += scrollSpeed;
      }
    };

    const handleMouseEnter = () => {
      window.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseLeave = () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-gray-800 text-white flex gap-2 overflow-hidden whitespace-nowrap py-3 px-4"
    >
      {categories.map((category, index) => (
        <Link
          key={index}
          className="min-w-[120px] text-center hover:bg-gray-600 transition p-2 rounded"
          href={`${appRoutes.categorias}`}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}
