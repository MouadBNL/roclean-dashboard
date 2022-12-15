import { ref } from 'vue'
export interface RocleanProps {
    name?: string,
    capacity?: number,
    battery?: number,
    running?: string
}


export const rocleans = ref<RocleanProps[]>([
    {
        name: "Roclean ABC",
        battery: 14.5,
        capacity: 72,
        running: "4h56min"
    },
    {
        name: "Roclean EFJ",
        battery: 44.8,
        capacity: 77,
        running: "2h40min"
    },
    {
        name: "Roclean HLM",
        battery: 23.5,
        capacity: 15,
        running: "3h20min"
    },
    {
        name: "Roclean MNL",
        battery: 2.5,
        capacity: 98,
        running: "5h01min"
    },
    {}
])
