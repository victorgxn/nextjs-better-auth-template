import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ForbiddenPage() {
  return (
    <main className="flex grow items-center justify-center px-4 text-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">403 - Prohibido</h1>
          <p className="text-muted-foreground">
            No tienes acceso a esta página.
          </p>
        </div>
        <div>
          <Button asChild>
            <Link href="/dashboard">Ir al panel</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
