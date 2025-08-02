import React from "react";
import clsx from "clsx";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

const styles = [
  "",
  "text-4xl font-bold text-gray-900 mb-4",
  "text-2xl font-semibold text-gray-900 mb-6",
  "text-lg font-medium text-gray-900 mb-4",
  "text-base font-medium text-gray-800 mb-3",
  "text-sm font-medium text-gray-700 mb-2",
  "text-xs font-medium text-gray-600 mb-2",
];

export const Heading = ({ level = 2, children, className }: HeadingProps) => {
  const tag = `h${level}`;
  const combinedClass = clsx(styles[level], className);
  return React.createElement(tag, { className: combinedClass }, children);
};
