"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe('merge function', () => {
    it('merges three arrays correctly', () => {
        const c1 = [1, 3, 5];
        const c2 = [6, 4, 2]; // descending
        const c3 = [7, 8, 9];
        const result = (0, index_1.merge)(c1, c2, c3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it('handles empty arrays', () => {
        expect((0, index_1.merge)([], [], [])).toEqual([]);
        expect((0, index_1.merge)([1, 2], [], [0])).toEqual([0, 1, 2]);
        expect((0, index_1.merge)([], [2, 1], [3])).toEqual([1, 2, 3]);
    });
    it('handles negative numbers', () => {
        const c1 = [-3, -1];
        const c2 = [-2, -4]; // descending
        const c3 = [0, 1];
        expect((0, index_1.merge)(c1, c2, c3)).toEqual([-4, -3, -2, -1, 0, 1]);
    });
});
