import "./globals.css";

export const metadata = {
  title: '3legant Shop',
  description: 'Gift & decorations store in HCMC',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body
        className={`antialiased max-w-screen  min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
