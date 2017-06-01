'use strict';

function collectSameElements(collectionA, collectionB) {
  var res = new Array();
  var c = 0;
  for(var i=0;i<collectionA.length ;i++)
  {
    for(var j=0;j<collectionB.length;j++)
    {
      if(collectionA[i] ===collectionB[j])
      {
        res[c] = collectionA[i];
        c ++;
      }
    }
  }
  return res;
}
