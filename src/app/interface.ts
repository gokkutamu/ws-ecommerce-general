// Import types.
import INoodle from "../types/INoodle";

export interface NoodleState {
    noodle: INoodle[];
    total: number;
}

export const initialState: NoodleState = {
    noodle: [],
    total: 0,
}