interface Props {
  as?: any;
  children: React.ReactNode;
}

export function Border({ as, children }: Props) {
  const Component = as || "span";

  return <Component className="border">{children}</Component>;
}
