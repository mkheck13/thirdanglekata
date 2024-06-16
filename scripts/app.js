// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.


// I did this one in C# before, I remember that it should be 180 for a triangle
// so to get the other angle I want to subtract a and b from 180 to get the angle of c

function otherAngle(a, b){
    let c = 180 - (a + b);
    return c;
}