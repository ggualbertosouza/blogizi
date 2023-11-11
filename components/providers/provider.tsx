import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </ThemeProvider>
    </>
  );
};
