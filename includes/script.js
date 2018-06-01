Address_Arr = ["Harel 3", "Fliman 129", "Halfon 73", "Yerushalaim 33"],  form = document.getElementById("FORM");

function addressValidation(Address) {
    for(var i = 0; i < 4; ++i) {
        if(Address == Address_Arr[i])
            return true;
        else {
            var alert = document.createElement("h4");
            alert.innerHTML = "the adress you chose is not on the list";
            alert.style.color = "#000000";
            form.appendChild(alert);
            return false; 
        } } }
