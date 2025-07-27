import { forwardRef, type ComponentType } from "react";

// Utility to generate a random color
function getRandomColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
}

// withRotate HOC
export function withRotate(Component: ComponentType<any>): ComponentType<any> {
  return forwardRef((props: any, ref) => (
    <Component
      ref={ref}
      {...props}
      animate={{ rotate: 90 }}
      transition={{ duration: 2 }}
    />
  ));
}

// withHover HOC
export function withHover(Component: ComponentType<any>): ComponentType<any> {
  return forwardRef((props: any, ref) => (
    <Component
      ref={ref}
      {...props}
      whileHover={{ scale: 1.05 }}
    />
  ));
}

// withRandomColor HOC
export function withRandomColor(Component: ComponentType<any>): ComponentType<any> {
  return forwardRef((props: any, ref) => {
    const handleClick = () => {
      const newColor = getRandomColor();
      props.onColorChange?.(newColor); // Optional: use callback to send new color
    };

    return (
      <Component
        ref={ref}
        {...props}
        onClick={handleClick}
      />
    );
  });
}
