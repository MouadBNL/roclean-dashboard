import { computed, reactive, ref } from 'vue'

type keys = 'glass' | 'metal' | 'paper' | 'plastic' | 'organic' | 'others'

export interface numStats {
    glass: number,
    metal: number,
    paper: number,
    plastic: number,
    organic: number,
    others: number
}

export const trashStats = reactive<numStats>({
    glass: 72,
    metal: 93,
    paper: 107,
    plastic: 142,
    organic: 47,
    others: 10
})

export const trashTotal = computed<number>(() => {
    let total = 0
    Object.keys(trashStats).forEach((el) => {
        total += (trashStats[el as keys] as number)
    })
    return total
})

export const trashPercentages = computed(() => {
    let pres = {glass: 0, metal: 0, paper: 0, plastic: 0, organic: 0, others: 0}
    Object.keys(trashStats).forEach(el => {
        pres[el as keys] = (trashStats[el as keys] / trashTotal.value * 100).toFixed(1)
    })
    return pres
})