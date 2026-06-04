"use client";

import { motion } from "framer-motion";

const heroLines = [
  "You're running a business.",
  "Not managing a dashboard.",
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Hero() {
  return (
    <section
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      {/* Ambient gradient blobs */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "480px",
            height: "480px",
            background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "5%",
            width: "320px",
            height: "320px",
            background: "radial-gradient(circle, rgba(25,28,130,0.18), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          paddingTop: "120px",
          paddingBottom: "96px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left: copy */}
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "36px",
            }}
          >
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#737373",
              }}
            >
              Revolut Business
            </span>
            <span style={{ color: "#6366f1", fontSize: "0.9rem" }}>→</span>
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#6366f1",
              }}
            >
              Concept by HeadFavour
            </span>
          </motion.div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2.6rem, 5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "24px",
            }}
          >
            {heroLines.map((line, i) => (
              <motion.span
                key={i}
                style={{ display: "block" }}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.22 + i * 0.18, ease }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62, ease }}
            style={{
              fontSize: "1.05rem",
              color: "#a3a3a3",
              lineHeight: 1.7,
              maxWidth: "420px",
              marginBottom: "40px",
            }}
          >
            Founder Mode is a smarter layer built for the people who actually
            own the thing. Less admin overhead; more financial clarity where it
            counts.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease }}
            style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
          >
            <a
              href="#concept"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "12px 24px",
                background: "#6366f1",
                color: "#fff",
                fontSize: "0.85rem",
                fontWeight: 600,
                borderRadius: "999px",
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "#5254cc";
                (e.target as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "#6366f1";
                (e.target as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Explore the Concept
            </a>
            <a
              href="#case-study"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "12px 24px",
                background: "transparent",
                color: "#fff",
                fontSize: "0.85rem",
                fontWeight: 600,
                borderRadius: "999px",
                textDecoration: "none",
                border: "1px solid #2a2a2a",
                transition: "border-color 0.2s, transform 0.15s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.borderColor = "#6366f1";
                (e.target as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderColor = "#2a2a2a";
                (e.target as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              See Case Study
            </a>
          </motion.div>
        </div>

        {/* Right: mock dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          style={{ display: "flex", justifyContent: "center" }}
          className="hero-mockup"
        >
          <MockDashboard />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 96px !important;
            gap: 48px !important;
          }
          .hero-mockup {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

function MockDashboard() {
  const bars = [30, 52, 38, 68, 44, 75, 55, 82, 48, 65, 78, 58];

  return (
    <div
      style={{
        width: "300px",
        background: "#111111",
        borderRadius: "28px",
        border: "1px solid #1f1f1f",
        overflow: "hidden",
        boxShadow:
          "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
        position: "relative",
      }}
    >
      {/* Glow behind phone */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, padding: "24px" }}>
        {/* Status bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <span style={{ fontSize: "0.7rem", color: "#4a4a4a", fontWeight: 600 }}>
            9:41
          </span>
          <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: i === 2 ? "#4a4a4a" : "#2a2a2a",
                }}
              />
            ))}
          </div>
        </div>

        {/* Greeting */}
        <div style={{ marginBottom: "18px" }}>
          <p style={{ fontSize: "0.7rem", color: "#737373", marginBottom: "2px" }}>
            Good morning
          </p>
          <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>
            Founder
          </p>
        </div>

        {/* Balance card */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(25,28,130,0.22) 100%)",
            border: "1px solid rgba(99,102,241,0.2)",
            borderRadius: "16px",
            padding: "16px",
            marginBottom: "14px",
          }}
        >
          <p style={{ fontSize: "0.65rem", color: "#a3a3a3", marginBottom: "4px", letterSpacing: "0.08em" }}>
            CASH POSITION
          </p>
          <p
            style={{
              fontSize: "1.9rem",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              marginBottom: "8px",
            }}
          >
            £12,450
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#22c55e",
              }}
            />
            <span style={{ fontSize: "0.65rem", color: "#22c55e", fontWeight: 500 }}>
              +8.3% this month
            </span>
          </div>
        </div>

        {/* Stat chips */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          {[
            { label: "Health Score", value: "87", suffix: "/100" },
            { label: "Runway", value: "6.2", suffix: " mo" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: "#161616",
                border: "1px solid #1f1f1f",
                borderRadius: "12px",
                padding: "12px",
              }}
            >
              <p style={{ fontSize: "0.6rem", color: "#737373", marginBottom: "4px", letterSpacing: "0.06em" }}>
                {s.label.toUpperCase()}
              </p>
              <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", lineHeight: 1 }}>
                {s.value}
                <span style={{ fontSize: "0.7rem", color: "#737373", fontWeight: 400 }}>
                  {s.suffix}
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* Mini cash flow chart */}
        <div style={{ marginBottom: "16px" }}>
          <p style={{ fontSize: "0.6rem", color: "#737373", marginBottom: "8px", letterSpacing: "0.08em" }}>
            30-DAY CASH FLOW
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "3px",
              height: "40px",
            }}
          >
            {bars.map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  borderRadius: "2px",
                  height: `${h}%`,
                  background: i >= 9 ? "#6366f1" : "#1f1f1f",
                  transition: "background 0.2s",
                }}
              />
            ))}
          </div>
        </div>

        {/* Upcoming payments */}
        <div>
          <p style={{ fontSize: "0.6rem", color: "#737373", marginBottom: "8px", letterSpacing: "0.08em" }}>
            UPCOMING
          </p>
          {[
            { name: "Stripe", amount: "-£120", accent: "#6366f1" },
            { name: "AWS", amount: "-£89", accent: "#737373" },
          ].map((item, i) => (
            <div
              key={item.name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 0",
                borderBottom: i === 0 ? "1px solid #1f1f1f" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    border: "1px solid #2a2a2a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: item.accent,
                    }}
                  />
                </div>
                <span style={{ fontSize: "0.72rem", color: "#e5e5e5", fontWeight: 500 }}>
                  {item.name}
                </span>
              </div>
              <span style={{ fontSize: "0.72rem", color: "#a3a3a3" }}>
                {item.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
