"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function AuthButtons() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  if (isPending) return null;

  if (session) {
    return (
      <>
        <Link href="/dashboard" className="text-sm hover:opacity-70 transition">
          Dashboard
        </Link>
        <button
          onClick={async () => {
            await authClient.signOut();
            window.location.href = "/";
          }}
          className="text-sm hover:opacity-70 transition"
        >
          Logout
        </button>
      </>
    );
  }

  return (
    <Link href="/sign-in" className="text-sm hover:opacity-70 transition">
      Login
    </Link>
  );
}
