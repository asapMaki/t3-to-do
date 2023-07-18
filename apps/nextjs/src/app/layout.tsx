// New: App Router ✨
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <p>Header</p>
          {children}
          <p>Footer</p>
        </body>
      </html>
    </ClerkProvider>
  );
}
