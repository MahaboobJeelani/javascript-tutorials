

function createRow() {
    var table = document.getElementById("a")
    let tr2 = document.createElement("tr")
    let t2td1 = document.createElement("td")
    let t2td2 = document.createElement("td")
    let t2td3 = document.createElement("td")

    t2td1.innerText = prompt("enter Sl.no")
    t2td2.innerText = prompt("enter subject 1")
    t2td3.innerText = prompt("enter Subject 2")

    tr2.appendChild(t2td1)
    tr2.appendChild(t2td2)
    tr2.appendChild(t2td3)

    table.appendChild(tr2)

    document.body.appendChild(table)
}