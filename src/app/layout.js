import "./globals.css"; // ✅ Make sure this line exists

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
