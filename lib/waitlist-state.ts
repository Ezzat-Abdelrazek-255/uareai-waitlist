// Two-variant state: the form renders the same UI for "not yet submitted" and
// "submission rejected" — the only structural branch is success vs not.
// `error` is optional and only present after a failed submit.
export type WaitlistState =
  | { ok: true }
  | { ok: false; error?: string };

export const initialWaitlistState: WaitlistState = { ok: false };
