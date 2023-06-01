import { writable, type Writable } from 'svelte/store';

export type Search = {
    systemName: string;
}

export type Transform = {
    k: number;
    x: number;
    y: number;
}

export const systemNameSearchPubSub: Writable<Search> = writable();
export const transformPubSub: Writable<Transform> = writable();