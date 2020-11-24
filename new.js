function meo(color) {
    this.color = color;
    this.live = true;
}
meo.prototype.die = function () {
    this.live = false;
}
var mickey = new meo("red");
console.log(mickey);