import "@/styles/globals.css";

import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Roboto, Roboto_Mono } from "next/font/google";
import { getLocale, setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { SWRProvider } from "@/swr/provider";
import { Providers } from "@/store/providers";
import NeurasynkHashRouter from "@/components/NeurasynkHashRouter";
import { generateMetadata, viewportConfig } from "@/lib/seo-config";
import Background from "@/components/Background";
import useThemeCSS from "@/hooks/useThemeCSS";

const geistSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

// export const runtime = "nodejs";
// export const dynamic = "force-static";

// export const metadata: Metadata = {
//   title: "Neurasynk — Synchronizing Brain and AI",
//   metadataBase: new URL("https://www.neurasynk.com"),
//   description:
//     "We are building next-generation closed-loop neurofeedback systems using Deep Reinforcement Learning, EEG, and Brain Network Modeling. Our mission is to create adaptive technologies that enhance cognition, support mental health, and drive neurorehabilitation.",
// };

// function ThemeRuntime() {
//   useThemeCSS();
//   return null;
// }

export const metadata: Metadata = generateMetadata();
export const viewport: Viewport = viewportConfig;

export default async function NeurasynkLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();
  if (!routing.locales.includes(locale as any)) notFound();

  let messages: Record<string, string>;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang="en">
      <body
        className={`min-h-dvh text-fg transition-colors duration-300 ${geistSans.variable} ${geistMono.variable}`}
      >
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <SWRProvider>
              <ThemeProvider
                attribute="class"
                enableSystem={false}
                defaultTheme="light"
                themes={[
                  "light",
                  "dark",
                  "darkgray",
                  "offwhite",
                  "turquoise",
                  "aliceblue",
                ]}
                // value={{
                //   dark: "dark",
                //   light: "light",
                //   offwhite: "offwhite",
                //   darkgray: "darkgray",
                //   turquoise: "turquoise",
                //   aliceblue: "aliceblue",
                // }}
              >
                {/* Global utilities */}
                <Background />
                <NeurasynkHashRouter />
                <div className="w-full bg-[#00A8CC] text-white text-center py-2 text-sm font-medium">
                  🚧 Neurasynk is under active development. Coming soon. 🚀
                </div>

                {/* Page content */}
                {children}
              </ThemeProvider>
            </SWRProvider>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
