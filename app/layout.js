import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PERRY - BNB Token Creator',
  description: 'Create and verify tokens on BNB Smart Chain. No code. No friction.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
