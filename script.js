
let inputR1 = document.querySelector("#hide-input-reg1")
let selectR1 = document.querySelector("#hide-select-reg1")
let checkBoxR1 = document.querySelector(".checkbox-reg1")
let isCheckbox1Checked = false
let v1

let inputR2 = document.querySelector("#hide-input-reg2")
let selectR2 = document.querySelector("#hide-select-reg2")
let checkBoxR2 = document.querySelector(".checkbox-reg2")
let isCheckbox2Checked = false
let v2

let clickSound = new Audio("audio/click.mp3")
let tapSound =  new Audio("audio/tap.mp3")

let initBtn = document.querySelector('#init-btn')
let calcBtn = document.querySelector("#calc-btn")

let regs = document.querySelectorAll(".registers");
let regsDestino = document.querySelector("#registradores-destino");
let regsIndex;
let tableRows = document.querySelectorAll("#table-body tr")

let msg = document.querySelector("#message p")
let instructions = document.querySelector("#instructions")

let grayRow
let lightGrayRow
let lightGreenRow = '#dffadc'
let greenRow = '#d7f7d3'
let rowColor





checkBoxR1.addEventListener('click',()=>{
    if(!isCheckbox1Checked){
        selectR1.style.display = 'none'
        inputR1.style.display = 'block'
        isCheckbox1Checked = true

    } else {

        selectR1.style.display = 'block'
        inputR1.style.display = 'none'
        isCheckbox1Checked = false
    }
   
})

checkBoxR2.addEventListener('click',()=>{
    if(!isCheckbox2Checked){
        selectR2.style.display = 'none'
        inputR2.style.display = 'block'
        isCheckbox2Checked = true

    } else {

        selectR2.style.display = 'block'
        inputR2.style.display = 'none'
        isCheckbox2Checked = false
    }
   
})




calcBtn.addEventListener('click', ()=>{
    regsIndex = Number(regsDestino.value) - 1
    verificarValores()

    if(v1 == '' || v2 == '') {

        tapSound.play()
        msgRegistrador()
    } else {
        mudarCorRow()
        clickSound.play()
        calcular()
    }

})


function verificarValores(){
        //if the checkbox isnt checked v1 or v2 will be the index of the array of registers and i will get the value from this array
    v1 = (isCheckbox1Checked == true ? Number(inputR1.value) : regs[Number(selectR1.value)-1].innerHTML)
    v2 = (isCheckbox2Checked == true ? Number(inputR2.value) : regs[Number(selectR2.value)-1].innerHTML)


}

function msgRegistrador(){
    msg.style.display = 'block'
    msg.innerHTML = 'Um dos registradores não foi inicializado'
    setTimeout(()=>{
        tapSound.play()
        msg.innerHTML = 'Você precisa inicializar os registradores com valores constantes'   
    },2000)

    setTimeout(()=>{
        msg.style.display = 'none'    
    },4000)
}

function mudarCorRow(){
    rowColor = tableRows[regsIndex].style.backgroundColor
    tableRows[regsIndex].style.backgroundColor = lightGreenRow

    setTimeout(()=>{
        tableRows[regsIndex].style.backgroundColor = rowColor
    },1000)
}



function calcular(){




    v1 = Number(v1)
    v2 = Number(v2)

    if(instructions.value == "+"){
        regs[regsIndex].innerHTML = v1+v2

    } else if(instructions.value == "-"){
        regs[regsIndex].innerHTML = v1-v2

    }else if(instructions.value == "*"){
        regs[regsIndex].innerHTML = v1*v2

    } else if(instructions.value == "/"){
        regs[regsIndex].innerHTML = (v1/v2).toFixed(1)
    }

}



initBtn.addEventListener('click',()=>{

    clickSound.play()
    regs.forEach(r => {
        r.innerHTML = 0;
    });
    mudarCorTabela()
    mudarCorTabela2()


    initBtn.innerHTML = 'Limpar registradores'
})


function mudarCorTabela(){

    let i
    for(i=0; i < tableRows.length; i++){
        if(i%2==0){
            grayRow = tableRows[i].style.backgroundColor
            tableRows[i].style.backgroundColor = greenRow
        } else {
            lightGrayRow = tableRows[i].style.backgroundColor
            tableRows[i].style.backgroundColor = lightGreenRow
        }

    }

}

function mudarCorTabela2(){

    setTimeout(()=>{


        let i
        for(i=0; i < tableRows.length; i++){
    
            if(i%2==0){
                tableRows[i].style.backgroundColor = grayRow
            } else {
                tableRows[i].style.backgroundColor = lightGrayRow
            }
    
     
        }
    },800)

}