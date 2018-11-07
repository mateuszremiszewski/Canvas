document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM JEST GIT ');

    // Tworzenie canvas zapisanie do zmiennej
    const myCanvas = document.createElement('canvas');
    myCanvas.width = 500;
    myCanvas.height = 500;

    // Dodanie elementu do body
    document.body.appendChild(myCanvas);

    // Złapanie context dla canvas i okreśenie contextu dla 2d (jest jeszcze 3d)
    const ctx = myCanvas.getContext('2d');

    //Metoda określająca gdzie ma się zaczynać rysunek oraz jakie ma mieć wymiary. Metoda z wypełnieniem.
    //(od lewej strony gdzie ma się zacząć, od góry gdzie ma się zaczac,  szerokość, wysokosc ) wszystko w px
    ctx.fillRect(10, 10, 200, 60 );

    //Metoda rysowania samego konturu
    //Identyczne argumenty jak dla fillRect()
    ctx.strokeRect(230, 10, 50, 30);

    //Metoda czyszczenia usuwania
    //Identyczne argumenty jak dla fillRect()
    ctx.clearRect(50,30,50,50);

    //Metoda przesunięcia ustawienia punktu w którym zaczyna się rysunek linii
    //Argumenty x i y od okna przegladarki
    ctx.moveTo(30,80);

    //Metoda rysowania lini

    //Jeśli chcemy żeby figura domknęła się automatycznie używamy metody ponieżej wraz z metodą closePath()
    ctx.beginPath();

    //Argumenty x i y od okna przegladarki
    //Na tym etapie nie widać jeszcze figury
    ctx.lineTo(130, 80);
    ctx.lineTo(130, 180);
    ctx.lineTo(30,80);

    //Dajemy znak, że chcemy żeby dziura została automatycznie domknięta.
    ctx.closePath();

    //Metoda ta wypełni figurę tłem (jesli jest niezamknieta to zrobi to również)
    // ctx.fill();
    //Metoda ta zarysuje kontur nadany wcześniej bez tła
    ctx.stroke();

    const radiany = Math.PI / 180 * 45; //wzór do wyliczenia radianów - ostatnia liczba określa kąt paczatkowy jaki chcemy uzyskać w metodzie arc()

    ctx.beginPath();
    // (x, y, promien, kąt poczatkowy - z którego punktu na kole zaczynamy rysować (w radianach - patrz zmienna radiany),
    // kąt do którego ma pojść elmement, ruch zgodnie albo przeciwnie do ruchu wskazówek zegara (true || false)

    // Na razie to tylko zdefiniowanie ścieżki
    ctx.arc(300, 180, 100, Math.PI / 180 * 45, Math.PI / 180 * -120, true);

    //Narysowanie linii
    ctx.stroke();

    //KRZYWA BAZIERA

    ctx.beginPath(); // rozpoczęcie ścieżki
    ctx.moveTo(200,300); // wyznaczenie punktu początkowego
    //(pierwszy punkt kontroly x, pierwszy punkt kontroly y, drugi punkt kontrolny x drugi punkt kontroly y,
    // x i y własciwego punktu)
    ctx.bezierCurveTo(200, 100, 400, 400, 400, 250);
    //Zrobienie linii
    ctx.stroke();

    //WYCINANIE OTWORÓW W INNYCH KSZTAŁTACH

    //pierwszy element (tło)
    //poprowadzony zgodnie z ruchem wskazówek zegara

    ctx.beginPath();
    ctx.moveTo(10,270); // ustawienie punktu od którego zaczyna się rysownie linii
    ctx.lineTo(160,270);
    ctx.lineTo(160,350);
    ctx.lineTo(10,350);

    //drugi element ( element mający być wycięty w tle)
    //jeśli ten element ma być wyciety z pierwszego to muszi być poprowadzony przeciwnie do ruchu wskazówek zegara

    ctx.moveTo(15, 290); //ustawienie punktu startowego
    ctx.lineTo(15, 325);
    ctx.lineTo(95,325);
    ctx.lineTo(95,290);
    ctx.lineTo(15,290);

    //wypełnienie tła kolorem
    ctx.fill();

    //ZMIANA KOLORU
    //Można kolor określić w HEX, RGB, RGBA(z przezroczystoscia)
    ctx.fillStyle = "#c23c3c";
    ctx.fillRect(10,400,50,50);

    ctx.fillStyle = "rgb(215,81,150)";
    ctx.fillRect(70,400,50,50);

    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.fillRect(130,400,50,50);


});