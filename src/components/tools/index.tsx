import { Icon } from "@/icons";
import { ITool, tools } from "./schema";
import { HyperList } from "../list";

export const Tools = () => {
  return (
    <section className="">
      <HyperList
        data={tools}
        component={Tool}
        container="grid grid-cols-2 lg:grid-cols-6 w-full h-fit lg:h-14 relative z-50"
        keyId="id"
        itemStyle="lg:border-r odd:border-r border-t lg:border-t-0 dark:border-primary/10  flex items-center justify-center border-primary/60 last:border-r-0 lg:h-full h-14"
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
