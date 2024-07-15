export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-50 dark:bg-slate-800 dark:text-slate-100">{children}</div>
  );
}
