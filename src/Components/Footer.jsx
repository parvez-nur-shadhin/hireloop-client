"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 overflow-hidden">
      {/* CTA Section */}
      <div
        className="bg-[url('/cta-bg.png')] bg-cover bg-top bg-no-repeat"
      >
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Your next role is
            <br />
            already looking for you
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            Build a profile in three minutes. The matches start arriving
            tomorrow morning.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-black font-medium px-8 py-4 rounded-2xl hover:opacity-90 transition">
              Create a free account
            </button>

            <button className="bg-[#11111A] border border-zinc-700 text-white px-8 py-4 rounded-2xl hover:bg-zinc-900 transition">
              View pricing
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="space-y-8">
            <Image
              src="/logo.png"
              alt="HireLoop"
              width={140}
              height={50}
              className="mx-auto md:mx-0"
            />

            <p className="text-sm leading-8 max-w-xs mx-auto md:mx-0">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            <div className="flex justify-center md:justify-start gap-3 pt-8">
              <Link
                href="#"
                className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center hover:bg-zinc-800 transition"
              >
                <FaFacebook />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-500 transition"
              >
                <FaPinterest />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center hover:bg-zinc-800 transition"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-indigo-500 font-medium mb-8">Product</h3>

            <ul className="space-y-5">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Job discovery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Worker AI
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Salary data
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-indigo-500 font-medium mb-8">Navigations</h3>

            <ul className="space-y-5">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Help center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Career library
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-indigo-500 font-medium mb-8">Resources</h3>

            <ul className="space-y-5">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Brand Guideline
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            Copyright 2026 — HireLoop
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white">
              Terms & Policy
            </Link>

            <Link href="#" className="hover:text-white">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}