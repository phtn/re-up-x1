"use client";

import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Tools } from "@/components/tools";
import { ReactNode } from "react";

export const Content = () => {
  return (
    <Container>
      <Hero />
      <Services />
      <Tools />
      <Footer />
    </Container>
  );
};

const Container = ({ children }: { children: ReactNode }) => (
  <main className="h-full overflow-y-scroll">{children}</main>
);
