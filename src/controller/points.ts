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
    // pointGeometry.scale(1000, 1000, 1000);
    // pointGeometry.computeBoundingSphere();
    // pointGeometry.center();


    // let radius = pointGeometry.boundingSphere.radius;
    let arbitraryPointScalingFactor = 25;
    const pointMaterial = new PointsMaterial({
        size: 1 / arbitraryPointScalingFactor,
        vertexColors: true,
    });

    let points: Points = new Points(pointGeometry, pointMaterial);
    return points;
}