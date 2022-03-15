//html'deki id'leri class'i ve canvas'i cekip degiskenlere atama.
var canvas=document.getElementById('canvas');
var silgi=document.getElementById('silgi');
var siyah=document.getElementById('siyah');
var sari=document.getElementById('sari');
var kirmizi=document.getElementById('kirmizi');
var mavi=document.getElementById('mavi');
var yesil=document.getElementById('yesil');
//canvasin 2d cizim ozelligini kullaniyorum
var ctx=canvas.getContext('2d');
//canvasin yuksekligini ve genisligini cekip degiskene atiyorum.
var Width=canvas.width;
var Height=canvas.height;
//cizimin yaricapi
var radius=10;
//cizim icin renk modlari ilk false yani kapali olacak asagidaki kodlarla acilacak.
var siyahMod=false;
var sariMod=false;
var kirmiziMod=false;
var maviMod=false;
var yesilMod=false;
var silgiModu=false;

//ana rengimiz siyah yani sayfa acildiginda siyah otomatik olarak secili olacak.
let color="black"
//canvasin baslangic degerleri.
var canvasBaslangicX;
var canvasBaslangicY;

//canavsin default degeri beyaz.canvas yani cizim yapiacak yer beyaz ekranla acilacak.
ctx.fillStyle="white";
//canvas boyu
ctx.fillRect(0,0,Width,Height);

//canvastan bir olay olusturuyorum mouse her hareket ettiginde gerceklesecekler.
canvas.addEventListener("mousemove",(e)=>{
    //baslangic koordinatlari
    canvasBaslangicX=e.target.offsetLeft;
    canvasBaslangicY=e.target.offsetTop;
    //mouse uzerindeki tuslara basiyorsak yuvarlakCizimi fonksiyonunu calistiracak.
    if(e.buttons===1){
        yuvarlakCizimi(e.x,e.y);
    }
});

//mousun soluna tek tiklayinca cizim yani nokta olusturacak.
canvas.addEventListener("mousedown",(e)=>{
    yuvarlakCizimi(e.x,e.y);
})

//yuvarlakCizimi isimli fonksiyon
function yuvarlakCizimi(x,y)
{
    //cizim olayi
    ctx.beginPath();
    ctx.arc(x-canvasBaslangicX,y-canvasBaslangicY,radius,0,2*Math.PI);
    ctx.fillStyle=color;
    ctx.fill();
    ctx.lineWidth=5;
}

//silme islemi
silgi.addEventListener("click" ,()=>{

    //ilk durumda false'tu basilinca true olacak tekrar basilinca false olacak. 
    silgiModu=!silgiModu;

    //silgi tusuna basilirsa bu blok calisicak
    if(silgiModu)
    {
        //canvas alaninin kenarlari 1px cizgili siyah olacak.boylece kullanici silgide oldugunu anlayacak.
        canvas.style.border="1px dashed black";
        //cizimin rengi beyaz olacak arkaplan beyaz oldugu icin silinmis olacak.
        color="white";
        //cizimin boyutu articak rahat silmeye yarayacak.
        radius=15;
    }
    //eski haline donmesi
    else{
        canvas.style.border="1px solid black";
        color="black";
        radius=10;
    }
});

//kalemin siyah olma islemi
siyah.addEventListener("click",()=>{

    //ilk durumda false'tu basilinca true olacak 
    siyahMod=!siyahMod;

    //siyah tusa basilirsa bu blok calisicak
    if(siyahMod)
    {
        //canvas alaninin kenarlari 1px duz siyah olacak.
        canvas.style.border="1px solid black";
        //cizimin rengi siyah olacak.
        color="black";
        //yaricapi 10 olacak
        radius=10;
    }
});


//kalemin sari olma islemi
sari.addEventListener("click",()=>{

    //ilk durumda false'tu basilinca true olacak. 
    sariMod=!sariMod;
    if(sariMod)
    {
        //canvas alaninin kenarlari 1px duz siyah olacak.
        canvas.style.border="1px solid black";
        //cizimin rengi sari olacak.
        color="yellow";
        //yaricapi 10 olacak
        radius=10;
    }
});

//kalemin kirmizi olma islemi
kirmizi.addEventListener("click",()=>{

    //ilk durumda false'tu basilinca true olacak.
    kirmiziMod=!kirmiziMod;
    if(kirmiziMod)
    {
        //canvas alaninin kenarlari 1px duz siyah olacak.
        canvas.style.border="1px solid black";
        //cizimin rengi kirmizi olacak.
        color="red";
        //yaricapi 10 olacak
        radius=10;
    }
});

//kalemin mavi olma islemi
mavi.addEventListener("click",()=>{

    //ilk durumda false'tu basilinca true olacak. 
    maviMod=!maviMod;
    if(maviMod)
    {
        //canvas alaninin kenarlari 1px duz siyah olacak.
        canvas.style.border="1px solid black";
        //cizimin rengi mavi olacak.
        color="blue";
        //yaricapi 10 olacak
        radius=10;
    }
});

//kalemin yesil olma islemi
yesil.addEventListener("click",()=>{

    //ilk durumda false'tu basilinca true olacak. 
    yesilMod=!yesilMod;
    if(yesilMod)
    {
        //canvas alaninin kenarlari 1px duz siyah olacak.
        canvas.style.border="1px solid black";
        //cizimin rengi yesil olacak.
        color="green";
        //yaricapi 10 olacak
        radius=10;
    }
});





