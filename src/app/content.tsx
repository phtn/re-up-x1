"use client";

import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Tools } from "@/components/tools";

export const Content = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Tools />
      <Footer />
    </main>
  );
};
