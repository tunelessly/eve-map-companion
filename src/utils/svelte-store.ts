import { writable, type Writable } from 'svelte/store';

export type Search = {
    systemName: string;
}

export type Transform = {
    k: number;
    x: number;
    y: number;
    rect: {
        width: number;
        height: number;
        x: number;
        y: number;
    };
    offset: { x: number, y: number }
}

export type InitialArgs = {
    args: string;
}

export type UserCoordinates = {
    x: number;
    y: number;
}

export const systemNameSearchPubSub: Writable<Search> = writable();
export const mapDragPubSub: Writable<Transform> = writable();
export const regionChangedPubsub: Writable<string> = writable();
export const initialArgsPubsub: Writable<InitialArgs> = writable();
export const mapClickPubSub: Writable<UserCoordinates> = writable();