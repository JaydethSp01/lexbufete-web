export const dynamic = "force-dynamic";
import "./globals.css";
import { ProtectedShell } from "@/components/ui/ProtectedShell";

const NAV = [{ href: "/", label: "Inicio" }, { href: "/abogados", label: "Abogados" }, { href: "/audiencias", label: "Audiencias" }, { href: "/casos", label: "Casos" }, { href: "/clientes", label: "Clientes" }, { href: "/documentos", label: "Documentos" }, { href: "/usuarios", label: "Usuarios" }];

export const metadata = { title: "Bufete de abogados", description: "Generado con ScrumDev AI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ProtectedShell items={NAV} title="Bufete de abogados">{children}</ProtectedShell>
      </body>
    </html>
  );
}
