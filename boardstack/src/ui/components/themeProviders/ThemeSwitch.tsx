"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDarkMode = resolvedTheme === "dark";
  const properties = {
    sun: {
      r: 9,
      transform: "rotate(40deg)",
      cx: 12,
      cy: 4,
    },
    moon: {
      r: 5,
      transform: "rotate(90deg)",
      cx: 30,
      cy: 0,
    },
  };

  const { r, transform, cx, cy } = isDarkMode
    ? properties.moon
    : properties.sun;

  if (!mounted) {
    return (
      <div style={{ width: 36, height: 36 }}>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      style={{ cursor: "pointer" }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ display: "block" }}
        initial={{ transform }}
        animate={{ transform }}
        transition={{ type: "spring", mass: 4, tension: 250, friction: 35 }}
      >
        <mask id="mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <motion.circle
            cx={cx}
            cy={cy}
            r="9"
            fill="black"
            initial={{ cx, cy }}
            animate={{ cx, cy }}
            transition={{ type: "spring", mass: 4, tension: 250, friction: 35 }}
          />
        </mask>
        <motion.circle
          fill="black"
          cx="12"
          cy="12"
          r={r}
          mask="url(#mask)"
          initial={{ r }}
          animate={{ r }}
          transition={{ type: "spring", mass: 4, tension: 250, friction: 35 }}
        />
        {isDarkMode && (
          <motion.g
            style={{ fill: "currentColor" }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", mass: 4, tension: 250, friction: 35 }}
          >
            {/* Rayos del sol */}
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </motion.g>
        )}
      </motion.svg>
    </div>
  );
}
