function sortTheStudents(score: number[][], k: number): number[][] {

    // initialize callback function with array a and b as paramter
    const callBack = (a: number[], b: number[]): number => {

        // if array b[k] is greater than array a[k] then return 1
        if (b[k] > a[k]) return 1;

        // if array b[k] is equal tto array a[k] then return 0
        if (b[k] === a[k]) return 0;

        // if array b[k] is less than array a[k] then return -1
        if (b[k] < a[k]) return -1;
    }

    // sort the array score pass callback function as argument
    return score.sort(callBack)
};