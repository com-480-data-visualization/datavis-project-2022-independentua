var array = [
  "container0101",
  "container0102",
  "container0103",
  "container0104",
  "container0105",
  "container0106",
  "container0107",
  "container0108",
  "container0109",
  "container0110",
  "container0111",
  "container0112",
  "container0113",
  "container0114",
  "container0115",
  "container0116",
  "container0117",
  "container0118",
  "container0119",
  "container0120",
  "container0121",
  "container0122",
  "container0123",
  "container0124",
  "container0125",
  "container0126",
  "container0127",
  "container0128",
  "container0129",
  "container0130",
  "container0131",

  "container0201",
  "container0202",
  "container0203",
  "container0204",
  "container0205",
  "container0206",
  "container0207",
  "container0208",
  "container0209",
  "container0210",
  "container0211",
  "container0212",
  "container0213",
  "container0214",
  "container0215",
  "container0216",
  "container0217",
  "container0218",
  "container0219",
  "container0220",
  "container0221",
  "container0222",
  "container0223",
  "container0224",
  "container0225",
  "container0226",
  "container0227",
  "container0228",

  "container0301",
  "container0302",
  "container0303",
  "container0304",
  "container0305",
  "container0306",
  "container0307",
  "container0308",
  "container0309",
  "container0310",
  "container0311",
  "container0312",
  "container0313",
  "container0314",
  "container0315",
  "container0316",
  "container0317",
  "container0318",
  "container0319",
  "container0320",
  "container0321",
  "container0322",
  "container0323",
  "container0324",
  "container0325",
  "container0326",
  "container0327",
  "container0328",
  "container0329",
  "container0330",
  "container0331",

  "container0401",
  "container0402",
  "container0403",
  "container0404",
  "container0405",
  "container0406",
  "container0407",
  "container0408",
  "container0409",
  "container0410",
  "container0411",
  "container0412",
  "container0413",
  "container0414",
  "container0415",
  "container0416",
  "container0417",
  "container0418",
  "container0419",
  "container0420",
  "container0421",
  "container0422",
  "container0423",
  "container0424",
  "container0425",
  "container0426",
  "container0427",
  "container0428",
  "container0429",
  "container0430",

  "container0501",
  "container0502",
  "container0503",
  "container0504",
  "container0505",
  "container0506",
  "container0507",
  "container0508",
  "container0509",
  "container0510",
  "container0511",
  "container0512",
  "container0513",
  "container0514",
  "container0515",
  "container0516",
  "container0517",
  "container0518",
  "container0519",
  "container0520",
  "container0521",
  "container0522",
  "container0523",
  "container0524",
  "container0525",
  "container0526"
];

 var i = 0

 function prevshowOrHideDiv() {
    var v = document.getElementById(array[i]);
    console.log("hey")
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
