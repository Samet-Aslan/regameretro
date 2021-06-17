function go(event) {
    //Check which button has been clicked
   var myValue = event.target.name;
   switch (myValue){
        case "GB CLASSIC":
            window.location.assign("productpage.html"); 
        break;
        case "GB COLOR":
            alert("gbcolor");
        break;
        case "GB ADVANCE":
            alert("gbadvance");
        break;
        case "GB ADVANCE SP":
            alert("gbadvancesp");
        break;
        default:
   }
}

function pickedElement(event){
    var edition = event.target.value;

    switch(edition){
        case "zelda":
            document.getElementById('productimg').src = "../Projekt HTML/images/zeldadmg.jpg";
            break;
        case "simpsons":
            document.getElementById('productimg').src = "../Projekt HTML/images/simpsondmg.jpg";
            break;
        case "pick":
            document.getElementById('productimg').src = "../Projekt HTML/images/product_gbdmg.png";
    }
}