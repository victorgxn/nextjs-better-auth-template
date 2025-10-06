"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UnauthorizedPage() {
  const pathname = usePathname();

  return (
    <main className="flex grow items-center justify-center px-4 text-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">401 - No autorizado</h1>
          <p className="text-muted-foreground">Por favor, inicia sesión para continuar.</p>
        </div>
        <div>
          <Button asChild>
            <Link href={`/sign-in?redirect=${pathname}`}>Iniciar sesión</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
