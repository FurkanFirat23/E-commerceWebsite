import { metadata } from "./metadata";
import ClientRootLayout from "./ClientRootLayout";

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
