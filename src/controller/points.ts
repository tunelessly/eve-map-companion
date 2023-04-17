import {
    Points,
    BufferGeometry,
    PointsMaterial,
    Float32BufferAttribute,
} from "three";

export const pointGeometryFromData = (positions: number[], colors: number[], radiusMagnitude: number): Points => {
    const numberofPoints = positions.length / 3;
    const pointGeometry = new BufferGeometry();
    pointGeometry.setAttribute(
        "position",
        new Float32BufferAttribute(positions, 3)
    );
    pointGeometry.setAttribute(
        "color",
        new Float32BufferAttribute(colors, 3)
    );


    // const size = scalingFactor / ((numberofPoints < 100) ? 50 : 100);
    // const size = 5 * scalingFactor / numberofPoints;
    console.log(`Size: ${radiusMagnitude / Math.sqrt(numberofPoints)}, number of things: ${positions.length / 3}`);
    const pointMaterial = new PointsMaterial({
        size: radiusMagnitude / Math.sqrt(numberofPoints),
        vertexColors: true,
        opacity: 1
    });

    let points: Points = new Points(pointGeometry, pointMaterial);
    return points;
}