import Menu from "./menu/menu";



async function executeslider(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2700,
          disableOnInteraction: false,
        },
      });
      var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
      });
      var swiper = new Swiper(".mySwiper3", {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          500: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        },
      });
      var swiper = new Swiper(".mySwiper44", {
        slidesPerView: 1,
        spaceBetween: 10,
        rewind: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        },
      });
      var swiper = new Swiper(".mySwiper7", {
        slidesPerView: 3,
        spaceBetween: 10,

        breakpoints: {
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1280:{
            slidesPerView: 6,
            spaceBetween: 50,
          },
        },
      });
}

async function allComponets(){
  await Menu();
  executeslider();
}



allComponets();


let right_head = document.querySelector(".rhead").children;
[...right_head].forEach((item) => {  
    item.addEventListener("mouseenter", function() {
        item.classList.remove("text-[#d8d8d8]");
        item.classList.add("text-[#fbae3d]");
    });
    item.addEventListener("mouseleave", function(){
        item.classList.remove("text-[#fbae3d]");
        item.classList.add("text-[#d8d8d8]");
    });
});

//end hover
let series = document.querySelector("#series");
let favoseries = document.querySelector("#favoseries");
let movies = document.querySelector("#movies");
let favomovies = document.querySelector("#favomovies");
let showmovie = document.querySelector("#showmovie");
let paltoshotori = document.querySelector("#paltoshotori");
let zanjoker = document.querySelector(".zanjoker");
let zakhmkari = document.querySelector(".zakhmkari");
let showzakhm = document.querySelector("#showzakhm");
let showkarmani=document.querySelector("#showkarmani");
let karmani=document.querySelector(".karmani");
let golyapooch=document.querySelector(".golyapooch");
let showgol=document.querySelector("#showgol");
let showlalayi=document.querySelector("#showlalayi");
let lalayii=document.querySelector(".lalayii");
let showsargig=document.querySelector("#showsargig");
let sarasarguj=document.querySelector(".sarasarguj");
let paltosho=document.querySelector(".paltosho");
let sotonfour=document.querySelector(".sotonfour");
let soton14=document.querySelector("#soton14");
let rooz6=document.querySelector(".rooz6");
let palayesh=document.querySelector(".palayesh");
let nabatchob=document.querySelector(".nabatchob");
let awhoo=document.querySelector(".awhoo");
let rozegari=document.querySelector("#rozegari");
let palayeshgah=document.querySelector("#palayeshgah");
let lolipop=document.querySelector("#lolipop");
let aahoo=document.querySelector("#aahoo");
series.addEventListener("click", function(){
    favoseries.classList.remove("hidden");
    favomovies.classList.add("hidden");
    paltoshotori.classList.add("hidden");
    series.classList.add("bg-[#313131]");
    movies.classList.remove("bg-[#313131]");
    showmovie.classList.remove("hidden");
    soton14.classList.add("hidden");
    soton14.classList.add("hidden");
    paltoshotori.classList.add("hidden");
    rozegari.classList.add("hidden");
    palayeshgah.classList.add("hidden");
    lolipop.classList.add("hidden");
    aahoo.classList.add("hidden");
});
movies.addEventListener("click", function(){
    favomovies.classList.remove("hidden");
    favoseries.classList.add("hidden");
    paltoshotori.classList.remove("hidden");
    movies.classList.add("bg-[#313131]");
    series.classList.remove("bg-[#313131]");
    showmovie.classList.add("hidden");
    showzakhm.classList.add("hidden");
    showkarmani.classList.add("hidden");
    showgol.classList.add("hidden");
    showlalayi.classList.add("hidden");
    showsargig.classList.add("hidden");
});

