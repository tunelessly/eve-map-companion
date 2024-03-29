type normalizedRGB = RGB;

export type RGB = {
    r: number,
    g: number,
    b: number
}

type HSV = {
    h: number,
    s: number,
    v: number
}

export const RGBtofloat = (rgb: RGB): normalizedRGB => {
    return { r: rgb.r / 255, g: rgb.g / 255, b: rgb.b / 255 };
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
    const mSecurityStatus = securityStatus < 0 ? 0 : securityStatus;

    // By messing around with a color picker that displays HSV
    // alongside RGB I noticed that sec status matches a rotation
    // around the hue-only, starting at cyan and moving towards red.
    // This should roughly correspond to HSV 180/100/100
    // and thus the security status scales the hue between 180 and 0.

    let hue: number;
    if (securityStatus < 0) {
        hue = Math.round(270 - mSecurityStatus * 90);
    }
    else {
        hue = Math.round(180 * mSecurityStatus);
    }

    return { h: hue, s: 100, v: 100 }
}