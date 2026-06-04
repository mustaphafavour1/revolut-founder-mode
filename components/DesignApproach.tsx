"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const MAILTO =
  "mailto:mustaphafavour1@gmail.com?subject=Founder%20Mode%20Case%20Study%20%E2%80%94%20Revolut%20Business%20Concept&body=Hi%20Favour%2C%0A%0AI%20came%20across%20your%20Revolut%20Business%20Founder%20Mode%20concept%20and%20would%20love%20to%20learn%20more%20about%20the%20case%20study.%0A%0A";

const screens: { label: string; image: string; tilt: number }[] = [
  { label: "Dashboard", image: "/images/home.png", tilt: 4 },
  { label: "Payments", image: "/images/payments.png", tilt: -3 },
  { label: "Vaults", image: "/images/vaults.png", tilt: 5 },
  { label: "Forecast", image: "/images/cashflow.png", tilt: -4 },
  { label: "Team", image: "/images/teamscards.png", tilt: 3 },
  { label: "Invoices", image: "/images/invoices.png", tilt: -5 },
  { label: "Onboarding", image: "/images/profile.png", tilt: 4 },
];

function ScreenPill({ label, image, tilt, delay }: { label: string; image: string; tilt: number; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay, ease }}
      style={{ position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Pill */}
      <div
        style={{
          background: hovered ? "#161616" : "#111111",
          border: `1px solid ${hovered ? "#6366f1" : "#1f1f1f"}`,
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
            opacity: hovered ? 1 : 0.6,
            transition: "opacity 0.2s",
          }}
        />
        <p
          style={{
            fontSize: "0.58rem",
            color: hovered ? "#a3a3a3" : "#737373",
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            transition: "color 0.2s",
          }}
        >
          {label}
        </p>
      </div>

      {/* Hover image popover */}
      <div
        style={{
          position: "absolute",
          bottom: "calc(100% + 12px)",
          left: "50%",
          zIndex: 100,
          pointerEvents: "none",
        }}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.88 }}
              transition={{ duration: 0.2, ease }}
              style={{
                x: "-50%",
                rotate: tilt,
                transformOrigin: "bottom center",
              }}
            >
              <Image
                src={image}
                alt={`${label} screen`}
                width={130}
                height={260}
                style={{
                  objectFit: "contain",
                  display: "block",
                  filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.8)) drop-shadow(0 0 1px rgba(255,255,255,0.08))",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function DesignApproach() {
  return (
    <section
      style={{ padding: "160px 24px", borderTop: "1px solid #1f1f1f" }}
    >
      <div
        className="approach-grid"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
          marginBottom: "80px",
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
            7 screens chosen for the moments founders lose time, miss signals, or make calls on incomplete data. Each solves a specific failure.
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
            The visual language stays inside Revolut&apos;s system. The best product design is invisible — you feel the clarity before you notice the interface.
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
            onMouseEnter={(e) => { (e.currentTarget).style.gap = "12px"; }}
            onMouseLeave={(e) => { (e.currentTarget).style.gap = "8px"; }}
          >
            Reach out for more info
            <span style={{ fontSize: "1rem" }}>→</span>
          </motion.a>
        </div>
      </div>

      {/* Screen pills with hover previews */}
      <div
        className="screen-pills"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "8px",
          paddingBottom: "80px",
        }}
      >
        {screens.map((s, i) => (
          <ScreenPill key={s.label} label={s.label} image={s.image} tilt={s.tilt} delay={i * 0.06} />
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
