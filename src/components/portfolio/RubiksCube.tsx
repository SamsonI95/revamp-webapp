"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

const FACE_COLORS = [
  "#FF0000", // Red
  "#00A651", // Green
  "#FFFFFF", // White
  "#FFD500", // Yellow
  "#0051BA", // Blue
  "#FF5800", // Orange

  // "#c65d3a",
  // "#78805a",
  // "#fffcf7",
  // "#f2d477",
  // "#e9b9a7",
  // "#8a4a33",
];
const BODY_COLOR = "#1d1713";
const KEY_STEP = 0.25;
const DRAG_SPEED = 0.01;
const AUTO_SPIN = 0.004;

export default function RubiksCube({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 0, 11);

    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(4, 6, 8);
    scene.add(keyLight);

    const stickerMaterials = FACE_COLORS.map(
      (color) => new THREE.MeshStandardMaterial({ color, roughness: 0.45 }),
    );
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: BODY_COLOR, roughness: 0.6 });
    const geometry = new THREE.BoxGeometry(0.92, 0.92, 0.92);

    const cube = new THREE.Group();
    for (const x of [-1, 0, 1]) {
      for (const y of [-1, 0, 1]) {
        for (const z of [-1, 0, 1]) {
          const materials = [
            x === 1 ? stickerMaterials[0] : bodyMaterial,
            x === -1 ? stickerMaterials[1] : bodyMaterial,
            y === 1 ? stickerMaterials[2] : bodyMaterial,
            y === -1 ? stickerMaterials[3] : bodyMaterial,
            z === 1 ? stickerMaterials[4] : bodyMaterial,
            z === -1 ? stickerMaterials[5] : bodyMaterial,
          ];
          const mesh = new THREE.Mesh(geometry, materials);
          mesh.position.set(x, y, z);
          cube.add(mesh);
        }
      }
    }
    scene.add(cube);

    let targetX = -0.45;
    let targetY = 0.65;
    let currentX = targetX;
    let currentY = targetY;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let visible = true;

    const onPointerDown = (event: PointerEvent) => {
      dragging = true;
      lastX = event.clientX;
      lastY = event.clientY;
      container.setPointerCapture(event.pointerId);
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      targetY += (event.clientX - lastX) * DRAG_SPEED;
      targetX += (event.clientY - lastY) * DRAG_SPEED;
      lastX = event.clientX;
      lastY = event.clientY;
    };
    const onPointerUp = (event: PointerEvent) => {
      dragging = false;
      if (container.hasPointerCapture(event.pointerId)) {
        container.releasePointerCapture(event.pointerId);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      const moves: Record<string, () => void> = {
        ArrowLeft: () => (targetY -= KEY_STEP),
        ArrowRight: () => (targetY += KEY_STEP),
        ArrowUp: () => (targetX -= KEY_STEP),
        ArrowDown: () => (targetX += KEY_STEP),
      };
      const move = moves[event.key];
      if (!move) return;
      event.preventDefault();
      move();
    };

    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointercancel", onPointerUp);
    container.addEventListener("keydown", onKeyDown);

    const resize = () => {
      const { clientWidth: width, clientHeight: height } = container;
      if (!width || !height) return;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    visibilityObserver.observe(container);

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      if (!visible) return;
      if (!dragging && !reduceMotion) targetY += AUTO_SPIN;
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      cube.rotation.x = currentX;
      cube.rotation.y = currentY;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointercancel", onPointerUp);
      container.removeEventListener("keydown", onKeyDown);
      geometry.dispose();
      bodyMaterial.dispose();
      stickerMaterials.forEach((material) => material.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      role="img"
      tabIndex={0}
      aria-label="Interactive 3D Rubik's Cube. Drag, or use the arrow keys, to rotate it."
      className={cn(
        "relative h-full w-full cursor-grab touch-none select-none active:cursor-grabbing",
        className,
      )}
    />
  );
}
