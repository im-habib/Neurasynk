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

const geistSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`h-dvh text-fg transition-colors duration-300 ${geistSans.variable} ${geistMono.variable}`}
      >
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <SWRProvider>
              <ThemeProvider
                attribute="class"
                enableSystem={false}
                defaultTheme="light"
              >
                {/* Global utilities */}
                <NeurasynkHashRouter />
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
