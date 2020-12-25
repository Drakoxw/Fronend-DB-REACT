
let diaM = 31;

function dia(d, m, a) {
  if (m === 4 || m === 6 || m === 9 || m === 11) {
    diaM = 30
  }
  if (m === 2) {
    if ((a  % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
      diaM = 29
    }else {
      diaM = 28
    }
  }
  if (m < 1 || m > 12) {
    return false
  }
  if (d > diaM) {
    return false
  }
  return (diaM)
}

function sumarDias(dM,ds, d, m) {
  let t = ds + d
  if (t > dM) {
    d = t - dM
    m = m+1
    if (m > 12) {
      m = 1
    }
  }
  return (`${d}-${m}`)
}
/*
let x = dia(30, 9, 1990)
let z = sumarDias(diaM,15,30,09)
console.log(x);
console.log(z);*/

export default dia;