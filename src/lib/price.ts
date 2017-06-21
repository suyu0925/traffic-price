'use strict'

import { Type } from 'mobile-operator'
import { CMCC, CTCC, CUCC } from './package'

export function getPrice(packageSize: number, operator: Type) {
  // adjust packageSize if times of 1000
  if ((packageSize % 1000) === 0) {
    packageSize = 1024 * Math.floor(packageSize / 1000)
  }

  let chargeCash: number = -1
  if (operator === Type.CMCC) {
    chargeCash = CMCC[packageSize]
  } else if (operator === Type.CUCC) {
    chargeCash = CUCC[packageSize]
  } else if (operator === Type.CTCC) {
    chargeCash = CTCC[packageSize]
  }
  return chargeCash
}
