import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Acceso denegado</h1>
      <p className="text-muted-foreground">
        No tenés permisos para acceder a esta página.
      </p>
      <Link href="/" className="text-primary underline">
        Volver al inicio
      </Link>
    </div>
  );
}
