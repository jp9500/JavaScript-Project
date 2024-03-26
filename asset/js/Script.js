let pop = document.getElementById("pop")
function add(){
    if(pop.style.display=="none"){
        pop.style.display="block"
    }
    else{
        pop.style.display="none"
    }
}
let sec = document.getElementById("books")
let title = document.getElementById("title")
let author = document.getElementById("author")
let con = document.getElementById("content")
function save(){

    let div=document.createElement("div")
    sec.append(div)
    div.style.height="300px"
    div.style.width='300px'
    div.style.backgroundColor="bisque"
    div.style.borderRadius="10px"
    div.style.boxShadow="5px 5px 20px black"
    div.style.display="flex"
    div.style.justifyContent="center"
    div.style.alignItems="center"

    let div1=document.createElement("div")
    div.append(div1)

    let table=document.createElement("table")
    div1.append(table)
    table.style.position="relative"
    table.style.left="15px"
    table.style.top="-50px"
    table.style.width="250px"
    table.style.lineHeight="10px"

    let tr=document.createElement("tr")
    table.append(tr)
    let td=document.createElement("td")
    tr.append(td)
    tr.style.lineHeight="15px"
    let h3 = document.createElement("h1")
    td.append(h3)
    h3.textContent=`${title.value}`

    let tr1=document.createElement("tr")
    table.append(tr1)
    tr1.style.lineHeight="15px"
    tr1.style.marginTop="30px"
    let td1=document.createElement("td")
    tr1.append(td1)
    let h4=document.createElement("h4")
    td1.append(h4)
    h4.textContent=`${author.value}`

    let tr2=document.createElement("tr")
    table.append(tr2)
    tr2.style.lineHeight="15px"
    tr2.style.marginTop="80px"
    let td2=document.createElement("td")
    tr2.append(td2)
    td2.textContent=`${con.value}`

    pop.style.display="none"
}

let cancel = document.getElementById("cancel")
cancel.addEventListener("click",()=>{
    pop.style.display="none"
})