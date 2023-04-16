import {
    LineSegments,
    BufferGeometry,
    LineBasicMaterial,
    Vector3,
} from "three";

export const lineGeometryFromData = (positions: number[][]): LineSegments => {
    const lineGeometry = new BufferGeometry();
    const positionsAsVector3 = positions.map((x) => new Vector3(...x));
    lineGeometry.setFromPoints(positionsAsVector3);

    const lineMaterial = new LineBasicMaterial({
        linewidth: 101,
        color: 0x42255e
    });

    let line: LineSegments = new LineSegments(lineGeometry, lineMaterial);
    line.computeLineDistances();
    return line;
}