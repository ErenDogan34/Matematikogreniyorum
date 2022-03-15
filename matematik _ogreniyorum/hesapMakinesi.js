//class ismi container olan div'in icindeki inputu cekip degiskene atadim.
let giris=document.querySelector('.container input');
//class ismi container olan div'in icindeki buttonlari cekip degiskene atadim.
let buton=document.querySelector('.container button');


//sayilar icin fonksiyon tanimaldim. 

function sayi1(){giris.value+='1';}
//sayi1() fonksiyonu basilinca ekrana 1 yazacak.
function sayi2(){giris.value+='2';}
//sayi2() fonksiyonu basilinca ekrana 2 yazacak.
function sayi3(){giris.value+='3';}
//sayi3() fonksiyonu basilinca ekrana 3 yazacak.
function sayi4(){giris.value+='4';}
//sayi4() fonksiyonu basilinca ekrana 4 yazacak.
function sayi5(){giris.value+='5';}
//sayi5() fonksiyonu basilinca ekrana 5 yazacak.
function sayi6(){giris.value+='6';}
//sayi6() fonksiyonu basilinca ekrana 6 yazacak.
function sayi7(){giris.value+='7';}
//sayi7() fonksiyonu basilinca ekrana 7 yazacak.
function sayi8(){giris.value+='8';}
//sayi8() fonksiyonu basilinca ekrana 8 yazacak.
function sayi9(){giris.value+='9';}
//sayi9() fonksiyonu basilinca ekrana 9 yazacak.
function sayi0(){giris.value+='0';}
//sayi0() fonksiyonu basilinca ekrana 0 yazacak.
function nokta(){giris.value+='.';}
//nokta() fonksiyonu basilinca ekrana . yazacak.

//silme adli degiskene sil() fonksiyonunu atadim.buda ekrani temizleyecek.
var silme=function sil()
{
    giris.value='';
}

//operatorlerin fonksiyonlarini tanimladim.basilinca ekrana basilan operatoru yazdiracak.
function arti(){ giris.value +='+';}
function eksi(){giris.value +='-';}
function carpma(){giris.value +='*';}
function bolme(){giris.value +='/';}

//hesaplama fonksiyonu. hesaplamalari yapacak.
var hesaplama=function hesapla()
{
    if(giris.value!=0){
        let toplam=eval(giris.value);
        giris.value=toplam;
    }
}

//burada sayilari yazarken operatorleri devre disi birakiyorum.sayilari etkinlestiriyorum.
var etkinlestirme=function etkinlestir()
{
    for(var i;i<7;i++)
    {
        document.getElementById(`operator${i}`).operator=false;
    }
}

//burada operatorleri yazarken sayilari devre disi birakip operatorleri etkinlestiriyorum.
var operatorler=function operator()
{
    for(var i=1;i<7;i++)
    {
        document.getElementById(`operator${i}`).operator=true;
    }
}