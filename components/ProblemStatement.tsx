"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problems = [
  {
    label: "Onboarding drops off early",
    desc: "Complex verification. No clear progress signal.",
  },
  {
    label: "Cash flow is invisible",
    desc: "Just a running balance. No forward view.",
  },
  {
    label: "Savings feel like an afterthought",
    desc: "Vaults without intent, rules, or context.",
  },
  {
    label: "Decision-making is reactive",
    desc: "No forward-looking signals. Calls made after the fact.",
  },
];

// Final absolute positions on desktop
const finalPositions: React.CSSProperties[] = [
  { top: "10px", right: "0px" },           // top-right
  { top: "130px", left: "0px" },           // left-middle
  { bottom: "10px", right: "80px" },       // bottom-right
  { top: "110px", left: "calc(50% - 120px)" }, // centre
];

// Constant card rotations (Framer Motion rotate prop)
const rotations = [1.8, -1.2, 1.4, -0.6];

// Initial scatter offsets — each card starts displaced so all overlap near the centre
const fromOffsets = [
  { x: -310, y: 100 },  // top-right card: starts shifted left + down toward centre
  { x: 240, y: -40 },   // left-middle card: starts shifted right toward centre
  { x: -260, y: -110 }, // bottom-right card: starts shifted left + up toward centre
  { x: 10, y: 20 },     // centre card: barely moves
];

const ease = [0.22, 0.68, 0.35, 1.05] as const; // spring-ish

const cardStyle: React.CSSProperties = {
  position: "absolute",
  width: "232px",
  background: "#111111",
  border: "1px solid #1f1f1f",
  borderLeft: "2px solid rgba(239,68,68,0.45)",
  borderRadius: "14px",
  padding: "18px 20px",
  textAlign: "left",
};

export default function ProblemStatement() {
  const scatterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(scatterRef, { once: true, margin: "-80px" });

  const ease2 = [0.25, 0.46, 0.45, 0.94] as const;

  return (
    <section
      id="problem"
      style={{ padding: "160px 24px", borderTop: "1px solid #1f1f1f" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: ease2 }}
          style={{
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6366f1",
            marginBottom: "24px",
          }}
        >
          The Gap
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: ease2 }}
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}
        >
          Revolut Business is built for scale.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.18, ease: ease2 }}
          style={{
            fontSize: "clamp(1.05rem, 2.2vw, 1.35rem)",
            fontWeight: 600,
            color: "#a3a3a3",
            marginBottom: "24px",
            lineHeight: 1.2,
          }}
        >
          Most founders aren&apos;t there yet.
        </motion.p>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.24, ease: ease2 }}
          style={{
            fontSize: "0.95rem",
            color: "#737373",
            lineHeight: 1.7,
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          The tools exist. But the experience is built for a finance controller,
          not a founder doing five things at once.
        </motion.p>

        {/* ─── Desktop: cards scatter from centre on enter ─── */}
        <div
          ref={scatterRef}
          className="problem-scatter"
          style={{ position: "relative", height: "420px", marginTop: "72px" }}
        >
          {problems.map((p, i) => (
            <motion.div
              key={p.label}
              animate={
                isInView
                  ? { x: 0, y: 0, opacity: 1, scale: 1, rotate: rotations[i] }
                  : {
                      x: fromOffsets[i].x,
                      y: fromOffsets[i].y,
                      opacity: 0,
                      scale: 0.82,
                      rotate: 0,
                    }
              }
              transition={{
                duration: 0.7,
                delay: i * 0.09,
                ease,
              }}
              style={{ ...cardStyle, ...finalPositions[i] }}
            >
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#ef4444",
                  marginBottom: "12px",
                  opacity: 0.7,
                }}
              />
              <p
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "6px",
                  lineHeight: 1.3,
                }}
              >
                {p.label}
              </p>
              <p
                style={{ fontSize: "0.75rem", color: "#737373", lineHeight: 1.6 }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ─── Mobile: vertical stack ─── */}
        <div
          className="problem-stack"
          style={{
            display: "none",
            flexDirection: "column",
            gap: "12px",
            marginTop: "48px",
            textAlign: "left",
          }}
        >
          {problems.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: ease2 }}
              style={{
                background: "#111111",
                border: "1px solid #1f1f1f",
                borderLeft: "2px solid rgba(239,68,68,0.45)",
                borderRadius: "14px",
                padding: "18px 20px",
              }}
            >
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#ef4444",
                  marginBottom: "10px",
                  opacity: 0.7,
                }}
              />
              <p
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "6px",
                  lineHeight: 1.3,
                }}
              >
                {p.label}
              </p>
              <p style={{ fontSize: "0.75rem", color: "#737373", lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .problem-scatter { display: none !important; }
          .problem-stack   { display: flex !important; }
        }
      `}</style>
    </section>
  );
}
