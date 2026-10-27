import React, { useRef, useEffect, useState, useMemo, useCallback } from "react";
import { sound } from "../utils/audio";
import { CATEGORIES } from "../data/activities";
import { getCanvasIconImage } from "../utils/canvasIcons";
import { Dices } from "lucide-react";

export default function RouletteWheel({
  activities = [],
  selectedCategory = "all",
  onSelectActivity,
  isSpinning: externalIsSpinning = false
}) {
  const canvasRef = useRef(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentRotation, setCurrentRotation] = useState(0);

  // Filter activities according to category filter
  const items = useMemo(() => {
    let filtered = activities;
    if (selectedCategory && selectedCategory !== "all") {
      filtered = activities.filter((a) => a.category === selectedCategory);
    }
    // Take between 6 and 10 items for optimal wheel readability
    if (filtered.length < 4) {
      filtered = activities;
    }
    return filtered.slice(0, 10);
  }, [activities, selectedCategory]);

  const numSlices = items.length;
  const sliceAngle = (2 * Math.PI) / numSlices;

  // Draw the roulette wheel on the canvas
  const drawWheel = useCallback((rotationAngle) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width / 2 - 24;

    ctx.clearRect(0, 0, width, height);

    // Outer decorative shadow & glow
    ctx.save();
    ctx.shadowColor = "rgba(45, 106, 79, 0.25)";
    ctx.shadowBlur = 25;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 10, 0, 2 * Math.PI);
    ctx.fillStyle = "#1b4332";
    ctx.fill();
    ctx.restore();

    // Outer Rim with golden/metallic trim
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 8, 0, 2 * Math.PI);
    ctx.fillStyle = "#2d6a4f";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#d8f3dc";
    ctx.stroke();
    ctx.restore();

    // Draw Slices
    items.forEach((item, index) => {
      const startAngle = rotationAngle + index * sliceAngle;
      const endAngle = startAngle + sliceAngle;

      const catInfo = CATEGORIES[item.category.toUpperCase()] || {
        color: "#2d6a4f",
        accent: "#52b788"
      };

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();

      // Alternate brightness slightly or use category color
      ctx.fillStyle = catInfo.color;
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
      ctx.stroke();
      ctx.restore();

      // Draw Content (Icon and Title) inside slice
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";

      // Draw Icon disc backdrop and vector icon
      const iconX = radius - 20;
      const iconY = 0;
      const iconSize = 22;

      ctx.save();
      ctx.beginPath();
      ctx.arc(iconX, iconY, 13, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(0, 0, 0, 0.22)";
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
      ctx.stroke();
      ctx.restore();

      const img = getCanvasIconImage(item.icon, "#ffffff");
      if (img && img.complete) {
        ctx.drawImage(img, iconX - iconSize / 2, iconY - iconSize / 2, iconSize, iconSize);
      }

      // Draw Short Title
      ctx.fillStyle = "#ffffff";
      ctx.font = "600 12.5px 'Poppins', sans-serif";
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
      ctx.shadowBlur = 4;

      const maxTitleLen = 16;
      let displayTitle = item.title;
      if (displayTitle.length > maxTitleLen) {
        displayTitle = displayTitle.slice(0, maxTitleLen - 2) + "...";
      }
      ctx.fillText(displayTitle, radius - 42, 0);

      ctx.restore();
    });

    // Outer pegs (studs)
    const numPegs = numSlices * 2;
    for (let p = 0; p < numPegs; p++) {
      const pegAngle = rotationAngle + (p * (2 * Math.PI)) / numPegs;
      const pegX = centerX + (radius + 4) * Math.cos(pegAngle);
      const pegY = centerY + (radius + 4) * Math.sin(pegAngle);

      ctx.save();
      ctx.beginPath();
      ctx.arc(pegX, pegY, 4, 0, 2 * Math.PI);
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "#74c69d";
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.restore();
    }

    // Center Hub (decorative concentric circles)
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, 46, 0, 2 * Math.PI);
    ctx.fillStyle = "#ffffff";
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#52b788";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, 36, 0, 2 * Math.PI);
    ctx.fillStyle = "#2d6a4f";
    ctx.fill();

    // Center icon
    const centerImg = getCanvasIconImage("sprout", "#d8f3dc");
    if (centerImg && centerImg.complete) {
      ctx.drawImage(centerImg, centerX - 14, centerY - 14, 28, 28);
    }
    ctx.restore();
  }, [items, numSlices, sliceAngle]);

  // Re-draw when items or rotation changes
  useEffect(() => {
    drawWheel(currentRotation);
  }, [drawWheel, currentRotation]);

  // Pre-load vector icons for active slices
  useEffect(() => {
    items.forEach((item) => {
      getCanvasIconImage(item.icon, "#ffffff", () => {
        drawWheel(currentRotation);
      });
    });
    getCanvasIconImage("sprout", "#d8f3dc", () => {
      drawWheel(currentRotation);
    });
  }, [items, drawWheel, currentRotation]);

  // Main Spin Handler
  const spin = () => {
    if (isSpinning || externalIsSpinning || items.length === 0) return;

    sound.init();
    setIsSpinning(true);

    // Random target index
    const winningIndex = Math.floor(Math.random() * items.length);
    const winningItem = items[winningIndex];

    // Pointer is at the top: angle 270 degrees = 3 * Math.PI / 2
    // Slice center needs to align with 3 * Math.PI / 2
    const targetSliceCenter = (winningIndex + 0.5) * sliceAngle;
    const pointerAngle = (3 * Math.PI) / 2;

    // Minimum full spins: 5 to 7 full rotations
    const fullSpins = (5 + Math.floor(Math.random() * 3)) * 2 * Math.PI;

    // Normalizing current rotation
    const currentNormalized = currentRotation % (2 * Math.PI);
    const targetRotationDelta = pointerAngle - targetSliceCenter - currentNormalized;
    // Ensure forward rotation
    let totalTargetRotation = currentRotation + fullSpins + targetRotationDelta;
    if (totalTargetRotation <= currentRotation) {
      totalTargetRotation += 2 * Math.PI;
    }

    const startAngle = currentRotation;
    const distance = totalTargetRotation - startAngle;
    const duration = 4600; // 4.6 seconds of suspenseful smooth deceleration
    const startTime = performance.now();

    let lastPegPassed = -1;

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);

      // Quartic ease-out curve: starts fast, beautifully decelerates
      const easeOut = 1 - Math.pow(1 - progress, 3.8);
      const angle = startAngle + distance * easeOut;

      setCurrentRotation(angle);

      // Sound tick on passing pegs
      const pegIndex = Math.floor((angle / (Math.PI / 8)) % (numSlices * 2));
      if (pegIndex !== lastPegPassed) {
        lastPegPassed = pegIndex;
        // Adjust click frequency based on speed
        const speed = 1 - progress;
        if (speed > 0.05) {
          sound.playTick(500 + speed * 250);
        }
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        if (onSelectActivity) {
          onSelectActivity(winningItem);
        }
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="roulette-wrapper">
      {/* Top golden pointer arrow */}
      <div className="roulette-pointer-container">
        <div className={`roulette-pointer ${isSpinning ? "wobble" : ""}`}>
          <svg viewBox="0 0 40 46" width="38" height="44" fill="none">
            <path
              d="M20 44 L4 10 Q2 4 8 4 L32 4 Q38 4 36 10 Z"
              fill="#e76f51"
              stroke="#ffffff"
              strokeWidth="3"
            />
            <circle cx="20" cy="14" r="5" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Interactive Wheel Canvas */}
      <div className="roulette-canvas-box" onClick={!isSpinning ? spin : undefined}>
        <canvas
          ref={canvasRef}
          width={460}
          height={460}
          className="roulette-canvas"
        />

        {/* Center overlay button for mobile tap */}
        <button
          type="button"
          className={`roulette-center-btn ${isSpinning ? "spinning" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            spin();
          }}
          disabled={isSpinning}
          aria-label="Girar la ruleta de desconexión"
        >
          {isSpinning ? "..." : "GIRAR"}
        </button>
      </div>

      {/* Main Action Spin Button Below */}
      <div className="roulette-action-bar">
        <button
          type="button"
          className="spin-trigger-btn"
          onClick={spin}
          disabled={isSpinning}
        >
          {isSpinning ? (
            <>
              <span className="spinner-icon"></span> Eligiendo tu reto...
            </>
          ) : (
            <>
              <Dices size={22} className="btn-icon" /> ¡Girar Ruleta de Desconexión!
            </>
          )}
        </button>
      </div>
    </div>
  );
}
