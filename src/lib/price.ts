'use strict'

import { Type } from 'mobile-operator'
import { CMCC, CTCC, CUCC } from './package'

export function getPrice(packageSize: number, operator: Type) {
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
