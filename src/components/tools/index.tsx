import { Icon } from "@/icons";
import { ITool, tools } from "./schema";
import { HyperList } from "../list";

export const Tools = () => {
  return (
    <section className="">
      <HyperList
        data={tools}
        component={Tool}
        container="grid grid-cols-6 w-full h-14 relative z-50"
        keyId="id"
        itemStyle="border-r dark:border-primary/10 flex items-center justify-center border-primary/60 last:border-r-0 h-full"
        delay={0.16}
      />
    </section>
  );
};

const Tool = (tool: ITool) => {
  return (
    <div className="flex group-hover/list:bg-muted cursor-pointer transition-colors duration-300 items-center px-6 justify-between w-full h-full">
      <Icon name={tool.icon} className="size-5 dark:text-muted-foreground" />
      <p className="text-xs">{tool.title}</p>
    </div>
  );
};
