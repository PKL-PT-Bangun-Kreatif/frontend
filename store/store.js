import { enableStaticRendering } from 'mobx-react-lite';
// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(typeof window === 'undefined')

let store;

export class Store {

    constructor() {
    }

    hydrate = (data) => {
        if (!data) return;
    }
}
