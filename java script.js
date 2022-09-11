let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);
function inputMsg(){
    let name = prompt("enter the name");
    namasteBtn.textContent = "Roll No.1 "+ name;
}
    
 