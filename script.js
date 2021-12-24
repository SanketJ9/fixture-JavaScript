const btns = document.querySelectorAll('.tab-btn');
const main = document.querySelector('.main');
const contents = document.querySelectorAll('.content');
const teamNameInput = document.querySelector('.tm-name');
const addBtn = document.querySelector('.add-btn');
const createBtn = document.querySelector('.create-btn');
const teamListDiv = document.querySelector('.teamlist');
const bracketDiv = document.querySelector('.brack-div');


main.addEventListener('click',(e)=>{
    const id = e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        })

        contents.forEach(function(content){
            content.classList.remove("active");
        })
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})

var teamArr = [];

addBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    let teamName = teamNameInput.value;

    if(teamName !== ""){
      
    const teamNameDiv = document.createElement('div');
    teamNameDiv.classList.add("tm-label");

    const teamNametext = document.createElement('p');
    teamNametext.innerText = teamName.toUpperCase();
    teamNametext.classList.add("tm-label-text")
    teamNameDiv.appendChild(teamNametext);

    var closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.classList.add("close-btn");
    teamNameDiv.appendChild(closeBtn);

    teamListDiv.appendChild(teamNameDiv);

    teamNameInput.value = "";

    teamArr.push(teamName.toUpperCase());

    }else if(teamName == ""){
        return false;
    }

    
})

console.log(teamArr);

createBtn.addEventListener("click", (e)=>{

    e.preventDefault();

    bracketDiv.innerHTML="";

    var nTeams = teamArr.length;

    for(var i=0; i <= nTeams-1; i++){
        
        const bracket = document.createElement('div');
        bracket.classList.add("brackets");
        bracket.innerText = teamArr[i];
        bracketDiv.appendChild(bracket);

    }

})


document.addEventListener("click", (e)=>{
    const closingBtn = e.target;

    if (closingBtn.classList[0] === "close-btn"){
        const closingBtnDiv = closingBtn.parentElement;
        closingBtnDiv.remove();
        
        closingTeamName = closingBtn.previousElementSibling;

        teamArr.pop(closingTeamName.innerText);
     } 
})

console.log(teamArr);