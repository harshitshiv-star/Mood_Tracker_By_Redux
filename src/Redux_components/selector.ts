import type { Store } from "./store";


export const HappyCountSelector = (state: Store) => state.happycount

export const SadCountSelector = (state: Store) => state.sadcount