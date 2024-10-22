

const inputBox = document.getElementById('input-box');

const listContainer = document.getElementById('list-container');

const button = document.getElementById('btn');


button.addEventListener('click', () =>{

    if(inputBox.value === ''){
        // alert('Please select a value');
        swal.fire({
            title: "Error",
            text: "Invalid Note. please enter A Note.",
            icon: "error",
            confirmButtonText: "OK",
        })
        return;
    }else{
        let li = document.createElement('li');

        li.innerHTML = inputBox.value;

        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
})

listContainer.addEventListener('click', function(e) {

    console.log("click")
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask()