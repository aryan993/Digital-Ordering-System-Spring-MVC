var Quantity = 1
/* For veg Burger*/
var VBcount = 0
var VBqnty = 2
function vegburger() {
    var Product = 'Veg Burger'
    var VBPrice = 100
    var table = document.getElementById("insertionPoint").rows.length
    if (VBcount <= 0) {
        document.getElementById("insertionPoint").innerHTML += "<tr><td>" + Product + "</td><td>" + Quantity + "</td><td>" + VBPrice + "</td></tr>";
        VBcount++
    }

    else {
        for (var i = 1; i < table; i++) {
            if (document.getElementById("insertionPoint").rows[i].cells[0].innerHTML == 'Veg Burger') {
                document.getElementById("insertionPoint").rows[i].cells[1].innerHTML = VBqnty
                document.getElementById("insertionPoint").rows[i].cells[2].innerHTML = VBqnty * VBPrice
                VBqnty++
            }
        }
    }
    totaling()

}

/* For Chicken Burger */
var CBcount = 0
var CBqnty = 2
function chickenburger() {
    var Product = 'Chicken Burger'
    var VBPrice = 100
    var table = document.getElementById("insertionPoint").rows.length
    if (CBcount <= 0) {
        document.getElementById("insertionPoint").innerHTML += "<tr><td>" + Product + "</td><td>" + Quantity + "</td><td>" + VBPrice + "</td></tr>";
        CBcount++
    }

    else {
        for (var i = 1; i < table; i++) {
            if (document.getElementById("insertionPoint").rows[i].cells[0].innerHTML == 'Chicken Burger') {
                document.getElementById("insertionPoint").rows[i].cells[1].innerHTML = CBqnty
                document.getElementById("insertionPoint").rows[i].cells[2].innerHTML = CBqnty * VBPrice
                CBqnty++
            }
        }
    }
    totaling()
}




/* for bacon sandwich*/
var BScount = 0
var BSqnty = 2
function baconsandwich() {
    var Product = 'Bacon Sandwich'
    var BSPrice = 150
    var table = document.getElementById("insertionPoint").rows.length
    if (BScount <= 0) {
        document.getElementById("insertionPoint").innerHTML += "<tr><td>" + Product + "</td><td>" + Quantity + "</td><td>" + BSPrice + "</td></tr>";
        BScount++
    }

    else {
        for (var i = 1; i < table; i++) {
            if (document.getElementById("insertionPoint").rows[i].cells[0].innerHTML == 'Bacon Sandwich') {
                document.getElementById("insertionPoint").rows[i].cells[1].innerHTML = BSqnty
                document.getElementById("insertionPoint").rows[i].cells[2].innerHTML = BSqnty * BSPrice
                BSqnty++
            }
        }
    }
    totaling()
}

/* for cv sandwich */
var CVcount = 0
var CVqnty = 2
function cvsandwich() {
    var Product = 'Cheese Vegie Sandwich'
    var CVPrice = 100
    var table = document.getElementById("insertionPoint").rows.length
    if (CVcount <= 0) {
        document.getElementById("insertionPoint").innerHTML += "<tr><td>" + Product + "</td><td>" + Quantity + "</td><td>" + CVPrice + "</td></tr>";
        CVcount++
    }

    else {
        for (var i = 1; i < table; i++) {
            if (document.getElementById("insertionPoint").rows[i].cells[0].innerHTML == 'Cheese Vegie Sandwich') {
                document.getElementById("insertionPoint").rows[i].cells[1].innerHTML = CVqnty
                document.getElementById("insertionPoint").rows[i].cells[2].innerHTML = CVqnty * CVPrice
                CVqnty++
            }
        }
    }
    totaling()
}

/* for gv sandwich */
var GVcount = 0
var GVqnty = 2
function gvsandwich() {
    var Product = 'Grilled Vegie Sandwich'
    var GVPrice = 100
    var table = document.getElementById("insertionPoint").rows.length
    if (GVcount <= 0) {
        document.getElementById("insertionPoint").innerHTML += "<tr><td>" + Product + "</td><td>" + Quantity + "</td><td>" + GVPrice + "</td></tr>";
        GVcount++
    }

    else {
        for (var i = 1; i < table; i++) {
            if (document.getElementById("insertionPoint").rows[i].cells[0].innerHTML == 'Grilled Vegie Sandwich') {
                document.getElementById("insertionPoint").rows[i].cells[1].innerHTML = GVqnty
                document.getElementById("insertionPoint").rows[i].cells[2].innerHTML = GVqnty * GVPrice
                GVqnty++
            }
        }
    }
    totaling()
}





/* for  cold coffee*/
var CCcount = 0
var CCqnty = 2
function coldcoffee() {
    var Product = 'Cold Coffee'
    var CCPrice = 80
    var table = document.getElementById("insertionPoint").rows.length
    if (CCcount <= 0) {
        document.getElementById("insertionPoint").innerHTML += "<tr><td>" + Product + "</td><td>" + Quantity + "</td><td>" + CCPrice + "</td></tr>";
        CCcount++
    }

    else {
        for (var i = 1; i < table; i++) {
            if (document.getElementById("insertionPoint").rows[i].cells[0].innerHTML == 'Cold Coffee') {
                document.getElementById("insertionPoint").rows[i].cells[1].innerHTML = CCqnty
                document.getElementById("insertionPoint").rows[i].cells[2].innerHTML = CCqnty * CCPrice
                CCqnty++
            }
        }
    }
    totaling()
}

