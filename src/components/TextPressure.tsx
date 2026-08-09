"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";

const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const getAttr = (distance: number, maxDist: number, minVal: number, maxVal: number) => {
  const ratio = Math.min(1, distance / maxDist);
  return maxVal - (maxVal - minVal) * ratio;
};

// Simple debounce helper
const debounce = <T extends (...args: any[]) => void>(func: T, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

interface TextPressureProps {
  text?: string;
  fontFamily?: string;
  fontUrl?: string;
  width?: boolean;
  weight?: boolean;
  italic?: boolean;
  alpha?: boolean;
  flex?: boolean;
  stroke?: boolean;
  scale?: boolean;
  textColor?: string;
  strokeColor?: string;
  className?: string;
  minFontSize?: number;
}

export default function TextPressure({
  text = "Compressa",
  fontFamily = "Roboto Flex",
  fontUrl = "https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&display=swap",
  width = true,
  weight = true,
  italic = true,
  alpha = false,
  flex = true,
  stroke = false,
  scale = false,
  textColor = "#FFFFFF",
  strokeColor = "#FF0000",
  className = "",
  minFontSize = 24,
}: TextPressureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const spanCentersRef = useRef<{ x: number; y: number }[]>([]);
  const maxDistRef = useRef<number>(0);

  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);

  const chars = useMemo(() => text.split(""), [text]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    if (containerRef.current) {
      const { left, top, width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + containerW / 2;
      mouseRef.current.y = top + containerH / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const setSize = useCallback(() => {
    if (!containerRef.current || !titleRef.current) return;

    const { width: containerW } = containerRef.current.getBoundingClientRect();

    let newFontSize = containerW / (chars.length / 2);
    newFontSize = Math.max(newFontSize, minFontSize);

    setFontSize(newFontSize);
    setScaleY(1);
    setLineHeight(1);
  }, [chars.length, minFontSize]);

  useEffect(() => {
    const handleResize = () => {
      spanCentersRef.current = [];
      maxDistRef.current = 0;
      setSize();
    };
    const debouncedSetSize = debounce(handleResize, 100);
    debouncedSetSize();
    window.addEventListener("resize", debouncedSetSize);

    // Recalculate size when custom fonts are loaded and ready
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(() => {
        spanCentersRef.current = [];
        maxDistRef.current = 0;
        setSize();
      });
    }

    return () => {
      window.removeEventListener("resize", debouncedSetSize);
    };
  }, [setSize]);

  // Recalculate vertical scale after the font-size changes have been flushed to the DOM
  useEffect(() => {
    if (!scale || !containerRef.current || !titleRef.current) return;

    const rafId = requestAnimationFrame(() => {
      if (!containerRef.current || !titleRef.current) return;
      const { height: containerH } = containerRef.current.getBoundingClientRect();
      const textRect = titleRef.current.getBoundingClientRect();

      if (textRect.height > 0) {
        const yRatio = containerH / textRect.height;
        setScaleY(yRatio);
        setLineHeight(yRatio);
      }
    });

    return () => cancelAnimationFrame(rafId);
  }, [fontSize, scale]);

  useEffect(() => {
    let rafId: number;
    const animate = () => {
      // Pause updates if page is scrolled past the viewport
      if (window.scrollY > window.innerHeight) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (titleRef.current) {
        // Compute layout values once and cache them (since the container is fixed and positions do not change on scroll)
        if (spanCentersRef.current.length === 0 || maxDistRef.current === 0) {
          const titleRect = titleRef.current.getBoundingClientRect();
          maxDistRef.current = titleRect.width / 2;

          spanCentersRef.current = spansRef.current.map((span) => {
            if (!span) return { x: 0, y: 0 };
            const rect = span.getBoundingClientRect();
            return {
              x: rect.x + rect.width / 2,
              y: rect.y + rect.height / 2,
            };
          });
        }

        const maxDist = maxDistRef.current;

        spansRef.current.forEach((span, idx) => {
          if (!span) return;

          const charCenter = spanCentersRef.current[idx] || { x: 0, y: 0 };
          const d = dist(mouseRef.current, charCenter);

          const wdth = width ? Math.floor(getAttr(d, maxDist, 60, 135)) : 100;
          const wght = weight ? Math.floor(getAttr(d, maxDist, 200, 800)) : 400;
          const italVal = italic ? parseFloat(getAttr(d, maxDist, 0, 1).toFixed(2)) : 0;
          const alphaVal = alpha ? parseFloat(getAttr(d, maxDist, 0, 1).toFixed(2)) : 1;

          const newFontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;

          if (span.style.fontVariationSettings !== newFontVariationSettings) {
            span.style.fontVariationSettings = newFontVariationSettings;
          }
          const opacityStr = String(alphaVal);
          if (alpha && span.style.opacity !== opacityStr) {
            span.style.opacity = opacityStr;
          }
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [width, weight, italic, alpha]);

  const styleElement = useMemo(() => {
    return (
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('${fontUrl}');

          .text-pressure-title.flex-layout {
            display: flex;
            justify-content: space-between;
          }

          .text-pressure-title.stroke-layout span {
            position: relative;
            color: ${textColor};
          }
          .text-pressure-title.stroke-layout span::after {
            content: attr(data-char);
            position: absolute;
            left: 0;
            top: 0;
            color: transparent;
            z-index: -1;
            -webkit-text-stroke-width: 3px;
            -webkit-text-stroke-color: ${strokeColor};
          }

          .text-pressure-title {
            color: ${textColor};
          }
        `
      }} />
    );
  }, [fontUrl, textColor, strokeColor]);

  const dynamicClassName = [
    className,
    flex ? "flex-layout" : "",
    stroke ? "stroke-layout" : "",
  ].filter(Boolean).join(" ");

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {styleElement}
      <div
        ref={titleRef}
        role="presentation"
        aria-hidden="true"
        className={`text-pressure-title ${dynamicClassName}`}
        style={{
          fontFamily,
          textTransform: "uppercase",
          fontSize: fontSize,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: "center center",
          margin: 0,
          textAlign: "center",
          userSelect: "none",
          whiteSpace: "nowrap",
          fontWeight: 100,
          width: "100%",
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              spansRef.current[i] = el;
            }}
            data-char={char}
            style={{
              display: "inline-block",
              color: stroke ? undefined : textColor,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
}
