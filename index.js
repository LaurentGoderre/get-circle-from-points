export function getCircleFromPoints(point1, point2, angle) {
  const diffX = point2[0] - point1[0];
  const diffY = point2[1] - point1[1];

  const segmentLength = Math.sqrt(
    diffX ** 2 + diffY ** 2
  );

  const radius = (segmentLength / 2) / Math.sin(angle / 2);
  const angle2 = (Math.PI / 2) - (Math.asin(diffY / segmentLength)) - ((Math.PI - angle) / 2);
  const centerX = point1[0] + (Math.sin(angle2) * radius) * (diffX !== 0 ? diffX / Math.abs(diffX) : 1);
  const centerY = point1[1] + Math.cos(angle2) * radius;

  return {
    r: radius,
    cx: centerX,
    cy: centerY
  }
}
