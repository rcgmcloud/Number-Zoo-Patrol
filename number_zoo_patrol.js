// return the missing number!
function findNumber(array) {
  var sort = array.sort(function(a, b){return a-b;});
  if (sort[0] !== 1){
    return 1;
  }
  for (var i = 0; i < sort.length ; i++){
    if (sort[i+1] - sort[i] !== 1){
      return sort[i]+1;
    }
  }
}