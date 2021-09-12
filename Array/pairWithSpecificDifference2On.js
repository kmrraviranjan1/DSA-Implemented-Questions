// TimeComplexity O(nlogn) for worst and O(n) for average
// SpaceComplexity O(n)

function findPairsWithGivenDifference(arr, k) {
  if (k===0) return [];
  let res = [ ]
  let map = {}
  for (x in arr){
      map[arr[x]-k]=arr[x]
  }
  for (y in arr){
    if (arr[y] in map){
      res.push([map[arr[y]],arr[y]])
    }
  }  
 console.log(res)
}

findPairsWithGivenDifference([0, -1, -2, 2, 1],1)