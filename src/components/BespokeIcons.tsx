import { motion } from 'framer-motion';

export const MonkeyIcon = ({ className = "w-32 h-32" }) => {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      initial={{ rotate: -5 }}
      animate={{ rotate: 5 }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
    >
      {/* Abstract Monkey Silhouette / Symbol */}
      <path
        d="M50 20 C40 20 35 25 35 35 C35 45 40 50 50 50 C60 50 65 45 65 35 C65 25 60 20 50 20 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M35 35 C20 35 20 50 35 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M65 35 C80 35 80 50 65 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      {/* Tail Detail */}
      <path
        d="M50 50 Q70 60 60 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <circle cx="50" cy="35" r="2" fill="currentColor" opacity="0.5" />
    </motion.svg>
  );
};

export const JoyChefStamp = ({ className = "w-24 h-24" }) => {
    return (
        <div className={`${className} relative flex items-center justify-center`}>
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-saffron/30 rounded-full"
            />
            <div className="text-[0.5rem] uppercase tracking-[0.3em] font-bold text-saffron text-center leading-tight">
                JoyChef<br/>Certified
            </div>
        </div>
    )
}
