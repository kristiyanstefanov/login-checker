function validateForm() {
    if (!checkName()) {
        document.getElementById("nC").innerHTML = "Invalid name input";
        return false;
    }

    if (!checkEmail()) {
        document.getElementById("nC").innerHTML = "Invalid email address";
        return false;
    }

    if (!checkNumber()) {
        document.getElementById("nC").innerHTML = "Invaid phone number";
        return false;
    }



    if (!document.getElementById("sele").value) {
        document.getElementById("nC").innerHTML = "No country selected";
        return false;
    }

    if (!checkPrefix()) {
        document.getElementById("nC").innerHTML = "Invalid Prefix Code";
        return false;
    }

    if (document.getElementById("myCheck").checked == false) {
        document.getElementById("nC").innerHTML = "Please Agree to our Terms";
        return false;
    }

}

function checkName() {
    let x = document.getElementById("fullname").value;
    let z = x.split(" ");
    let checker;
    if (z.length == 2) {
        checker = z[0].length + z[1].length;
        if (checker >= 3 && checker <= 20) {

            return true;
        }
    }
}


function checkEmail() {
    let regeX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let h = document.getElementById("email").value
    if (regeX.test(h)) {
        return true;
    }

}


function checkNumber() {
    let y = document.getElementById("number").value;
    let regTest = /^[0-9]*$/;

    if (regTest.test(y) && y.length > 4 && y[0] == 0) {
        return true;
    }
};

function checkPrefix() {
    let y = document.getElementById("dial").value;
    let regTest = /^[0-9+]*$/;
    if (regTest.test(y) && y.length >= 2 && y.length <= 4) {
        return true;
    }
};


function changeDial() {
    let z = document.getElementById("sele").value
    document.getElementById("dial").value = countries[z];

}

let countries = {
    BU: "+359",
    RO: "+40",
    GE: "+49",
    EN: "+44",

}

function openUp(){
    window.open('http://www.example.com?ReportID=1', '_blank');
}















