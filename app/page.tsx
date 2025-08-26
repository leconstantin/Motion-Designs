import Link from "next/link";
import Menu from "@/components/menu";
import { ModeSwitcher } from "@/components/mode-switcher";

export default function Page() {
  return (
    <main>
      <ModeSwitcher />
      <Link href="/floating">Floating</Link>
      <Link href="/cards">Cards</Link>
      <Link href="/text">Text</Link>
      <Link href="/infinite-text">Infinite Text</Link>
      <Link href="/sections">Sections</Link>
      <Link href="/motion">Motion</Link>
      <Menu />
    </main>
  );
}
