// Check for Non-Identical String Rotation
// Given two strings s1 and s2, return 1 if s2 is a rotation of s1 but not identical to s1, otherwise return 0.

function isNonTrivialRotation(s1, s2) {
    if (s1 === "" || s2 === "") {
        return 0
    }

    let combined = s1 + s1
    if (s2 !== s1 && combined.includes(s2)) {
        return 1
    } else {
        return 0
    }

}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}