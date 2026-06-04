"use client";

import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function DesignApproach() {
  return (
    <section
      style={{
        padding: "96px 24px",
        borderTop: "1px solid #1f1f1f",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
        className="approach-grid"
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
              None of them are decorative.
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
            The 7 screens in this concept were chosen because they touch the
            moments where founders lose time, miss signals or make bad calls
            with incomplete information. Each one solves a specific failure —
            not a general inconvenience.
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
            The visual language stays inside Revolut&apos;s system. Dark
            surfaces, confident typography, tight spacing. And I strongly
            believe the best product design is invisible — you feel the clarity
            before you notice the interface.
          </motion.p>

          <motion.a
            href="#case-study"
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
              (e.currentTarget as HTMLElement).style.gap = "12px";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.gap = "8px";
            }}
          >
            View Full Case Study
            <span style={{ fontSize: "1rem" }}>→</span>
          </motion.a>
        </div>
      </div>

      {/* Decorative rule divider */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "80px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "8px",
        }}
        className="screen-pills"
      >
        {[
          "Dashboard",
          "Payments",
          "Vaults",
          "Forecast",
          "Team",
          "Invoices",
          "Onboarding",
        ].map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.06, ease }}
            style={{
              background: "#111111",
              border: "1px solid #1f1f1f",
              borderRadius: "8px",
              padding: "12px 8px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "3px",
                background: "#6366f1",
                borderRadius: "2px",
                margin: "0 auto 8px",
                opacity: 0.7,
              }}
            />
            <p
              style={{
                fontSize: "0.6rem",
                color: "#737373",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {label}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
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
