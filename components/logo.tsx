import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" aria-label="Uare.ai — home" className="inline-block">
      <Image
        src="/logos/uare-mono-black.png"
        alt="Uare.ai"
        width={1861}
        height={487}
        priority
        className="w-32 lg:w-44"
      />
    </Link>
  );
};

export default Logo;
