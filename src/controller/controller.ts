import type { ViewLike } from "../view/viewlike";
import type { Galaxy } from "../model/galaxy";
import { ok, err, Result } from "neverthrow";

export class Controller {
    private _model: Galaxy;
    private _view: ViewLike;

    constructor(model: Galaxy, view: ViewLike) {
        this._model = model;
        this._view = view;
        window.addEventListener("resize", this._view.onWindowResize.bind(this._view));
    }

    public displayGalaxy = (): void => {
        const systemData = this._model.getGalaxyCoordinatesandStatuses()
        const urlSearchParams = new URLSearchParams();
        urlSearchParams.set("region", this._model.name);
        urlSearchParams.set("subway", String(false));
        history.replaceState({}, '', `${window.location.pathname}?${urlSearchParams}`)
        this._view.dispose();
        this._view.update(systemData, []);
    }

    public displayRegion = (regionName: string, asSubway: boolean): void => {
        this._model.regionalSubway(regionName)
            .map(console.log)
            .mapErr(console.log);

        const systemDataResult = this._model.getRegionCoordinatesandStatuses(regionName, asSubway);
        const connectionsResult = this._model.getConnections(regionName, asSubway);
        Result.combine([systemDataResult, connectionsResult])
            .map(data => {
                const systemData = data[0];
                const connections = data[1];
                const urlSearchParams = new URLSearchParams();
                urlSearchParams.set("region", regionName);
                urlSearchParams.set("subway", String(asSubway));
                history.replaceState({}, '', `${window.location.pathname}?${urlSearchParams}`)
                this._view.dispose();
                this._view.update(systemData, connections);
            })
            .mapErr(console.log);
    }

    public changeView = (view: ViewLike): void => {
        this._view.dispose();
        this._view.destroy();
        window.removeEventListener("resize", this._view.onWindowResize);
        this._view = view;
        window.addEventListener("resize", this._view.onWindowResize.bind(this._view));
    }

    public getRegionNames = () => {
        return this._model.getAllRegionNames();
    }

}