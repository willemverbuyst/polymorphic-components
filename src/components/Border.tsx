import React from "react";

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

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

type Props<C extends React.ElementType, P> = PolymorphicComponentProps<C, P>;

type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  P
> = PolymorphicComponentProps<C, P> & { ref?: PolymorphicRef<C> };

type BorderComponent = <C extends React.ElementType>(
  props: PolymorphicComponentPropsWithRef<C, BorderProps>
) => React.ReactElement | null;

export const Border: BorderComponent = React.forwardRef(
  <C extends React.ElementType = "span">(
    { as, color, style, children, ...restProps }: Props<C, BorderProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "span";

    const internalStyle = color ? { style: { ...style, color } } : {};

    return (
      <div className="border">
        <Component {...restProps} {...internalStyle} ref={ref}>
          {children}
        </Component>
      </div>
    );
  }
);
