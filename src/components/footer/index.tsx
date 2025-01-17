export const Footer = () => {
  return (
    <footer className="grid grid-cols-3 w-full h-[193px] relative z-50 bg-primary border-primary/60 border-t">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="border-r last:border-r-0 h-full border-primary/60"
        ></div>
      ))}
    </footer>
  );
};
