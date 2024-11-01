// app/ui/components/themeProviders/Providers.tsx

"use client";

import { UserProvider } from "@/lib/context/UserContext";

interface ProvidersProps {
  userIdent?: number | null;
  children: React.ReactNode;
}

export function Providers({ userIdent, children }: ProvidersProps) {
  return <UserProvider value={{ userIdent }}>{children}</UserProvider>;
}
