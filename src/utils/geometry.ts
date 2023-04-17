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

export type coordinates3D = {
    extra?: any
    x: number,
    y: number,
    z: number
}

export const HSV2RGB = (hsv: HSV): RGB => {
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

export const sectoHSV = (securityStatus: number): HSV => {
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

export const RGBtofloat = (rgb: RGB): normalizedRGB => {
    return { r: rgb.r / 255, g: rgb.g / 255, b: rgb.b / 255 };
}

export const coordinatestoGeometry = (coordinates: coordinates3D[]): number[] => {
    let retVal: number[] = [];
    for (let coords of coordinates) {
        retVal.push(coords.x, coords.y, coords.z);
    }
    return retVal;
}

export const linestoGeometry = (coordinates: [coordinates3D, coordinates3D][]): number[][] => {
    const retVal: number[][] = [];
    // const toPrint = {};
    for (let coords of coordinates) {
        let originSystem = coords[0];
        let targetSystem = coords[1];
        if (originSystem === undefined && targetSystem === undefined) continue; // TODO
        retVal.push([originSystem.x, originSystem.y, originSystem.z]);
        retVal.push([targetSystem.x, targetSystem.y, targetSystem.z]);
    }
    return retVal;
}
