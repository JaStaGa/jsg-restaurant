"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const reduce = useReducedMotion();

    return (
        <section className="relative isolate overflow-hidden bg-charcoal text-cream">
            <Image
                src="/images/hero.png"         // keep your asset name
                alt=""
                aria-hidden="true"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/60" />

            <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
                <motion.h1
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-6xl font-serif"
                >
                    JSG Restaurant
                </motion.h1>

                <motion.p
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="mt-4 max-w-xl text-lg"
                >
                    A warm, modern neighborhood bistro. Seasonal plates. Good energy.
                </motion.p>

                <div className="mt-8 flex gap-4">
                    <Link
                        href="/reserve"
                        className="px-5 py-3 rounded-md bg-burgundy text-cream font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy/40"
                    >
                        Book a Table
                    </Link>
                    <a
                        href="tel:+19175245650"
                        className="px-5 py-3 rounded-md border border-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy/40"
                    >
                        Call
                    </a>
                </div>
            </div>
        </section>
    );
}
