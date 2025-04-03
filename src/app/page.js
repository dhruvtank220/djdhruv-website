export default function Home() {
  return (
    <main className="bg-black text-white flex flex-col items-center justify-center min-h-screen text-center">
      {/* Logo */}
      <img 
        src="/logo .png" 
        alt="DJ Dhruv Logo" 
        className="w-48 h-48 object-contain"
      />

      {/* Heading */}
      <h1 className="text-4xl font-bold mt-4">🔥 Welcome to DJ Dhruv! 🎧</h1>
    </main>
  );
}
