import { atom } from 'jotai'

interface Order {
    id: string|number;
    count: number;
}

export const orderAtom = atom<Order>({
    id: '1',
    count:100
})
