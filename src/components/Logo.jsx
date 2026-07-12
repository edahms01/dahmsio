export default function Logo({ size = 34 }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} style={{ flexShrink: 0 }}>
      <line x1="17" y1="17" x2="27" y2="27" stroke="var(--accent3)" strokeWidth="1.8" opacity="0.4" />
      <line x1="47" y1="17" x2="37" y2="27" stroke="var(--accent3)" strokeWidth="1.8" opacity="0.4" />
      <line x1="17" y1="47" x2="27" y2="37" stroke="var(--accent3)" strokeWidth="1.8" opacity="0.4" />
      <line x1="47" y1="47" x2="37" y2="37" stroke="var(--accent3)" strokeWidth="1.8" opacity="0.4" />
      <rect x="11" y="11" width="8" height="8" rx="2" fill="none" stroke="var(--accent3)" strokeWidth="2" opacity="0.65" />
      <rect x="45" y="11" width="8" height="8" rx="2" fill="none" stroke="var(--accent3)" strokeWidth="2" opacity="0.65" />
      <rect x="11" y="45" width="8" height="8" rx="2" fill="none" stroke="var(--accent3)" strokeWidth="2" opacity="0.65" />
      <rect x="45" y="45" width="8" height="8" rx="2" fill="none" stroke="var(--accent3)" strokeWidth="2" opacity="0.65" />
      <rect x="24" y="24" width="16" height="16" rx="3.5" fill="var(--accent)" />
    </svg>
  );
}
