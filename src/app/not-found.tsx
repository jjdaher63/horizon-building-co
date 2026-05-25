import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gray-900">
      <div className="text-center px-4">
        <p className="text-gold text-6xl font-bold mb-4">404</p>
        <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
        <p className="text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-gold text-gray-900 font-semibold rounded hover:bg-gold-light transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
