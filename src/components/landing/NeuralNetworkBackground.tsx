"use client";

import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  pulse: number;
  isHovered: boolean;
  layer: number;
  activity: number;
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
  activation: number;
}

/**
 * NeuralNetworkBackground Component
 * Creates an animated neural network visualization using Canvas
 * Features:
 * - Structured neural architecture with multiple layers
 * - Larger, more visible nodes
 * - Wave-based activation animation
 * - Interactive nodes that react to mouse movement
 * - Flowing connections between layers
 * - Gradient colors (Blue, Purple, Cyan)
 * - Performance optimized with requestAnimationFrame
 * - Only mounts after loading screen completes
 */
export function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    let visualWidth = 0;
    let visualHeight = 0;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      visualWidth = rect.width;
      visualHeight = rect.height;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize nodes in a structured neural network architecture
    // Responsive node count based on available space
    // Use visual dimensions for consistent centering, not physical pixels
    const width = visualWidth;
    const height = visualHeight;

    // Calculate layer configuration based on viewport size
    let layers: number[];
    const isPortrait = height > width;

    if (isPortrait) {
      // Portrait: fewer nodes, more vertical spread
      layers = [4, 5, 4, 3, 2];
    } else {
      // Landscape: more nodes for better spread
      layers = [6, 8, 6, 4, 3];
    }

    // Center the neural network in the viewport with proper margins
    // Account for node radius (5.5) + glow effect in margin calculation
    const nodeRadius = 6;
    const glowMargin = nodeRadius * 7.5; // Account for glow effect
    const totalLayerWidth = layers.length;
    const usableWidth = width - glowMargin * 2; // Subtract margins from both sides
    const layerSpacing = usableWidth / (totalLayerWidth + 1);
    const startX = glowMargin + layerSpacing; // Position first layer with proper margin

    nodesRef.current = [];

    // Vertical spacing with proper margins
    const verticalMargin = glowMargin;
    const usableHeight = height - verticalMargin * 2;

    layers.forEach((nodeCount, layerIdx) => {
      const layerX = startX + layerSpacing * layerIdx;
      const layerHeight = usableHeight / (nodeCount + 1);
      const startY = verticalMargin + layerHeight;

      for (let i = 0; i < nodeCount; i++) {
        const y = startY + layerHeight * i;
        nodesRef.current.push({
          x: layerX,
          y: y,
          radius: nodeRadius,
          vx: 0,
          vy: (Math.random() - 0.5) * 0.05, // More subtle movement
          pulse: (layerIdx + i) * 0.5,
          isHovered: false,
          layer: layerIdx,
          activity: 0,
        });
      }
    });

    // Create connections only between adjacent layers (like real neural networks)
    const updateConnections = () => {
      connectionsRef.current = [];

      const nodesPerLayer = layers;
      let nodeIdx = 0;

      for (let layer = 0; layer < layers.length - 1; layer++) {
        const currentLayerStart = nodesPerLayer.slice(0, layer).reduce((a, b) => a + b, 0);
        const nextLayerStart = nodesPerLayer.slice(0, layer + 1).reduce((a, b) => a + b, 0);
        const currentLayerSize = nodesPerLayer[layer];
        const nextLayerSize = nodesPerLayer[layer + 1];

        // Connect each node in current layer to all nodes in next layer
        for (let i = 0; i < currentLayerSize; i++) {
          for (let j = 0; j < nextLayerSize; j++) {
            connectionsRef.current.push({
              from: currentLayerStart + i,
              to: nextLayerStart + j,
              opacity: 0.3,
              activation: 0,
            });
          }
        }
      }
    };

    updateConnections();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });

      // Update hover state for nodes
      const hoverRadius = 80;
      nodesRef.current.forEach((node) => {
        const dx = node.x - mousePos.x;
        const dy = node.y - mousePos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        node.isHovered = distance < hoverRadius;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop with three phases: initial reveal, zoom transition, then interactive floating
    const animate = () => {
      timeRef.current += 1;
      const width = visualWidth;
      const height = visualHeight;

      // Clear canvas with transparent background (use visual dimensions)
      ctx.clearRect(0, 0, width, height);

      // Phase timing
      const animationPhase = timeRef.current;
      const layerRevealDuration = 150;
      const initialRevealEnd = layers.length * layerRevealDuration; // ~750 frames for all layers
      const zoomDuration = 100; // frames for zoom transition
      const zoomStart = initialRevealEnd;
      const zoomEnd = zoomStart + zoomDuration;

      // Calculate zoom level (1 = normal, zoom higher after initial animation)
      let zoomLevel = 1;
      if (animationPhase >= zoomStart && animationPhase < zoomEnd) {
        // Smooth zoom transition from 1 to 2.5
        const zoomProgress = (animationPhase - zoomStart) / zoomDuration;
        zoomLevel = 1 + zoomProgress * 1.5; // Zoom from 1 to 2.5
      } else if (animationPhase >= zoomEnd) {
        zoomLevel = 2.5; // Stay zoomed in
      }

      // Save context state for zoom
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.scale(zoomLevel, zoomLevel);
      ctx.translate(-width / 2, -height / 2);

      // Create wave-based activation pattern for phase 1
      const waveSpeed = 0.02;
      const waveIntensity = Math.sin(timeRef.current * waveSpeed) * 0.5 + 0.5;

      // Update and draw nodes
      nodesRef.current.forEach((node, i) => {
        // Update position (subtle movement)
        node.y += node.vy;

        // Keep nodes within bounds
        if (node.y < 50) node.y = 50;
        if (node.y > height - 50) node.y = height - 50;

        // Update pulse
        node.pulse += 0.03;

        // Progressive column-by-column reveal animation with pronounced sequential activation
        // Each layer takes ~150 frames to fully reveal (~2.5s per layer at 60fps) for more visible activation wave
        const layerStartFrame = node.layer * layerRevealDuration;
        const layerEndFrame = layerStartFrame + layerRevealDuration;
        const zoomPhaseStart = initialRevealEnd + zoomDuration;

        if (animationPhase < layerStartFrame) {
          // Node not yet revealed - skip rendering
          return;
        } else if (animationPhase < layerEndFrame) {
          // Node is being revealed - fade in gradually with visible wave effect
          const revealProgress = (animationPhase - layerStartFrame) / layerRevealDuration;
          // Increase activity range for more pronounced glow during activation
          node.activity = 0.2 + revealProgress * 0.6;
        } else if (animationPhase < zoomPhaseStart) {
          // During zoom transition - maintain visibility
          const blinkSpeed = Math.sin(timeRef.current * 0.05 + i * 0.1) * 0.5 + 0.5;
          node.activity = Math.random() > 0.85 ? 0.4 + blinkSpeed * 0.4 : 0.1;
        } else {
          // Zoomed in phase - continuous subtle activity with occasional pulses
          const pulseFrequency = 0.03;
          const baseActivity = 0.15;
          const pulseAmount = Math.sin(timeRef.current * pulseFrequency + i * 0.3) * 0.2 + 0.2;
          node.activity = baseActivity + pulseAmount;
        }

        // Hover check
        const dx = mousePos.x - node.x;
        const dy = mousePos.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        node.isHovered = distance < 100;

        // Draw node with glow effect
        const pulseScale = 1 + Math.sin(node.pulse) * 0.2;
        const radius = node.radius * pulseScale;
        const activityGlow = node.activity * 2;

        // Glow effect based on activity
        const glowGradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          radius * (3 + activityGlow)
        );

        if (node.isHovered) {
          glowGradient.addColorStop(0, "rgba(59, 130, 246, 0.6)");
          glowGradient.addColorStop(1, "rgba(59, 130, 246, 0)");
        } else if (node.activity > 0.5) {
          glowGradient.addColorStop(0, `rgba(139, 92, 246, ${0.4 * node.activity})`);
          glowGradient.addColorStop(1, "rgba(139, 92, 246, 0)");
        } else {
          glowGradient.addColorStop(0, `rgba(6, 182, 212, ${0.2 * node.activity})`);
          glowGradient.addColorStop(1, "rgba(6, 182, 212, 0)");
        }

        ctx.fillStyle = glowGradient;
        ctx.fillRect(
          node.x - radius * (3 + activityGlow),
          node.y - radius * (3 + activityGlow),
          radius * (6 + 2 * activityGlow),
          radius * (6 + 2 * activityGlow)
        );

        // Core node - fade in based on activity
        const nodeGradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          radius
        );

        if (node.isHovered) {
          nodeGradient.addColorStop(0, "#3B82F6");
          nodeGradient.addColorStop(1, "#0066FF");
        } else if (node.activity > 0.6) {
          nodeGradient.addColorStop(0, "#A855F7");
          nodeGradient.addColorStop(1, "#8B5CF6");
        } else {
          nodeGradient.addColorStop(0, "#7C3AED");
          nodeGradient.addColorStop(1, "#6D28D9");
        }

        ctx.fillStyle = nodeGradient;
        ctx.globalAlpha = node.activity / 0.8; // Opacity based on activity
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1; // Reset alpha
      });

      // Draw connections with activation-based coloring
      // Connections appear after second layer is revealed and stay visible
      const connectionLayerRevealDuration = 120;
      const connectionStartFrame = connectionLayerRevealDuration + connectionLayerRevealDuration / 2;

      if (animationPhase >= connectionStartFrame) {
        connectionsRef.current.forEach((conn) => {
          const fromNode = nodesRef.current[conn.from];
          const toNode = nodesRef.current[conn.to];

          if (!fromNode || !toNode) return;

        // Activation flows through connections
        const connectionActivation = (fromNode.activity + toNode.activity) / 2;

        const gradient = ctx.createLinearGradient(
          fromNode.x,
          fromNode.y,
          toNode.x,
          toNode.y
        );

        const opacity = 0.1 + connectionActivation * 0.4;

        if (connectionActivation > 0.5) {
          gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity})`);
          gradient.addColorStop(0.5, `rgba(168, 85, 247, ${opacity})`);
          gradient.addColorStop(1, `rgba(6, 182, 212, ${opacity})`);
        } else {
          gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity * 0.5})`);
          gradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity * 0.4})`);
          gradient.addColorStop(1, `rgba(6, 182, 212, ${opacity * 0.5})`);
        }

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1 + connectionActivation;
          ctx.lineCap = "round";
          ctx.globalAlpha = opacity;
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        });
      }

      // Restore canvas context from zoom transformation
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ background: "transparent" }}
    />
  );
}
