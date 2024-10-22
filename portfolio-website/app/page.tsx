import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <nav className="flex justify-between items-center mb-16">
        <h1 className="text-2xl font-bold">Jiawei Xiang </h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          I'm David 👋
        </h2>
        <p className="text-xl mb-8">
          Boston University Computer Engineering class of 2026
        </p>
        <div className="space-x-4">
          <Link 
            href="/projects" 
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            View My Work
          </Link>
          <Link 
            href="/contact"
            className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-50"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}
