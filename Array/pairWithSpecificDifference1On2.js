// TimeComplexity O(n^2)
// SpaceComplexity O(n)

// Brute force 1

function findPairsWithGivenDifference(arr, k) {   
    let res =[]
    for(let i =0;i<arr.length;i++){    
       for(let j=arr.length-1;j>i;j--){
        if(arr[j]-arr[i]===k){
          res.push([arr[j],arr[i]])
          res.push([arr[j],arr[i]])
        }        
      }
      let temp = arr[i]-k
      for(let j=i+1;j<arr.length;j++){
        if(arr[j]===temp) {
          res.push([arr[i],arr[j]])        
        }      
      }   
      
    }
    console.log(res);
  }
  findPairsWithGivenDifference([0, -1, -2, 2, 1], 1)

  // Brute force 2
  
  function findPairsWithGivenDifference(arr, k) {
    // your code goes here
    let res = [ ]
    for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr.length;j++){
        if(arr[j]===(arr[i]+k)){
           let temp = [arr[j],arr[i]]
          res.push(temp)
      }
      }    
    }
    return res
  }
  
  //findPairsWithGivenDifference([0, -1, -2, 2, 1],1)