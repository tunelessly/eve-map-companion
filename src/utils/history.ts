export class History {
    private static _instance: History;
    private static readonly _timeoutMS = 500;
    private static readonly _updates = {};
    private static _timerHandles = {};

    private static get updates() { return History._updates; }
    private static get timeoutMS() { return History._timeoutMS; }
    private static get timerHandles() { return History._timerHandles; }

    private constructor() { }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    public setHistory(key: string, value: string) {
        History.updates[key] = value;
        if (History.timerHandles[key] === undefined) {
            this.update(key);
            History.timerHandles[key] = setTimeout(() => History.timerHandles[key] = undefined, History.timeoutMS);
        }
        else {
            clearTimeout(History.timerHandles[key]);
            History.timerHandles[key] = setTimeout(() => { this.update(key); History.timerHandles[key] = undefined }, History.timeoutMS);
        }
    }

    private update(key: string) {
        const value = History.updates[key];
        const currentURL = new URL(window.location.toString());
        currentURL.searchParams.set(key, value);
        history.replaceState({}, '', currentURL.toString());
    }
}