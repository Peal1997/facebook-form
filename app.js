const search = document.querySelector('.search')
const input = document.querySelector('input')
const icon = document.querySelector('i')
const tooltip = document.querySelector('.tooltip-wraper')


input.onblur = () => {
    if(input.value == ''){
        search.style.borderColor = 'red'
        icon.style.display = 'block'
        input.onfocus = () => {
            tooltip.style.display = 'block'
            search.style.borderColor = 'black'
            icon.style.display = 'none'
            input.onkeyup = () => {
                if(input.value){
                    tooltip.style.display = 'none'
                }else{
                    tooltip.style.display = 'block'
                }
            }
            input.onblur = () => {
                if(input.value){
                tooltip.style.display = 'none'
                search.style.borderColor = 'black'
                 icon.style.display = 'none'
                }else {
                tooltip.style.display = 'none'
                search.style.borderColor = 'red'
                 icon.style.display = 'block'
                }
            }
        }
        
    }else {
        search.style.borderColor = 'black'
        icon.style.display = 'none'
        tooltip.style.display = 'none'
        
        
    }
    
}

