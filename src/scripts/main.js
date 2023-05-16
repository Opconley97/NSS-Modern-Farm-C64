console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

const yearlyPlan = createPlan()
const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const plantArray = usePlants()
const test = plantSeeds(yearlyPlan)
const test1 = harvestPlants(plantArray)

addPlant(cornSeed)
addPlant(asparagusSeed)

console.log(yearlyPlan)
console.log(asparagusSeed)
console.log(cornSeed)
console.log(plantArray)
console.log(test)
console.log(test1)

const parentHTMLElement = document.querySelector(".messages")
parentHTMLElement.innerHTML = Catalog(test1)