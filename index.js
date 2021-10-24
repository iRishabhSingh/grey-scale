function upload() {
    var can = document.getElementById("fgimg");
    var filename = document.getElementById("fgimgbtn");
    var image = new SimpleImage(filename);
    can.className = 'imageWH';
    image.drawTo(can);
}