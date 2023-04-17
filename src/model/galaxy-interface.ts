import eveUniverse from './universe-pretty-1681768874229.json';
import { Galaxy } from './galaxy';
import { HSV2RGB, RGBtofloat, sectoHSV, coordinatestoGeometry, linestoGeometry, type coordinates3D } from '../utils/geometry';

const initGalaxy = () => {
    let start = Date.now();
    Galaxy.instance.populateGalaxy(eveUniverse);
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
    if (asSubway) galaxy.regionalSubway(region);
    const linePositions = withLines ? linestoGeometry(galaxy.getConnections(region)) : [];
    const data = galaxy.getRegionCoordinatesandStatuses(region);

    const pointPositions = coordinates2Three(data.map(x => x[0]));
    const pointColors = security2Color(data.map(x => x[1]));

    return { pointPositions, pointColors, linePositions }
}

export const getGalaxyGeometryData = (asSubway: boolean = false) => {
    const galaxy = Galaxy.instance;
    const linePositions = []
    if (asSubway) galaxy.galacticSubway();
    const data = galaxy.getGalaxyCoordinatesandStatuses()

    const pointPositions = coordinates2Three(data.map(x => x[0]));
    const pointColors = security2Color(data.map(x => x[1]));

    return { pointPositions, pointColors, linePositions }
}