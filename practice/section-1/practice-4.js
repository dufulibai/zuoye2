'use strict';

function collectSameElements(collectionA, objectB) {
  var res = new Array();
  var c = 0;
  for(var i=0;i<collectionA.length ;i++)
  {
    for(var j=0;j<objectB.value.length;j++)
    {
      if(collectionA[i].key ===objectB.value[j])
      {
        res[c] = collectionA[i].key;
        c ++;
      }
    }
  }
  return res;
}
