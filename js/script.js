const nav=document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalNavList=navList.length;

for(leti=0; i<totalNavList; i++){
    const a=navList[i].querySelector("a");
   console.log(a)
}