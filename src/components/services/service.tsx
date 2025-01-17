import { Icon } from "@/icons";
import { IService } from "./schema";
import { Button } from "../ui/button";

export const Service = (service: IService) => {
  return (
    <div className="size-full p-6 group-hover/list:bg-muted cursor-pointer leading-none font-mona transition-colors duration-300">
      <div className="flex h-1/5 items-start justify-between">
        <Button size={"xs"} className="" variant={"outline"}>
          {service.title}
        </Button>
        <Icon
          name="ArrowRightLong"
          className="size-5 -translate-x-1 group-hover/list:translate-x-0 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-1 py-4 h-3/5 items-end">
        <Icon
          name={service.icon}
          className="size-12 stroke-0 dark:text-accent fill-none"
        />
      </div>
      <div className="text-xs h-1/5">{service.description}</div>
    </div>
  );
};
