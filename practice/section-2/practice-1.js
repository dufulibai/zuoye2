'use strict';

function countSameElements(collection) {
  var res = [];
  for(var i=0;i<collection.length;)
  {
    var k = 0;
    for(var j=i;j < collection.length ;j++)
    {
      if (collection[i] === collection[j])
      {
        k++;
      }
    }
    res.push({key:collection[i],count:k});
    i += k;
  }
  return res;
}
