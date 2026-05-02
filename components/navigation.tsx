import { NAVIGATION } from "@/constants";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="font-mono text-xs md:text-sm">
      <ul className="flex items-center gap-4 md:gap-6 lg:gap-8">
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
