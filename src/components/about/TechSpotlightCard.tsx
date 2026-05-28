"use client";

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Flex, Text } from "@once-ui-system/core";
import styles from "./about.module.scss";

// Tech Icons Imports
import {
  SiJavascript,
  SiPython,
  SiC,
  SiRust,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiNextdotjs,
  SiFlask,
  SiFastify,
  SiLangchain,
  SiPandas,
  SiPytorch,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiMariadb,
  SiDocker,
  SiGit,
  SiOpensearch,
  SiRedis,
  SiWireshark,
  SiGnubash,
} from "react-icons/si";

import {
  FaDatabase,
  FaTerminal,
  FaNetworkWired,
  FaServer,
  FaShieldHalved,
  FaLock,
  FaCloud,
  FaDiagramProject,
} from "react-icons/fa6";

// Technology color mappings for glowing borders/tags
const tagColorMap: Record<string, { border: string; glow: string; text: string }> = {
  "JavaScript (ES6+)": { border: "#f7df1e", glow: "rgba(247, 223, 30, 0.15)", text: "#f7df1e" },
  "Python": { border: "#3776ab", glow: "rgba(55, 118, 171, 0.15)", text: "#3776ab" },
  "C": { border: "#63b3ed", glow: "rgba(99, 179, 237, 0.15)", text: "#cbd5e0" },
  "Rust": { border: "#ce412b", glow: "rgba(206, 65, 43, 0.15)", text: "#ce412b" },
  "ReactJS": { border: "#61dafb", glow: "rgba(97, 218, 251, 0.15)", text: "#61dafb" },
  "Redux": { border: "#764abc", glow: "rgba(118, 74, 188, 0.15)", text: "#b794f4" },
  "Node.js": { border: "#339933", glow: "rgba(51, 153, 51, 0.15)", text: "#48bb78" },
  "ExpressJS": { border: "#828282", glow: "rgba(130, 130, 130, 0.15)", text: "#cbd5e0" },
  "FastAPI": { border: "#009688", glow: "rgba(0, 150, 136, 0.15)", text: "#4fd1c5" },
  "Next.js": { border: "#ffffff", glow: "rgba(255, 255, 255, 0.1)", text: "#ffffff" },
  "Flask": { border: "#cbd5e0", glow: "rgba(203, 213, 224, 0.1)", text: "#cbd5e0" },
  "Fastify": { border: "#ffffff", glow: "rgba(255, 255, 255, 0.1)", text: "#ffffff" },
  "LangChain": { border: "#13b55d", glow: "rgba(19, 181, 93, 0.15)", text: "#13b55d" },
  "Pandas": { border: "#b794f4", glow: "rgba(183, 148, 244, 0.15)", text: "#b794f4" },
  "PyTorch": { border: "#ee4c2c", glow: "rgba(238, 76, 44, 0.15)", text: "#ee4c2c" },
  "PostgreSQL": { border: "#4169e1", glow: "rgba(65, 105, 225, 0.15)", text: "#63b3ed" },
  "MySQL": { border: "#00758f", glow: "rgba(0, 117, 143, 0.15)", text: "#4fd1c5" },
  "SQLite3": { border: "#003b57", glow: "rgba(0, 59, 87, 0.15)", text: "#63b3ed" },
  "MongoDB": { border: "#47a248", glow: "rgba(71, 162, 72, 0.15)", text: "#48bb78" },
  "MariaDB": { border: "#003545", glow: "rgba(0, 53, 69, 0.15)", text: "#4fd1c5" },
  "Vector DB": { border: "#00a67e", glow: "rgba(0, 166, 126, 0.15)", text: "#48bb78" },
  "Elastic DB": { border: "#00bfb3", glow: "rgba(0, 191, 179, 0.15)", text: "#4fd1c5" },
  "Docker": { border: "#2496ed", glow: "rgba(36, 150, 237, 0.15)", text: "#63b3ed" },
  "Git": { border: "#f05032", glow: "rgba(240, 80, 50, 0.15)", text: "#f05032" },
  "OpenSearch": { border: "#005eb8", glow: "rgba(0, 94, 184, 0.15)", text: "#4fd1c5" },
  "Redis": { border: "#dc382d", glow: "rgba(220, 56, 45, 0.15)", text: "#dc382d" },
  "Burp Suite": { border: "#ff6600", glow: "rgba(255, 102, 0, 0.15)", text: "#ff6600" },
  "Wireshark": { border: "#167ec0", glow: "rgba(22, 126, 192, 0.15)", text: "#63b3ed" },
  "Nmap": { border: "#2e8b57", glow: "rgba(46, 139, 87, 0.15)", text: "#48bb78" },
  "Shell": { border: "#4eaa25", glow: "rgba(78, 170, 37, 0.15)", text: "#cbd5e0" },
  "Computer Networking": { border: "#d4af37", glow: "rgba(212, 175, 55, 0.15)", text: "#d4af37" },
  "System Design": { border: "#d4af37", glow: "rgba(212, 175, 55, 0.15)", text: "#d4af37" },
  "VAPT": { border: "#d4af37", glow: "rgba(212, 175, 55, 0.15)", text: "#d4af37" },
  "RESTful APIs": { border: "#d4af37", glow: "rgba(212, 175, 55, 0.15)", text: "#d4af37" },
  "Distributed Systems": { border: "#d4af37", glow: "rgba(212, 175, 55, 0.15)", text: "#d4af37" },
  "Web Application Security": { border: "#d4af37", glow: "rgba(212, 175, 55, 0.15)", text: "#d4af37" },
  "Cloud Security": { border: "#d4af37", glow: "rgba(212, 175, 55, 0.15)", text: "#d4af37" },
};

