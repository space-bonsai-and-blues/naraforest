// Shared shape data for the nara forest waymarker family.
// Local coordinates: origin (0,0) sits at the base-center of the post,
// where it meets the ground. Y grows upward as negative — so translating
// a <g> to (x, y) in a parent viewBox plants the post's base at that point.

export const TRUNK_PATH =
  "M-6,0 L-7,-15 L-5,-30 L-7,-45 L-6,-60 L-8,-70 L-6,-80 L-8,-90 L-5,-97 " +
  "L-3,-105 L-1,-99 L1,-110 L3,-101 L5,-108 L7,-98 L9,-104 L7,-90 L8,-78 " +
  "L6,-68 L8,-55 L6,-42 L8,-28 L6,-14 L7,0 Z";

export const BLAZE = { x: -11, y: -60, width: 22, height: 13, rx: 2 };

export type SymbolType = "thread" | "dots" | "grid";
