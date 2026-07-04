"use client";

import Link from "next/link";
import Image from "next/image";
import SocialIcons from "@/components/SocialIcons";

export default function ContactForm() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <div className="w-full max-w-[min(90vw,480px)] lg:max-w-xl relative z-10">
        <div className="text-center mb-6 sm:mb-8">
          <div className="relative inline-block p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[#0f1d32]/80 to-[#0a1628]/40 backdrop-blur-md border border-amber-500/20 shadow-2xl shadow-amber-500/10">
            <Image src="/logo.png" alt="AnyTimeHost Logo" width={160} height={64} className="h-auto w-auto mx-auto max-w-[120px] sm:max-w-[160px] lg:max-w-[200px] relative" />
          </div>
        </div>

        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 mb-4 sm:mb-6 transition-colors text-sm sm:text-base">
          <span>←</span> Back to Home
        </Link>

        <div className="bg-gradient-to-br from-[#0f1d32]/90 to-[#0a1628]/60 backdrop-blur-xl rounded-2xl p-5 sm:p-6 lg:p-8 shadow-2xl border border-amber-500/20 text-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
            Contact Disabled
          </h1>
          <p className="text-slate-400 mb-4">
            The contact form has been disabled.
          </p>
          <SocialIcons subText={"Please reach out via our social channels below."} />
        </div>
      </div>
    </div>
  );
}
