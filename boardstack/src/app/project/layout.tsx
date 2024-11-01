import type { Metadata } from "next";
import "../globals.css";
import { Providers } from "@/ui/components/themeProviders/Providers";
import { Nav } from "@/ui/components/Nav/Nav";
import { DbConnection } from "@/lib/services/url.db.services";
import { useUser } from "@auth0/nextjs-auth0/client";

export const metadata: Metadata = {
  title: "software",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();
  const userId = user?.sub;

  const fetchUser = async () => {
    try {
      const response = await fetch(DbConnection.getUserUrl(userId));
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data[0]?.id || null;
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
      return null;
    }
  };

  const userIdent = await fetchUser();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-light-primary dark:bg-dark-primary`}>
        <Providers userIdent={userIdent}>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
