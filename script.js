const form = document.getElementById("attendanceForm")
const tableBody = document.querySelector("#table tbody")
const toggle = document.getElementById("themeToggle")

let records = JSON.parse(localStorage.getItem("records")) || []

displayRecords()

form.addEventListener("submit",(e)=>{

e.preventDefault()

let name = document.getElementById("name").value
let subject = document.getElementById("subject").value
let classtype = document.getElementById("classtype").value

let total = Number(document.getElementById("total").value)
let attended = Number(document.getElementById("attended").value)

if(attended>total){

alert("Attended classes cannot exceed total classes")

return

}

let percentage = (attended/total)*100

let record = {

name,
subject,
classtype,
total,
attended,
percentage:percentage.toFixed(2)

}

records.push(record)

localStorage.setItem("records",JSON.stringify(records))

displayRecords()

form.reset()

})


function displayRecords(){

tableBody.innerHTML=""

records.forEach(r=>{

let status = r.percentage>=75 ? "Good" : "Low"

let className = r.percentage>=75 ? "good" : "low"

let row =

`<tr>

<td>${r.name}</td>
<td>${r.subject}</td>
<td>${r.classtype}</td>
<td>${r.total}</td>
<td>${r.attended}</td>
<td>${r.percentage}%</td>
<td class="${className}">${status}</td>

</tr>`

tableBody.innerHTML += row

})

}


/* Theme Toggle */

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark")

if(document.body.classList.contains("dark")){

toggle.innerText="☀ Light Mode"

}else{

toggle.innerText="🌙 Dark Mode"

}

})