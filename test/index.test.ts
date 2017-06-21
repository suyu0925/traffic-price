'use strict'

import * as trafficPrice from '../src/index'

describe('price', () => {
  test('cmcc', () => {
    let price
    price = trafficPrice.getPrice(50, trafficPrice.Type.CMCC)
    expect(price).toBe(5)
  })
})
