import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/logos/uare-mono-black.png"
        alt="Uare.ai"
        width={1861}
        height={487}
        priority
        className="w-32 lg:w-44"
      />
    </div>
  );
};

export default Logo;
