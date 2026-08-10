import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, PlayCircle } from "lucide-react";
import heroData from "./Herodata";

const AUTO_ROTATE_MS = 6000;

function StatGauge({ value }) {
  const numeric = parseInt(value, 10);
  const pct = !isNaN(numeric) ? Math.min(numeric, 100) : 72;
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
      <svg className="w-14 h-14 -rotate-90" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="#1E1E24"
          strokeWidth="5"
        />
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
        <defs>
          <linearGradient
            id="gaugeGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute text-[10px] font-mono font-semibold text-white">
        {value}
      </span>
    </div>
  );
}

function HeroBanner() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const item = heroData[active];

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActive((i) => (i + 1) % heroData.length);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative w-full overflow-hidden bg-black px-4 lg:px-10 pt-28 pb-24 lg:pt-35 lg:pb-32 min-h-[65vh] flex items-center"
    >
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[520px] h-[520px] rounded-full bg-[#7C3AED] opacity-[0.18] blur-[140px]" />
      <div className="pointer-events-none absolute top-40 right-0 w-[420px] h-[420px] rounded-full bg-[#7C3AED] opacity-[0.12] blur-[130px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] backdrop-blur px-3 py-1.5 rounded-full mb-6">
            <Sparkles size={14} className="text-[#B69CFF]" />
            <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-white/70">
              AI-Powered Career OS
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {heroData.map((d, i) => (
              <button
                key={d.id}
                onClick={() => setActive(i)}
                className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-colors duration-300 ${
                  i === active
                    ? "border-transparent bg-[#8B5CF6] text-white"
                    : "border-white/10 text-white/50 hover:text-white/80 hover:border-white/25"
                }`}
              >
                {d.tag}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h1
                className="text-4xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight text-white max-w-xl"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {item.titlePrefix}
                <span className="bg-gradient-to-r from-[#C4B5FD] to-[#8B5CF6] bg-clip-text text-transparent">
                  {item.titleHighlight}
                </span>
                {item.titleSuffix}
              </h1>

              <p className="mt-5 text-base text-white/55 max-w-md leading-7">
                {item.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="group flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-6 py-3.5 rounded-full font-semibold text-sm shadow-[0_0_40px_-8px_rgba(139,92,246,0.55)] hover:shadow-[0_0_50px_-4px_rgba(139,92,246,0.7)] transition-all duration-300">
                  {item.button}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors">
                  <PlayCircle size={18} />
                  Watch demo
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-6 mt-14 pt-8 border-t border-white/10">
            {[
              { value: "15K+", label: "Students" },
              { value: "98%", label: "Avg ATS Score" },
              { value: "24/7", label: "AI Support" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={i !== 0 ? "pl-6 border-l border-white/10" : ""}
              >
                <p className="text-xl font-mono font-semibold text-white">
                  {s.value}
                </p>
                <p className="text-xs text-white/40 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative w-full max-w-[550px]"
            >
              <div className="relative rounded-[28px] border border-[#8B5CF6]/30 bg-white/[0.02] backdrop-blur-xl p-3 shadow-[0_0_60px_-15px_rgba(139,92,246,0.35),0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                <img
                  src={item.image}
                  alt={item.tag}
                  className="w-full h-[300px] rounded-[20px] object-cover"
                />
              </div>

              <div className="absolute -top-6 -left-6 flex items-center gap-3 bg-[#111111]/95 border border-white/10 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-2xl">
                <StatGauge value={item.stat.value} />
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                    {item.stat.label}
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Live analysis
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-[#111111]/95 border border-white/10 backdrop-blur-xl rounded-2xl px-4 py-3.5 shadow-2xl max-w-[210px]">
                {item.checklist.map((c) => (
                  <div key={c} className="flex items-center gap-2 py-0.5">
                    <CheckCircle2
                      size={13}
                      className="text-[#8B5CF6] shrink-0"
                    />
                    <span className="text-[11px] text-white/70 leading-snug">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
