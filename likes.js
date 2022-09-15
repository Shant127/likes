var count = 0;

function addCount(){
    count++
    var h3 = document.querySelector("#first")
    h3.innerText = (count + " Like(s)")
}