let count= 0;
// dom value and buttons
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

console.log(btns);

btns.forEach( (btn) =>
    btn.onclick = (e) =>{
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }else if (styles.contains("increase")) {
            count++;
        }else{
            count = 0;
        }
        value.textContent = count;
        if(count > 0){
            value.style.color="green"
        }else if(count<0){
            value.style.color="red"
        }else if(count === 0){
            value.style.color="black"
        }
    }
)
