import styles from './Marquee.module.css';

interface MarqueeProps {
  text: string;
  speed?: string;
  direction?: 'left-to-right' | 'right-to-left';
  className?: string;
}

export default function Marquee({ text, speed, direction, className }: MarqueeProps) {
  // Mapping custom names to CSS animation-direction values
  // 'normal' goes Right -> Left (following the translateX -50% keyframe)
  // 'reverse' goes Left -> Right
  const cssDirection = direction === 'left-to-right' ? 'reverse' : 'normal';
  return (
    <div className={`${styles.marqueeContainer} ${className}`}>
      <div className={styles.marqueeTrack}
        style={{
          animationDuration: speed,
          animationDirection: cssDirection
        }}>
        {/* We repeat the text to ensure the loop is seamless */}
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}