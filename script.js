let a = +prompt("1-son")
let b = +prompt("2-son")
let c = +prompt("3-son")

if (b<a && a<c || c<a && a<b) {
    alert ("O'rta qiymat "+a)
}else if(a<b && b<c || a>b && b>c) {
    alert ("O'rta qiymat "+b)
}else if (a<c && c<b || a>c && c>b) {
    alert ("O'rta qiymat "+c)
}
