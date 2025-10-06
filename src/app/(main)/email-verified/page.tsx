import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Correo verificado",
};

export default function EmailVerifiedPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 text-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Correo verificado</h1>
          <p className="text-muted-foreground">
            Tu correo ha sido verificado correctamente.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard">Ir al panel</Link>
        </Button>
      </div>
    </main>
  );
}
