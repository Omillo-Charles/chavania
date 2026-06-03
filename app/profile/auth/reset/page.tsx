"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Lock, Eye, EyeOff, ArrowLeft, CheckCircle, RefreshCw, ShieldCheck } from 'lucide-react';

// TODO: read ?token= from search params and pass to the API when backend is ready
// e.g. const token = useSearchParams().get("token");

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const strength = getStrength(password);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    // TODO: POST { token, password } to /api/auth/reset-password
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 1200);
  }

  return (
    <div className="w-full flex-1 flex items-center justify-center min-h-[calc(100vh-104px)] p-4 bg-muted/10">
      <div className="w-full max-w-md bg-background border border-border rounded-2xl shadow-sm overflow-hidden">

        {/* Back link */}
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
            <span className="text-secondary">.</span>soko
          </h1>
        </div>

        {/* Reset Form  */}
        {!done && (
          <div className="px-8 pb-10">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Set a new password</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Choose a strong password you haven't used before.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* New password */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">New Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    id="reset-password"
                    type={showPw ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 8 characters"
                    className="w-full bg-muted/50 border border-border rounded-lg py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(p => !p)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Toggle password visibility"
                  >
                    {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Strength bar */}
                {password.length > 0 && (
                  <div className="space-y-1 pt-1">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className="h-1 flex-1 rounded-full transition-all duration-300"
                          style={{
                            background: level <= strength.score
                              ? strength.color
                              : "var(--color-muted, #e4e4e7)",
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-xs" style={{ color: strength.color }}>
                      {strength.label}
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm password */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    id="reset-confirm"
                    type={showConfirm ? "text" : "password"}
                    required
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    placeholder="Repeat your new password"
                    className={`w-full bg-muted/50 border rounded-lg py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 transition-colors ${confirm && confirm !== password
                        ? "border-red-400 focus:ring-red-400/50 focus:border-red-400"
                        : "border-border focus:ring-primary/50 focus:border-primary"
                      }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(p => !p)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Toggle confirm visibility"
                  >
                    {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {confirm && confirm !== password && (
                  <p className="text-xs text-red-500">Passwords do not match.</p>
                )}
              </div>

              {/* Error message */}
              {error && (
                <p className="text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <button
                id="reset-submit"
                type="submit"
                disabled={loading || !password || !confirm}
                className="w-full py-2.5 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Resetting…
                  </>
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>
          </div>
        )}

        {/* Success */}
        {done && (
          <div className="px-8 pb-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-foreground mb-2">Password reset!</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Your password has been updated successfully. You can now sign in with your new password.
            </p>

            <Link
              href="/profile/auth"
              id="goto-signin"
              className="block w-full py-2.5 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors text-sm"
            >
              Go to Sign In
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}

// password strength helper 
function getStrength(pw: string): { score: number; label: string; color: string } {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;

  const map = [
    { label: "Too weak", color: "#ef4444" },
    { label: "Weak", color: "#f97316" },
    { label: "Fair", color: "#eab308" },
    { label: "Strong", color: "#22c55e" },
    { label: "Very strong", color: "#16a34a" },
  ];

  return { score, ...map[score] };
}
