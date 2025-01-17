import Image from "next/image";

export const Navbar = () => {
  return (
    <nav>
      <div className="flex w-full h-16">
        <Logo />
        <div className="flex items-center justify-center">
          <div className="h-9 w-10 whitespace-nowrap space-y-[1px] font-medium tracking-tight bg-muted/10">
            <div className="h-3 text-xs flex items-center font-mona">Web</div>
            <div className="h-3 text-xs flex items-center font-mona">
              Research &
            </div>
            <div className="h-3 text-xs flex items-center font-mona">
              Development
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="h-16 w-20 flex items-center justify-center">
      <Image
        src="/svg/re-up-logo.svg"
        alt="re-up logomark"
        width={0}
        height={0}
        className="h-9 w-auto object-cover dark:invert"
        priority
      />
    </div>
  );
};
