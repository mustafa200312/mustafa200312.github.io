import React, { useEffect, useState, useRef } from 'react';

interface DecryptedTextProps {
  text: string;
  className?: string;
  speed?: number;
  maxIterations?: number;
  revealOnScroll?: boolean;
}

const ELEGANT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  className = '',
  speed = 35,
  maxIterations = 8,
  revealOnScroll = true,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const hasTriggeredRef = useRef(false);

  const triggerAnimation = () => {
    let iteration = 0;
    const length = text.length;

    const interval = setInterval(() => {
      setDisplayText(() => {
        return text
          .split('')
          .map((char, idx) => {
            if (char === ' ' || char === '\n' || char === '.' || char === ',') return char;
            if (idx < Math.floor((iteration / maxIterations) * length)) {
              return text[idx];
            }
            return ELEGANT_CHARS[Math.floor(Math.random() * ELEGANT_CHARS.length)];
          })
          .join('');
      });

      iteration++;

      if (iteration > maxIterations + 3) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, speed);
  };

  useEffect(() => {
    if (!revealOnScroll || !containerRef.current) {
      triggerAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredRef.current) {
            hasTriggeredRef.current = true;
            triggerAnimation();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [text, revealOnScroll]);

  return (
    <span
      ref={containerRef}
      className={`inline-block font-sans ${className}`}
      onMouseEnter={triggerAnimation}
    >
      {displayText}
    </span>
  );
};
