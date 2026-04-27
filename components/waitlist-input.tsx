"use client";
import UMark from "@/icons/u-mark";

const WaitlistInput = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="border-foreground pointer-events-auto flex w-full max-w-md items-center gap-2 rounded-full border bg-black/0 p-1.5 pl-5 font-mono"
    >
      <input
        type="email"
        required
        placeholder="Enter your email"
        aria-label="Email"
        className="text-foreground placeholder:text-foreground/60 flex-1 bg-transparent py-1.5 text-sm outline-none"
      />
      <button
        type="submit"
        className="bg-foreground text-background flex h-full items-center gap-2 rounded-full px-4 py-2 font-mono"
      >
        <UMark className="h-[0.9em] w-auto" />
        Join waitlist
      </button>
    </form>
  );
};

export default WaitlistInput;
