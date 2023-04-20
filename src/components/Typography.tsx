export const H1 = ({ children }: { children: string }) => {
  return (
    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
};

export const H2 = ({ children }: { children: string }) => {
  return <h2 className="text-3xl font-semibold tracking-tight">{children}</h2>;
};

export const H3 = ({ children }: { children: string }) => {
  return <h3 className="text-2xl font-semibold tracking-tight">{children}</h3>;
};

export const H4 = ({ children }: { children: string }) => {
  return <h4 className="text-xl font-semibold tracking-tight">{children}</h4>;
};

export const P = ({ children }: { children: string }) => {
  return <p className="leading-7">{children}</p>;
};

export const Blockquote = ({ children }: { children: string }) => {
  return <blockquote className="italic">{children}</blockquote>;
};

export const List = ({ children }: { children: string }) => {
  return <ul className="list-disc [&>li]:mt-2">{children}</ul>;
};

export const InlineCode = ({ children }: { children: string }) => {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
};

export const Lead = ({ children }: { children: string }) => {
  return <p className="text-xl text-muted-foreground">{children}</p>;
};

export const Large = ({ children }: { children: string }) => {
  return <div className="text-lg font-semibold">{children}</div>;
};

export const Small = ({ children }: { children: string }) => {
  return <small className="text-sm font-medium leading-none">{children}</small>;
};

export const Muted = ({ children }: { children: string }) => {
  return <p className="text-sm text-muted-foreground">{children}</p>;
};
