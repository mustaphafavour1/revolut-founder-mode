"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

type Annotation = { label: string; text: string };

type ScreenData = {
  num: string;
  label: string;
  title: string;
  image: string;
  tilt: number;
  short: string;
  detail: string;
  annotations: Annotation[];
};

const screens: ScreenData[] = [
  {
    num: "01",
    label: "Home",
    title: "Home Dashboard",
    image: "/images/home.png",
    tilt: 3,
    short: "The command centre. Everything a founder needs, decided in under 10 seconds.",
    detail:
      "The Home screen replaces the account summary with a decision-ready overview. A Health Score surfaces three signals — runway, pending invoices, and card utilisation — in one number. A Smart Nudge surfaces one time-sensitive action per session. Layout follows an F-pattern: critical numbers top-left, quick actions top-right, activity below.",
    annotations: [
      {
        label: "Health Score",
        text: "Combines runway days, overdue receivables, and spend vs. budget. Green above 70, amber 40–70, red below 40.",
      },
      {
        label: "Smart Nudge",
        text: "One surfaced action per session, ranked by recency and financial impact. Fewer choices, better calls.",
      },
      {
        label: "F-Pattern Layout",
        text: "Critical numbers land top-left, quick actions right, activity feed below. The eye reaches the most important data first.",
      },
    ],
  },
  {
    num: "02",
    label: "Payments",
    title: "Smart Payments",
    image: "/images/payments.png",
    tilt: -3,
    short: "Pay multiple people at once. Queue what's coming. Never miss a recurring bill.",
    detail:
      "The Payments screen is built around batch and scheduled workflows. Select multiple recipients, set individual amounts, and send in one confirmation step. A scheduling layer queues payments up to 90 days ahead. Recurring payments have a first-class flow — set a frequency and start date, the system handles the rest.",
    annotations: [
      {
        label: "Batch Send",
        text: "2–10 recipients in one flow. One submission, one record in the feed — no repetition.",
      },
      {
        label: "Scheduled Payments",
        text: "Queue a payment up to 90 days ahead. Date-stamped so nothing gets missed or double-paid.",
      },
      {
        label: "Smart Recents",
        text: "The five most-used recipients surface automatically. Routine payments are a single tap.",
      },
    ],
  },
  {
    num: "03",
    label: "Vaults",
    title: "Business Vaults",
    image: "/images/vaults.png",
    tilt: 4,
    short: "Savings that work toward something, not just sit somewhere.",
    detail:
      "Each Vault has a name, a target, a deadline, and an auto-sweep rule. When the main balance exceeds a set threshold, overflow moves into the right Vault automatically — saving happens without a decision. Progress rings visualise completion, making it feel purposeful rather than administrative.",
    annotations: [
      {
        label: "Named Vaults",
        text: "Naming a pot changes the psychology. 'Tax Reserve' is money less likely to be spent impulsively.",
      },
      {
        label: "Auto-Sweep Rules",
        text: "Any balance above the threshold sweeps automatically. The discipline is in the system, not the founder's memory.",
      },
      {
        label: "Progress Rings",
        text: "Visual completion toward each target. Turns amber at 80% — a soft prompt without a notification.",
      },
    ],
  },
  {
    num: "04",
    label: "Forecast",
    title: "Cash Flow Forecast",
    image: "/images/cashflow.png",
    tilt: -4,
    short: "See 90 days ahead. Stop making financial decisions in the dark.",
    detail:
      "The Forecast screen replaces the running balance with a forward-looking timeline. Projected income and committed expenses plot across 30, 60, and 90 days. Risk events appear as named markers on the timeline — not buried in a log. Drag an expense to a different date and the balance recalculates in real time.",
    annotations: [
      {
        label: "30/60/90 Horizon",
        text: "Three time horizons in one toggle. Zoom from next month's cash position to end of quarter.",
      },
      {
        label: "Named Risk Events",
        text: "'Payroll gap — 12 Aug'. Named problems are solvable. Abstract spikes on a chart get ignored.",
      },
      {
        label: "What-If Simulation",
        text: "Drag a committed expense earlier or later. The projected balance recalculates instantly.",
      },
    ],
  },
  {
    num: "05",
    label: "Team",
    title: "Team & Cards",
    image: "/images/teamscards.png",
    tilt: 3,
    short: "Give your team spending power. Keep oversight without micromanaging.",
    detail:
      "Designed for a 2–10 person team. Each card shows the cardholder, their monthly limit, current spend, and status. Cards can be frozen, adjusted, or cancelled in one tap from the overview. Spend categories are set per card so limits are implicit, not conversational.",
    annotations: [
      {
        label: "Per-Card Limits",
        text: "Monthly cap per cardholder. Both founder and team member are notified when approaching the limit.",
      },
      {
        label: "Category Controls",
        text: "Lock a card to specific spend types — software, travel, meals. No manual approval needed.",
      },
      {
        label: "One-Tap Freeze",
        text: "Freeze any card instantly from the team overview. No navigation, no delay.",
      },
    ],
  },
  {
    num: "06",
    label: "Invoices",
    title: "Invoices & Get Paid",
    image: "/images/invoices.png",
    tilt: -4,
    short: "Invoice natively. Know exactly what you're owed, who has it, and when it arrives.",
    detail:
      "Invoicing lives inside the banking experience — no third-party tool required. Create, send, and track from a single view. A status trail shows when an invoice was sent, opened, and paid. Overdue invoices surface at the top with a one-tap reminder. An Early Payment Offer trades a small discount for immediate settlement.",
    annotations: [
      {
        label: "Status Trail",
        text: "Sent → Opened → Paid. Knowing when a client viewed your invoice tells you whether to follow up or wait.",
      },
      {
        label: "One-Tap Reminder",
        text: "A single tap sends a formatted payment reminder. Built-in escalation at 7, 14, and 30 days.",
      },
      {
        label: "Early Payment Offer",
        text: "1–3% discount for payment within 48 hours. A small trade-off when cash timing matters.",
      },
    ],
  },
  {
    num: "07",
    label: "Onboarding",
    title: "Business Setup",
    image: "/images/profile.png",
    tilt: 3,
    short: "Start without friction. Finish without confusion.",
    detail:
      "Progressive disclosure breaks onboarding into five named stages — each with an estimated time. You only see the current step. The system remembers where you stopped. The final step is a real business action, so setup completion equals genuine activation.",
    annotations: [
      {
        label: "Progressive Disclosure",
        text: "Five named stages, each with a time estimate. Founders only see the current step, not an overwhelming form.",
      },
      {
        label: "Progress Memory",
        text: "Leave mid-setup and return later. The screen reopens exactly where you stopped.",
      },
      {
        label: "First Action Prompt",
        text: "Setup ends with a real action — receiving a payment, creating a Vault, or inviting a team member.",
      },
    ],
  },
];

