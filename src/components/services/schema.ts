import { type IconName } from "@/icons";

export interface IService {
  id: number;
  title: string;
  description: string;
  icon: IconName;
  href: string;
}

export const services: IService[] = [
  {
    id: 1,
    title: "Secure Servers",
    description: "Service 1 description",
    icon: "Server",
    href: "/secure-servers",
  },
  {
    id: 2,
    title: "Real-time Database",
    description: "Service 1 description",
    icon: "Database",
    href: "/database",
  },
  {
    id: 3,
    title: "Invoicing",
    description: "Invoice your clients",
    icon: "Invoice",
    href: "/invoicing",
  },
  {
    id: 4,
    title: "Webhooks",
    description: "Webhooks for your app",
    icon: "Webhooks",
    href: "/webhooks",
  },
];
