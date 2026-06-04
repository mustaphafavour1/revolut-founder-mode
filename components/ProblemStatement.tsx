"use client";

import { motion } from "framer-motion";

const problems = [
  {
    icon: "○",
    label: "Onboarding drops off early",
    desc: "Complex verification with no clear progress signal.",
  },
  {
    icon: "○",
    label: "Cash flow is invisible",
    desc: "No forward view — just a running balance that tells you nothing.",
  },
  {
    icon: "○",
    label: "Savings feel like an afterthought",
    desc: "Vaults exist, but without intent, rules, or context.",
  },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function ProblemStatement() {
  return (
    <section
      id="problem"
      style={{
        padding: "96px 24px",
        borderTop: "1px solid #1f1f1f",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
            marginBottom: "28px",
            maxWidth: "600px",
          }}
        >
          Revolut Business is built for scale.
          <br />
          <span style={{ color: "#a3a3a3", fontWeight: 600 }}>
            Most founders aren&apos;t there yet.
          </span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.2, ease }}
          style={{
            fontSize: "1rem",
            color: "#a3a3a3",
            lineHeight: 1.75,
            maxWidth: "560px",
            marginBottom: "56px",
          }}
        >
          The tools exist. The multi-currency accounts, the team cards, the
          integrations. But the experience is designed for the finance
          controller, not the founder doing five things at once. Important
          decisions get made on instinct because the clarity isn&apos;t there.
          And that&apos;s a product problem worth solving.
        </motion.p>

        {/* Problem cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
          className="problem-grid"
        >
          {problems.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
              style={{
                background: "#111111",
                border: "1px solid #1f1f1f",
                borderRadius: "16px",
                padding: "24px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Red accent top line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "24px",
                  right: "24px",
                  height: "2px",
                  background: "#ef4444",
                  borderRadius: "0 0 4px 4px",
                  opacity: 0.7,
                }}
              />
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#ef4444",
                  marginBottom: "14px",
                  opacity: 0.8,
                }}
              />
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                {p.label}
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#737373",
                  lineHeight: 1.6,
                }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .problem-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