// Tech Icon mapping
const iconMap: Record<string, any> = {
  "JavaScript (ES6+)": SiJavascript,
  "Python": SiPython,
  "C": SiC,
  "Rust": SiRust,
  "ReactJS": SiReact,
  "Redux": SiRedux,
  "Node.js": SiNodedotjs,
  "ExpressJS": SiExpress,
  "FastAPI": SiFastapi,
  "Next.js": SiNextdotjs,
  "Flask": SiFlask,
  "Fastify": SiFastify,
  "LangChain": SiLangchain,
  "Pandas": SiPandas,
  "PyTorch": SiPytorch,
  "PostgreSQL": SiPostgresql,
  "MySQL": SiMysql,
  "SQLite3": SiSqlite,
  "MongoDB": SiMongodb,
  "MariaDB": SiMariadb,
  "Vector DB": FaDatabase,
  "Elastic DB": FaServer,
  "Docker": SiDocker,
  "Git": SiGit,
  "OpenSearch": SiOpensearch,
  "Redis": SiRedis,
  "Burp Suite": FaShieldHalved,
  "Wireshark": SiWireshark,
  "Nmap": FaNetworkWired,
  "Shell": SiGnubash,
  "Computer Networking": FaNetworkWired,
  "System Design": FaDiagramProject,
  "VAPT": FaShieldHalved,
  "RESTful APIs": FaServer,
  "Distributed Systems": FaNetworkWired,
  "Web Application Security": FaLock,
  "Cloud Security": FaCloud,
};

// Category header underlines color map
const categoryColors: Record<string, string> = {
  "Languages": "#3b82f6",
  "Frameworks": "#06b6d4",
  "Databases": "#10b981",
  "Tools": "#8b5cf6",
  "Concepts": "#f59e0b",
};

interface TechSpotlightCardProps {
  title: string;
  tags: string[];
}

export const TechSpotlightCard: React.FC<TechSpotlightCardProps> = ({ title, tags }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const lightSize = 250; // Increased size to cover card width nicely

  const lightX = useTransform(x, (value) => value - lightSize / 2);
  const lightY = useTransform(y, (value) => value - lightSize / 2);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  const headerColor = categoryColors[title] || "#ffffff";

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        background: "rgba(10, 10, 10, 0.25)",
        overflow: "hidden",
        width: "100%",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
      }}
      className={styles.spotlightCard}
    >
      {/* Background colored ambient mesh glow based on category color */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 120%, ${headerColor}0d, transparent 75%)`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Spotlight cursor follow effect */}
      {isHovered && (
        <motion.div
          style={{
            position: "absolute",
            borderRadius: "50%",
            pointerEvents: "none",
            width: lightSize,
            height: lightSize,
            background: `radial-gradient(circle, ${headerColor}22 0%, rgba(255, 255, 255, 0) 70%)`,
            filter: "blur(20px)",
            x: lightX,
            y: lightY,
            zIndex: 1,
          }}
        />
      )}

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "24px",
        }}
      >
        <Flex direction="column" gap="4" fillWidth>
          <Text id={title} variant="heading-strong-l" onBackground="neutral-strong">
            {title}
          </Text>
          <div
            style={{
              height: "2px",
              width: "48px",
              backgroundColor: headerColor,
              borderRadius: "1px",
              marginTop: "4px",
            }}
          />
        </Flex>

        {/* Category Tags */}
        <Flex wrap gap="12" fillWidth>
          {tags &&
            tags.map((tag: string) => {
              const stylesObj = tagColorMap[tag] || {
                border: "#ffffff",
                glow: "rgba(255,255,255,0.1)",
                text: "#ffffff",
              };
              const IconComponent = iconMap[tag];
              return (
                <Flex
                  key={tag}
                  vertical="center"
                  gap="8"
                  paddingY="4"
                  paddingX="12"
                  radius="full"
                  style={{
                    border: `1px solid ${stylesObj.border}80`,
                    boxShadow: `0 0 10px ${stylesObj.glow}`,
                    background: "rgba(10, 10, 10, 0.4)",
                    cursor: "default",
                  }}
                  className={styles.skillPill}
                >
                  {IconComponent && (
                    <IconComponent style={{ color: stylesObj.border, fontSize: "14px" }} />
                  )}
                  <Text variant="body-default-s" style={{ color: "#ffffff", fontWeight: 500 }}>
                    {tag}
                  </Text>
                </Flex>
              );
            })}
        </Flex>
      </div>
    </div>
  );
};
