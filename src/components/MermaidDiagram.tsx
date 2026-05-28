"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

let initialized = false;

function initMermaid() {
  if (initialized) return;
  mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
    themeVariables: {
      background: "transparent",
      primaryColor: "#7c3aed",
      primaryTextColor: "#e2e8f0",
      primaryBorderColor: "#6d28d9",
      lineColor: "#a78bfa",
      secondaryColor: "#1e1b4b",
      tertiaryColor: "#0f172a",
      fontSize: "14px",
      fontFamily: "Inter, system-ui, sans-serif",
    },
    flowchart: {
      htmlLabels: true,
      curve: "basis",
    },
    securityLevel: "loose",
  });
  initialized = true;
}

let mermaidCounter = 0;

export default function MermaidDiagram({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const idRef = useRef(`mermaid-${Date.now()}-${mermaidCounter++}`);

  useEffect(() => {
    initMermaid();
    
    const renderDiagram = async () => {
      try {
        const { svg: rendered } = await mermaid.render(
          idRef.current,
          chart.trim()
        );
        setSvg(rendered);
        setError("");
      } catch (err) {
        console.error("Mermaid render error:", err);
        setError("Failed to render diagram");
      } finally {
        setLoading(false);
      }
    };

    renderDiagram();
  }, [chart]);

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "48px 24px",
          marginTop: "16px",
          marginBottom: "24px",
          borderRadius: "16px",
          background: "rgba(10, 10, 10, 0.4)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          color: "rgba(255, 255, 255, 0.3)",
          fontSize: "14px",
        }}
      >
        Loading diagram…
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          padding: "16px 24px",
          margin: "16px 0 24px",
          borderRadius: "12px",
          background: "rgba(239, 68, 68, 0.08)",
          border: "1px solid rgba(239, 68, 68, 0.2)",
          color: "#fca5a5",
          fontSize: "14px",
          fontFamily: "monospace",
        }}
      >
        ⚠ Diagram render error
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "16px",
        marginBottom: "24px",
        padding: "24px",
        borderRadius: "16px",
        background: "rgba(10, 10, 10, 0.4)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(8px)",
        overflow: "auto",
      }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
