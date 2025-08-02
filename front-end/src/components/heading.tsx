import React from "react";
import clsx from "clsx";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  children,
  className,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const baseStyles: Record<number, string> = {
    1: "text-4xl font-bold text-gray-900 mb-4",
    2: "text-2xl font-semibold text-gray-900 mb-6",
    3: "text-lg font-medium text-gray-900 mb-4",
    4: "text-base font-medium text-gray-800 mb-3",
    5: "text-sm font-medium text-gray-700 mb-2",
    6: "text-xs font-medium text-gray-600 mb-2",
  };

  return <Tag className={clsx(baseStyles[level], className)}>{children}</Tag>;
};
