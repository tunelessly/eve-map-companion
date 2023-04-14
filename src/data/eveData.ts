import eveUniverse from './universe-pretty.json';
import { HSV2RGB, RGBtofloat, sectoHSV, coordinatestoGeometry, type coordinates3D, type HSV, type RGB, type normalizedRGB } from '../utils/geometry';
import { Color } from 'three';

export const generateGeometryData = () => {
    const coordinates: coordinates3D[] = [];
    const colors: number[] = [];
    const color = new Color();
    const permissibleRegion = "Pochven";

    for (let system of eveUniverse.solarSystems) {
        if (system.region != permissibleRegion) continue;
        let systemColorRGB = HSV2RGB(sectoHSV(system.security));
        let coordinates3D = { x: system.x, y: system.y, z: system.z };
        let transformedColors = RGBtofloat(systemColorRGB);
        coordinates.push(coordinates3D);
        color.setRGB(transformedColors.r, transformedColors.g, transformedColors.b);
        colors.push(color.r, color.g, color.b);
    }
    let positions = coordinatestoGeometry(coordinates);

    return { positions, colors };
};