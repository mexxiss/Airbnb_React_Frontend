import React from "react";
import { Spinner } from "flowbite-react";

interface LoaderProps {
  size?: "sm" | "md" | "lg" | "xl"; // Spinner size options from Flowbite
  overlay?: boolean; // Toggle overlay effect
}

const Loader: React.FC<LoaderProps> = ({
  size = "xl", // Default spinner size
  overlay = true, // Default to overlay
}) => {
  return (
    <div
      className={`${
        overlay ? "h-screen fixed top-0 w-full right-0 z-[999]" : ""
      } flex justify-center items-center bg-black/50`}
    >
      <Spinner
        aria-label={`${size} spinner`}
        className="fill-primary w-12 h-12"
      />
    </div>
  );
};

export default Loader;