zanjoker.addEventListener("click" ,function(){
  showmovie.classList.remove("hidden");
  showzakhm.classList.add("hidden");
  showkarmani.classList.add("hidden");
  showgol.classList.add("hidden");
  showlalayi.classList.add("hidden");
  showsargig.classList.add("hidden");
});
zakhmkari.addEventListener("click", function(){
  showmovie.classList.add("hidden");
  showzakhm.classList.remove("hidden");
  showkarmani.classList.add("hidden");
  showgol.classList.add("hidden");
  showlalayi.classList.add("hidden");
  showsargig.classList.add("hidden");
});
karmani.addEventListener("click", function(){
  showmovie.classList.add("hidden");
  showzakhm.classList.add("hidden");
  showkarmani.classList.remove("hidden");
  showgol.classList.add("hidden");
  showlalayi.classList.add("hidden");
  showsargig.classList.add("hidden");
});
golyapooch.addEventListener("click",function(){
  showgol.classList.remove("hidden");
  showmovie.classList.add("hidden");
  showzakhm.classList.add("hidden");
  showkarmani.classList.add("hidden");
  showlalayi.classList.add("hidden");
  showsargig.classList.add("hidden");
});
lalayii.addEventListener("click",function(){
  showgol.classList.add("hidden");
  showmovie.classList.add("hidden");
  showzakhm.classList.add("hidden");
  showkarmani.classList.add("hidden");
  showlalayi.classList.remove("hidden");
  showsargig.classList.add("hidden");
});
sarasarguj.addEventListener("click",function(){
  showgol.classList.add("hidden");
  showmovie.classList.add("hidden");
  showzakhm.classList.add("hidden");
  showkarmani.classList.add("hidden");
  showlalayi.classList.add("hidden");
  showsargig.classList.remove("hidden");
});
paltosho.addEventListener("click", function(){
  paltoshotori.classList.remove("hidden");
  soton14.classList.add("hidden");
  rozegari.classList.add("hidden");
  palayeshgah.classList.add("hidden");
});
sotonfour.addEventListener("click",function(){
  soton14.classList.remove("hidden");
  paltoshotori.classList.add("hidden");
  rozegari.classList.add("hidden");
  palayeshgah.classList.add("hidden");
});
rooz6.addEventListener("click",function(){
  soton14.classList.add("hidden");
  paltoshotori.classList.add("hidden");
  rozegari.classList.remove("hidden");
  palayeshgah.classList.add("hidden");
});
palayesh.addEventListener("click",function(){
  soton14.classList.add("hidden");
  paltoshotori.classList.add("hidden");
  rozegari.classList.add("hidden");
  palayeshgah.classList.remove("hidden");
  lolipop.classList.add("hidden");
  aahoo.classList.add("hidden");
});
nabatchob.addEventListener("click",function(){
  soton14.classList.add("hidden");
  paltoshotori.classList.add("hidden");
  rozegari.classList.add("hidden");
  palayeshgah.classList.add("hidden");
  lolipop.classList.remove("hidden");
  aahoo.classList.add("hidden");
});
awhoo.addEventListener("click",function(){
  soton14.classList.add("hidden");
  paltoshotori.classList.add("hidden");
  rozegari.classList.add("hidden");
  palayeshgah.classList.add("hidden");
  lolipop.classList.add("hidden");
  aahoo.classList.remove("hidden");
});



let opening = document.querySelectorAll("#open_fag");
let fagOpen=document.querySelectorAll("#open_mtn");
let fagIcon =document.querySelectorAll("#fag_icon");
let firstsoall =document.querySelectorAll("#firstsoall");
[...opening].forEach((open,index)=>{
  open.addEventListener("click", function(){

    fagIcon[index].classList.toggle("rotate-45");
    fagOpen[index].classList.toggle("!block");
    firstsoall[index].classList.toggle("text-[#f4843f]");
  });
});

let searchbtn = document.querySelector(".searchbtn");
let searchfuly = document.querySelector(".searchfuly");
let closesrch = document.querySelector(".closesrch");
let searchbooo =document.querySelector(".searchbooo");
let main = document.querySelector(".main");
searchbtn.addEventListener("click", function(){
  searchfuly.classList.remove("hidden");
  main.classList.add("hidden");
});
searchbooo.addEventListener("click", function(){
  searchfuly.classList.remove("hidden");
  main.classList.add("hidden");
});
closesrch.addEventListener("click", function(){
  searchfuly.classList.add("hidden");
  main.classList.remove("hidden");
});
let usefulink =document.querySelector(".usefulink");
let usefullpage=document.querySelector(".usefullpage");
let upheadevery=document.querySelector(".upheadevery");
let closeitmenu=document.querySelector(".closeitmenu");
usefulink.addEventListener("click", function(){
  usefullpage.classList.remove("hidden");
  main.classList.add("hidden");
  upheadevery.classList.add("hidden");
});
closeitmenu.addEventListener("click", function(){
  usefullpage.classList.add("hidden");
  main.classList.remove("hidden");
  upheadevery.classList.remove("hidden");
});
let socialmedia=document.querySelector(".socialmedia");
let openthreedot=document.querySelector(".openthreedot");
let closeitsocial=document.querySelector(".closeitsocial");
openthreedot.addEventListener("click", function(){
  socialmedia.classList.remove("hidden");
  main.classList.add("hidden");
  upheadevery.classList.add("hidden");
});
closeitsocial.addEventListener("click", function(){
  socialmedia.classList.add("hidden");
  main.classList.remove("hidden");
  upheadevery.classList.remove("hidden");
});



let mahBoobEls = document.querySelectorAll('.popimgg');
mahBoobEls.forEach(mahBoobEl => {
  mahBoobEl.addEventListener('click', ()=> {
    document.querySelector('.fav_one')?.classList.remove('fav_one');
    mahBoobEl.classList.add('fav_one');
  });
} );
let mohtvaEls = document.querySelectorAll('.bigimg');
mohtvaEls.forEach(mohtvaEl => {
  mohtvaEl.addEventListener('click', ()=> {
    document.querySelector('.motava_one')?.classList.remove('motava_one');
    mohtvaEl.classList.add('motava_one');
  });
} );
let movpalEls = document.querySelectorAll('.paltoooo');
movpalEls.forEach(movpalEl => {
  movpalEl.addEventListener('click', ()=> {
    document.querySelector('.palto_one')?.classList.remove('palto_one');
    movpalEl.classList.add('palto_one');
  });
} );

