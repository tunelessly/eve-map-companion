import { writable, type Writable } from 'svelte/store';
import type { IRegionDataCoordinates } from "../model/interfaces";

export type Search = {
    systemName: string;
}

export type Transform = {
    k: number;
    x: number;
    y: number;
    aspectRatio: number;
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
export const graphDataPubsub: Writable<IRegionDataCoordinates> = writable();
export const initialArgsPubsub: Writable<InitialArgs> = writable();
export const mapClickPubSub: Writable<UserCoordinates> = writable();