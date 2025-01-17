import { SideVaul } from "@/components/ui/vaul";
import { type ReactNode } from "react";

interface ServicePreviewProps {
  open: boolean;
  toggleFn: VoidFunction;
  children?: ReactNode;
}
export const ServicePreview = ({
  open,
  toggleFn,
  children,
}: ServicePreviewProps) => {
  return (
    <SideVaul
      open={open}
      onOpenChange={toggleFn}
      direction="right"
      title={"Title"}
      description={"Description"}
    >
      {children}
    </SideVaul>
  );
};
