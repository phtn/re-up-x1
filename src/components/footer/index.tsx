import { HyperList } from "../list";
import { footer, IFooter } from "./schema";

export const Footer = () => {
  return (
    <footer>
      <HyperList
        delay={0.36}
        data={footer}
        component={FooterItem}
        container="grid grid-cols-3 w-full h-48 relative z-50 bg-primary dark:bg-primary-foreground dark:border-primary/10 border-primary/60 border-t"
        itemStyle="h-full"
        keyId="id"
      />
    </footer>
  );
};

const FooterItem = (footer: IFooter) => {
  return <footer.content />;
};
