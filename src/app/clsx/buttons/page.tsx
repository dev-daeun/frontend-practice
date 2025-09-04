import clsx from "clsx";

type BadgeProps = {
    children: React.ReactNode;
    variant?: "primary" | "success" | "warning" | "danger" | "info";
    size?: "xs" | "sm" | "md";
    outlined?: boolean;
    rounded?: boolean;
    withDot?: boolean;
    className?: string;
  };

const baseStyles: string = "inline-flex items-center font-medium"
const sizeStyles: {
    [key: string]: string
} = {
    "xs": "text-xs px-1.5 py-0.5",
    "sm": "text-sm px-2.5 py-0.5",
    "md": "text-base px-3 py-1",
}

const bgColorStyles: {
  [key: string]: string
} = {
  primary: "bg-blue-300",
  success: "bg-green-100",
  warning: "bg-yellow-100",
  danger: "bg-red-100",
  info: "bg-blue-100"
}

const textColorStyles: {
  [key: string]: string
} = {
  primary: "text-blue-300",
  success: "text-green-100",
  warning: "text-yellow-400",
  danger: "text-red-100",
  info: "text-blue-100"
}


function Badge({
    children,
    variant = "info",
    size = "sm",
    outlined = false,
    rounded = false,
  }: BadgeProps) {
    return <>
        <button className={clsx(
            baseStyles,
            sizeStyles[size],
            rounded ? "rounded-full" : "rounded",
            outlined ? "bg-transparent border-2" : bgColorStyles[variant],
            outlined ? textColorStyles[variant] : "text-black"
            )}>{children}</button>
    </>
}


export default function Home() {
    return (
      <div className="space-x-2">
        <Badge>Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning" outlined>
          Warning
        </Badge>
        <Badge variant="danger" size="xs" rounded>
          Error
        </Badge>
        <Badge variant="info" size="md" withDot>
          Information
        </Badge>
        <Badge variant="primary" size="md" withDot>
          Primary
        </Badge>
      </div>
    );
  }