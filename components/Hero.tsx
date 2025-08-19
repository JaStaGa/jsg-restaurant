"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative isolate overflow-hidden bg-charcoal text-cream">
            <Image
                src="/images/hero.png"
                alt=""
                fill
                priority
                className="object-cover opacity-40"
            />
            <div className="relative mx-auto max-w-6xl px-6 py-28">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-6xl font-serif"
                >
                    JSG Restaurant
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="mt-4 max-w-xl text-lg"
                >
                    A warm, modern neighborhood bistro. Seasonal plates. Good energy.
                </motion.p>
                <div className="mt-8 flex gap-4">
                    <Link href="/reserve" className="px-5 py-3 rounded-md bg-burgundy text-cream font-medium">
                        Book a Table
                    </Link>
                    <a href="tel:+17185550123" className="px-5 py-3 rounded-md border border-cream">Call</a>
                </div>
            </div>
        </section>
    );
}