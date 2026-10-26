"use client";

import dynamic from "next/dynamic";

const RubiksCube = dynamic(() => import("./RubiksCube"), {
  ssr: false,
  loading: () => <div aria-hidden="true" className="h-full w-full" />,
});

export function CubeStage({ className }: { className?: string }) {
  return <RubiksCube className={className} />;
}
