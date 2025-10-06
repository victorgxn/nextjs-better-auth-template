"use client";

import { LoadingButton } from "@/components/loading-button";
import { useTransition } from "react";
import { toast } from "sonner";
import { deleteApplication } from "./actions";

export function DeleteApplication() {
  const [isPending, startTransition] = useTransition();

  async function handleDeleteApplication() {
    startTransition(async () => {
      try {
        await deleteApplication();
        toast.success("Eliminación de la aplicación autorizada correctamente");
      } catch (error) {
        console.error(error);
        toast.error("Algo salió mal");
      }
    });
  }

  return (
    <div className="max-w-md">
      <div className="border-destructive/20 bg-destructive/5 rounded-lg border p-4">
        <div className="space-y-3">
          <div>
            <h2 className="text-destructive font-medium">Eliminar aplicación</h2>
            <p className="text-muted-foreground text-sm">
              Esta acción eliminará toda la aplicación. Esto no se puede
              deshacer.
            </p>
          </div>
          <LoadingButton
            loading={isPending}
            onClick={handleDeleteApplication}
            variant="destructive"
            className="w-full"
          >
            Eliminar aplicación
          </LoadingButton>
        </div>
      </div>
    </div>
  );
}
