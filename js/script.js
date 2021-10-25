let v = true;

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function telefone() {
    const m = document.getElementById("delivery");

    const t = document.createElement("div");
    t.id = "tel";
    t.className = "border border border-warning";

    const s = document.createElement("strong");
    t.appendChild(s);
    s.innerHTML = "Contato: "

    const l = document.createElement("label");
    t.appendChild(l);
    l.innerHTML = "+55 62 984348489";
    
    if (v) {
        insertAfter(m, t);
        v = false;
    } else {
        document.getElementById("tel").remove();
        v = true;
    }
}