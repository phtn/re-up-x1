import { HyperList } from "../list";
import { services } from "./schema";
import { Service } from "./service";

export const Services = () => {
  return (
    <section>
      <HyperList
        data={services}
        component={Service}
        container="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 portrait:md:h-[38rem] portrait:md:grid-cols-2 w-full h-fit xl:h-72 relative z-50 dark:border-primary/10 border-primary/60 bg-primary-foreground border-y"
        itemStyle="border-r portrait:md:border-t h-72 border-primary/60 portrait:md:last:border-b-0 border-t xl:border-t-0 xl:last:border-r-0 xl:h-full dark:border-primary/10"
        keyId="id"
      />
    </section>
  );
};
