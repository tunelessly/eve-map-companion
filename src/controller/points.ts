import {
    Points,
    BufferGeometry,
    PointsMaterial,
    Float32BufferAttribute,
    Sphere,
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
    let arbitraryPointScalingFactor = 10;
    const pointMaterial = new PointsMaterial({
        size: radius / arbitraryPointScalingFactor,
        vertexColors: true,
    });

    let points: Points = new Points(pointGeometry, pointMaterial);
    return points;
}