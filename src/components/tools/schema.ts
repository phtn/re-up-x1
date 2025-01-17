import { type IconName } from "@/icons";

export interface ITool {
  id: number;
  title: string;
  description: string;
  icon: IconName;
  href: string;
}

export const tools: ITool[] = [
  {
    id: 1,
    title: "Dev Tools",
    description: "App Development tools",
    icon: "Dev",
    href: "/dev-tools",
  },
  {
    id: 2,
    title: "Launcher",
    description: "Customizable Launcher",
    icon: "Rocket",
    href: "/launcher",
  },
  {
    id: 3,
    title: "In-Progress",
    description: "Invoice your clients",
    icon: "Fire",
    href: "/invoicing",
  },
  {
    id: 4,
    title: "In-Progress",
    description: "Webhooks for your app",
    icon: "Fire",
    href: "/fire",
  },
  {
    id: 5,
    title: "In-Progress",
    description: "Webhooks for your app",
    icon: "Fire",
    href: "/fire",
  },
  {
    id: 6,
    title: "In-Progress",
    description: "Webhooks for your app",
    icon: "Fire",
    href: "/fire",
  },
];
