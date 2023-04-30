export type GridCell = {
  type: string;
  x: number;
  y: number;
}

const BUILDING_CUSTOM_SIZES = new Map([
  ['PLOT', { width: 2, height: 2 }],
  ['HOUSE', { width: 3, height: 3 }],
  ['GIGANTIC_SHIT', { width: 6, height: 6 }],
]);

const getBuildingSize = (type: string) => {
  const buildingSize = BUILDING_CUSTOM_SIZES.get(type);
  return {
    width: buildingSize?.width || 1,
    height: buildingSize?.height || 1
  }
}

export const canBuildAt = (grid: GridCell[], type: string, x: number, y: number) => {
  const { width, height } = getBuildingSize(type);

  for (let gridX = x; gridX < x + width; gridX++) {
    for (let gridY = y; gridY < y + height; gridY++) {
      const isOccupied = grid.some((building) => {
        const cellBuildingSize = BUILDING_CUSTOM_SIZES.get(building.type);
        const cellWidth = cellBuildingSize?.width || 1;
        const cellHeight = cellBuildingSize?.height || 1;
        return (
          gridX >= building.x &&
          gridX < building.x + cellWidth &&
          gridY >= building.y &&
          gridY < building.y + cellHeight
        );        
      });
      if (isOccupied) return false;
    }
  }

  return true;
}

export const buildAt = (grid: GridCell[], type: string, x: number, y: number) => {
  const canBuild = canBuildAt(grid, type, x, y);
  if (!canBuild) return false;

  grid.push({ type, x, y });
  return true;
}
