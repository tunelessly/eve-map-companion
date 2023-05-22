import {
    BufferGeometry,
    Float32BufferAttribute,
    PointsMaterial
} from "three";

export const pointGeometryFromData = (positions: number[], colors: number[]): BufferGeometry => {
    const pointGeometry = new BufferGeometry();
    pointGeometry.setAttribute(
        "position",
        new Float32BufferAttribute(positions, 3)
    );
    pointGeometry.setAttribute(
        "color",
        new Float32BufferAttribute(colors, 3)
    );

    return pointGeometry;
}

export const materialFromData = (boundingSphereRadius: number): PointsMaterial => {
    console.log(`Bounding sphere radius after: ${boundingSphereRadius}`);
    const pointMaterial = new PointsMaterial({
        size: boundingSphereRadius,
        vertexColors: true,
        opacity: 1
    });
    return pointMaterial;
}