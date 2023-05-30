import { writable, type Writable } from 'svelte/store';

type search = {
    systemName: string;
}

export const systemNameSearchPubSub: Writable<search> = writable();