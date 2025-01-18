import {
  Frame,
  Gauge,
  Download,
  Globe,
  Sparkles,
  LayoutDashboard,
  Palette,
  CodeXml,
} from "lucide-react";

import { FeatureHoverCard } from "@/components/ui/card/feature";

export function Features() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">
          Tools
        </span>
      </div>

      <div className="relative z-10 grid w-full grid-cols-1 py-10 container md:grid-cols-2 lg:grid-cols-4">
        <FeatureHoverCard
          icon={Frame}
          title="Visual Builder"
          description="Edit HTML, Tailwind & React components visually."
          className="lg:border-l"
        />
        <FeatureHoverCard
          icon={Gauge}
          title="Ease of use"
          description="No new mental models to learn. It feels like magic."
        />
        <FeatureHoverCard
          icon={Download}
          title="Code Export"
          description="Export your website to a Next.js & Tailwind app."
        />
        <FeatureHoverCard
          icon={Globe}
          title="No lock-in"
          description="Customize without limitations and host anywhere."
        />
        <FeatureHoverCard
          icon={Sparkles}
          title="Modern tech stack"
          description="Works with Next.js, Tailwind and Shadcn UI."
          className="lg:border-l lg:border-b-0 hover:bg-gradient-to-b"
        />
        <FeatureHoverCard
          icon={LayoutDashboard}
          title="Pre-made templates"
          description="Get started quickly with ready templates and sections."
          className="lg:border-b-0 hover:bg-gradient-to-b"
        />
        <FeatureHoverCard
          icon={Palette}
          title="AI Theme Generation"
          description="Generate beautiful themes and color palettes with AI."
          className="lg:border-b-0 hover:bg-gradient-to-b"
        />
        <FeatureHoverCard
          icon={CodeXml}
          title="Built for developers"
          description="Reweb is built by developers for developers."
          className="lg:border-b-0 hover:bg-gradient-to-b"
        />
      </div>
    </section>
  );
}
