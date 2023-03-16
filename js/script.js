let id
let empName
let ext
let email
let department

window.addEventListener('load', () => {
    const $ = (id) =>document.getElementById(id)
    id = $('id')
    empName = $('name')
    ext = $('ext')
    email = $('email')
    department = $('department')
})

let empForm = document.getElementById('empForm');
empForm.addEventListener('submit', (e) =>  {
e.preventDefault();
console.log(`ID: ${id.value}\nName: ${empName.value}\nExtension: ${ext.value}\nEmail: ${email.value}\nDepartment: ${department.value}\n`)})

