"use client";
import { useActionState } from "react";
import {
  initialWaitlistState,
  joinWaitlist,
} from "@/app/actions/waitlist";
import UMark from "@/icons/u-mark";

const WaitlistInput = () => {
  const [state, formAction, isPending] = useActionState(
    joinWaitlist,
    initialWaitlistState,
  );

  if (state.status === "success") {
    return (
      <p
        role="status"
        className="border-foreground pointer-events-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full border px-5 py-3 font-mono text-sm"
      >
        <UMark className="h-[0.9em] w-auto" />
        You&apos;re on the list.
      </p>
    );
  }

  return (
    <div className="pointer-events-auto flex w-full max-w-md flex-col items-center gap-2">
      <form
        action={formAction}
        className="border-foreground flex w-full items-center gap-2 rounded-full border bg-black/0 p-1.5 pl-5 font-mono"
      >
        <input
          type="email"
          name="email"
          required
          disabled={isPending}
          placeholder="Enter your email"
          aria-label="Email"
          className="text-foreground placeholder:text-foreground/60 flex-1 bg-transparent py-1.5 text-sm outline-none disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-foreground text-background flex h-full items-center gap-2 rounded-full px-4 py-2 font-mono disabled:opacity-60"
        >
          <UMark className="h-[0.9em] w-auto" />
          {isPending ? "Joining…" : "Join waitlist"}
        </button>
      </form>
      {state.status === "error" && (
        <p role="alert" className="text-foreground/70 font-mono text-xs">
          {state.message}
        </p>
      )}
    </div>
  );
};

export default WaitlistInput;
