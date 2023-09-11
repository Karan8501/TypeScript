"use strict";
// original Js 
// const year = document.getElementById("year")
// const thisYear  = new Date().getFullYear() ;
// year?.setAttribute("datetime",thisYear );
// year?.textContent = thisYear;
// 1 way 
// let  year:HTMLElement |null
// year = document.getElementById("year")
// let thisYear : string  
// thisYear = new Date().getFullYear().toString() ;
// if(year){
//     year.setAttribute("datetime",thisYear );
//     year.textContent = thisYear;
// }
// 2nd way 
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
