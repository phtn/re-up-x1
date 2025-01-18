import { Icon } from "@/icons";
import { type IService } from "./schema";
import { useToggle } from "@/hooks/useToggle";
import { ServicePreview } from "../preview/service";
import { Button } from "../ui/button";

export const Service = (service: IService) => {
  const { open, toggle } = useToggle();

  return (
    <button
      onClick={toggle}
      className="size-full p-6 group-hover/list:bg-muted cursor-pointer leading-none font-mona transition-colors duration-300"
    >
      <div className="flex h-1/5 items-start justify-between">
        <div className="h-6 flex items-center px-2 font-bold tracking-tight text-lg">
          {service.title}
        </div>
        <Icon
          name="ArrowRightLong"
          className="size-5 -translate-x-1 group-hover/list:translate-x-0 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-1 py-4 h-2/5 items-end">
        <Icon
          name={service.icon}
          className="size-12 stroke-0 dark:text-accent fill-none"
        />
      </div>
      <div className="text-sm h-2/5 text-justify flex items-center text-muted-foreground font-sans">
        {service.intro}
      </div>
      <ServicePreview open={open} toggleFn={toggle}>
        <div className="md:w-[calc(50vw)] h-full bg-background">
          <section className="h-16 bg-secondary/60 border-b-[0.5px] dark:bg-muted border-foreground dark:border-muted-foreground flex items-center justify-between ps-6">
            <p className="text-3xl tracking-tighter text-foreground font-bold">
              {service.label}
            </p>
            <Button
              variant={"ghost"}
              onClick={toggle}
              className="w-16 h-full group dark:bg-accent dark:text-background bg-foreground text-accent rounded-none"
            >
              <Icon
                name="Close"
                className="group-hover:scale-[1.25] shrink-0 size-6 stroke-0 transition-transform duration-300"
              />
            </Button>
          </section>
          <div className="px-6 py-4 text-justify font-sans">
            {service.description}
          </div>
        </div>
      </ServicePreview>
    </button>
  );
};
