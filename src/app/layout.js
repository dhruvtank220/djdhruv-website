import "./globals.css";

export const metadata = {
  title: "DJ Dhruv",
  description: "Official DJ Dhruv Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body> 
    </html>
  );
}
