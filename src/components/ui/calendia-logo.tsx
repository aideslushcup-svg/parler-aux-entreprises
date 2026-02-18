import { cn } from "@/lib/utils";

interface CalendiaLogoProps {
  className?: string;
  size?: number;
}

export function CalendiaLogo({ className, size = 28 }: CalendiaLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
    >
      {/* Hexagon body */}
      <path
        d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z"
        fill="#1a1a2e"
        stroke="#1a1a2e"
        strokeWidth="2"
      />
      {/* Blue C letter */}
      <path
        d="M58 35C52 30 42 30 36 36C30 42 30 54 36 60C42 66 52 66 58 61"
        stroke="#1E90FF"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
