"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const heroLines = ["Run Your Business.", "Stop Managing Dashboards."];
const ease = [0.25, 0.46, 0.45, 0.94] as const;

const carouselImages = [
  { src: "/images/home.png", label: "Dashboard" },
  { src: "/images/vaults.png", label: "Vaults" },
  { src: "/images/cashflow.png", label: "Cash Flow" },
  { src: "/images/teamscards.png", label: "Team Cards" },
];

function PhoneCarousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  // Preload all images immediately on mount so swaps feel instant
  useEffect(() => {
    carouselImages.forEach(({ src }) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3400);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Fixed-size 3D viewport — never changes size, preventing layout shift */}
      <div
        className="carousel-viewport"
        style={{ position: "relative", perspective: "1100px", flexShrink: 0 }}
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            variants={{
              enter: (d: number) => ({ rotateY: d > 0 ? -75 : 75, opacity: 0, scale: 0.94 }),
              center: { rotateY: -6, opacity: 1, scale: 1 },
              exit: (d: number) => ({ rotateY: d > 0 ? 75 : -75, opacity: 0, scale: 0.94 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease }}
            style={{
              position: "absolute",
              inset: 0,
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src={carouselImages[index].src}
              alt={carouselImages[index].label}
              fill
              style={{
                objectFit: "contain",
                filter:
                  "drop-shadow(0 40px 70px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(99,102,241,0.1))",
              }}
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicator dots */}
      <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDir(i > index ? 1 : -1);
              setIndex(i);
            }}
            style={{
              width: i === index ? "18px" : "6px",
              height: "6px",
              borderRadius: "999px",
              background: i === index ? "#ffffff" : "#2a2a2a",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            aria-label={`View ${carouselImages[i].label}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "64px", // nav height offset
      }}
    >
      {/* Ambient blobs */}
      <div
        style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
      >
        <div
          style={{
            position: "absolute",
            top: "18%",
            right: "8%",
            width: "520px",
            height: "520px",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.11), transparent 70%)",
            filter: "blur(48px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "3%",
            width: "340px",
            height: "340px",
            background:
              "radial-gradient(circle, rgba(25,28,130,0.16), transparent 70%)",
            filter: "blur(64px)",
          }}
        />
      </div>

      <div
        className="hero-grid"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Left: copy — independent of image column height */}
        <div>
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

          <h1
            style={{
              fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
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

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62, ease }}
            style={{
              fontSize: "1rem",
              color: "#a3a3a3",
              lineHeight: 1.7,
              maxWidth: "400px",
              marginBottom: "40px",
            }}
          >
            For the founder still running the numbers, the product, and the team; before the first finance hire.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease }}
            style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
          >
            {/* Primary — white */}
            <a
              href="#concept"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "12px 24px",
                background: "#ffffff",
                color: "#0a0a0a",
                fontSize: "0.85rem",
                fontWeight: 700,
                borderRadius: "999px",
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#e5e5e5";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Explore the Concept
            </a>

            {/* Secondary — outline */}
            <a
              href="mailto:mustaphafavour1@gmail.com?subject=Founder%20Mode%20Case%20Study&body=Hi%20Favour%2C%0A%0AI%20saw%20your%20Revolut%20Business%20Founder%20Mode%20concept%20and%20would%20love%20to%20learn%20more.%0A%0A"
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
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#737373";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2a2a2a";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Reach out for more info
            </a>
          </motion.div>
        </div>

        {/* Right: fixed-height column — image never causes text to shift */}
        <motion.div
          initial={{ opacity: 0, x: 32, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="hero-mockup"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PhoneCarousel />
        </motion.div>
      </div>

      <style>{`
        /* carousel-viewport: fixed CSS dimensions — never reflows */
        .carousel-viewport {
          width: calc(75vh * 0.46);
          height: 75vh;
          max-height: 820px;
          max-width: 380px;
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 32px 24px !important;
            gap: 40px !important;
          }
          .carousel-viewport {
            width: calc(58vh * 0.46);
            height: 58vh;
            max-height: 480px;
            max-width: 240px;
          }
        }

        @media (max-width: 480px) {
          .carousel-viewport {
            width: calc(55vw);
            height: calc(55vw * 2.17);
            max-height: 380px;
            max-width: 175px;
          }
        }
      `}</style>
    </section>
  );
}
