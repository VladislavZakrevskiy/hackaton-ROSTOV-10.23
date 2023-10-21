import { User } from "@/entities/User"

export interface Deal {
    title: string
    date: string
    place: string
    holl: string
    members: User[]
    format: 'online' | 'offline'
    mode: 'online' | 'record'
    description: string

}