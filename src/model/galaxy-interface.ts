import eveUniverse from './universe-pretty-1682199656932.json';
import eveSubway from './region-subway-pretty-1682211913146.json';
import { Galaxy } from './galaxy.js';
import { HSV2RGB, RGBtofloat, sectoHSV, coordinatestoGeometry, linestoGeometry, type coordinates3D } from '../utils/geometry';

const initGalaxy = () => {
    let start = Date.now();
    Galaxy.instance.populateGalaxy(eveUniverse);
    Galaxy.instance.populateGalaxySubway(eveSubway);
    console.log(`Galaxy creation took: ${Date.now() - start}ms`);
}
initGalaxy();

const coordinates2Three = (coordinates: coordinates3D[]): number[] => {
    return coordinatestoGeometry(coordinates);
}

const security2Color = (securityStatuses: number[]): number[] => {
    return securityStatuses
        .map(sectoHSV)
        .map(HSV2RGB)
        .map(RGBtofloat)
        .flatMap(color => [color.r, color.g, color.b]);
}

export const getAllRegionNames = () => {
    return Galaxy.instance.getAllRegionNames();
}

export const getRegionGeometryData = (region: string, withLines: boolean = false, asSubway: boolean = false) => {
    const galaxy = Galaxy.instance;
    const linePositions = withLines ? linestoGeometry(galaxy.getConnections(region, asSubway)) : [];
    const data = galaxy.getRegionCoordinatesandStatuses(region, asSubway);

    const pointPositions = coordinates2Three(data.map(x => x[1]));
    const pointColors = security2Color(data.map(x => x[2]));

    return { pointPositions, pointColors, linePositions }
}

export const getGalaxyGeometryData = () => {
    const galaxy = Galaxy.instance;
    const linePositions = []
    const data = galaxy.getGalaxyCoordinatesandStatuses()

    const pointPositions = coordinates2Three(data.map(x => x[1]));
    const pointColors = security2Color(data.map(x => x[2]));

    return { pointPositions, pointColors, linePositions }
}

export const getSystemCoordinates = (systemID: number, asSubway: boolean = false): coordinates3D => {
    const galaxy = Galaxy.instance;
    return galaxy.getSystem(systemID, asSubway).map(s => s.coordinates).mapErr(e => console.log(`Error will robinson error: ${e}`)).unwrapOr({ x: 0, y: 0, z: 0 });
}