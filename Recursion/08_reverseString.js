function runProgram(){
    const string = 'raviranjan'
    let res = reverse(string)
    console.log('res:', res)
}

const reverse = (s)=>{
    if(s.length===0){
        return s;
    }
    n=s.length;
    return s.charAt(n-1)+reverse(s.substring(0,n-1))
}
runProgram()