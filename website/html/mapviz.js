var array = [
'container1',
'container2',
"container3" ,
"container4",
"container5" ,
"container6" ,
"container7" ,
"container8",
"container9",
"container10",
"container11" ,
"container12",
"container13" ,
"container14",
"container15" ,
"container16" ,
"container17" ,
"container18",
"container19",
"container20",
"container21" ,
"container22",
"container23" ,
"container24",
"container25" ,
"container26" ,
"container27" ,
"container28",
"container29",
"container30",
"container31" ,
"container32",
"container33" ,
"container34",
"container35" ,
"container36" ,
"container37" ,
"container38",
"container39",
"container40",
"container41" ,
"container42",
"container43" ,
"container44",
"container45" ,
"container46" ,
"container47" ,
"container48",
"container49",
"container50",
"container51" ,
"container52",
"container53" ,
"container54",
"container55" ,
"container56" ,
"container57" ,
"container58",
"container59",
"container60"]

 var i = 0

 function prevshowOrHideDiv() {
    var v = document.getElementById(array[i]);
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
    var w = document.getElementById(array[i-1]);
    if (w.style.display === "none") {
       w.style.display = "block";
    } else {
       w.style.display = "none";
    }
    i = i -1
 }
 function nextshowOrHideDiv() {
    var v = document.getElementById(array[i]);
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
    var w = document.getElementById(array[i+1]);
    if (w.style.display === "none") {
       w.style.display = "block";
    } else {
       w.style.display = "none";
    }
    i = i+1
 }


 
