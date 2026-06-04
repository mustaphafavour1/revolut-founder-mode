"use client";

import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function AboutDesigner() {
  return (
    <section
      style={{
        padding: "160px 24px",
        borderTop: "1px solid #1f1f1f",
        background: "#111111",
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
          The Designer
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left */}
          <div>
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
              Built by someone
              <br />
              who uses products
              <br />
              like this.
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
                marginBottom: "40px",
              }}
            >
              I&apos;m Favour — designer and founder based in Lagos. I build at the intersection of design, engineering and product. MonieMatch is one of mine. Founder Mode is how I&apos;d fix the thing I&apos;ve felt missing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.25, ease }}
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {[
                {
                  label: "design.headfavour.com",
                  sub: "Portfolio",
                  href: "#",
                },
                {
                  label: "@headfavour",
                  sub: "Twitter",
                  href: "#",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    textDecoration: "none",
                    padding: "14px 18px",
                    background: "#161616",
                    border: "1px solid #1f1f1f",
                    borderRadius: "12px",
                    transition: "border-color 0.2s, background 0.2s",
                    maxWidth: "320px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#6366f1";
                    (e.currentTarget as HTMLElement).style.background =
                      "#1a1a2e";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#1f1f1f";
                    (e.currentTarget as HTMLElement).style.background =
                      "#161616";
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "#fff",
                        lineHeight: 1.3,
                      }}
                    >
                      {link.label}
                    </p>
                    <p
                      style={{
                        fontSize: "0.7rem",
                        color: "#737373",
                        lineHeight: 1.3,
                      }}
                    >
                      {link.sub}
                    </p>
                  </div>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: "0.9rem",
                      color: "#6366f1",
                    }}
                  >
                    ↗
                  </span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
