const search = document.querySelector('.search')
const input = document.querySelector('input')
const icon = document.querySelector('i')
const tooltip = document.querySelector('.tooltip-wraper')

let count = 0
input.onblur = () => {
    if(input.value == ''){
        search.style.borderColor = 'red'
        icon.style.display = 'block'
        tooltip.style.display = 'none'
    }else{
        search.style.borderColor = 'black'
        icon.style.display = 'none'
    }
    count++
}

input.onfocus = () => {
     if(input.value == '' && count > 0){
        tooltip.style.display = 'block'
        search.style.borderColor = 'black'
        icon.style.display = 'none'
     }else{
        tooltip.style.display = 'none'
        search.style.borderColor = 'black'
        icon.style.display = 'none'
     }
}

input.onkeyup = () => {
    if(input.value){
        tooltip.style.display = 'none'
    }else {
        tooltip.style.display = 'block' 
    }
}