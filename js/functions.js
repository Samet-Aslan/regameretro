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