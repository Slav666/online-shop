import React, { useState } from "react";

// Define the prop types using an interface
interface ButtonProps {
  label: string;
  backgroundColor?: string;
  textColor?: string;
  hoverColor?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor = "#FF7F00",
  textColor = "white",
  hoverColor = "#FF4500",
  onClick = () => {},
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`mt-4 px-6 py-2 rounded ${className}`}
      style={{
        backgroundColor: isHovered ? hoverColor : backgroundColor, // Toggle between hover and normal colors
        color: textColor,
        transition: "background-color 0.3s ease", // Smooth transition for background color
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </button>
  );
};

export default Button;
