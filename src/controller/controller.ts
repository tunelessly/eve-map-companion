import type { ViewLike } from "../view/viewlike";
import type { Galaxy } from "../model/galaxy";

export class Controller {
    private _model: Galaxy;
    private _view: ViewLike;

    constructor(model: Galaxy, view: ViewLike) {
        this._model = model;
        this._view = view;
        window.addEventListener("resize", this._view.onWindowResize.bind(this._view));
    }

    public displayGalaxy = () => {
        const systemData = this._model.getGalaxyCoordinatesandStatuses()
        const urlSearchParams = new URLSearchParams();
        urlSearchParams.set("region", this._model.name);
        urlSearchParams.set("subway", String(false));
        history.replaceState({}, '', `${window.location.pathname}?${urlSearchParams}`)
        this._view.dispose();
        this._view.update(systemData, []);
    }

    public displayRegion = (regionName: string, asSubway: boolean) => {
        const systemData = this._model.getRegionCoordinatesandStatuses(regionName, asSubway);
        const connections = this._model.getConnections(regionName, asSubway);
        const urlSearchParams = new URLSearchParams();
        urlSearchParams.set("region", regionName);
        urlSearchParams.set("subway", String(asSubway));
        history.replaceState({}, '', `${window.location.pathname}?${urlSearchParams}`)
        this._view.dispose();
        this._view.update(systemData, connections);
    }

    public changeView = (view: ViewLike) => {
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