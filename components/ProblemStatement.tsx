"use client";

import { motion } from "framer-motion";

const problems = [
  {
    label: "Onboarding drops off early",
    desc: "Complex verification, no clear progress signal.",
  },
  {
    label: "Cash flow is invisible",
    desc: "Just a running balance. No forward view.",
  },
  {
    label: "Savings feel like an afterthought",
    desc: "Vaults without intent, rules, or context.",
  },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const desktopCardStyles: React.CSSProperties[] = [
  { position: "absolute", top: 0, right: 0, transform: "rotate(1.5deg)" },
  { position: "absolute", top: "160px", left: 0, transform: "rotate(-1deg)" },
  { position: "absolute", bottom: 0, right: "60px", transform: "rotate(1.2deg)" },
];

export default function ProblemStatement() {
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
          The Gap
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.1, ease }}
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
          transition={{ duration: 0.6, delay: 0.18, ease }}
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.45rem)",
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
          transition={{ duration: 0.65, delay: 0.24, ease }}
          style={{
            fontSize: "0.95rem",
            color: "#737373",
            lineHeight: 1.7,
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          The tools exist. But the experience is built for a finance controller, not a founder doing five things at once.
        </motion.p>

        {/* Desktop: scattered cards */}
        <div
          className="problem-scatter"
          style={{ position: "relative", height: "380px", marginTop: "72px" }}
        >
          {problems.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease }}
              style={{
                ...desktopCardStyles[i],
                width: "240px",
                background: "#111111",
                border: "1px solid #1f1f1f",
                borderLeft: "2px solid #ef444470",
                borderRadius: "14px",
                padding: "18px 20px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#ef4444",
                  marginBottom: "12px",
                  opacity: 0.75,
                }}
              />
              <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#fff", marginBottom: "6px", lineHeight: 1.3 }}>
                {p.label}
              </p>
              <p style={{ fontSize: "0.75rem", color: "#737373", lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: stacked cards */}
        <div className="problem-stack" style={{ display: "none", flexDirection: "column", gap: "12px", marginTop: "48px" }}>
          {problems.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              style={{
                background: "#111111",
                border: "1px solid #1f1f1f",
                borderLeft: "2px solid #ef444470",
                borderRadius: "14px",
                padding: "18px 20px",
                textAlign: "left",
              }}
            >
              <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#ef4444", marginBottom: "10px", opacity: 0.75 }} />
              <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#fff", marginBottom: "6px", lineHeight: 1.3 }}>{p.label}</p>
              <p style={{ fontSize: "0.75rem", color: "#737373", lineHeight: 1.6 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .problem-scatter {
            display: none !important;
          }
          .problem-stack {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
