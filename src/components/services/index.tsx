import { HyperList } from "../list";
import { services } from "./schema";
import { Service } from "./service";

export const Services = () => {
  return (
    <section>
      <HyperList
        data={services}
        component={Service}
        container="grid grid-cols-4 portrait:md:h-[38rem] portrait:md:grid-cols-2 w-full h-72 relative z-50 dark:border-primary/10 border-primary/60 border-y"
        itemStyle="border-r portrait:md:border-t border-primary/60 portrait:md:last:border-b-0 last:border-r-0 h-full dark:border-primary/10"
        keyId="id"
      />
    </section>
  );
};
