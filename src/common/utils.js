//防抖函数(防止频繁调用参数中的函数,当超过了delay时间后，返回的函数未被调用，则参数函数被调用，否则清除定时器，重新开启定时)
export function debounce(func,delay){
  let timer = null;
  return function(...arg){
    if(timer){clearTimeout(timer)}
    timer = setTimeout(() => {
      func.apply(this,...arg);
    }, delay);
  }
}


//格式化日期函数,可以将日期对象格式化返回日期
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};