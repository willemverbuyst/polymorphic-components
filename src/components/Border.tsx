type Rainbow = "red" | "orange" | "green" | "blue" | "indigo" | "violet";

type BorderProps<C extends React.ElementType> = {
  as?: C;
  color?: Rainbow | "black";
};

type Props<C extends React.ElementType> = React.PropsWithChildren<
  BorderProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof BorderProps<C>>;

export function Border<C extends React.ElementType = "span">({
  as,
  color,
  style,
  children,
  ...restProps
}: Props<C>) {
  const Component = as || "span";

  const internalStyle = color ? { style: { ...style, color } } : {};

  return (
    <Component {...restProps} className="border" {...internalStyle}>
      {children}
    </Component>
  );
}
