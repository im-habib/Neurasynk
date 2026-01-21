import { useState } from "react";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  color?: string;
  bgColor?: string;
  hoverColor?: string;
  hoverBgColor?: string;
  href?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  color = "rgb(28, 28, 28)",
  bgColor = "rgb(236, 237, 241)",
  hoverColor,
  hoverBgColor,
  href,
  onClick,
}) => {
  const baseStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    borderRadius: "25px",
    boxShadow:
      "rgb(250, 251, 255) -5px -5px 10px 0px, rgba(166, 171, 189, 0.25) 5px 5px 10px 0px",
    color: color,
    fontFamily: '"Poppins", sans-serif',
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
    padding: "8px 16px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  };

  const hoverStyle: React.CSSProperties = {
    backgroundColor: hoverBgColor || bgColor,
    color: hoverColor || color,
  };

  const [isHovered, setIsHovered] = useState(false);

  const currentStyle = isHovered ? { ...baseStyle, ...hoverStyle } : baseStyle;

  const content = (
    <>
      {icon && (
        <div
          style={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </div>
      )}
      <span>{text}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        style={currentStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target="_blank"
        rel="noopener"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      style={currentStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </button>
  );
};

export default Button;
