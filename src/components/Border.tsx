type Rainbow = "red" | "orange" | "green" | "blue" | "indigo" | "violet";

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> | P);

type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = object
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type BorderProps = {
  color?: Rainbow | "black";
};

export function Border<C extends React.ElementType = "span">({
  as,
  color,
  style,
  children,
  ...restProps
}: PolymorphicComponentProps<C, BorderProps>) {
  const Component = as || "span";

  const internalStyle = color ? { style: { ...style, color } } : {};

  return (
    <div className="border">
      <Component {...restProps} {...internalStyle}>
        {children}
      </Component>
    </div>
  );
}
