export default function Home() {
  return (
    <main className="bg-black text-white flex flex-col items-center justify-center min-h-screen text-center">
      {/* Logo */}
      <div className="w-48 h-48">
        <img 
          src="/logo.png" 
          alt="DJ Dhruv Logo" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold mt-4">🔥 Welcome to DJ Dhruv! 🎧</h1>
    </main>
  );
}
