import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function CTAButton({ href, label, className = '', style }: CTAButtonProps) {
  return (
    <Link 
      href={href}
      className={`btn btn-primary ${className}`}
      style={style}
    >
      {label}
    </Link>
  );
}
