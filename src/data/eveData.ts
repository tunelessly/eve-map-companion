import eveUniverse from './universe-pretty.json';
import {
    Color,
} from "three";

type RGB = {
    r: number,
    g: number,
    b: number
}

type normalizedRGB = RGB;

type HSV = {
    h: number,
    s: number,
    v: number
}

type coordinates3D = {
    x: number,
    y: number,
    z: number
}

const HSV2RGB = (hsv: HSV): RGB => {
    let s = hsv.s / 100;
    let v = hsv.v / 100;
    let c = v * s;
    let hh = hsv.h / 60;
    let x = c * (1 - Math.abs(hh % 2 - 1));
    let m = v - c;

    var p = Math.round(hh);
    var rgb = (
        p === 0 ? [c, x, 0] :
            p === 1 ? [x, c, 0] :
                p === 2 ? [0, c, x] :
                    p === 3 ? [0, x, c] :
                        p === 4 ? [x, 0, c] :
                            p === 5 ? [c, 0, x] :
                                []
    );
    let retVal = {
        r: Math.round(255 * (rgb[0] + m)),
        g: Math.round(255 * (rgb[1] + m)),
        b: Math.round(255 * (rgb[2] + m))
    }
    return retVal;
}

const sectoHSV = (securityStatus: number): HSV => {
    // security status is a number that ranges from -1 to 1
    // values less than 0 will be treated as 0

    const mSecurityStatus = securityStatus < 0 ? 0 : securityStatus;

    // By messing around with a color picker that displays HSV
    // alongside RGB I noticed that sec status matches a rotation
    // around the hue-only, starting at cyan and moving towards red.
    // This should roughly correspond to HSV 180/100/100
    // and thus the security status scales the hue between 180 and 0.

    const hue: number = Math.round((180 * mSecurityStatus));
    return { h: hue, s: 100, v: 100 }
}

const RGBtofloat = (rgb: RGB): normalizedRGB => {
    return { r: rgb.r / 255, g: rgb.g / 255, b: rgb.b / 255 };
}

const coordinatestoGeometry = (coordinates: coordinates3D[]): number[] => {
    let retVal: number[] = [];
    for (let coords of coordinates) {
        retVal.push(coords.x, coords.y, coords.z);
    }
    return retVal;
}

const generateGeometryData = () => {
    const coordinates: coordinates3D[] = [];
    const colors: number[] = [];
    const color = new Color();
    const permissibleRegion = "The Forge";

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

export default generateGeometryData;