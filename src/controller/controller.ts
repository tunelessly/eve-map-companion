import type { ViewLike } from "../view/viewlike";
import type { Galaxy } from "../model/galaxy";

export class Controller {
    private _model: Galaxy;
    private _view: ViewLike;

    constructor(model: Galaxy, view: ViewLike) {
        this._model = model;
        this._view = view;
    }

    public displayGalaxy = () => {
        const systemData = this._model.getGalaxyCoordinatesandStatuses()
        this._view.dispose();
        this._view.update(systemData, []);
    }

    public displayRegion = (regionName: string, asSubway: boolean) => {
        const systemData = this._model.getRegionCoordinatesandStatuses(regionName, asSubway);
        const connections = this._model.getConnections(regionName, asSubway);
        this._view.dispose();
        this._view.update(systemData, connections);
    }

    public getRegionNames = () => {
        return this._model.getAllRegionNames();
    }

}