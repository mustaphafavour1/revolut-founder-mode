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
      "The Home screen replaces the traditional account summary with a decision-ready overview. A Health Score surfaces the three most critical signals — runway, pending invoices, and card utilisation — so you know where attention is needed without digging through sub-menus. A Smart Nudge module surfaces one time-sensitive action per session, reducing the cognitive overhead of a long to-do list. The layout follows an F-pattern scan path: critical numbers top-left, quick actions top-right, and recent activity scrollable below. Every element earns its place by saving a decision.",
    annotations: [
      {
        label: "Health Score",
        text: "A composite signal combining runway days, overdue receivables, and spend vs. budget. Colour-coded green above 70, amber 40–70, red below 40 — so the headline number tells the story before you read a single line.",
      },
      {
        label: "Smart Nudge",
        text: "One surfaced action per session, ranked by recency and financial impact. Founders make better calls when the system picks the most important next step rather than presenting everything at once.",
      },
      {
        label: "F-Pattern Layout",
        text: "Content is positioned along the natural F-shaped scan path. Critical numbers land top-left, quick actions top-right, and the activity feed scrolls below — the eye reaches the most important data without deliberate effort.",
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
      "The Payments screen is rebuilt around batch and scheduled workflows. Select multiple recipients, set individual amounts and references, and send them all in one confirmation step. A scheduling layer lets founders queue payments up to 90 days ahead, removing the mental overhead of remembering rent, subscriptions, or supplier due dates. Recurring payments are a first-class feature — set a frequency, a start date, and the system handles every subsequent transfer. Frequent and favourite recipients surface automatically so common payments take a single tap, not five.",
    annotations: [
      {
        label: "Batch Send",
        text: "Select 2–10 recipients in a single flow. Review all amounts before confirming. One submission, one record in the activity feed — no repetition, no tab-switching.",
      },
      {
        label: "Scheduled Payments",
        text: "Queue a payment up to 90 days ahead with a date stamp. It appears in the activity feed as 'Scheduled' so nothing gets missed, double-paid, or forgotten when the month gets busy.",
      },
      {
        label: "Smart Recents",
        text: "The five most-used recipients surface automatically at the top of the flow. Routine payments — team members, regular suppliers, platform fees — are a single tap away.",
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
      "Vaults are reimagined as goal-based savings accounts with built-in automation. Each Vault carries a name, a target amount, a deadline, and an auto-sweep rule. When the main account balance exceeds a defined threshold, the overflow moves automatically into the right Vault — saving happens without requiring a decision in the moment. Progress rings visualise completion toward each Vault's target, making savings feel motivating rather than administrative. At 80% progress the ring shifts to amber, prompting a top-up before the deadline without a notification flood.",
    annotations: [
      {
        label: "Named Vaults",
        text: "Naming a savings pot changes the psychology. 'Tax Reserve' feels distinct from 'Emergency Buffer' — money with a label is money less likely to be spent impulsively.",
      },
      {
        label: "Auto-Sweep Rules",
        text: "Set a balance threshold on the main account. Any balance above it sweeps into a designated Vault automatically. The discipline is built into the system, not into the founder's memory.",
      },
      {
        label: "Progress Rings",
        text: "Visual completion indicators tied to each Vault's target. A ring turning amber at 80% provides a soft prompt without a hard notification — useful without being noisy.",
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
      "The Forecast screen replaces the running balance with a forward-looking timeline. Projected income and committed expenses are plotted on a 30, 60, and 90-day horizon. Risk events — low-balance warnings, large outgoing payments, invoice payment gaps — appear as named markers directly on the timeline rather than buried inside a transaction log. Founders can run a simple what-if: drag a committed expense earlier or later in the timeline and watch the projected balance recalculate in real time. The goal is to make low-stakes experimentation easy before high-stakes decisions become urgent.",
    annotations: [
      {
        label: "30/60/90 Horizon",
        text: "Three time horizons in a single toggle. Zoom from next month's cash position to the end of the quarter without switching tools or building a spreadsheet.",
      },
      {
        label: "Named Risk Events",
        text: "Instead of abstract spikes on a chart, each risk is labelled: 'Payroll gap — 12 Aug', 'Invoice overdue — 14 Aug'. Named problems have owners and timelines. Abstract ones get ignored.",
      },
      {
        label: "What-If Simulation",
        text: "Drag a committed expense forward or back in the timeline and the forecast recalculates instantly. Founders can test the impact of delaying a payment or pulling in revenue before committing.",
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
      "The Team screen is designed for the reality of a 2–10 person company: a handful of people who need cards, clear limits, and basic visibility. Each card shows the cardholder's name, their monthly limit, current spend, and status. Cards can be frozen, adjusted, or cancelled in one tap from the overview — no drilling into individual settings. Spend categories are configured per card, so the designer can buy software tools but not travel, without a weekly conversation about it. When a cardholder approaches their limit, both the founder and the cardholder receive a notification before a declined transaction surprises either of them.",
    annotations: [
      {
        label: "Per-Card Limits",
        text: "Set a monthly cap per cardholder. Approaching the limit triggers a notification to both the founder and the team member. No surprises at month end, no awkward reconciliation conversations.",
      },
      {
        label: "Category Controls",
        text: "Lock a card to specific spend categories — software, travel, client entertainment. Reduces accidental misuse without requiring a founder to approve every transaction manually.",
      },
      {
        label: "One-Tap Freeze",
        text: "Lost card, suspicious charge, team member leaving — freeze any card instantly from the team overview. No account settings navigation, no delay, no damage if it needs to happen at 11 pm.",
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
      "The Invoices screen brings receivables inside the banking experience — no third-party tool required. Create, send, and track invoices from a single view. A status trail shows when an invoice was sent, when it was opened, and when it was paid: context that turns a follow-up call from awkward to informed. Overdue invoices surface at the top with a one-tap payment reminder, eliminating the email drafting that usually makes chasing feel like extra work. An Early Payment Offer lets founders propose a small discount for immediate settlement — a measured trade-off that dramatically improves cash timing when it matters most.",
    annotations: [
      {
        label: "Status Trail",
        text: "Sent → Opened → Paid. Knowing when a client viewed your invoice tells you whether to follow up with a call or wait another day. The trail gives context before the conversation.",
      },
      {
        label: "One-Tap Reminder",
        text: "Overdue invoice? A single tap sends a polished, formatted payment reminder without drafting an email. Escalating templates for 7, 14, and 30 days overdue are built in.",
      },
      {
        label: "Early Payment Offer",
        text: "Offer a 1–3% discount for payment within 48 hours. A small trade-off that can turn a 30-day wait into same-week cash — the right tool when timing is the constraint, not the amount.",
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
      "The Setup screen uses progressive disclosure — show only the next step, not an overwhelming 20-field form. A visual progress bar breaks onboarding into five named stages: Identity, Business Details, Documents, Account Verification, and First Action. Each stage shows a clear estimated time and a short list of what you'll need before you start it. Completing a stage triggers a micro-celebration that makes progress feel tangible rather than bureaucratic. The system remembers exactly where you left off, so returning after a break means continuing, not restarting. The final step is a real business action — not a generic 'Get Started' screen — so setup completion equals genuine activation.",
    annotations: [
      {
        label: "Progressive Disclosure",
        text: "Five named stages, each with a short time estimate. Founders only see the current step — breaking a complex process into five manageable moments prevents abandonment.",
      },
      {
        label: "Progress Memory",
        text: "Leave mid-setup and return later. The screen reopens at your exact stopping point with all previous inputs intact. No restarting, no frustration, no data re-entry.",
      },
      {
        label: "First Action Prompt",
        text: "The final onboarding step is completing a real business action: receiving a payment, creating a Vault, or inviting a team member. Completion equals activation, not just registration.",
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
            minHeight: "20px",
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
        position: "relative",
      }}
    >
      <div style={{ transform: `rotate(${screen.tilt}deg)`, transformOrigin: "center center" }}>
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
          fontSize: "0.98rem",
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
        borderTop: "1px solid #1f1f1f",
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
            "radial-gradient(circle, rgba(99,102,241,0.055), transparent 65%)",
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
          borderBottom: "1px solid #1a1a1a",
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
              "radial-gradient(ellipse, rgba(99,102,241,0.08), transparent 65%)",
            pointerEvents: "none",
            filter: "blur(40px)",
          }}
        />

        <div
          style={{ maxWidth: "640px", margin: "0 auto", position: "relative", zIndex: 1 }}
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
              fontSize: "0.98rem",
              color: "#737373",
              lineHeight: 1.72,
            }}
          >
            Seven screens. Each one chosen because founders lose time, miss
            signals, or make calls on incomplete data without it. This is the
            reasoning behind every decision.
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
          borderTop: "1px solid #1f1f1f",
          padding: "40px 24px",
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
            color: "rgba(255,255,255,0.2)",
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
        }
      `}</style>
    </>
  );
}
