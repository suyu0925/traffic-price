export enum Type {
  ALL = 0,
  CMCC = 1,
  CUCC = 2,
  CTCC = 3,
  UNKNOWN = -1
}

export const CMCC: { [k: number]: number }
export const CUCC: { [k: number]: number }
export const CTCC: { [k: number]: number }

export function getPrice(packageSize: number, operator: Type): number
