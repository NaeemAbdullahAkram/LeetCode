/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    const [r1x1, r1y1, r1x2, r1y2] = rec1
    const [r2x1, r2y1, r2x2, r2y2] = rec2

    return r1x1 < r2x2 
        && r1x2 > r2x1
        && r1y1 < r2y2
        && r1y2 > r2y1
};