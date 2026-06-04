"use client";

import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function FooterCTA() {
  return (
    <footer style={{ borderTop: "1px solid #1f1f1f" }}>
      {/* CTA block */}
      <section
        id="case-study"
        style={{
          padding: "160px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient gradient */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "300px",
            background:
              "radial-gradient(ellipse, rgba(99,102,241,0.08), transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            style={{
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
          >
            Interested in how this was made?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.12, ease }}
            style={{
              fontSize: "1rem",
              color: "#a3a3a3",
              lineHeight: 1.7,
              marginBottom: "40px",
            }}
          >
            The full case study covers the research, the decisions and the 7 screens in detail.
          </motion.p>

          <motion.a
            href="mailto:mustaphafavour1@gmail.com?subject=Founder%20Mode%20Case%20Study%20%E2%80%94%20Revolut%20Business%20Concept&body=Hi%20Favour%2C%0A%0AI%20came%20across%20your%20Revolut%20Business%20Founder%20Mode%20concept%20and%20would%20love%20to%20learn%20more%20about%20the%20case%20study.%0A%0A"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.24, ease }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              background: "#ffffff",
              color: "#0a0a0a",
              fontSize: "0.88rem",
              fontWeight: 700,
              borderRadius: "999px",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#e5e5e5";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#ffffff";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            Reach out for more info
          </motion.a>
        </div>
      </section>

      {/* Footer links */}
      <div
        style={{
          borderTop: "1px solid #1f1f1f",
          padding: "28px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          Revolut Business × HeadFavour
        </span>

        <div style={{ display: "flex", gap: "28px" }}>
          {[
            { label: "Portfolio", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Email", href: "mailto:mustaphafavour1@gmail.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.78rem",
                color: "#737373",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#fff")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#737373")
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
