

// DST OFF in March 1997

// Zero-indexed month
let start = Date.UTC(1997, 2, 31, 02, 24, 0);
let now = Date.now();

let msElapsed = now - start;
let sElapsed = Math.floor(msElapsed/1000);
let minElapsed = Math.floor(msElapsed/60000);
let hrElapsed = Math.floor(msElapsed/3600000);
let dayElapsed = Math.floor(msElapsed/86400000);
let intentionalElapsed = hrElapsed - (dayElapsed * 9);
let end = Date.UTC(2073, 2, 31, 02, 24, 0);

let msRemain = end - now;
let sRemain = Math.floor(msRemain/1000);
let minRemain = Math.floor(msRemain/60000);
let hrRemain = Math.floor(msRemain/3600000);
let dayRemain = Math.floor(msRemain/86400000);
let intentionalRemain = hrRemain - (dayRemain * 9);
//alert(intentionalElapsed);

document.getElementById("past").innerText = "Body Clock: "  + hrElapsed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("future").innerText = "Remaining: "  + intentionalRemain.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
