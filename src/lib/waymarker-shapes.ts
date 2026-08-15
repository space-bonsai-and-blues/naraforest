// Shared shape data for the nara forest waymarker family.
// Local coordinates: origin (0,0) sits at the base-center of the post,
// where it meets the ground. Y grows upward as negative — so translating
// a <g> to (x, y) in a parent viewBox plants the post's base at that point.
//
// Trunk height halved (was ~110 units tall, now ~55) to sit closer to
// the scale of the edge trees and feel less towering.

export const TRUNK_PATH =
  "M-6,0 L-7,-7.5 L-5,-15 L-7,-22.5 L-6,-30 L-8,-35 L-6,-40 L-8,-45 L-5,-48.5 " +
  "L-3,-52.5 L-1,-49.5 L1,-55 L3,-50.5 L5,-54 L7,-49 L9,-52 L7,-45 L8,-39 " +
  "L6,-34 L8,-27.5 L6,-21 L8,-14 L6,-7 L7,0 Z";

export const BLAZE = { x: -11, y: -30, width: 22, height: 13, rx: 2 };

export type SymbolType = "thread" | "dots" | "grid" | "dots3";
