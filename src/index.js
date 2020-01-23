import { writable } from 'svelte/store';

export const toggleable = (initial = false) => {
    const { subscribe, set, update } = writable(initial);

    return {
        set,
        subscribe,
        update,
        on: () => set(true),
        off: () => set(false),
        toggle: () => update(s => !s)
    };
};
