//degisken tanimlama.
var sayi1,sayi2,operator,sonuc,cevap,dogru=0,yanlis=0;

//nesnelerime ulastim ve cekip birer degiskene atadim.
sayi1=document.getElementById('sayi1');
sayi2=document.getElementById('sayi2');
operator=document.getElementById('operator');
sonuc=document.getElementById('sonuc');
cevap=document.getElementById('cevap');
dogru=document.getElementById('dogru');
yanlis=document.getElementById('yanlis');

//sayi1 ve sayi2 icin rastgele sayi uretme yapiyorum.
function RandomNumber(min,max){
    //local degisken tanimladim.
    var sayi=Math.floor(Math.random()*(max-min))+min;
    /*math 0-1 arasinda deger uretir tam sayi olmasi icin floor ile bir alta yuvarlamak gerekir.*/
     return sayi;
}

//soruyu tahmin ettikten sonra yeni bir soru getirme
function YeniSoru(){
    //operatorler
    var operators=["+","-","*","/"];
    operator.textContent=operators[RandomNumber(0,4)];//operator secimi
    //sayi1 ve sayi2 icin rastgele sayi uretme 0-30 arasi.
    sayi1.textContent=RandomNumber(0,30);
    sayi2.textContent=RandomNumber(0,30);

    //ilk sayinin ikinci sayiyi kalansiz bolmesi lazim bu yuzden kontrol yapilmali
    if(operator.textContent=="/")
    {
        while(true){
            sayi2.textContent=RandomNumber(0,30);
            if(sayi1.textContent % sayi2.textContent==0)
            {
                //ilk sayi ikinci sayiyi tam boluyorsa dongu kirilir yoksa kosul saglanincaya kadar dongu doner.
                break;
            }
        }

    }


}

//sayfa yuklendiginde yeni soru soracak.
window.onload=function(){
    YeniSoru();
}

//cevapla butonu ile islem yapma
cevap.onclick=function(){
    var cvp,s1,s2;
    //icerigi sayisal veriye cevirme
    s1=Number(sayi1.textContent);
    s2=Number(sayi2.textContent);
    //rastgele gelen operatore gore islem yapilmasi
    switch(operator.textContent){
        case '+' : cvp=s1+s2; break;
        case '-' :cvp=s1-s2; break;
        case '*' :cvp=s1*s2; break;
        case '/' :cvp=s1/s2; break;
        default:break;
    }

    //girilen deger dogruysa id adi dogru olan div'i 1 artiracak.
    if(sonuc.value==cvp)
    {
        dogru.textContent=Number(dogru.textContent)+1;
    }

    //girilen deger yanlissa id adi yanlis olan div'i 1 artiracak.
    else{yanlis.textContent=Number(yanlis.textContent)+1}

    //artacak olan div arttiktan sonra yeni soru gelecek.
    YeniSoru();
}
