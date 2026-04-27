import Image from "next/image";
import UMark from "@/icons/u-mark";
import WaitlistInput from "./waitlist-input";

const STACK = [
  { src: "/images/2.png", rotate: "3deg", width: 2362, height: 2597 },
  { src: "/images/1.png", rotate: "-4deg", width: 2225, height: 2439 },
  { src: "/images/0.png", rotate: "0deg", width: 2371, height: 2606 },
];

const HeroSection = () => {
  return (
    <section className="relative z-0 grid min-h-screen place-content-center">
      <h1 className="text-[6vw] leading-none font-black uppercase">
        <div className="flex justify-center gap-[22vw]">
          <div className="flex items-baseline gap-3">
            <UMark className="h-4/5" />
            <div>are</div>
          </div>
          <div className="relative flex items-baseline gap-3">
            <UMark className="h-4/5 opacity-0" />
            <div className="opacity-0">are</div>
            <em className="absolute">AI</em>
          </div>
        </div>
        <div className="flex justify-center gap-[22vw]">
          <div>Authentic</div>
          <div className="relative">
            <div className="line-through">Artificial</div>
          </div>
        </div>
      </h1>
      <div className="absolute top-1/2 left-1/2 -z-10 h-fit w-[30vw] -translate-1/2">
        {STACK.map((item, i) => (
          <Image
            key={item.src}
            src={item.src}
            alt=""
            width={item.width}
            height={item.height}
            priority={i === STACK.length - 1}
            sizes="30vw"
            draggable={false}
            aria-hidden
            className="absolute inset-0 top-1/2 h-full w-full -translate-y-1/2 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] select-none"
            style={{ transform: `rotate(${item.rotate})`, zIndex: i }}
          />
        ))}
      </div>
      <div className="absolute bottom-[12vh] flex w-full flex-col items-center justify-center gap-4">
        <p className="max-w-md text-center font-mono">
          Human-first AI for brands and creators who refuse to fake it. Be the
          first to step inside.
        </p>
        <WaitlistInput />
      </div>
    </section>
  );
};

export default HeroSection;
