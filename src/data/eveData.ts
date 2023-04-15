import eveUniverse from './universe-pretty.json';
import { Galaxy } from './universe';
import { HSV2RGB, RGBtofloat, sectoHSV, coordinatestoGeometry, type coordinates3D } from '../utils/geometry';
import { Color } from 'three';

export const generateGeometryData = () => {
    // createGraph();
    const galaxy: Galaxy = new Galaxy();
    galaxy.populateGalaxy(eveUniverse);
    const regionCoordinates = galaxy.produceCoordinates("Aridia");

    const coordinates: coordinates3D[] = [];
    const colors: number[] = [];
    const color = new Color();
    const permissibleRegion = "Aridia";

    for (let system of eveUniverse.solarSystems) {
        // if (system.region != permissibleRegion) continue;
        let systemColorRGB = HSV2RGB(sectoHSV(system.security));
        let coordinates3D = { x: system.x, y: system.y, z: system.z };
        let transformedColors = RGBtofloat(systemColorRGB);
        coordinates.push(coordinates3D);
        color.setRGB(transformedColors.r, transformedColors.g, transformedColors.b);
        colors.push(color.r, color.g, color.b);
    }

    // const newCoordinates = forceGrapgh(coordinates);
    // const positions = coordinatestoGeometry(newCoordinates);
    const positions = coordinatestoGeometry(coordinates);

    return { positions, colors };
};