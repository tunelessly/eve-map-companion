import type { EvESubway, SystemLike } from './galaxy.js';
import type { coordinates3D } from '../utils/geometry.js';


const displacer = (displacement: coordinates3D) => (coordinates: coordinates3D): coordinates3D => {
    return {
        x: coordinates.x + displacement.x,
        y: coordinates.y + displacement.y,
        z: coordinates.z + displacement.z,
    }
}

const id = a => a;
const esoteria = displacer({ x: 500, y: 0, z: 2300 });
const malpais = displacer({ x: -3700, y: 0, z: 0 });
const querious = displacer({ x: 3700, y: 0, z: 1000 });
const sinq_laison = displacer({ x: 800, y: 0, z: -200 });

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

export const regionPreProcess = (data: EvESubway): EvESubway => {

    offendingRegions.forEach(regionName => {
        const systemsOfInterest = offendingRegions[regionName];
        const systems = data[regionName];
        console.log(`Preprocessing region ${regionName}: ${systemsOfInterest}`);

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