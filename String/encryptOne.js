const input = `All-convoYs-9-be:Alert1.
4`
const output = 'Epp-gsrzsCw-3-fi:Epivx5.'
function runProgram(input) {
    const smallAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const bigAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const numsKey = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    const rawkey = input.split('\n')[0]
    const swap = Number(input.split('\n')[1])
    let output =''
    for (let i = 0; i < rawkey.length; i++) {
        const oldKey = rawkey[i]
        let sweepCase = smallAlphabets.includes(oldKey) ? "a" : bigAlphabets.includes(oldKey) ? "A" : numsKey.includes(oldKey) ? '1' : null
        const newCase = {
            'a':getEncrypted(smallAlphabets,oldKey,swap),
            'A':getEncrypted(bigAlphabets,oldKey,swap),
            '1':getEncrypted(numsKey,oldKey,swap)
        }
        let newKey =newCase[sweepCase]|| rawkey[i]
        output+=newKey
    }

    function getEncrypted (ipArray,key,rotate){
        let rotateLength = ipArray.indexOf(key) +rotate
        if(rotateLength>ipArray.length){
            rotateLength= getArrayLength(ipArray.length,rotateLength)
        }
        return ipArray[rotateLength]
    }
    function getArrayLength (arrayLength,length){
        if(arrayLength>length){
            return length
        }

        return getArrayLength(arrayLength,length-arrayLength)
    }
    return output
}

console.log(runProgram(input))

// switch (oldKey) {
//     case smallAlphabets.includes(oldKey):

//         break;
//     case bigAlphabets.includes(oldKey):
//         console.log("bigAlphabets, oldKey: ", oldKey);
//         break;
//     case numsKey.includes(oldKey):
//         console.log("numsKey, oldKey: ", oldKey);
//         break;
// }