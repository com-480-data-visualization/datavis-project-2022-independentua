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



    /*  console.log(mydayarray[0])
      visualizemydata(mydayarray[0],array[0])
      visualizemydata(mydayarray[1],array[1])
*/
    /*  visualizemydata(myday0101,"container0101")
      visualizemydata(myday0102,"container0102")
      visualizemydata(myday0103,"container0103")
      visualizemydata(myday0104,"container0104")
      visualizemydata(myday0105,"container0105")
      visualizemydata(myday0106,"container0106")
      visualizemydata(myday0107,"container0107")
      visualizemydata(myday0108,"container0108")
      visualizemydata(myday0109,"container0109")
      visualizemydata(myday0110,"container0110")
      visualizemydata(myday0111,"container0111")
      visualizemydata(myday0112,"container0112")
      visualizemydata(myday0113,"container0113")
      visualizemydata(myday0114,"container0114")
      visualizemydata(myday0115,"container0115")
      visualizemydata(myday0116,"container0116")
      visualizemydata(myday0117,"container0117")
      visualizemydata(myday0118,"container0118")
      visualizemydata(myday0119,"container0119")
      visualizemydata(myday0120,"container0120")
      visualizemydata(myday0121,"container0121")
      visualizemydata(myday0122,"container0122")
      visualizemydata(myday0123,"container0123")
      visualizemydata(myday0124,"container0124")
      visualizemydata(myday0125,"container0125")
      visualizemydata(myday0126,"container0126")
      visualizemydata(myday0127,"container0127")
      visualizemydata(myday0128,"container0128")
      visualizemydata(myday0129,"container0129")
      visualizemydata(myday0130,"container0130")
      visualizemydata(myday0131,"container0131")


      visualizemydata(myday0201,"container0201")
      visualizemydata(myday0202,"container0202")
      visualizemydata(myday0203,"container0203")
      visualizemydata(myday0204,"container0204")
      visualizemydata(myday0205,"container0205")
      visualizemydata(myday0206,"container0206")
      visualizemydata(myday0207,"container0207")
      visualizemydata(myday0208,"container0208")
      visualizemydata(myday0209,"container0209")
      visualizemydata(myday0210,"container0210")
      visualizemydata(myday0211,"container0211")
      visualizemydata(myday0212,"container0212")
      visualizemydata(myday0213,"container0213")
      visualizemydata(myday0214,"container0214")
      visualizemydata(myday0215,"container0215")
      visualizemydata(myday0216,"container0216")
      visualizemydata(myday0217,"container0217")
      visualizemydata(myday0218,"container0218")
      visualizemydata(myday0219,"container0219")
      visualizemydata(myday0220,"container0220")
      visualizemydata(myday0221,"container0221")
      visualizemydata(myday0222,"container0222")
      visualizemydata(myday0223,"container0223")
      visualizemydata(myday0224,"container0224")
      visualizemydata(myday0225,"container0225")
      visualizemydata(myday0226,"container0226")
      visualizemydata(myday0227,"container0227")
      visualizemydata(myday0228,"container0228")

      visualizemydata(myday0301,"container0301")
      visualizemydata(myday0302,"container0302")
      visualizemydata(myday0303,"container0303")
      visualizemydata(myday0304,"container0304")
      visualizemydata(myday0305,"container0305")
      visualizemydata(myday0306,"container0306")
      visualizemydata(myday0307,"container0307")
      visualizemydata(myday0308,"container0308")
      visualizemydata(myday0309,"container0309")
      visualizemydata(myday0310,"container0310")
      visualizemydata(myday0311,"container0311")
      visualizemydata(myday0312,"container0312")
      visualizemydata(myday0313,"container0313")
      visualizemydata(myday0314,"container0314")
      visualizemydata(myday0315,"container0315")
      visualizemydata(myday0316,"container0316")
      visualizemydata(myday0317,"container0317")
      visualizemydata(myday0318,"container0318")
      visualizemydata(myday0319,"container0319")
      visualizemydata(myday0320,"container0320")
      visualizemydata(myday0321,"container0321")
      visualizemydata(myday0322,"container0322")
      visualizemydata(myday0323,"container0323")
      visualizemydata(myday0324,"container0324")
      visualizemydata(myday0325,"container0325")
      visualizemydata(myday0326,"container0326")
      visualizemydata(myday0327,"container0327")
      visualizemydata(myday0328,"container0328")
      visualizemydata(myday0329,"container0329")
      visualizemydata(myday0330,"container0330")
      visualizemydata(myday0331,"container0331")

      /*visualizemydata(myday0401,"container0401")
      visualizemydata(myday0402,"container0402")
      visualizemydata(myday0403,"container0403")
      visualizemydata(myday0404,"container0404")
      visualizemydata(myday0405,"container0405")
      visualizemydata(myday0406,"container0406")
      visualizemydata(myday0407,"container0407")
      visualizemydata(myday0408,"container0408")
      visualizemydata(myday0409,"container0409")
      visualizemydata(myday0410,"container0410")
      visualizemydata(myday0411,"container0411")
      visualizemydata(myday0412,"container0412")
      visualizemydata(myday0413,"container0413")
      visualizemydata(myday0414,"container0414")
      visualizemydata(myday0415,"container0415")
      visualizemydata(myday0416,"container0416")
      visualizemydata(myday0417,"container0417")
      visualizemydata(myday0418,"container0418")
      visualizemydata(myday0419,"container0419")
      visualizemydata(myday0420,"container0420")
      visualizemydata(myday0421,"container0421")
      visualizemydata(myday0422,"container0422")
      visualizemydata(myday0423,"container0423")
      visualizemydata(myday0424,"container0424")
      visualizemydata(myday0425,"container0425")
      visualizemydata(myday0426,"container0426")
      visualizemydata(myday0427,"container0427")
      visualizemydata(myday0428,"container0428")
      visualizemydata(myday0429,"container0429")
      visualizemydata(myday0430,"container0430")*/

  /*    visualizemydata(myday0501,"container0501")
      visualizemydata(myday0502,"container0502")
      visualizemydata(myday0503,"container0503")
      visualizemydata(myday0504,"container0504")
      visualizemydata(myday0505,"container0505")
      visualizemydata(myday0506,"container0506")
      visualizemydata(myday0507,"container0507")
      visualizemydata(myday0508,"container0508")
      visualizemydata(myday0509,"container0509")
      visualizemydata(myday0510,"container0510")
      visualizemydata(myday0511,"container0511")
      visualizemydata(myday0512,"container0512")
      visualizemydata(myday0513,"container0513")
      visualizemydata(myday0514,"container0514")
      visualizemydata(myday0515,"container0515")
      visualizemydata(myday0516,"container0516")
      visualizemydata(myday0517,"container0517")
      visualizemydata(myday0518,"container0518")
      visualizemydata(myday0519,"container0519")
      visualizemydata(myday0520,"container0520")
      visualizemydata(myday0521,"container0521")
      visualizemydata(myday0522,"container0522")
      visualizemydata(myday0523,"container0523")
      visualizemydata(myday0524,"container0524")
      visualizemydata(myday0525,"container0525")
      visualizemydata(myday0526,"container0526")*/
