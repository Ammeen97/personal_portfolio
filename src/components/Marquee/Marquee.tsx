import styles from './Marquee.module.css';

interface MarqueeProps {
  text: string;
  speed?: string;
  className?: string;
}

export default function Marquee({ text, speed, className }: MarqueeProps) {
  return (
    <div className={`${styles.marqueeContainer} ${className}`}>
      <div className={styles.marqueeTrack} style={{ animationDuration: speed }}>
        {/* We repeat the text to ensure the loop is seamless */}
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}