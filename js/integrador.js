const valorTicket=200
const descEstudiante=80
const descTrainee=50
const descJunior=15

function calcTotal() {
    let cant=document.getElementById("cant").value
    
    let categoria=document.getElementById("categoria").value

    let total=0
    if (categoria==1) {
        total=cant*valorTicket*.2 
    } else if (categoria==2) {
        total=cant*valorTicket*.5 
    } else {
        total=cant*valorTicket*.85 
    }

    document.getElementById("total").innerHTML=`Total a Pagar: $ ${total}`
}

function resetear() {
document.getElementById("formul").reset()
return calcTotal()
}
