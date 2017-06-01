'use strict';

function countSameElements(collection) {
  var res = [];
  for(var i=0;i<collection.length;)
  {
    if(collection[i].length > 1)
    {
      var w = [];
      w =collection[i].split("-");
      var r = parseInt(w[1]);
      res.push({key:w[0],count:r});
      i = i+1;
    }
    else
    {
      var k = 0;
      for (var j = i; j < collection.length; j++)
      {
        if (collection[i] === collection[j])
        {
          k++;
        }
      }
      res.push({key: collection[i], count: k});
      i += k;
    }
  }
  return res;
}
