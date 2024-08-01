import React from "react";

import "../app/styles/globals.css";

export const metadata = {
  title: "My Application",
  description: "A description of my application",
};

export default function RootLayout({ children }) {
  return (
    <htmls lang="en">
      <body>
        <header>
          <h1>My Application</h1>
          {/* Diğer ortak bileşenler, örneğin menüler, navigasyonlar */}
        </header>
        <main>{children}</main>
        <footer>{/* Footer içeriği */}</footer>
      </body>
    </htmls>
  );
}
