import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// export function getAssetPath(path) {
//   return new URL(`/src/assets/${path}`, import.meta.url).href;
// }


export function getAssetPath(path) {
  return `/assets/${path}`;
}