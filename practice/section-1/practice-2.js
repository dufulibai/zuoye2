'use strict';

function collectSameElements(collectionA, collectionB) {
    var res = new Array();
    var c = 0;
    for(var i=0;i<collectionA.length ;i++)
    {
      for(var j=0;j<collectionB.length;j++)
      {
        for(var k=0;k<collectionB[j].length;k++)
        {
          if(collectionA[i] ===collectionB[j][k])
          {
            res[c] = collectionA[i];
            c ++;
          }
        }
      }
    }
  return res;
}
