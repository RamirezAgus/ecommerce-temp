"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    const { error } = await authClient.signIn.email({ email, password });
    if (error) {
      setError("Email o contraseña incorrectos");
      setLoading(false);
      return;
    }
    router.push("/dashboard");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "#f8f3ee" }}
    >
      <div className="w-full max-w-3xl grid grid-cols-2 rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
        {/* Panel izquierdo */}
        <div
          className="relative flex flex-col items-center justify-center p-10 overflow-hidden"
          style={{ background: "#c8a882" }}
        >
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="weave"
                x="0"
                y="0"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <line
                  x1="0"
                  y1="15"
                  x2="30"
                  y2="15"
                  stroke="white"
                  strokeWidth="1.2"
                />
                <line
                  x1="15"
                  y1="0"
                  x2="15"
                  y2="30"
                  stroke="white"
                  strokeWidth="1.2"
                />
                <circle cx="15" cy="15" r="2.5" fill="white" />
                <circle cx="0" cy="0" r="1.5" fill="white" />
                <circle cx="30" cy="0" r="1.5" fill="white" />
                <circle cx="0" cy="30" r="1.5" fill="white" />
                <circle cx="30" cy="30" r="1.5" fill="white" />
              </pattern>
              <pattern
                id="diamond"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M10 0 L20 10 L10 20 L0 10 Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.8"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#weave)" />
            <rect
              width="100%"
              height="100%"
              fill="url(#diamond)"
              opacity="0.4"
            />
          </svg>

          <div className="relative z-10 text-center">
            <h1
              className="text-white font-light leading-tight"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "38px",
                letterSpacing: "0.04em",
              }}
            >
              Annette
              <br />
              <em>Tramas</em>
            </h1>
            <div className="w-9 h-px bg-white/40 mx-auto my-4" />
            <p
              className="text-white/85 font-light italic leading-relaxed text-sm"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Tejidos con alma,
              <br />
              hechos a mano
            </p>
          </div>
        </div>

        {/* Panel derecho */}
        <div className="flex flex-col justify-center p-10 bg-white">
          <h2
            className="font-light mb-1"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "28px",
              letterSpacing: "0.02em",
            }}
          >
            Bienvenida
          </h2>
          <p
            className="text-xs uppercase tracking-widest text-stone-400 mb-8"
            style={{ letterSpacing: "0.2em" }}
          >
            Acceso al panel
          </p>

          <div className="space-y-4">
            <div>
              <label
                className="block text-xs uppercase tracking-widest text-stone-400 mb-1.5"
                style={{ letterSpacing: "0.18em" }}
              >
                Correo electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  document.getElementById("password-input")?.focus()
                }
                placeholder="tu@email.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 bg-stone-50 text-sm focus:outline-none focus:border-[#c8a882] focus:ring-2 focus:ring-[#c8a882]/15 transition-all"
              />
            </div>

            <div>
              <label
                className="block text-xs uppercase tracking-widest text-stone-400 mb-1.5"
                style={{ letterSpacing: "0.18em" }}
              >
                Contraseña
              </label>
              <input
                id="password-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 bg-stone-50 text-sm focus:outline-none focus:border-[#c8a882] focus:ring-2 focus:ring-[#c8a882]/15 transition-all"
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs text-center">{error}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3 rounded-lg text-white text-xs uppercase tracking-widest transition-all disabled:opacity-60"
              style={{ background: "#c8a882", letterSpacing: "0.22em" }}
            >
              {loading ? "Ingresando..." : "Ingresar"}
            </button>
          </div>

          <p
            className="text-center text-xs text-stone-300 mt-8 tracking-widest uppercase"
            style={{ letterSpacing: "0.1em" }}
          >
            Panel de administración
          </p>
        </div>
      </div>
    </div>
  );
}
