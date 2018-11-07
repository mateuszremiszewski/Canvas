document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM JEST GIT ');

    // Tworzenie canvas zapisanie do zmiennej
    const myCanvas = document.createElement('canvas');
    myCanvas.width = 500;
    myCanvas.height = 500;

    // Dodanie elementu do body
    document.body.appendChild(myCanvas);

    // Złapanie context dla canvas i okreśenie contextu dla 2d
    const ctx = myCanvas.getContext('2d');

    //(od lewej strony gdzie ma się zacząć, od góry gdzie ma się zaczac,  szerokość, wysokosc ) wszystko w px
    ctx.fillRect(100, 70, 200, 60 )





});