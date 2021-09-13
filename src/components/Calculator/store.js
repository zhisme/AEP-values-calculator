import { observable, computed, action } from 'mobx'
import { findIndex } from 'lodash'

const defaultAep = [
  { name: 'agility', value: 2.27 },
  { name: 'strength', value: 1.16 },
  { name: 'critical', value: 1.85 },
  { name: 'hit', value: 2.57 },
  { name: 'expertise', value: 2.83 },
  { name: 'haste', value: 2.3 },
  { name: 'attack power', value: 1 }
]

const defaultItemStats = [
  { name: 'agility', value: 0 },
  { name: 'strength', value: 0 },
  { name: 'critical', value: 0 },
  { name: 'hit', value: 0 },
  { name: 'expertise', value: 0 },
  { name: 'haste', value: 0 },
  { name: 'attack power', value: 0 }
]

const normalizeItem = (item) => {
  item.value = parseFloat(item.value)
  return item
}

export default class CalculatorStore {
  @observable aep = defaultAep
  @observable itemStats = defaultItemStats
  @observable aepResult = null

  @computed get aepValues () {
    return this.aep
  }

  @computed get itemStatsValues () {
    return this.itemStats
  }

  @action updateAepValues (newAep) {
    const idx = findIndex(this.aep, (o) => (o.name === newAep.name))

    this.aep[idx] = normalizeItem(newAep)
  }

  @action updateItemStats (newItemStat) {
    const idx = findIndex(this.aep, (o) => (o.name === newItemStat.name))

    this.itemStats[idx] = normalizeItem(newItemStat)
  }

  @action resetAepResult () {
    this.aep = defaultAep
    this.itemStats = defaultItemStats
    this.aepResult = null
  }

  @action calculateAepResult () {
    const [
      itemAgility, itemStrength, itemCritical, itemHit, itemExpertise, itemHaste, itemAttackPower
    ] = this.itemStats
    const [
      aepAgility, aepStrength, aepCritical, aepHit, aepExpertise, aepHaste, aepAttackPower
    ] = this.aep

    const result = itemAgility.value * aepAgility.value + itemStrength.value * aepStrength.value +
      itemCritical.value * aepCritical.value + itemHit.value * aepHit.value +
      itemExpertise.value * aepExpertise.value + itemHaste.value * aepHaste.value +
      itemAttackPower.value * aepAttackPower.value

    this.aepResult = result
  }
}
