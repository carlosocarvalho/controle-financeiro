export function formatMoney(int: string | number) {
  var tmp = int + "";
  tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
  if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

  return tmp;
}


const SI_POSTFIXES = ["", "k", "M", "G", "T", "P", "E"];


export function abbreviateNumber(number) {

  // what tier? (determines SI prefix)
  var tier = Math.log10(Math.abs(number)) / 3 | 0;

  // if zero, we don't need a prefix
  if(tier == 0) return number;

  // get postfix and determine scale
  var postfix = SI_POSTFIXES[tier];
  var scale = Math.pow(10, tier * 3);

  // scale the number
  var scaled = number / scale;

  // format number and add postfix as suffix
  var formatted = scaled.toFixed(1) + '';
  
  // remove '.0' case
  if (/\.0$/.test(formatted))
    formatted = formatted.substr(0, formatted.length - 2);
  
  return formatted + postfix;
}