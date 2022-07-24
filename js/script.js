"use strict";

const getTotalCost = (numberLiter, priceForOneKilo) => {
    return Math.ceil(4 * 0.075 * numberLiter) * priceForOneKilo;
}

console.log(getTotalCost(48, 13));