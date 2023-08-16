import { writable, type Writable } from 'svelte/store';

export type Search = {
    systemName: string;
}

export type Transform = {
    k: number;
    x: number;
    y: number;
}

export type SVGRectangle = {
    width: number;
    height: number;
    x: number;
    y: number;
}

export type TransformAndRect = Transform & { rect: SVGRectangle };

export type InitialArgs = {
    args: string;
}

export type Interaction = {
    type: string;
    x: number;
    y: number;
}

export const systemNameSearchPubSub: Writable<Search> = writable();
export const mapDragPubSub: Writable<TransformAndRect> = writable();
export const regionChangedPubsub: Writable<string> = writable();
export const initialArgsPubsub: Writable<InitialArgs> = writable();
export const miniMapClickPubSub: Writable<Interaction> = writable();