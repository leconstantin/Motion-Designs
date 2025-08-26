import Menu from "@/components/menu";
import { ModeSwitcher } from "@/components/mode-switcher";

export default function Page() {
  return (
    <main>
      <ModeSwitcher />
      <Menu />
    </main>
  );
}
