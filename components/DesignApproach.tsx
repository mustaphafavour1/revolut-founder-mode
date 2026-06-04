"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const MAILTO =
  "mailto:mustaphafavour1@gmail.com?subject=Founder%20Mode%20Case%20Study%20%E2%80%94%20Revolut%20Business%20Concept&body=Hi%20Favour%2C%0A%0AI%20came%20across%20your%20Revolut%20Business%20Founder%20Mode%20concept%20and%20would%20love%20to%20learn%20more%20about%20the%20case%20study.%0A%0A";

const screens: { label: string; image: string; tilt: number }[] = [
  { label: "Home",       image: "/images/home.png",       tilt: 3  },
  { label: "Payments",   image: "/images/payments.png",   tilt: -3 },
  { label: "Vaults",     image: "/images/vaults.png",     tilt: 4  },
  { label: "Forecast",   image: "/images/cashflow.png",   tilt: -4 },
  { label: "Team",       image: "/images/teamscards.png", tilt: 3  },
  { label: "Invoices",   image: "/images/invoices.png",   tilt: -4 },
  { label: "Onboarding", image: "/images/profile.png",    tilt: 3  },
];

function ScreenPill({
  label,
  delay,
  isActive,
  onEnter,
  onLeave,
}: {
  label: string;
  delay: number;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay, ease }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        style={{
          background: isActive ? "#161616" : "#111111",
          border: `1px solid ${isActive ? "#6366f1" : "#1f1f1f"}`,
          borderRadius: "10px",
          padding: "14px 8px",
          textAlign: "center",
          cursor: "default",
          transition: "background 0.2s, border-color 0.2s",
        }}
      >
        <div
          style={{
            width: "24px",
            height: "3px",
            background: "#6366f1",
            borderRadius: "2px",
            margin: "0 auto 8px",
            opacity: isActive ? 1 : 0.5,
            transition: "opacity 0.2s",
          }}
        />
        <p
          style={{
            fontSize: "0.58rem",
            color: isActive ? "#c0c0c0" : "#737373",
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            transition: "color 0.2s",
          }}
        >
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export default function DesignApproach() {
  const [hovered, setHovered] = useState<string | null>(null);
  const active = screens.find((s) => s.label === hovered) ?? null;

  // Preload all images on mount so first hover is instant
  useEffect(() => {
    screens.forEach(({ image }) => {
      const img = new window.Image();
      img.src = image;
    });
  }, []);

  return (
    <section
      style={{
        padding: "160px 24px",
        borderTop: "1px solid #1f1f1f",
        position: "relative",
      }}
    >
      {/* ── Two-column intro text ── */}
      <div
        className="approach-grid"
        style={{
          maxWidth: "1200px",
          margin: "0 auto 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease }}
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#6366f1",
              marginBottom: "24px",
            }}
          >
            The Design Thinking
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Every screen has a job.
            <br />
            <span style={{ color: "#a3a3a3", fontWeight: 600 }}>
              None are decorative.
            </span>
          </motion.h2>
        </div>

        {/* Right */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.15, ease }}
            style={{
              fontSize: "0.95rem",
              color: "#a3a3a3",
              lineHeight: 1.75,
              marginBottom: "20px",
            }}
          >
            7 screens chosen for the moments founders lose time, miss signals,
            or make calls on incomplete data. Each solves a specific failure.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.25, ease }}
            style={{
              fontSize: "0.95rem",
              color: "#a3a3a3",
              lineHeight: 1.75,
              marginBottom: "36px",
            }}
          >
            The visual language stays inside Revolut&apos;s system. The best
            product design is invisible — you feel the clarity before you notice
            the interface.
          </motion.p>

          <motion.a
            href={MAILTO}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.35, ease }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#6366f1",
              textDecoration: "none",
              transition: "gap 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.gap = "12px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.gap = "8px";
            }}
          >
            Reach out for more info
            <span style={{ fontSize: "1rem" }}>→</span>
          </motion.a>
        </div>
      </div>

      {/* ── Screen pills ── */}
      <div
        className="screen-pills"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "8px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {screens.map((s, i) => (
          <ScreenPill
            key={s.label}
            label={s.label}
            delay={i * 0.06}
            isActive={hovered === s.label}
            onEnter={() => setHovered(s.label)}
            onLeave={() => setHovered(null)}
          />
        ))}
      </div>

      {/* ── View breakdown link ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.4, ease }}
        style={{ maxWidth: "1200px", margin: "28px auto 0", textAlign: "center" }}
      >
        <Link
          href="/breakdown"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.82rem",
            fontWeight: 600,
            color: "#6366f1",
            textDecoration: "none",
            padding: "10px 20px",
            border: "1px solid rgba(99,102,241,0.25)",
            borderRadius: "999px",
            background: "rgba(99,102,241,0.06)",
            transition: "background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.12)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.06)";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.25)";
          }}
        >
          View full breakdown
          <span style={{ fontSize: "0.9rem" }}>→</span>
        </Link>
      </motion.div>

      {/* ── Large screen preview — centered in the section, same height as hero ── */}
      <AnimatePresence>
        {active && (
          <motion.div
            key={active.label}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.22, ease }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              zIndex: 10,
              pointerEvents: "none",
              rotate: active.tilt,
              transformOrigin: "center center",
            }}
          >
            <Image
              src={active.image}
              alt={active.label}
              width={400}
              height={820}
              style={{
                objectFit: "contain",
                display: "block",
                height: "clamp(480px, 75vh, 820px)",
                width: "auto",
                filter:
                  "drop-shadow(0 40px 80px rgba(0,0,0,0.88)) drop-shadow(0 0 2px rgba(255,255,255,0.05))",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .approach-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .screen-pills {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .screen-pills {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
