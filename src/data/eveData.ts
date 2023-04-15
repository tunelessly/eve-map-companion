import eveUniverse from './universe-pretty.json';
import { Galaxy } from './universe';
import { HSV2RGB, RGBtofloat, sectoHSV, coordinatestoGeometry, type coordinates3D } from '../utils/geometry';
import { Color } from 'three';

export const generateGeometryData = () => {
    // createGraph();
    const region = "Aridia"
    const galaxy: Galaxy = new Galaxy();

    console.log(Date.now());
    galaxy.populateGalaxy(eveUniverse);
    console.log(Date.now());

    const colors = galaxy
        .produceSecurityStatuses(region)
        .map(sectoHSV)
        .map(HSV2RGB)
        .map(RGBtofloat)
        .flatMap(color => [color.r, color.g, color.b]);
    const positions = coordinatestoGeometry(galaxy.produceCoordinates(region));

    return { positions, colors };
};