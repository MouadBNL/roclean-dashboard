import { ref } from 'vue'
import { numStats } from './collected_trash'
export interface RocleanProps {
    id?: string,
    name?: string,
    capacity?: number,
    battery?: number,
    running?: string,
    stats?: numStats
}


export const rocleans = ref<RocleanProps[]>([
    {
        id: 'abc',
        name: "Roclean ABC",
        battery: 14.5,
        capacity: 72,
        running: "4h56min",
        stats: {
            glass: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            plastic: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            paper: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            organic: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            others: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            metal: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
        }
    },
    {
        id: 'efj',
        name: "Roclean EFJ",
        battery: 44.8,
        capacity: 77,
        running: "2h40min",
        stats: {
            glass: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            plastic: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            paper: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            organic: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            others: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            metal: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
        }
    },
    {
        id: 'hlm',
        name: "Roclean HLM",
        battery: 23.5,
        capacity: 15,
        running: "3h20min",
        stats: {
            glass: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            plastic: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            paper: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            organic: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            others: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            metal: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
        }
    },
    {
        id: 'mnl',
        name: "Roclean MNL",
        battery: 2.5,
        capacity: 98,
        running: "5h01min",
        stats: {
            glass: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            plastic: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            paper: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            organic: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            others: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            metal: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
        }
    },
    {
        id: 'dflt',
        name: "Roclean 1",
        battery: 45.5,
        capacity: 50,
        running: "3h01min",
        stats: {
            glass: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            plastic: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            paper: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            organic: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            others: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            metal: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
        }
    },
])


export const getStats = (roc: RocleanProps) => {
    if(roc.stats){
        let t = roc.stats.glass + roc.stats.plastic + roc.stats.paper + roc.stats.organic + roc.stats.others + roc.stats.metal
        return {
            total: t,
            percentages: {
                glass: (roc.stats.glass / t * 100).toFixed(1),
                plastic:  (roc.stats.plastic / t * 100).toFixed(1),
                paper:  (roc.stats.paper / t * 100).toFixed(1),
                organic:  (roc.stats.organic / t * 100).toFixed(1),
                others:  (roc.stats.others / t * 100).toFixed(1),
                metal:  (roc.stats.metal / t * 100).toFixed(1)
            }
        }
    }
    return {
        total: 0,
        percentages: {
            glass: 0,
            plastic: 0,
            paper:  0,
            organic:  0,
            others: 0,
            metal: 0
        }
    }
}