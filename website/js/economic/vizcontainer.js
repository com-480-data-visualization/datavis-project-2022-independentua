var index = 0;

if (!Date.now) {
     Date.now = function() {
    return new Date().getTime();
     }
  }

var theDate = Date.parse('01 Jan 2022 00:00:00 GMT');
   //var theDate = Date.now();
document.getElementById('date').innerText = getTheDate(theDate)
document.getElementById('prev').addEventListener("click", function() {
    index = index-1
    if (index>-1){
      theDate -= 86400000;
      document.getElementById('date').innerText = getTheDate(theDate)
      ;}
    else{index = index+1}
})

document.getElementById('next').addEventListener("click", function() {
       index = index+1;
       if (index <146){
         theDate += 86400000;
         document.getElementById('date').innerText = getTheDate(theDate)}
        else{index = index -1}
})

document.getElementById('superprev').addEventListener("click", function() {
      index = index -7;
      if (index>-1){
        theDate -= 604800000;
        document.getElementById('date').innerText = getTheDate(theDate)}
      else{index = index +7}

})
document.getElementById('supernext').addEventListener("click", function() {
   index = index +7
   if (index<146){
     theDate += 604800000;
     document.getElementById('date').innerText = getTheDate(theDate)}
   else{index = index -7}

})

function getTheDate(getDate) {
    var days = ["Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
   ];
    var months = ["January", "February", "March",
      "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
   ];
   var theCDate = new Date(getDate);

  return days[theCDate.getDay()] + ', ' + theCDate.getDate() + '-' +
      months[theCDate.getMonth()] + '-' + theCDate.getFullYear();}
