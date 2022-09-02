

let btn=document.getElementById('submitbtn')
btn.addEventListener('click', (event)=>{
    add(event)
})

function add(event){
    event.preventDefault()
    let link=document.getElementById('link').value   
    let name=document.getElementById('name').value 
    let category=document.getElementById('select').value
    let heading3=document.getElementById('rating').value
    let actorName=document.getElementById('actor').value
    let actressName=document.getElementById('actress').value

    let emptyArr=[];

    let object={
        imgLink:link,
        head1:name,
        head2:category,
        head3:heading3,
        p1:actorName,
        p2:actressName

    }

const container=document.getElementById('task-container');

let div=document.createElement('div');

let h1=document.createElement('h1')
h1.style.color='orange'

let h2=document.createElement('h2')

let h3=document.createElement('h3')

let h4=document.createElement('h3')


let h5=document.createElement('h3')

let img=document.createElement('img')
img.classList.add('photo')


// let playVdo=document.createElement('button')

h1.textContent=`name:${object.head1}`
h2.textContent=object.head2
h3.textContent=object.head3
h4.textContent=object.p1
h5.textContent=object.p2


img.setAttribute('src', object.imgLink)
img.style.marginTop='50px'


div.append(img,h1,h2,h3,h4,h5)

container.append(div)



}
let play=document.getElementById('playbtn')
play.addEventListener('click',(e)=>{
    myFunction(e)
})
function myFunction(e){
    e.preventDefault()
   let video=document.getElementById('videoLink')
   window.open(`${video.value}`)
}


// modal container

const taskBtn = document.querySelector(".task-button");
const modalCont = document.querySelector(".task-modal");
const mainCont = document.querySelector(".task-cont");
const cancelBtn = document.querySelector(".cancel-btn");
const doneBtn = document.querySelector(".done-btn");
const priorityContainer = document.querySelector(".priority-container");
const priorityMovieSmall = document.querySelectorAll(".priority-movie-small");

let priority = ['categories','rate'];
let selectPriority = priority[priority.length - 1];




taskBtn.addEventListener("click", (e) => {
    // Display modal
    console.log("Clicked on the button");
    modalCont.style.display = "flex";
    mainCont.classList.toggle("blur")
})
cancelBtn.addEventListener("click", (e) => {
    // hide modal
    modalCont.style.display = "none";
    mainCont.classList.toggle("blur")
})

// create task

// sorting feature



