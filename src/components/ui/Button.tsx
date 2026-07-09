import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-gray-900 text-white hover:bg-black",

    outline:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}