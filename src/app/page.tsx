import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold sm:text-4xl">Bienvenido 👋</h1>
          <p className="text-balance text-red-700">
            NECESITAS CONFIGURAR EL ARCHIVO ENV PARA QUE FUNCIONE
          </p>
          <p className="text-balance text-red-700">
            NECESITAS CONFIGURAR EL ARCHIVO ENV PARA QUE FUNCIONE
          </p>
          <p className="text-balance text-red-700">
            NECESITAS CONFIGURAR EL ARCHIVO ENV PARA QUE FUNCIONE
          </p>
          <div className="mx-auto mt-4 flex max-w-sm flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link href="/dashboard">Ver mi Dashboard</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/sign-in">Iniciar sesión</Link>
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-lg border p-6 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Qué puedes hacer aquí</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Registrarte o iniciar sesión con email/contraseña o Google.
              </li>
              <li>Actualizar tu perfil: nombre e imagen.</li>
              <li>Cambiar tu email con verificación por correo.</li>
              <li>
                Resetear o cambiar tu contraseña con validación simple y clara.
              </li>
              <li>Verificar tu email y reenviar el enlace si lo necesitas.</li>
              <li>
                Cerrar sesión en todos tus dispositivos cuando lo prefieras.
              </li>
              <li>Acceder al área de Admin si tu usuario tiene ese rol.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Cómo está construido</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-medium">Configuración</span>: en{" "}
                <code>src/lib/auth.ts</code> iniciamos Better Auth con Prisma y
                los proveedores sociales.
              </li>
              <li>
                <span className="font-medium">Sesiones</span>:{" "}
                <code>src/lib/get-session.ts</code> obtiene la sesión en el
                servidor para proteger páginas y acciones.
              </li>
              <li>
                <span className="font-medium">Protección</span>: rutas como{" "}
                <code>/dashboard</code>, <code>/profile</code>y{" "}
                <code>/admin</code> comprueban si estás autenticado y tu rol.
              </li>
              <li>
                <span className="font-medium">Contraseñas</span>:{" "}
                <code>src/lib/validation.ts</code> define reglas simples (mínimo
                8 caracteres y un carácter especial) para mantenerlo seguro sin
                complicarte.
              </li>
              <li>
                <span className="font-medium">Correos</span>:{" "}
                <code>src/lib/email.ts</code> usa Resend para enviar enlaces de
                verificación, reseteo y cambio de correo.
              </li>
              <li>
                <span className="font-medium">Datos</span>: Prisma sobre
                PostgreSQL guarda usuarios, sesiones y cuentas de OAuth.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Empieza en 3 pasos</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Configura tus variables: <code>DATABASE_URL</code>,{" "}
                <code>RESEND_API_KEY</code>, y claves de Google/GitHub.
              </li>
              <li>
                Arranca el proyecto y crea tu cuenta. Prueba login social si lo
                tienes configurado.
              </li>
              <li>
                Explora el perfil y las opciones de seguridad para ver todo en
                acción.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Variables de entorno</h2>
            <p className="text-muted-foreground">
              Crea un archivo <code>.env</code> en la raíz del proyecto y añade
              estas variables. Puedes usar <code>.env.example</code> como
              referencia.
            </p>
            <div className="bg-muted rounded-md border p-4">
              <pre className="overflow-auto text-sm">
                <code>{`DATABASE_URL=\nBETTER_AUTH_SECRET=\nBETTER_AUTH_URL=\nRESEND_API_KEY=\nGOOGLE_CLIENT_ID=\nGOOGLE_CLIENT_SECRET=`}</code>
              </pre>
            </div>
            <ul className="text-muted-foreground list-disc space-y-2 pl-6 text-sm">
              <li>
                <code>DATABASE_URL</code>: URL de conexión de la base de datos
                (por ejemplo, PostgreSQL).
              </li>
              <li>
                <code>BETTER_AUTH_SECRET</code>: secreto para firmar
                tokens/sesiones de Better Auth.
              </li>
              <li>
                <code>BETTER_AUTH_URL</code>: URL pública de tu app (ej.{" "}
                <code>http://localhost:3000</code>).
              </li>
              <li>
                <code>RESEND_API_KEY</code>: API key de Resend para enviar
                correos.
              </li>
              <li>
                <code>GOOGLE_CLIENT_ID</code> y <code>GOOGLE_CLIENT_SECRET</code>:
                credenciales OAuth de Google.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Documentación y claves</h2>
            <p className="text-muted-foreground">
              Configura tus claves y revisa la documentación esencial:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Better Auth — Documentación: {""}
                <Link
                  href="https://www.better-auth.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.better-auth.com/docs
                </Link>
              </li>
              <li>
                Resend — Claves de API: {""}
                <Link
                  href="https://resend.com/dashboard/api-keys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://resend.com/dashboard/api-keys
                </Link>
              </li>
              <li>
                Google — Credenciales OAuth: {""}
                <Link
                  href="https://console.cloud.google.com/apis/credentials"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://console.cloud.google.com/apis/credentials
                </Link>
              </li>
            </ul>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                Guía Prisma + Better Auth + Next.js
              </h3>
              <p className="text-muted-foreground">
                Integra base de datos y autenticación siguiendo esta guía {""}{" "}
                <span className="text-red-700">desde el paso numero dos: </span>{" "}
                <Link
                  href="https://www.prisma.io/docs/guides/betterauth-nextjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.prisma.io/docs/guides/betterauth-nextjs
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/dashboard">Ir al panel</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/sign-in">Iniciar sesión</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
