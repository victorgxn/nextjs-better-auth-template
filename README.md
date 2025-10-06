# Next.js Better Auth Template

## Qué puedes hacer aquí

- Registrarte o iniciar sesión con email/contraseña o Google.
- Actualizar tu perfil: nombre e imagen.
- Cambiar tu email con verificación por correo.
- Resetear o cambiar tu contraseña con validación simple y clara.
- Verificar tu email y reenviar el enlace si lo necesitas.
- Cerrar sesión en todos tus dispositivos cuando lo prefieras.
- Acceder al área de Admin si tu usuario tiene ese rol.

## Cómo está construido

- Configuración: en `src/lib/auth.ts` iniciamos Better Auth con Prisma y los proveedores sociales.
- Sesiones: `src/lib/get-session.ts` obtiene la sesión en el servidor para proteger páginas y acciones.
- Protección: rutas como `/dashboard`, `/profile` y `/admin` comprueban si estás autenticado y tu rol.
- Contraseñas: `src/lib/validation.ts` define reglas simples (mínimo 8 caracteres y un carácter especial) para mantenerlo seguro sin complicarte.
- Correos: `src/lib/email.ts` usa Resend para enviar enlaces de verificación, reseteo y cambio de correo.
- Datos: Prisma sobre PostgreSQL guarda usuarios, sesiones y cuentas de OAuth.

## Empieza en 3 pasos

1. Configura tus variables: `DATABASE_URL`, `RESEND_API_KEY`, y claves de Google.
2. Arranca el proyecto y crea tu cuenta. Prueba login social si lo tienes configurado.
3. Explora el perfil y las opciones de seguridad para ver todo en acción.

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto y añade estas variables. Puedes usar `.env.example` como referencia.

```
DATABASE_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
RESEND_API_KEY=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

- `DATABASE_URL`: URL de conexión de la base de datos (por ejemplo, PostgreSQL).
- `BETTER_AUTH_SECRET`: secreto para firmar tokens/sesiones de Better Auth.
- `BETTER_AUTH_URL`: URL pública de tu app (ej. `http://localhost:3000`).
- `RESEND_API_KEY`: API key de Resend para enviar correos.
- `GOOGLE_CLIENT_ID` y `GOOGLE_CLIENT_SECRET`: credenciales OAuth de Google.

## Documentación y claves

Configura tus claves y revisa la documentación esencial:

- Better Auth — Documentación: https://www.better-auth.com/docs
- Resend — Claves de API: https://resend.com/dashboard/api-keys
- Google — Credenciales OAuth: https://console.cloud.google.com/apis/credentials

### Guía Prisma + Better Auth + Next.js

Integra base de datos y autenticación siguiendo esta guía (empieza desde el paso número dos):

https://www.prisma.io/docs/guides/betterauth-nextjs