export const Tools = () => {
  return (
    <section className="grid grid-cols-6 w-full h-14 relative z-50">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="border-r flex items-center justify-center border-primary/60 last:border-r-0 h-full"
        >
          <Tool />
        </div>
      ))}
    </section>
  );
};

const Tool = () => {
  return (
    <div className="flex items-center px-6 justify-between w-full h-full">
      <div className="size-5 bg-primary rounded-full"></div>
      <p className="text-xs">Tool</p>
    </div>
  );
};
