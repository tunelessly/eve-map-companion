import {
    LineSegments,
    BufferGeometry,
    LineDashedMaterial,
    Vector3,
} from "three";

export const lineGeometryFromData = (positions: number[][]): LineSegments => {
    const lineGeometry = new BufferGeometry();
    const positionsAsVector3 = positions.map((x) => new Vector3(...x));
    lineGeometry.setFromPoints(positionsAsVector3);
    lineGeometry.scale(1000, 1000, 1000);
    lineGeometry.computeBoundingSphere();
    lineGeometry.center();

    const lineMaterial = new LineDashedMaterial({
        linewidth: 101,
        color: 0x42255e,
        scale: 0.1,
        dashSize: 0.3,
        gapSize: 0.1,
    });

    let line: LineSegments = new LineSegments(lineGeometry, lineMaterial);
    return line;
}