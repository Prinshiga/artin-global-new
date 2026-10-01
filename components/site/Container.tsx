import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export default function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={className ? `page-container ${className}` : "page-container"}
      {...props}
    />
  );
}
