function kontrol()
{
    //test id'li yerden id'si sonuc olan yeri cektim ve degiskene atadim.
    var sonuc=document.getElementById('sonuc');
    //id'si test olan yeri cektim ve degiskene atadim.
    var test=document.getElementById("test");
    //test id'li yerden id'si git olan yeri cektim ve degiskene atadim.
    var buton=document.getElementById("git");
    //id'si btn2 olan yeri cektim ve degiskene atadim.
    var buton2=document.getElementById("btn2");


    //degisken tanimlama
    var skor=0;

    //bu testin icindeki skorumuz olacak.dogruya gore artiricam.
    //test id'sindeki soru1'in degerini cektim ve degiskene atadim.
    var soru1=document.test.soru1.value;
    //test id'sindeki soru2'nin degerini cektim ve degiskene atadim.
    var soru2=document.test.soru2.value;
    //test id'sindeki soru3'un degerini cektim ve degiskene atadim.
    var soru3=document.test.soru3.value;
    //test id'sindeki soru4'un degerini cektim ve degiskene atadim.
    var soru4=document.test.soru4.value;
    //test id'sindeki soru5'in degerini cektim ve degiskene atadim.
    var soru5=document.test.soru5.value;
    //test id'sindeki soru6'nin degerini cektim ve degiskene atadim.
    var soru6=document.test.soru6.value;
    //test id'sindeki soru7'nin degerini cektim ve degiskene atadim.
    var soru7=document.test.soru7.value;
    //test id'sindeki soru8'in degerini cektim ve degiskene atadim.
    var soru8=document.test.soru8.value;
    //test id'sindeki soru9'un degerini cektim ve degiskene atadim.
    var soru9=document.test.soru9.value;
    //test id'sindeki soru10'nun degerini cektim ve degiskene atadim.
    var soru10=document.test.soru10.value;


    
    //soru1'in cevabi 33 ise skoru 1 artiriyorum.
    if(soru1=="33"){skor++;}
    
    //soru2'nin cevabi 8 ise skoru 1 artiriyorum.
    if(soru2=="8"){skor++;}

    //soru3'un cevabi 72 ise skoru 1 artiriyorum.
    if(soru3=="72"){skor++;}

    //soru4'un cevabi 5 ise skoru 1 artiriyorum.
    if(soru4=="5"){skor++;}

    //soru5'in cevabi 45 ise skoru 1 artiriyorum.
    if(soru5=="45"){skor++;}

    //soru6'nin cevabi 21 ise skoru 1 artiriyorum.
    if(soru6=="21"){skor++;}

    //soru7'nin cevabi 63 ise skoru 1 artiriyorum.
    if(soru7=="63"){skor++;}

    //soru8'in cevabi 12 ise skoru 1 artiriyorum.
    if(soru8=="12"){skor++;}

    //soru9'un cevabi 81 ise skoru 1 artiriyorum.
    if(soru9="81"){skor++;}

    //soru10'nun cevabi 85 ise skoru 1 artiriyorum.
    if(soru10=="85"){skor++;}
    
    
    //test degiskeninin yani test id'li alanin gorunurlugunu kapatiyorum. 
    test.style.display="none";
   

    //3 ve 3'den az skorda yapilacaklar.
    if(skor<=3)
    {
        //ekrana skoru ve "Biraz daha çalışmalısın!!" mesajini yazdiriyorum.
        sonuc.textContent=`Skorun:${skor}. Biraz daha çalışmalısın!!`;
        //sayfa yenileyecek butonun gorunurlugunu aciyorum. 
        buton.style.display="flex";
        //ana sayfadaki yenileme butonunun gorunurlugunu sonuc sayfasinda kapatiyorum
        buton2.style.display="none";

        //yeniden cöz butonuna tiklandiginda sayfa yenilenecek.
        buton.onclick=function()
        {
            window.location.href="test.html";
        }
    }

    //skor 3'den buyukse ve 7'den kucukse else if blogu calisacak.
    else if(skor<7){
        

        //ekrana skoru ve "İyi bir sonuç çalışmayı bırakma!!" mesajini yazdiriyorum.
        sonuc.textContent=`Skorun:${skor}. İyi bir sonuç çalışmayı bırakma!!`;
        //sayfa yenileyecek butonun gorunurlugunu aciyorum. 
        buton.style.display="flex";
        //anasayfadaki yenileme butonunun gorunurlugunu sonuc sayfasinda kapatiyorum
        buton2.style.display="none";
        //yeniden cöz butonuna tiklandiginda sayfa yenilenecek.
        buton.onclick=function()
        {
            window.location.href="test.html";
        }
    }

    //skor 7 ve 7'den buyukse else blogu calisacak.
    else{
        //ekrana skoru ve " Harika bir sonuç bu konuyu biliyorsun!!" mesajini yazdiriyorum.
        sonuc.textContent=`Skorun:${skor}. Harika bir sonuç bu konuyu biliyorsun!!`;
        //sayfa yenileyecek butonun gorunurlugunu aciyorum. 
        buton.style.display="flex";
        //anasayfadaki yenileme butonunun gorunurlugunu sonuc sayfasinda kapatiyorum
        buton2.style.display="none";
        //yeniden cöz butonuna tiklandiginda sayfa yenilenecek.
        buton.onclick=function()
        {
            window.location.href="test.html";
        }
    }

  
}