function AnnotationItem({
  annotation,
  index,
}: {
  annotation: Annotation;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease }}
      style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}
    >
      <div
        style={{
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "2px",
        }}
      >
        <div
          style={{
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            background: "rgba(99,102,241,0.12)",
            border: "1px solid rgba(99,102,241,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.58rem",
            fontWeight: 800,
            color: "#6366f1",
            flexShrink: 0,
          }}
        >
          {index + 1}
        </div>
        <div
          style={{
            width: "1px",
            flex: 1,
            minHeight: "16px",
            background:
              "linear-gradient(to bottom, rgba(99,102,241,0.2), transparent)",
            marginTop: "5px",
          }}
        />
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <p
          style={{
            fontSize: "0.68rem",
            fontWeight: 700,
            color: "#6366f1",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "5px",
          }}
        >
          {annotation.label}
        </p>
        <p
          style={{
            fontSize: "0.84rem",
            color: "#737373",
            lineHeight: 1.65,
          }}
        >
          {annotation.text}
        </p>
      </div>
    </motion.div>
  );
}

function ScreenSection({
  screen,
  index,
}: {
  screen: ScreenData;
  index: number;
}) {
  const imageLeft = index % 2 === 0;

  const imageCol = (
    <motion.div
      initial={{ opacity: 0, x: imageLeft ? -28 : 28, y: 16 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.95, ease }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          transform: `rotate(${screen.tilt}deg)`,
          transformOrigin: "center center",
        }}
      >
        <Image
          src={screen.image}
          alt={screen.title}
          width={320}
          height={660}
          style={{
            width: "auto",
            height: "clamp(380px, 52vh, 620px)",
            objectFit: "contain",
            display: "block",
            filter:
              "drop-shadow(0 32px 64px rgba(0,0,0,0.75)) drop-shadow(0 0 2px rgba(255,255,255,0.04))",
          }}
        />
      </div>
    </motion.div>
  );

  const textCol = (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease }}
        style={{
          fontSize: "0.62rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#6366f1",
          marginBottom: "18px",
        }}
      >
        Screen {screen.num} — {screen.label}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, delay: 0.1, ease }}
        style={{
          fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          marginBottom: "16px",
        }}
      >
        {screen.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.16, ease }}
        style={{
          fontSize: "0.95rem",
          color: "#a3a3a3",
          lineHeight: 1.65,
          marginBottom: "24px",
        }}
      >
        {screen.short}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.2, ease }}
        style={{
          width: "40px",
          height: "1px",
          background: "#2a2a2a",
          marginBottom: "24px",
          transformOrigin: "left",
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, delay: 0.22, ease }}
        style={{
          fontSize: "0.88rem",
          color: "#636363",
          lineHeight: 1.8,
          marginBottom: "36px",
        }}
      >
        {screen.detail}
      </motion.p>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {screen.annotations.map((ann, i) => (
          <AnnotationItem key={ann.label} annotation={ann} index={i} />
        ))}
      </div>
    </div>
  );

  return (
    <section
      style={{
        padding: "120px 24px",
        borderTop: "1px solid #1c1c1c",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient gradient */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          ...(imageLeft ? { left: "-8%" } : { right: "-8%" }),
          width: "560px",
          height: "560px",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.05), transparent 65%)",
          pointerEvents: "none",
          filter: "blur(48px)",
        }}
      />

      {/* Faint section number */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          ...(imageLeft ? { right: "2%" } : { left: "2%" }),
          transform: "translateY(-50%)",
          fontSize: "clamp(100px, 16vw, 200px)",
          fontWeight: 900,
          color: "rgba(255,255,255,0.016)",
          letterSpacing: "-0.06em",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
        }}
      >
        {screen.num}
      </div>

      {/* Vertical centre divider */}
      <div
        className="breakdown-vline"
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: "1px",
          background: "#1c1c1c",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="breakdown-grid"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {imageLeft ? imageCol : textCol}
        {imageLeft ? textCol : imageCol}
      </div>
    </section>
  );
}

