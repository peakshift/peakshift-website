import Frame from "@/Components/Frame/Frame";

export const metadata = {
  title: "Peak Shift Ltd",
  description: "WE CRAFT DIGITAL PRODUCTS BUILT ON WEB, MOBILE & BITCOIN.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Frame />
    </>
  );
}
