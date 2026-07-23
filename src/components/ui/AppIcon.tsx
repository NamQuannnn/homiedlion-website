type IconName =
  | "trust"
  | "connection"
  | "market"
  | "responsibility"
  | "company"
  | "location"
  | "email"
  | "website"
  | "report"
  | "price"
  | "logistics"
  | "rawCashew"
  | "kernel"
  | "freight";

type AppIconProps = {
  name: IconName;
  className?: string;
};

export default function AppIcon({
  name,
  className = "h-7 w-7",
}: AppIconProps) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "trust":
      return (
        <svg {...commonProps}>
          <path d="M8.5 12.5 11 15l4.5-5" />
          <path d="M12 3 5.5 6v5c0 4.2 2.7 7.7 6.5 9 3.8-1.3 6.5-4.8 6.5-9V6L12 3Z" />
        </svg>
      );

    case "connection":
      return (
        <svg {...commonProps}>
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
          <path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" />
        </svg>
      );

    case "market":
      return (
        <svg {...commonProps}>
          <path d="M4 19V9" />
          <path d="M10 19V5" />
          <path d="M16 19v-7" />
          <path d="M22 19V3" />
        </svg>
      );

    case "responsibility":
      return (
        <svg {...commonProps}>
          <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z" />
        </svg>
      );

    case "company":
      return (
        <svg {...commonProps}>
          <path d="M4 21V5h10v16" />
          <path d="M14 9h6v12" />
          <path d="M8 9h2M8 13h2M8 17h2M17 13h1M17 17h1" />
        </svg>
      );

    case "location":
      return (
        <svg {...commonProps}>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );

    case "email":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );

    case "website":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      );

    case "report":
      return (
        <svg {...commonProps}>
          <path d="M6 3h8l4 4v14H6Z" />
          <path d="M14 3v5h5M9 13h6M9 17h6" />
        </svg>
      );

    case "price":
      return (
        <svg {...commonProps}>
          <path d="M4 17 9 12l4 3 7-8" />
          <path d="M15 7h5v5" />
        </svg>
      );

    case "logistics":
      return (
        <svg {...commonProps}>
          <path d="M3 7h11v10H3Z" />
          <path d="M14 10h4l3 3v4h-7Z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
        </svg>
      );
            case "rawCashew":
        return (
            <svg {...commonProps}>
            {/* Hình quả điều thô phía sau */}
            <path d="M6.5 4.5C8 2.8 11 2 13.5 2.8c2.3.8 3.5 2.8 3.4 5.1-.1 2.2-1.4 4.6-3.2 6.4-1.8 1.9-4 3.1-5.8 2.6-2-.6-3.2-2.7-3.1-5.1.1-2.5.7-5.2 1.7-7.3Z" />

            {/* Cuống */}
            <path d="M12.8 3.2c1.8-.9 3.7-1.1 5.2-.4" />

            {/* Hạt điều cong phía trước */}
            <path d="M10.7 12.2c1.1-2.3 3.7-3.9 6.3-3.8 2.9.1 5.1 2.3 5 5.2-.1 3.5-2.9 6.7-6.4 7.2-2.8.4-5.1-.7-6.2-2.7-.9-1.6-.5-3.8 1.3-5.9Z" />

            {/* Chi tiết trên hạt */}
            <path d="M13 13.4c1.2 1 2.5 1.5 4 1.6M12.5 16.4c1.6.8 3.2 1 4.8.6" />
            </svg>
        );

        case "kernel":
        return (
            <svg {...commonProps}>
            {/* Dáng điều nhân cong kiểu chữ C */}
            <path d="M8.2 5.2c2.1-1.9 5.4-2.4 8.1-.9 2.4 1.4 3.8 4 3.3 6.7-.5 2.5-2.4 4.3-4.8 4.9-2.1.5-4.2-.1-5.7-1.6-1.3-1.3-1.9-3.2-1.5-5 .1-.5.3-.9.6-1.4" />

            {/* Khe cong đặc trưng của điều nhân */}
            <path d="M10.2 7.8c1.4 1 2.8 1.4 4.4 1.3 1.2-.1 2.4-.5 3.4-1.2" />

            <path d="M10 12.1c1.2.9 2.6 1.4 4.2 1.4 1.4 0 2.6-.4 3.7-1.1" />

            {/* Đường viền lõm phía trong */}
            <path d="M8.4 8.4c-1.6 1.4-2.5 3.3-2.2 5.2.3 2.1 1.8 3.7 3.8 4.3" />
            </svg>
        );

    case "freight":
    return (
        <svg {...commonProps}>
        <path d="M3 16h18" />
        <path d="M5 16V9h10v7" />
        <path d="M15 12h3l3 4" />
        <path d="M7 9V6h6v3" />
        <circle cx="8" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        </svg>
    );
  }
}