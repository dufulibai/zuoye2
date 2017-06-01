'use strict';
function fenjie(element) {
  let k = [/(\w{1})\[(\d+)\]/, /(\w{1})\:(\d+)/, /(\w{1})\-(\d+)/]
    .find((reg) => element.match(reg));
  let h = element.match(k);
  let ki = {name: h[1], count: parseInt(h[2])};
  return ki;
}
function countSameElements(collection) {
  let res = [];

  for (let element of collection) {
    let n, s;
    if (element.length === 1) {
      n = element;
      s = 1;
    }
    else {
      let a = fenjie(element);
      n = a.name;
      s = a.count;
    }
    let entry = res.find((e) => e.name === n);
    if (entry) {
      entry.summary += s;
    }
    else {
      res.push({name: n, summary: s});
    }
  }
  return res;
}
