"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, User as UserIcon, Phone, Eye, EyeOff } from 'lucide-react';

// inline brand SVGs
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
      <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
      <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
      <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
      <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
    </g>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.52 11.52 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.479 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// shared field component
function Field({
  label, type = "text", placeholder, icon: Icon, rightSlot,
}: {
  label: string;
  type?: string;
  placeholder: string;
  icon: React.ElementType;
  rightSlot?: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-muted/50 border border-border rounded-lg py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
        />
        {rightSlot && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">{rightSlot}</div>
        )}
      </div>
    </div>
  );
}

// social buttons row
function SocialButtons() {
  return (
    <>
      <div className="flex items-center gap-4 my-6">
        <div className="h-px bg-border flex-1" />
        <span className="text-xs text-muted-foreground uppercase font-medium">Or continue with</span>
        <div className="h-px bg-border flex-1" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex items-center justify-center gap-2 py-2.5 border border-border rounded-lg hover:bg-muted transition-colors font-medium text-sm text-foreground"
        >
          <GoogleIcon /> Google
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 py-2.5 border border-border rounded-lg hover:bg-muted transition-colors font-medium text-sm text-foreground"
        >
          <GitHubIcon /> GitHub
        </button>
      </div>
    </>
  );
}

// main page
export default function AuthPage() {
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="w-full flex-1 flex items-center justify-center min-h-[calc(100vh-104px)] p-4 bg-muted/10">
      <div className="w-full max-w-md bg-background border border-border rounded-2xl shadow-sm overflow-hidden">

        {/* Logo */}
        <div className="text-center pt-8 pb-4 px-8">
          <h1 className="text-3xl font-bold tracking-tighter font-segoe text-primary mb-1">
            chavania
          </h1>
          <p className="text-muted-foreground text-sm">
            {tab === "signin" ? "Welcome back! Sign in to continue" : "Create your free account today"}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="px-8 mt-2">
          <div className="relative flex bg-muted rounded-xl p-1">
            {/* sliding pill */}
            <div
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-lg bg-background shadow-sm transition-transform duration-300 ease-in-out"
              style={{ transform: tab === "signin" ? "translateX(0)" : "translateX(calc(100% + 8px))" }}
            />
            <button
              id="tab-signin"
              onClick={() => setTab("signin")}
              className={`relative z-10 flex-1 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${tab === "signin" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Sign In
            </button>
            <button
              id="tab-signup"
              onClick={() => setTab("signup")}
              className={`relative z-10 flex-1 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${tab === "signup" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Forms */}
        <div className="px-8 pb-8 mt-6">

          {/* ── SIGN IN ── */}
          {tab === "signin" && (
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Field label="Email Address" type="email" placeholder="you@example.com" icon={Mail} />
              <Field
                label="Password"
                type={showPw ? "text" : "password"}
                placeholder="••••••••"
                icon={Lock}
                rightSlot={
                  <button type="button" onClick={() => setShowPw(p => !p)}
                    className="text-muted-foreground hover:text-foreground transition-colors">
                    {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                }
              />
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-border text-primary focus:ring-primary" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <Link href="/profile/auth/forgot" className="text-primary hover:underline font-medium">Forgot password?</Link>
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors mt-2"
              >
                Sign In
              </button>
              <SocialButtons />
              <p className="text-center text-xs text-muted-foreground mt-4">
                Don't have an account?{" "}
                <button type="button" onClick={() => setTab("signup")}
                  className="text-primary hover:underline font-semibold">
                  Create one
                </button>
              </p>
            </form>
          )}

          {/* ── SIGN UP ── */}
          {tab === "signup" && (
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-3">
                <Field label="First Name" placeholder="John" icon={UserIcon} />
                <Field label="Last Name" placeholder="Doe" icon={UserIcon} />
              </div>
              <Field label="Email Address" type="email" placeholder="you@example.com" icon={Mail} />
              <Field label="Phone Number" type="tel" placeholder="+254 700 000 000" icon={Phone} />
              <Field
                label="Password"
                type={showPw ? "text" : "password"}
                placeholder="Min. 8 characters"
                icon={Lock}
                rightSlot={
                  <button type="button" onClick={() => setShowPw(p => !p)}
                    className="text-muted-foreground hover:text-foreground transition-colors">
                    {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                }
              />
              <Field
                label="Confirm Password"
                type={showConfirm ? "text" : "password"}
                placeholder="Repeat your password"
                icon={Lock}
                rightSlot={
                  <button type="button" onClick={() => setShowConfirm(p => !p)}
                    className="text-muted-foreground hover:text-foreground transition-colors">
                    {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                }
              />
              <label className="flex items-start gap-2 cursor-pointer text-xs text-muted-foreground pt-1">
                <input type="checkbox" className="mt-0.5 rounded border-border text-primary focus:ring-primary" />
                <span>
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline font-medium">Terms of Service</Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link>
                </span>
              </label>
              <button
                type="submit"
                className="w-full py-2.5 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors mt-2"
              >
                Create Account
              </button>
              <SocialButtons />
              <p className="text-center text-xs text-muted-foreground mt-4">
                Already have an account?{" "}
                <button type="button" onClick={() => setTab("signin")}
                  className="text-primary hover:underline font-semibold">
                  Sign in
                </button>
              </p>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
