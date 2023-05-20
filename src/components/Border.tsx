type BorderProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

export function Border<C extends React.ElementType = "span">({
  as,
  children,
  ...restProps
}: BorderProps<C>) {
  const Component = as || "span";

  return (
    <Component {...restProps} className="border">
      {children}
    </Component>
  );
}
