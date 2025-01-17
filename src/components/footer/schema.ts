import { type FC } from "react";
import { CompanyInfo, SiteSettings, SocialMedia } from "./components";

export interface IFooter {
  id: number;
  title: string;
  description: string;
  content: FC;
}

export const footer: IFooter[] = [
  {
    id: 1,
    title: "Company Info",
    description: "Company information",
    content: CompanyInfo,
  },
  {
    id: 2,
    title: "Social Media",
    description: "Social media links",
    content: SocialMedia,
  },
  {
    id: 3,
    title: "Settings",
    description: "Website settings",
    content: SiteSettings,
  },
];