export default function BreakdownPage() {
  return (
    <>
      {/* Minimal sticky header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(10,10,10,0.90)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid #1c1c1c",
          padding: "0 24px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.82rem",
            fontWeight: 600,
            color: "#737373",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#fff")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#737373")
          }
        >
          <span style={{ fontSize: "1rem" }}>←</span> Back
        </Link>

        <span
          style={{
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.2)",
          }}
        >
          Design Breakdown
        </span>
      </header>

      {/* Page header */}
      <section
        style={{
          padding: "120px 24px 100px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          borderBottom: "1px solid #1c1c1c",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(99,102,241,0.07), transparent 65%)",
            pointerEvents: "none",
            filter: "blur(40px)",
          }}
        />

        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#6366f1",
              marginBottom: "20px",
            }}
          >
            Revolut Business — Founder Mode
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease }}
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
          >
            The design thinking
            <br />
            <span style={{ color: "#a3a3a3", fontWeight: 600 }}>
              behind every screen.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease }}
            style={{
              fontSize: "0.95rem",
              color: "#737373",
              lineHeight: 1.72,
            }}
          >
            Seven screens, each chosen because founders lose time, miss signals,
            or make calls on incomplete data without it.
          </motion.p>
        </div>
      </section>

      {/* Screen sections */}
      {screens.map((screen, i) => (
        <ScreenSection key={screen.label} screen={screen} index={i} />
      ))}

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #1c1c1c",
          padding: "40px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "100%",
          flexWrap: "wrap",
          gap: "16px",
          position: "relative",
        }}
      >
        {/* Footer vertical line continuation */}
        <div
          className="breakdown-vline"
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "#1c1c1c",
            pointerEvents: "none",
          }}
        />
        <span
          style={{
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.2)",
            position: "relative",
            zIndex: 1,
          }}
        >
          Revolut Business × HeadFavour
        </span>

        <Link
          href="/"
          style={{
            fontSize: "0.78rem",
            color: "#737373",
            textDecoration: "none",
            transition: "color 0.2s",
            position: "relative",
            zIndex: 1,
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#fff")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#737373")
          }
        >
          ← Back to overview
        </Link>
      </footer>

      <style>{`
        @media (max-width: 860px) {
          .breakdown-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .breakdown-vline {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
