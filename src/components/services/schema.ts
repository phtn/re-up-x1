import { type IconName } from "@/icons";

export interface IService {
  id: number;
  title: string;
  label: string;
  intro: string;
  description: string;
  icon: IconName;
  href: string;
}

export const services: IService[] = [
  {
    id: 1,
    title: "Servers",
    label: "Secure Cloud Servers",
    description:
      "Our cloud servers provide a robust and scalable infrastructure designed to meet the diverse computing needs of businesses of all sizes. With the ability to quickly provision resources, you can easily scale up or down based on demand, ensuring optimal performance and cost-efficiency. Our cloud servers are equipped with advanced security features, high availability, and reliable backup solutions, allowing you to focus on your core business while we handle the technical complexities.",
    intro:
      "Meet your computing needs with virtual servers hosted in the cloud.",
    icon: "Server",
    href: "/secure-servers",
  },
  {
    id: 2,
    title: "Database",
    label: "Real-time Database",
    description:
      "Our database solutions offer a powerful and secure platform for storing, managing, and retrieving data. Whether you need a relational database for structured data or a NoSQL database for unstructured data, we provide flexible options tailored to your specific requirements. Our databases are designed for high performance, with features such as automated backups, data replication, and robust security measures to protect your sensitive information. Enjoy seamless integration with your applications and real-time analytics to drive informed decision-making.",
    intro: "Securely access and manage your data, anytime & anywhere.",
    icon: "Database",
    href: "/database",
  },
  {
    id: 3,
    title: "Invoicing",
    label: "Invoicing Services",
    description:
      "Simplify your billing process with our comprehensive invoicing solution. Our platform automates the creation and delivery of invoices, tracks payments, and generates financial reports, allowing you to manage your cash flow with ease. Customize invoices with your branding, set up recurring billing for subscription services, and send reminders for overdue payments. With our invoicing service, you can save time, reduce errors, and enhance your financial management, enabling you to focus on growing your business.",
    intro:
      "Automate your billing processes, track, and simplify financial management.",
    icon: "Invoice",
    href: "/invoicing",
  },
  {
    id: 4,
    title: "Webhooks",
    label: "Webhooks Provider",
    description:
      "Enhance your application's functionality with our webhook service, which enables real-time data exchange between different systems. Webhooks allow your applications to send and receive notifications automatically, facilitating seamless integration with third-party services and APIs. Whether you need to trigger actions based on specific events or synchronize data across platforms, our webhook solution provides a reliable and efficient way to automate workflows. With easy setup and customizable payloads, and improve overall efficiency.",
    intro:
      "Send and receive data automatically in real-time with our webhook api.",
    icon: "Webhooks",
    href: "/webhooks",
  },
];
