import eveUniverse from './universe-pretty.json';
import { Galaxy } from './universe';
import { HSV2RGB, RGBtofloat, sectoHSV, coordinatestoGeometry } from '../utils/geometry';

export const generateGeometryData = () => {
    // createGraph();
    const region = "Aridia"
    const galaxy: Galaxy = new Galaxy();

    let start = Date.now();
    galaxy.populateGalaxy(eveUniverse);
    console.log(`Populate Galaxy took: ${Date.now() - start}`);

    start = Date.now();
    // galaxy.regionalSubway(region);
    // galaxy.galacticSubway();
    console.log(`Subway took: ${Date.now() - start}`);
    const data = galaxy.getRegionCoordinatesandStatuses("Lonetrek");
    // const data = galaxy.getGalaxyCoordinatesandStatuses();
    const colors = data.map(x => x[1])
        .map(sectoHSV)
        .map(HSV2RGB)
        .map(RGBtofloat)
        .flatMap(color => [color.r, color.g, color.b]);
    const positions = coordinatestoGeometry(data.map(x => x[0]))

    return { positions, colors };
};