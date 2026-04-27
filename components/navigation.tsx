import { NAVIGATION } from "@/constants";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="font-mono text-sm">
      <ul className="flex items-center gap-8">
        {NAVIGATION.map((item) => (
          <li key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
