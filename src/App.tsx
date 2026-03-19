import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const namasteWords = [
  { text: 'नमस्ते', lang: 'Hindi' },
  { text: 'நமஸ்தே', lang: 'Tamil' },
  { text: 'నమస్తే', lang: 'Telugu' },
  { text: 'নমস্কার', lang: 'Bengali' },
  { text: 'ನಮಸ್ತೆ', lang: 'Kannada' },
  { text: 'നമസ്തേ', lang: 'Malayalam' },
  { text: 'નમસ્તે', lang: 'Gujarati' },
  { text: 'ਨਮਸਤੇ', lang: 'Punjabi' },
  { text: 'ନମସ୍କାର', lang: 'Odia' },
  { text: 'নমস্কাৰ', lang: 'Assamese' },
];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentWord, setCurrentWord] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord(prev => {
        if (prev >= namasteWords.length - 1) {
          clearInterval(wordInterval);
          setTimeout(() => setLoading(false), 400);
          return prev;
        }
        return prev + 1;
      });
    }, 300);

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[200] bg-[#faf9f7] flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF9933] opacity-[0.08] blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#138808] opacity-[0.06] blur-[120px]" />
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[#FF9933] opacity-[0.04] blur-[80px]" />

            {[...Array(24)].map((_, i) => {
              const isSaffron = i % 3 !== 0;
              const size = 1 + Math.random() * 3;
              const x = Math.random() * 100;
              const y = Math.random() * 100;
              const duration = 15 + Math.random() * 25;
              const delay = Math.random() * 5;
              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: size,
                    height: size,
                    left: `${x}%`,
                    top: `${y}%`,
                    background: isSaffron ? '#FF9933' : '#138808',
                    opacity: 0.2 + Math.random() * 0.4,
                  }}
                  animate={{
                    y: [0, -30 - Math.random() * 40, 0],
                    x: [0, (Math.random() - 0.5) * 60, 0],
                    opacity: [0.15, 0.6, 0.15],
                  }}
                  transition={{
                    duration,
                    delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              );
            })}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border border-[#1b1918]/[0.04] flex items-center justify-center"
            >
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-[1px] h-[8px] bg-[#1b1918]/[0.05] origin-bottom"
                  style={{
                    transform: `rotate(${i * 15}deg) translateY(-${90}px)`,
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full border border-[#1b1918]/[0.02]"
            />

            <div className="relative h-[130px] flex items-center justify-center z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWord}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.08 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="flex flex-col items-center gap-4 absolute"
                >
                  <span className="text-[3.5rem] md:text-[5rem] font-serif text-[#1b1918] tracking-tight">
                    {namasteWords[currentWord].text}
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.4em] font-medium text-[#1b1918]/30">
                    {namasteWords[currentWord].lang}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-20 flex items-center gap-1.5 z-10">
              {namasteWords.map((_, i) => (
                <div
                  key={i}
                  className="w-[3px] h-[3px] rounded-full transition-all duration-300"
                  style={{
                    background: i <= currentWord
                      ? (i % 2 === 0 ? '#FF9933' : '#138808')
                      : 'rgba(0,0,0,0.06)',
                    transform: i === currentWord ? 'scale(1.8)' : 'scale(1)',
                  }}
                />
              ))}
            </div>

            <div className="absolute bottom-14 w-[100px] h-[1px] bg-black/5 rounded-full overflow-hidden z-10">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3.2, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-[#FF9933] via-[#1b1918]/30 to-[#138808] rounded-full"
              />
            </div>

            <div className="absolute bottom-7 flex items-center z-10 opacity-30">
              <span className="font-serif text-[0.8rem] font-bold tracking-[-0.03em] text-[#1b1918]">joy</span>
              <div className="w-[2px] h-[2px] rounded-full bg-[#FF9933] mt-[5px] ml-[1px]" />
            </div>

            <div className="absolute top-0 left-0 right-0 h-[2px] flex">
              <div className="flex-1 bg-[#FF9933]" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-[#138808]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative h-screen w-full bg-[#fcfcfc] text-[#1a1a1a] font-sans selection:bg-[#FF9933]/20 overflow-hidden flex flex-col justify-between items-center">

        <div className="absolute inset-0 pointer-events-none z-0">
          <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full opacity-60">
            <defs>
              <linearGradient id="wave-saffron" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF9933" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="wave-green" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#138808" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#138808" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="glow-saffron" cx="20%" cy="30%" r="50%">
                <stop offset="0%" stopColor="#FF9933" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="glow-green" cx="80%" cy="70%" r="50%">
                <stop offset="0%" stopColor="#138808" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#138808" stopOpacity="0" />
              </radialGradient>
            </defs>

            <rect width="100%" height="100%" fill="url(#glow-saffron)" />
            <rect width="100%" height="100%" fill="url(#glow-green)" />

            <g transform="translate(0, 100)">
              <path d="M-200 200 C 100 400, 400 450, 800 650" fill="none" stroke="url(#wave-saffron)" strokeWidth="60" filter="blur(20px)" opacity="0.4" />
              <path d="M-200 220 C 150 420, 350 480, 800 680" fill="none" stroke="url(#wave-saffron)" strokeWidth="20" filter="blur(10px)" opacity="0.6" />
              <path d="M-200 240 C 200 440, 300 500, 750 670" fill="none" stroke="url(#wave-saffron)" strokeWidth="2" opacity="0.8" />
            </g>

            <g transform="translate(200, 20)">
              <path d="M 1600 800 C 1100 700, 900 650, 400 550" fill="none" stroke="url(#wave-green)" strokeWidth="80" filter="blur(30px)" opacity="0.4" />
              <path d="M 1600 750 C 1200 650, 850 600, 450 500" fill="none" stroke="url(#wave-green)" strokeWidth="30" filter="blur(15px)" opacity="0.5" />
              <path d="M 1600 720 C 1250 620, 800 550, 480 470" fill="none" stroke="url(#wave-green)" strokeWidth="3" opacity="0.7" />
            </g>

            <pattern id="mesh" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 40 M 0 0 L 40 40" fill="none" stroke="#000" strokeWidth="0.5" opacity="0.02" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#mesh)" />

            <circle cx="340" cy="550" r="2.5" fill="#FF9933" opacity="0.8" filter="blur(1px)" />
            <circle cx="480" cy="580" r="1.5" fill="#FF9933" opacity="0.6" />
            <circle cx="1200" cy="580" r="1.5" fill="#138808" opacity="0.5" />
            <circle cx="1300" cy="640" r="2.5" fill="#138808" opacity="0.7" filter="blur(1px)" />
          </svg>
        </div>

        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={!loading ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-4 left-0 right-0 z-[100] w-full flex justify-center px-6 pointer-events-none"
        >
          <header className="relative w-full max-w-[980px] px-1.5 py-1.5 flex justify-between items-center bg-white/70 backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_30px_rgba(0,0,0,0.04)] rounded-full border border-white/60 pointer-events-auto overflow-hidden">

            {[...Array(60)].map((_, i) => {
              const colors = ['#FF9933', '#FFB347', '#ffffff', '#138808', '#90EE90', '#FFD700'];
              const color = colors[i % colors.length];
              const size = 1 + Math.random() * 2;
              return (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: size,
                    height: size,
                    left: `${5 + Math.random() * 90}%`,
                    top: `${15 + Math.random() * 70}%`,
                    background: color,
                    boxShadow: `0 0 ${3 + Math.random() * 4}px ${color}`,
                  }}
                  animate={{
                    opacity: [0, 0.9, 0, 0.7, 0],
                    scale: [0.5, 1.2, 0.5, 1, 0.5],
                    x: [0, (Math.random() - 0.5) * 40, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    delay: Math.random() * 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              );
            })}

            <div className="relative z-10 flex items-center cursor-pointer pl-4 pr-5 py-1">
              <span className="font-serif text-[1rem] font-bold tracking-[-0.04em] text-[#111]">joy</span>
              <div className="w-[3px] h-[3px] rounded-full bg-[#FF9933] mt-[6px] ml-[1px]" />
            </div>

            <nav className="relative z-10 hidden lg:flex items-center justify-center gap-7 flex-1">
              {['Philosophy', 'Experiences', 'Resources', 'Collective'].map(item => (
                <a
                  key={item}
                  href="#"
                  className="relative text-[11px] tracking-[-0.01em] font-medium text-[#1b1918]/50 hover:text-[#1b1918] transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#FF9933] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            <div className="relative z-10 flex items-center gap-1.5">
              <button className="hidden md:flex items-center gap-1.5 bg-[#111] text-white pl-4 pr-3.5 py-[6px] rounded-full text-[11px] font-medium tracking-[-0.01em] shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:-translate-y-[0.5px] transition-all duration-300 group">
                Experience JoyShops
                <ArrowRight size={12} strokeWidth={2} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button className="hidden sm:flex md:hidden items-center bg-[#f7f7f7] hover:bg-[#f0f0f0] px-4 py-[6px] rounded-full text-[11px] font-medium tracking-[-0.01em] text-[#555] transition-all duration-300 border border-transparent hover:border-black/[0.04]">
                Talk to Us
              </button>
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-[#111] text-white hover:bg-[#222] transition-colors"
              >
                <Menu size={14} strokeWidth={2} />
              </button>
            </div>

          </header>
        </motion.div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[150] bg-[#faf9f7]/95 backdrop-blur-2xl flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] flex">
                <div className="flex-1 bg-[#FF9933]" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-[#138808]" />
              </div>

              <div className="absolute top-[-15%] left-[-15%] w-[350px] h-[350px] rounded-full bg-[#FF9933] opacity-[0.06] blur-[100px]" />
              <div className="absolute bottom-[-15%] right-[-15%] w-[350px] h-[350px] rounded-full bg-[#138808] opacity-[0.05] blur-[100px]" />

              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#111] text-white flex items-center justify-center hover:bg-[#222] transition-colors"
              >
                <X size={18} strokeWidth={2} />
              </button>

              <nav className="flex flex-col items-center gap-8 mb-10">
                {['Philosophy', 'Experiences', 'Resources', 'Collective'].map((item, i) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    onClick={() => setMenuOpen(false)}
                    className="text-[2rem] font-serif tracking-[-0.02em] text-[#1b1918]/70 hover:text-[#1b1918] transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>

              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-[1px] bg-[#FF9933] opacity-40" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF9933] opacity-50" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#138808] opacity-50" />
                <div className="w-8 h-[1px] bg-[#138808] opacity-40" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center gap-3"
              >
                <button className="flex items-center gap-2 bg-[#111] text-white px-8 py-3 rounded-full text-[13px] font-medium shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
                  Experience JoyShops
                  <ArrowRight size={14} strokeWidth={2} />
                </button>
                <button className="text-[12px] font-medium text-[#1b1918]/40 hover:text-[#1b1918]/70 transition-colors">
                  Talk to Us
                </button>
              </motion.div>

              <div className="absolute bottom-8 flex flex-col items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#FF9933] opacity-40" />
                  <span className="text-[7px] uppercase tracking-[0.5em] font-bold text-[#1b1918]/25">
                    India <span className="text-[#FF9933] px-0.5">•</span> Grows <span className="text-black/15 px-0.5">•</span> With <span className="text-[#138808] px-0.5">•</span> Joy
                  </span>
                  <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#138808] opacity-40" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="relative z-10 flex flex-col items-center justify-center flex-1 w-full px-4">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={!loading ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-1 opacity-40">
              <div className="w-8 h-[1px] bg-[#FF9933]" />
              <div className="w-1 h-1 rounded-sm bg-[#FF9933] rotate-45" />
            </div>

            <div className="flex items-center gap-1 opacity-40">
              <div className="w-1 h-1 rounded-sm bg-[#138808] rotate-45" />
              <div className="w-8 h-[1px] bg-[#138808]" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={!loading ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="font-serif text-[3.8rem] md:text-[5.5rem] lg:text-[7rem] leading-[1] text-[#1b1918] tracking-tight text-center mb-8"
          >
            Joy for all <span className="italic font-light opacity-80 pl-1 pr-2">from</span>
            <span className="relative inline-block">
              <span className="text-india-flag font-medium tracking-tight">India</span>
              <svg className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[130%] h-5 pointer-events-none" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M 0 15 Q 100 0 200 15" fill="none" stroke="#FF9933" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
                <path d="M 20 18 Q 110 5 180 18" fill="none" stroke="#138808" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={!loading ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="text-center mb-10"
          >
            <p className="text-[0.95rem] md:text-[1.15rem] text-[#1b1918]/60 font-light tracking-[0.02em] leading-relaxed">
              Built on profound <span className="font-semibold text-[#1b1918]/90">stillness.</span> Powered by <span className="font-semibold text-[#1b1918]/90">abundant energy.</span>
            </p>
            <p className="text-[0.95rem] md:text-[1.15rem] text-[#1b1918]/60 font-light tracking-[0.02em]">
              Delivering population-scale joy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={!loading ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="relative"
          >
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[50%] h-5 bg-[#FF9933] opacity-35 blur-[12px] rounded-full" />
            <button className="relative flex items-center justify-center gap-2 px-7 py-3 bg-[#111111] text-white rounded-full shadow-[0_12px_24px_rgba(0,0,0,0.18)] hover:scale-[1.03] transition-transform group">
              <span className="text-[0.72rem] font-semibold tracking-[0.06em]">Experience JoyShops</span>
              <ArrowRight size={13} strokeWidth={2.5} className="opacity-70 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        </main>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={!loading ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="relative z-10 flex flex-col items-center gap-3 pb-6"
        >
          <motion.div
            animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 rounded-full border-[0.5px] border-[#0F2C59]/20 flex items-center justify-center"
          >
            <svg width="12" height="12" viewBox="0 0 40 40" className="text-[#0F2C59] opacity-50">
              <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="20" cy="20" r="2" fill="currentColor" />
              {[...Array(24)].map((_, i) => (
                <line key={i} x1="20" y1="20" x2={20 + 18 * Math.cos(i * Math.PI / 12)} y2={20 + 18 * Math.sin(i * Math.PI / 12)} stroke="currentColor" strokeWidth="0.5" />
              ))}
            </svg>
          </motion.div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#FF9933] opacity-40" />
            <span className="text-[7px] uppercase tracking-[0.5em] font-bold text-[#1b1918]/30">
              India <span className="text-[#FF9933] px-0.5">•</span> Grows <span className="text-black/15 px-0.5">•</span> With <span className="text-[#138808] px-0.5">•</span> Joy
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#138808] opacity-40" />
          </div>
        </motion.footer>

      </div>
    </>
  );
};

export default App;
