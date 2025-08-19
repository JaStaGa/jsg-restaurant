import Link from "next/link";

export default function NotFound() {
    return (
        <main className="mx-auto max-w-6xl px-6 py-24 text-center">
            <h1 className="text-4xl font-serif text-burgundy">Page not found</h1>
            <p className="mt-2">
                Try the <Link className="underline" href="/">home page</Link>.
            </p>
        </main>
    );
}
