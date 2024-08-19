import HeaderCategory from "@/components/CategoriesHeader/HeaderCategory";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-screen-xl mx-auto min-h-screen">
      <HeaderCategory />
      {children}
    </main>
  );
}
