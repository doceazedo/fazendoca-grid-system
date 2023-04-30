import { assert, describe, expect, it } from 'vitest'
import { GridCell, buildAt, canBuildAt } from '../src';

const farmGrid: GridCell[] = [];

describe('different building sizes', () => {
  it('can build at empty cell', () => {
    assert(buildAt(farmGrid, 'GENERIC', 0, 0));
  });

  it('cannot build at occupied cell', () => {
    expect(canBuildAt(farmGrid, 'GENERIC', 0, 0)).toBeFalsy();
  });

  it('can build HOUSE at empty cell', () => {
    assert(buildAt(farmGrid, 'HOUSE', 1, 1));
  });

  it('HOUSE cell at 1;1 is occupied', () => {
    expect(canBuildAt(farmGrid, 'GENERIC', 1, 1)).toBeFalsy();
  });

  it('HOUSE cell at 2;2 is occupied', () => {
    expect(canBuildAt(farmGrid, 'GENERIC', 2, 2)).toBeFalsy();
    expect(canBuildAt(farmGrid, 'HOUSE', 2, 2)).toBeFalsy();
  });

  it('cannot build in between a building position and its size', () => {
    assert(buildAt(farmGrid, 'GIGANTIC_SHIT', 4, 4));
    expect(canBuildAt(farmGrid, 'GENERIC', 4, 4)).toBeFalsy();
    expect(canBuildAt(farmGrid, 'GENERIC', 5, 5)).toBeFalsy();
    expect(canBuildAt(farmGrid, 'GENERIC', 6, 6)).toBeFalsy();
    expect(canBuildAt(farmGrid, 'GENERIC', 7, 7)).toBeFalsy();
    expect(canBuildAt(farmGrid, 'GENERIC', 8, 8)).toBeFalsy();
    expect(canBuildAt(farmGrid, 'GENERIC', 9, 9)).toBeFalsy();
  });
});

describe.todo('different farm sizes');
