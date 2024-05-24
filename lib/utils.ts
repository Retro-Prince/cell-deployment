import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CalcProps {
  rsp: any;
  rsq: any;
  inf: any;
}

export function calculateStatus(rsp: any, rsq: any, inf: any) {
  if (rsp >= -80 && rsq >= -10 && inf <= -70) {
    return "Excellent";
  } else if (
    rsp >= -80 &&
    rsp <= -90 &&
    rsq >= -10 &&
    rsq <= -15 &&
    inf >= -70 &&
    inf <= -80
  ) {
    return "Very Good";
  } else if (
    rsp >= -90 &&
    rsp <= -100 &&
    rsq >= -15 &&
    rsq <= -20 &&
    inf >= -80 &&
    inf <= -90
  ) {
    return "Good";
  } else if (rsp < -100 && rsq < -20 && inf <= -100) {
    return "Fair";
  } else {
    return "Poor";
  }
}

export function evaluatePerformance(rsp: any, rsq: any, inf: any) {
  if (rsp >= -80 && rsq >= -10 && inf <= -70) {
    return "Excellent";
  } else if (
    rsp >= -90 &&
    rsp < -80 &&
    rsq >= -15 &&
    rsq < -10 &&
    inf >= -80 &&
    inf < -70
  ) {
    return "Very Good";
  } else if (
    rsp >= -100 &&
    rsp < -90 &&
    rsq >= -20 &&
    rsq < -15 &&
    inf >= -90 &&
    inf < -80
  ) {
    return "Good";
  } else if (rsp < -100 && rsq < -20 && inf <= -100) {
    return "Fair";
  } else {
    return "Poor"; // Handling cases not specified in the algorithm
  }
}