/*for latte */
var Lcount = 0
var Lqnty = 2
function latte() {
    var Product = 'Coffee Latte'
    var LPrice = 100
    var table = document.getElementById("insertionPoint").rows.length
    if (Lcount <= 0) {
        document.getElementById("insertionPoint").innerHTML += "<tr><td>" + Product + "</td><td>" + Quantity + "</td><td>" + LPrice + "</td></tr>";
        Lcount++
    }

    else {
        for (var i = 1; i < table; i++) {
            if (document.getElementById("insertionPoint").rows[i].cells[0].innerHTML == 'Coffee Latte') {
                document.getElementById("insertionPoint").rows[i].cells[1].innerHTML = Lqnty
                document.getElementById("insertionPoint").rows[i].cells[2].innerHTML = Lqnty * LPrice
                Lqnty++
            }
        }
    }
    totaling()
}



/* for vanilla icecream */
var VIcount = 0
var VIqnty = 2
function vicecream() {
    var Product = 'Vanilla Icecream'
    var VIPrice = 60
    var table = document.getElementById("insertionPoint").rows.length
    if (VIcount <= 0) {
        document.getElementById("insertionPoint").innerHTML += "<tr><td>" + Product + "</td><td>" + Quantity + "</td><td>" + VIPrice + "</td></tr>";
        VIcount++
    }

    else {
        for (var i = 1; i < table; i++) {
            if (document.getElementById("insertionPoint").rows[i].cells[0].innerHTML == 'Vanilla Icecream') {
                document.getElementById("insertionPoint").rows[i].cells[1].innerHTML = VIqnty
                document.getElementById("insertionPoint").rows[i].cells[2].innerHTML = VIqnty * VIPrice
                VIqnty++
            }
        }
    }
    totaling()
}

/*for butterscoth */
var BSIcount = 0
var BSIqnty = 2
function bicecream() {
    var Product = 'Butterscotch Icecream'
    var BSIPrice = 60
    var table = document.getElementById("insertionPoint").rows.length
    if (BSIcount <= 0) {
        document.getElementById("insertionPoint").innerHTML += "<tr><td>" + Product + "</td><td>" + Quantity + "</td><td>" + BSIPrice + "</td></tr>";
        BSIcount++
    }

    else {
        for (var i = 1; i < table; i++) {
            if (document.getElementById("insertionPoint").rows[i].cells[0].innerHTML == 'Butterscotch Icecream') {
                document.getElementById("insertionPoint").rows[i].cells[1].innerHTML = BSIqnty
                document.getElementById("insertionPoint").rows[i].cells[2].innerHTML = BSIqnty * BSIPrice
                BSIqnty++
            }
        }
    }
    totaling()
}

/* for strawberry */
var SBcount = 0
var SBqnty = 2
function sicecream() {
    var Product = 'Strawberry Icecream'
    var SBPrice = 60
    var table = document.getElementById("insertionPoint").rows.length
    if (SBcount <= 0) {
        document.getElementById("insertionPoint").innerHTML += "<tr><td>" + Product + "</td><td>" + Quantity + "</td><td>" + SBPrice + "</td></tr>";
        SBcount++
    }

    else {
        for (var i = 1; i < table; i++) {
            if (document.getElementById("insertionPoint").rows[i].cells[0].innerHTML == 'Strawberry Icecream') {
                document.getElementById("insertionPoint").rows[i].cells[1].innerHTML = SBqnty
                document.getElementById("insertionPoint").rows[i].cells[2].innerHTML = SBqnty * SBPrice
                SBqnty++
            }
        }
    }
    totaling()
}

/* for making div display none and visible */
function sundaeoptions() {
    document.getElementById("fsandwich").style.display = "none"
    document.getElementById("fwelcome").style.display = "none"
    document.getElementById("fburger").style.display = "none"
    document.getElementById("fbeverage").style.display = "none"
    document.getElementById("fsundae").style.display = "inline-block"

}
function sandwichoptions() {
    document.getElementById("fsundae").style.display = "none"
    document.getElementById("fwelcome").style.display = "none"
    document.getElementById("fburger").style.display = "none"
    document.getElementById("fbeverage").style.display = "none"
    document.getElementById("fsandwich").style.display = "inline-block"

}
function burgeroptions() {
    document.getElementById("fsundae").style.display = "none"
    document.getElementById("fwelcome").style.display = "none"
    document.getElementById("fsandwich").style.display = "none"
    document.getElementById("fbeverage").style.display = "none"
    document.getElementById("fburger").style.display = "inline-block"

}
function beverageoptions() {
    document.getElementById("fsundae").style.display = "none"
    document.getElementById("fwelcome").style.display = "none"
    document.getElementById("fburger").style.display = "none"
    document.getElementById("fsandwich").style.display = "none"
    document.getElementById("fbeverage").style.display = "inline-block"

}


function totaling() {
    var grandT = 0;
    $("#insertionPoint > TBODY > tr").each(function () {
        var t3 = $(this).find('td').eq(2).html();
        if (!isNaN(t3)) {
            grandT += parseFloat(t3);
        }
    });
    $("#total").html(grandT.toFixed());
    alert(grandT);
}

function confirm(){
    console.log('1');
}