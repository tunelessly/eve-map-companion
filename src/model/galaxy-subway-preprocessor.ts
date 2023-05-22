import type { EvESubway, SystemLike, coordinates3D } from './galaxy.js';

const displacer = (displacement: coordinates3D) => (coordinates: coordinates3D): coordinates3D => {
    return {
        x: coordinates.x + displacement.x,
        y: coordinates.y + displacement.y,
        z: coordinates.z + displacement.z,
    }
}

const id = a => a;
const esoteria = displacer({ x: 500, y: 0, z: 2400 });
const malpais = displacer({ x: -3700, y: 0, z: 0 });
const querious = displacer({ x: 3700, y: 0, z: 1000 });
const sinq_laison = displacer({ x: 800, y: 0, z: -200 });
const syndicate_1 = displacer({ x: 4000, y: 0, z: 2200 });
const syndicate_2 = displacer({ x: 2500, y: 0, z: 1900 });
const syndicate_3 = displacer({ x: 5100, y: 0, z: 0 });
const the_citadel = displacer({ x: -2000, y: 0, z: 750 });
const the_spire = displacer({ x: -2500, y: 0, z: 250 });

const systemRemapCoordinates = {
    // Esoteria
    "B1D-KU": esoteria,
    "6SB-BN": esoteria,
    "KSM-1T": esoteria,
    "YRV-MZ": esoteria,
    "2R-KLH": esoteria,
    "QFIU-K": esoteria,
    // Malpais
    "POQP-K": malpais,
    "FO9-FZ": malpais,
    "4QY-NT": malpais,
    "0-N1BJ": malpais,
    "T-8GWA": malpais,
    "UW-6MW": malpais,
    // Querious
    "F2OY-X": querious,
    "4-2UXV": querious,
    "RKM-GE": querious,
    "L-FVHR": querious,
    "DG-L7S": querious,
    "K4-RFZ": querious,
    "8-YNBE": querious,
    "E-VKJV": querious,
    "YQX-7U": querious,
    "QY1E-N": querious,
    "BX-VEX": querious,
    "B-7DFU": querious,
    // Sinq Laison
    "Gratesier": sinq_laison,
    "Schoorasana": sinq_laison,
    // Syndicate
    "51-5XG": syndicate_1,
    "RLL-9R": syndicate_1,
    "UFXF-C": syndicate_1,
    "4L-E5P": syndicate_1,
    "57-YRU": syndicate_1,
    "0T-AMZ": syndicate_1,
    // Syndicate 2
    "GRNJ-3": syndicate_2,
    "EF-F36": syndicate_2,
    "DUV-5Y": syndicate_2,
    "3-IN0V": syndicate_2,
    "Z-QENW": syndicate_2,
    "D-B7YK": syndicate_2,
    // Syndicate 3
    "VSIG-K": syndicate_3,
    "RSS-KA": syndicate_3,
    "EU0I-T": syndicate_3,
    "DCHR-L": syndicate_3,
    "G-6SXJ": syndicate_3,
    "CIS-7X": syndicate_3,
    "4-JWWQ": syndicate_3,
    // The Citadel
    "Inoue": the_citadel,
    "Isaziwa": the_citadel,
    "Eitu": the_citadel,
    "Horkkisen": the_citadel,
    "Erila": the_citadel,
    "Ohvosamon": the_citadel,
    "Auviken": the_citadel,
    "Saikanen": the_citadel,
    "Oijamon": the_citadel,
    "Kakki": the_citadel,
    "Jeras": the_citadel,
    "Kausaaja": the_citadel,
    "Oiniken": the_citadel,
    "Kaimon": the_citadel,
    "Ahynada": the_citadel,
    "Aikoro": the_citadel,
    "Alikara": the_citadel,
    "Usi": the_citadel,
    "Ishomilken": the_citadel,
    "Nikkishina": the_citadel,
    "Hasama": the_citadel,
    "Uuna": the_citadel,
    "Manjonakko": the_citadel,
    "Paara": the_citadel,
    "Annaro": the_citadel,
    "Isutaka": the_citadel,
    "Tasabeshi": the_citadel,
    "Ono": the_citadel,
    "Muvolailen": the_citadel,
    // The Spire
    "ZWM-BB": the_spire,
    "7-QOYS": the_spire,
    "LH-LY1": the_spire,
    "OTJ9-E": the_spire,
    "KS8G-M": the_spire,
    "S-CUEA": the_spire,
}

const offendingRegions = [
    "Esoteria",
    "Malpais",
    "Querious",
    "Sinq Laison",
    "Syndicate",
    "The Citadel",
    "The Spire",
]

export const regionTranslator = (data: EvESubway): EvESubway => {
    Object.keys(data).forEach(key => {
        const region = data[key];
        const boundingBox = region.reduce((acc, val) => {
            const x = val.coordinates.x;
            const y = val.coordinates.y;
            const z = val.coordinates.z;
            const corner1 = acc.corner1;
            const corner2 = acc.corner2;
            if (x <= corner1[0]) corner1[0] = x;
            if (y <= corner1[1]) corner1[1] = y;
            if (z <= corner1[2]) corner1[2] = z;
            if (x >= corner2[0]) corner2[0] = x;
            if (y >= corner2[1]) corner2[1] = y;
            if (z >= corner2[2]) corner2[2] = z;
            acc.center = [(corner2[0] + corner1[0]) / 2, (corner2[1] + corner1[1]) / 2, (corner2[2] + corner1[2]) / 2];
            return acc;
        }, {
            corner1: [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
            corner2: [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER],
            center: [0, 0, 0]
        });
        const center = boundingBox.center;
        const translationVec = [-center[0], -center[1], -center[2]];
        region.forEach(system => {
            const coordinates = system.coordinates;
            coordinates.x += translationVec[0];
            coordinates.y += translationVec[1];
            coordinates.z += translationVec[2];
        });
    });

    return data;
}

export const regionPreProcess = (data: EvESubway): EvESubway => {

    offendingRegions.forEach(regionName => {
        const systemsOfInterest = offendingRegions[regionName];
        const systems = data[regionName];
        console.log(`Preprocessing region ${regionName}`);

        systems.forEach((system: SystemLike) => {
            if (system.name in systemRemapCoordinates) {
                console.log(`\tSystem matched: ${system.name} x: ${system.coordinates.x} z: ${system.coordinates.z}`);
                const displacer = systemRemapCoordinates[system.name];
                if (displacer !== undefined) {
                    const newPosition: coordinates3D = displacer(system.coordinates);
                    system.coordinates = newPosition;
                }
            }
        });
    });

    return data;
}