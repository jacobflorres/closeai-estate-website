"use client";

import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import type { COBEOptions } from "cobe";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 400,
  height: 400,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    // --- USA (20 major cities) ---
    { location: [40.7128, -74.0060], size: 0.1 }, // New York
    { location: [34.0522, -118.2437], size: 0.1 }, // Los Angeles
    { location: [41.8781, -87.6298], size: 0.1 }, // Chicago
    { location: [29.7604, -95.3698], size: 0.09 }, // Houston
    { location: [33.4484, -112.0740], size: 0.09 }, // Phoenix
    { location: [39.7392, -104.9903], size: 0.08 }, // Denver
    { location: [32.7157, -117.1611], size: 0.08 }, // San Diego
    { location: [29.4241, -98.4936], size: 0.08 }, // San Antonio
    { location: [32.7767, -96.7970], size: 0.09 }, // Dallas
    { location: [37.7749, -122.4194], size: 0.1 }, // San Francisco
    { location: [47.6062, -122.3321], size: 0.09 }, // Seattle
    { location: [38.9072, -77.0369], size: 0.08 }, // Washington, D.C.
    { location: [42.3601, -71.0589], size: 0.08 }, // Boston
    { location: [36.1627, -86.7816], size: 0.07 }, // Nashville
    { location: [39.9526, -75.1652], size: 0.09 }, // Philadelphia
    { location: [25.7617, -80.1918], size: 0.09 }, // Miami
    { location: [45.5152, -122.6784], size: 0.07 }, // Portland
    { location: [36.1699, -115.1398], size: 0.08 }, // Las Vegas
    { location: [35.2271, -80.8431], size: 0.07 }, // Charlotte
    { location: [44.9778, -93.2650], size: 0.07 }, // Minneapolis
  ],
};

interface GlobeProps {
  className?: string;
  config?: COBEOptions;
}

export function Globe({ className, config = GLOBE_CONFIG }: GlobeProps) {
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const rRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const updatePointerInteraction = useCallback((value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  }, []);

  const updateMovement = useCallback((clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      rRef.current = delta / 200;
    }
  }, []);

  const onRender = useCallback((state: Record<string, any>) => {
    if (pointerInteracting.current === null) {
      phiRef.current += 0.005;
    }
    state.phi = phiRef.current + rRef.current;
    state.width = widthRef.current * 2;
    state.height = widthRef.current * 2;
  }, []);

  const onResize = useCallback(() => {
    if (canvasRef.current) {
      widthRef.current = canvasRef.current.offsetWidth;
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender,
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });

    return () => {
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, [config, onRender, onResize]);

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}

