var myVar = setInterval (function () {Clock ()}, 1000);

function Clock () {

a = new Ngày ();

w = Array ("Chủ Nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy");

var a = w [a.getDay ()],

w = Ngày mới,

d = w.getDate ();

m = w.getMonth () + 1;

y = w.getFullYear ();

h = w.getHours ();

mi = w.getMinutes ();

se = w.getSeconds ();

nếu (10> d) {d = "0" + d}

nếu (10> m) {m = "0" + m}

nếu (10> h) {h = "0" + h}

if (10> mi) {mi = "0" + mi}

if (10> se) {se = "0" + se}

document.getElementById ("time"). innerHTML = "" + a + "," + d + "/" + m + "/" + y + "-" + h + ":" + mi + ":" + se + "";

}

