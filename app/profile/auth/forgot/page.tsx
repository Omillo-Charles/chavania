"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, CheckCircle, RefreshCw } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<"request" | "sent">("request");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate async request
    setTimeout(() => {
      setLoading(false);
      setStep("sent");
    }, 1200);
  }

  function handleResend() {
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  }

  return (
    <div className="w-full flex-1 flex items-center justify-center min-h-[calc(100vh-104px)] p-4 bg-muted/10">
      <div className="w-full max-w-md bg-background border border-border rounded-2xl shadow-sm overflow-hidden">

        {/* Back to sign in */}
        <div className="px-8 pt-6">
          <Link
            href="/profile/auth"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sign In
          </Link>
        </div>

        {/* Logo */}
        <div className="text-center pt-4 pb-6 px-8">
          <h1 className="text-3xl font-bold tracking-tighter font-segoe text-primary mb-1">
            chavania
          </h1>
        </div>

        {/* ── STEP 1: Request reset ── */}
        {step === "request" && (
          <div className="px-8 pb-10">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Forgot your password?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No worries! Enter the email address linked to your account and we'll send you a reset link.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    id="forgot-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-muted/50 border border-border rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <button
                id="forgot-submit"
                type="submit"
                disabled={loading || !email}
                className="w-full py-2.5 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              Remembered it?{" "}
              <Link href="/profile/auth" className="text-primary hover:underline font-semibold">
                Sign in instead
              </Link>
            </p>
          </div>
        )}

        {/* ── STEP 2: Email sent ── */}
        {step === "sent" && (
          <div className="px-8 pb-10 text-center">
            {/* Success icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-foreground mb-2">Check your inbox</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-1">
              We sent a password reset link to
            </p>
            <p className="text-sm font-semibold text-foreground mb-6 truncate">{email}</p>

            <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
              The link will expire in <span className="font-medium text-foreground">15 minutes</span>.
              Check your spam folder if you don't see it.
            </p>

            {/* Actions */}
            <div className="space-y-3">
              <Link
                href="/profile/auth"
                id="back-to-signin"
                className="block w-full py-2.5 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors text-sm"
              >
                Back to Sign In
              </Link>

              <button
                type="button"
                id="resend-link"
                onClick={handleResend}
                disabled={loading}
                className="w-full py-2.5 border border-border rounded-lg hover:bg-muted text-sm font-medium text-foreground transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Resending…
                  </>
                ) : (
                  "Resend email"
                )}
              </button>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Wrong email?{" "}
              <button
                type="button"
                onClick={() => { setStep("request"); setEmail(""); }}
                className="text-primary hover:underline font-semibold"
              >
                Try a different address
              </button>
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
