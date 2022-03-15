//gizliSayi isimli degisken tanimladim. random olarak bir sayiyi gizliSayi degiskenine atadim.
let gizliSayi=Math.trunc( Math.random()*20)+1;
//trunc int'e cevirir

//degiskenler tanimladim.
let skor=20,yuksekSkor=0;

//mesajiGoruntule isimli fonksiyon olusturdum.message degeri alacak.
//diger alanlarda kısayol olarak fonksiyonu cagiricam
const mesajiGoruntule=function(message){
    //html'de tanimladigim mesaj classini cekip icindeki degeri message degiskenine atadim. 
    document.querySelector('.mesaj').textContent=message;
};


    //btn1 isimli class'i cekip bir olay olusturdum.basilinca bir fonksiyon calistiricak.
    document.querySelector('.btn1').addEventListener('click',function(){
        //tahmin isimli degisken tanimladim.tahmin class'ina girilen degeri sayiya cevirip tahmin degiskenine atayacak.
        const tahmin=Number(document.querySelector('.tahmin').value);

        //input bos girilirse yani tahmin class'ima deger girilmezse.
        if(!tahmin)
        {
            //Sayi giriniz!! mesajini ekrana yazdiricak.
            mesajiGoruntule('Sayi giriniz!');
        }

        //sayilar eslesirse yani kazanildiginda
        else if(tahmin===gizliSayi)
        {
            //Doğru Tahmin! yazsin.
            mesajiGoruntule("Doğru Tahmin!");
            //gizli olan sayi ile girdigimiz sayiyi esitledik.
            document.querySelector('.sayi').textContent=gizliSayi;
            document.querySelector('body').style.backgroundColor='#60b347';
            //dogru bilinirse ekran rengide yesil olacak ve yazi boyutu 30rem olacak.
            document.querySelector('.sayi').style.width='30rem';

        //eger skor yuksekSkor'dan buyukse yeni yuksek skor olacak.
        if(skor>yuksekSkor)
        {
            //yuksekSkor'u skora esitledim.
            yuksekSkor = skor;
            //yazi olarakta skoru yuksek skor olarak degistirdim.
            document.querySelector('.yuksek').textContent='En Yuksek Skor:'+yuksekSkor;
        }
        }

         //sayilar eslesmemis ise
        else
        {
            //kisaca if else yaptim tahmin gizliSayidan buyukse cok yuksek yazsin degilse cok dusuk yazsin.
            mesajiGoruntule(tahmin>gizliSayi ? 'Çok Yüksek':'Çok Düşük');
        
            //skor class'imin icindeki deger skor olacak.
            document.querySelector('.skor').textContent=skor;
     

        }
});

    //tekrar baslata basilinca eskiye donme.yeni bir olay olusturdum tiklayinca bir fonksiyon calistiricak.
    document.querySelector('.btn').addEventListener('click',function(){
        //skor yeniden 20 olacak.
        skor=20;
        //yeni bir gizli sayi uretilecek.
        gizliSayi=Math.trunc( Math.random()*20)+1;
        //eski ayarlar ve yazilar geri donecek
        mesajiGoruntule('Tahmin Et');
        document.querySelector('.skor').textContent='Skor:'+skor;
        document.querySelector('.sayi').textContent='?';
        document.querySelector('.tahmin').textContent='';
        document.querySelector('.yuksek').textContent='En yuksek skor:'+yuksekSkor;

        document.querySelector('body').style.backgroundColor='#008080';
        document.querySelector('.sayi').style.width='15rem';


});