// let heading = document.write("TIME TABLE")
// console.log(heading);
//// ======================== row 1 ======================
let table = document.createElement("table")
let tr1 = document.createElement("tr")
let t1th1 = document.createElement("th")
let t1th2 = document.createElement("th")
let t1th3 = document.createElement("th")
let t1th4 = document.createElement("th")
let t1th5 = document.createElement("th")
let t1th6 = document.createElement("th")
let t1th7 = document.createElement("th")
let t1th8 = document.createElement("th")
let t1th9 = document.createElement("th")


                        ////====================== Column 1 ==================================
t1th1.innerText="Day/Period"
t1th2.innerText="I \n9:30-10:20"
t1th3.innerText="II \n10:20-11:10"
t1th4.innerText="III \n11:10-12:00"
t1th5.innerText="12:00-12:40"
t1th6.innerText="IV \n12:40-1:30"
t1th7.innerText="V\n 1:30-2:20"
t1th8.innerText="VI\n 2:20-3:10"
t1th9.innerText="VII\n 3:10-4:00"

//// ======================== row 2 ======================
let tr2 = document.createElement("tr")
let t2th1 = document.createElement("th")
let t2td2 = document.createElement("td")
let t2td3 = document.createElement("td")
let t2td4 = document.createElement("td")
let t2td5 = document.createElement("th")
let t2td6 = document.createElement("td")
let t2td9 = document.createElement("td")
                                   ////====================== Column 2 ==================================
t2th1.innerText="Monday"
t2td2.innerText="Eng"
t2td3.innerText="Mat"
t2td4.innerText="Che"
t2td5.innerText="L\nU\nN\nC\nH"
t2td6.innerText="Lab"
t2td9.innerText="Phy"

t2td5.rowSpan="6"
t2td6.colSpan="3"


//// ======================== row 3 ======================
let tr3 = document.createElement("tr")
let t3th1 = document.createElement("th")
let t3td2 = document.createElement("td")
let t3td6 = document.createElement("td")
let t3td7 = document.createElement("td")
let t3td8 = document.createElement("td")
let t3td9 = document.createElement("td")
                                    ////====================== Column 3 ==================================

t3th1.innerText="Tuesday"
t3td2.innerText="LAB"
t3td6.innerText="Eng"
t3td7.innerText="Che"
t3td8.innerText="Mat"
t3td9.innerText="SPORTS" 

t3td2.colSpan="3"


//// ======================== row 4 ======================
let tr4 = document.createElement("tr")
let t4th1 = document.createElement("th")
let t4td2 = document.createElement("td")
let t4td3 = document.createElement("td")
let t4td4 = document.createElement("td")
let t4td6 = document.createElement("td")
let t4td7 = document.createElement("td")

                                    ////====================== Column 4 ==================================

t4th1.innerText="Wednesday"
t4td2.innerText="Mat"
t4td3.innerText="Phy"
t4td4.innerText="Eng"
t4td6.innerText="Che"
t4td7.innerText="LIBRARY"

t4td7.colSpan="3"

//// ======================== row 5 ======================
let tr5 = document.createElement("tr")
let t5th1 = document.createElement("th")
let t5td2 = document.createElement("td")
let t5td3 = document.createElement("td")
let t5td4 = document.createElement("td")
let t5td6 = document.createElement("td")
let t5td9 = document.createElement("td")
                                    ////====================== Column 5 ==================================

t5th1.innerText="Thursday"
t5td2.innerText="Phy"
t5td3.innerText="Eng"
t5td4.innerText="Che"
t5td6.innerText="LAB"
t5td9.innerText="Mat"

t5td6.colSpan="3"

//// ======================== row 6 ======================
let tr6 = document.createElement("tr")
let t6th1 = document.createElement("th")
let t6td2 = document.createElement("td")
let t6td6 = document.createElement("td")
let t6td7 = document.createElement("td")
let t6td8 = document.createElement("td")
let t6td9 = document.createElement("td")
                                    ////====================== Column 6 ==================================
t6th1.innerText="Friday"
t6td2.innerText="LAB"
t6td6.innerText="Mat"
t6td7.innerText="Che"
t6td8.innerText="Eng"
t6td9.innerText="phy"

t6td2.colSpan="3"

//// ======================== row 7 ======================
let tr7 = document.createElement("tr")
let t7th1 = document.createElement("th")
let t7td2 = document.createElement("td")
let t7td3 = document.createElement("td")
let t7td4 = document.createElement("td")
let t7td6 = document.createElement("td")
let t7td9 = document.createElement("td")
                                    ////====================== Column 7 ==================================
t7th1.innerText="Sunday"
t7td2.innerText="Eng"
t7td3.innerText="Che"
t7td4.innerText="Mat"
t7td6.innerText="SEMINAR"
t7td9.innerText="SPORTS"
t7td6.colSpan="3"
////======================================================================

tr1.appendChild(t1th1)
tr1.appendChild(t1th2)
tr1.appendChild(t1th3)
tr1.appendChild(t1th4)
tr1.appendChild(t1th5)
tr1.appendChild(t1th6)
tr1.appendChild(t1th7)
tr1.appendChild(t1th8)
tr1.appendChild(t1th9)


tr2.appendChild(t2th1)
tr2.appendChild(t2td2)
tr2.appendChild(t2td3)
tr2.appendChild(t2td4)
tr2.appendChild(t2td5)
tr2.appendChild(t2td6)
tr2.appendChild(t2td9)


tr3.appendChild(t3th1)
tr3.appendChild(t3td2)
tr3.appendChild(t3td6)
tr3.appendChild(t3td7)
tr3.appendChild(t3td8)
tr3.appendChild(t3td9)


tr4.appendChild(t4th1)
tr4.appendChild(t4td2)
tr4.appendChild(t4td3)
tr4.appendChild(t4td4)
tr4.appendChild(t4td6)
tr4.appendChild(t4td7)


tr5.appendChild(t5th1)
tr5.appendChild(t5td2)
tr5.appendChild(t5td3)
tr5.appendChild(t5td4)
tr5.appendChild(t5td6)
tr5.appendChild(t5td9)


tr6.appendChild(t6th1)
tr6.appendChild(t6td2)
tr6.appendChild(t6td6)
tr6.appendChild(t6td7)
tr6.appendChild(t6td8)
tr6.appendChild(t6td9)

tr7.appendChild(t7th1)
tr7.appendChild(t7td2)
tr7.appendChild(t7td3)
tr7.appendChild(t7td4)
tr7.appendChild(t7td6)
tr7.appendChild(t7td9)


table.appendChild(tr1)
table.appendChild(tr2)
table.appendChild(tr3)
table.appendChild(tr4)
table.appendChild(tr5)
table.appendChild(tr6)
table.appendChild(tr7)


table.border="4px solid red"
table.cellPadding="20px"
table.cellSpacing="0px"
tr2.align="center"
tr3.align="center"
tr4.align="center"
tr5.align="center"
tr6.align="center"
tr7.align="center"

document.body.appendChild(table)