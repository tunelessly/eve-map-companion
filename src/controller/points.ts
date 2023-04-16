import {
    Points,
    BufferGeometry,
    PointsMaterial,
    Float32BufferAttribute,
} from "three";

export const pointGeometryFromData = (positions: number[], colors: number[]): Points => {
    const pointGeometry = new BufferGeometry();
    pointGeometry.setAttribute(
        "position",
        new Float32BufferAttribute(positions, 3)
    );
    pointGeometry.setAttribute(
        "color",
        new Float32BufferAttribute(colors, 3)
    );
    pointGeometry.computeBoundingSphere();


    let radius = pointGeometry.boundingSphere.radius;
    console.log(`Radius: ${radius}`);
    const size = radius / 40;
    const pointMaterial = new PointsMaterial({
        size: size,
        vertexColors: true,
        opacity: 0.5
    });

    let points: Points = new Points(pointGeometry, pointMaterial);
    return points;
}