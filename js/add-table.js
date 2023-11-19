let addBtn = document.querySelector(".add-to-table");
let table = document.querySelector(".table-data-info");

let nameInput = document.querySelector("#name");
let ageInput = document.querySelector("#age");
let numberInput = document.querySelector("#contact-number");
let emailInput = document.querySelector("#email");

addBtn.addEventListener('click', () => {
    let name = nameInput.value;    
    let age = ageInput.value;    
    let number = numberInput.value;    
    let email = emailInput.value;    

    let template = `
                    <tr>
                        <td>${name}</td>
                        <td>${age}</td>
                        <td>${number}</td>
                        <td>${email}</td>
                    </tr>`;

table.innerHTML += template;

});