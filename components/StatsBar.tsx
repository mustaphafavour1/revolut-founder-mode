"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatConfig {
  prefix?: string;
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
}

const stats: StatConfig[] = [
  {
    value: 250000,
    suffix: "+",
    label: "Revolut Business customers",
  },
  {
    prefix: "£",
    value: 4.5,
    suffix: "B",
    decimals: 1,
    label: "Revolut revenue in 2025",
  },
  {
    value: 68,
    suffix: "M",
    label: "Global Revolut users",
  },
];

function CountUp({
  value,
  suffix,
  prefix = "",
  decimals = 0,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800;
    const fps = 60;
    const steps = (duration / 1000) * fps;
    const increment = value / steps;
    let current = 0;
    let frame = 0;

    const tick = () => {
      frame++;
      // Ease-out: slow down near end
      const progress = frame / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      current = eased * value;

      if (frame >= steps) {
        setCount(value);
        return;
      }
      setCount(parseFloat(current.toFixed(decimals)));
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value, decimals]);

  const formatted =
    decimals > 0
      ? count.toFixed(decimals)
      : count >= 1000
      ? count.toLocaleString("en-GB", { maximumFractionDigits: 0 })
      : count.toString();

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function StatsBar() {
  return (
    <section
      style={{
        padding: "96px 24px",
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
            marginBottom: "56px",
            textAlign: "center",
          }}
        >
          Why It Matters
        </motion.p>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "#1f1f1f",
            border: "1px solid #1f1f1f",
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "40px",
          }}
          className="stats-grid"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              style={{
                background: "#111111",
                padding: "40px 36px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 3.4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#fff",
                  lineHeight: 1,
                  marginBottom: "10px",
                }}
              >
                <CountUp
                  value={s.value}
                  suffix={s.suffix}
                  prefix={s.prefix}
                  decimals={s.decimals}
                />
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#737373",
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          style={{
            fontSize: "0.85rem",
            color: "#737373",
            lineHeight: 1.7,
            textAlign: "center",
            maxWidth: "520px",
            margin: "0 auto",
          }}
        >
          The platform is growing fast. The gap between what SME founders need
          and what they get is the next design opportunity.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
