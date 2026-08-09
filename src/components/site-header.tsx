import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-14 w-full max-w-[90rem] items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="text-foreground no-underline hover:opacity-100"
        >
          <span className="text-[15px] font-semibold tracking-tight">
            Beautiful Math
          </span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
