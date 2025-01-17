import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useCallback } from "react";

export const CompanyInfo = () => <div className="w-full p-6 font-inter"></div>;

export const SocialMedia = () => <div className="w-full p-6 font-inter"></div>;

export const SiteSettings = () => {
  const { setTheme, theme } = useTheme();
  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);
  return (
    <div className="w-full flex items-center justify-between p-6 text-input dark:text-muted-foreground font-inter">
      <span className="text-xs">Settings</span>
      <Button
        size={"xs"}
        variant={"outline"}
        className="text-primary"
        onClick={toggleTheme}
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </Button>
    </div>
  );
};
