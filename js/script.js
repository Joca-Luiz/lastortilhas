// Add and Remove
let v = true;

// Numbers
let num = [
    randomNumber(10000000, 99999999).toString(), randomNumber(10000000, 99999999).toString(), randomNumber(10000000, 99999999).toString()
];

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function telefone() {
    // Before div
    const delivery = document.getElementById("delivery");

    // Creating a new div
    const tel = document.createElement("div");
    tel.id = "tel";
    tel.className = "border border-warning";

    // Goiania - Title
    const gyn = document.createElement("strong");
    gyn.innerHTML = "Goiânia: ";
    gyn.id = "gyn";

    tel.appendChild(gyn); // Add element on a div

    // Goiania - Num
    const gynNum = document.createElement("p");
    gynNum.innerHTML = "(62) " + num[0];
    gynNum.id = "gynNum";

    tel.appendChild(gynNum); // Add element on a div

    // Caldas Novas - Title
    const cn = document.createElement("strong");
    cn.innerHTML = "Caldas Novas: ";
    cn.id = "cn";

    tel.appendChild(cn); // Add element on a div

    // Caldas Novas - Num
    const cnNum = document.createElement("p");
    cnNum.innerHTML = "(64) " + num[1];
    cnNum.id = "cnNum";

    tel.appendChild(cnNum); // Add element on a div

    // Porto Seguro - Title
    const ps = document.createElement("strong");
    ps.innerHTML = "Porto Seguro: ";
    ps.id = "ps";

    tel.appendChild(ps);

    // Porto Seguro - Num
    const psNum = document.createElement("p");
    psNum.innerHTML = "(71) " + num[2];
    psNum.id = "psNum";

    tel.appendChild(psNum); // Add element on a div

    // Adding div on body
    if (v) {
        insertAfter(delivery, tel);
        v = false;
    } else {
        document.getElementById("tel").remove();
        v = true;
    }
}