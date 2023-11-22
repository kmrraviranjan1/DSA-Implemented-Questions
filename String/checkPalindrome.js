function checkPalindrome(N, str) {
    //write code here
    let left = 0;
    let right = str.length-1;
    let flag = true;
    // Approach: -1
    let tempStr = str.join('')
    let reverse = str.reverse().join('')

    if(tempStr==reverse){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
    // Approach:-2
    //   while(left<=right){
    //       if(str[left]!=str[right]){
    //           flag = false
    //           break;
    //       }
    //   }
    //   console.log(flag?"Yes":"No")
}
