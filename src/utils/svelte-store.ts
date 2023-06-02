import { writable, type Writable } from 'svelte/store';
import type { coordinates3D } from "../model/galaxy";

export type Search = {
    systemName: string;
}

export type Transform = {
    k: number;
    x: number;
    y: number;
    aspectRatio: number;
}

export type GraphData = {
    nodeData: [string, coordinates3D, number][];
    edgeData: [coordinates3D, coordinates3D][];
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
export const graphDataPubsub: Writable<GraphData> = writable();
export const initialArgsPubsub: Writable<InitialArgs> = writable();
export const mapClickPubSub: Writable<UserCoordinates> = writable();