import { motion } from 'framer-motion';

export const Mandala = ({ className = "w-64 h-64", color = "currentColor", opacity = 0.12 }) => {
  return (
    <div className={className}>
      <motion.svg
        viewBox="0 0 100 100"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="w-full h-full"
        style={{ color, opacity }}
      >
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" />
        
        {/* Mandala Petals */}
        {[...Array(12)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 50 50)`}>
            <path
              d="M50 10 Q55 25 50 40 Q45 25 50 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle cx="50" cy="5" r="1" fill="currentColor" />
          </g>
        ))}

        {[...Array(24)].map((_, i) => (
          <line
            key={i}
            x1="50" y1="45"
            x2="50" y2="48"
            transform={`rotate(${i * 15} 50 50)`}
            stroke="currentColor"
            strokeWidth="0.2"
          />
        ))}

        <circle cx="50" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </motion.svg>
    </div>
  );
};
