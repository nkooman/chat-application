import { Timestamp } from './timestamp'

export type Message = {
    id: number,
    uid: string,
    photoURL: string,
    text: string,
    createdAt: Timestamp
}