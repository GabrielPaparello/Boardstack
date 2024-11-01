// app/ui/components/themeProviders/Providers.tsx

"use client";

import { UserProvider } from "@/lib/context/UserContext";
import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  userIdent: number | null;
  children: React.ReactNode;
}

export function Providers({ userIdent, children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <UserProvider value={{ userIdent }}>{children}</UserProvider>
    </ThemeProvider>
  );
}
