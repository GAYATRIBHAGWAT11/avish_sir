
// let btn=document.getElementById('submitbtn')
// btn.addEventListener('click', (event)=>{
//     add(event)
// })

// function add(event){
//     event.preventDefault()
//     let link=document.getElementById('link').value   
//     let name=document.getElementById('name').value 
//     let category=document.getElementById('select').value
//     let heading3=document.getElementById('rating').value
//     let actorName=document.getElementById('actor').value
//     let actressName=document.getElementById('actress').value


//     let object={
//         imgLink:link,
//         head1:name,
//         head2:category,
//         head3:heading3,
//         p1:actorName,
//         p2:actressName,

//     };


// const container=document.getElementById('task-container');

// let div=document.createElement('div');

// let h1=document.createElement('h1')
// h1.style.color='orange'

// let h2=document.createElement('h2')

// let h3=document.createElement('h3')

// let h4=document.createElement('h3')


// let h5=document.createElement('h3')

// let img=document.createElement('img')
// // img.classList.add('photo')




// // let playVdo=document.createElement('button')

// h1.textContent=`name:${object.head1}`
// h2.textContent=object.head2
// h3.textContent=object.head3
// h4.textContent=object.p1
// h5.textContent=object.p2



// img.setAttribute('src', object.imgLink)
// img.style.marginTop='50px'


// div.append(img,h1,h2,h3,h4,h5)

// container.append(div)

// }
// let play=document.getElementById('playbtn')
// play.addEventListener('click',(e)=>{
//     myFunction(e)
// })
// function myFunction(e){
//     e.preventDefault()
//    let video=document.getElementById('videoLink')
//    window.open(`${video.value}`)
// }


// // modal container

// const taskBtn = document.querySelector(".task-button");
// const modalCont = document.querySelector(".task-modal");
// const mainCont = document.querySelector(".task-container");
// const cancelBtn = document.querySelector(".cancel-btn");
// const doneBtn = document.querySelector(".done-btn");
// const priorityContainer = document.querySelector(".priority-container");
// const priorityMovieSmall = document.querySelectorAll(".priority-movie-small");

// let priority = ['categories','rate'];
// let selectPriority = priority[priority.length - 1];




// taskBtn.addEventListener("click", (e) => {
//     // Display modal
//     console.log("Clicked on the button");
//     modalCont.style.display = "flex";
//     mainCont.classList.toggle("blur")
// })
// cancelBtn.addEventListener("click", (e) => {
//     // hide modal
//     modalCont.style.display = "none";
//     mainCont.classList.toggle("blur")
// })


// ==============================================================================================================================================
const cancelBtn = document.querySelector(".cancel-btn");
const taskBtn = document.querySelector(".task-button");
const modalCont = document.querySelector(".task-modal");
const mainCont = document.querySelector(".task-container");

taskBtn.addEventListener("click", (e) => {
    // Display modal
    console.log("Clicked on the button");
    modalCont.style.display = "flex";
    mainCont.classList.toggle(".blur")
})
cancelBtn.addEventListener("click", (e) => {
    // hide modal
    modalCont.style.display = "none";
    mainCont.classList.toggle(".blur")
})



const emptyArr=[]
let mainSection = document.getElementById("main");

let doneBtn = document.querySelector(".done-btn");
doneBtn.addEventListener("click", (event) => {
  add(event);
});
let rateBtn=document.querySelector('.rate')
rateBtn.addEventListener('click',sortRate)
let categoryBtn=document.querySelector('#filter');
categoryBtn.addEventListener('change', filterByCategory);



function add(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
  let link = document.getElementById("link").value;
  let category = document.getElementById("select").value;
  let trailerLink = document.querySelector("#videoLink").value;
  let actor = document.querySelector("#actor").value;
  let actress = document.querySelector("#actress").value;
  let rating = document.getElementById("rating").value;

  let object = {
    head1: name,
    imgLink: link,
    head2: category,
    trailer: trailerLink,
    actor:actor,
    actress:actress,
    rating: rating,
  };
  emptyArr.push(object);
  displayData(emptyArr);
}
function filterByCategory(){
    let val=categoryBtn.value;
    let filterByCategory=emptyArr.filter((d)=>{
        return d.head2===val
    });
     displayData(filterByCategory)
}

  function sortRate() {
    let sortedData = emptyArr.sort((a, b) => {
      return b.rating - a.rating;
    });
    console.log(sortedData);
    displayData(sortedData);
    
  }
  function displayData(array){
    console.log(array);
    mainSection.innerHTML = null;
    array.map((d) => {
      console.log("d", d);
      let div = document.createElement("div");
      div.style.width='300px';
      div.style.height='500px';
      div.style.margin='5px';
      div.style.paddingLeft='10px'
    //   div.style.boxShadow='borderBox';
    div.style.border='5px solid black';
    div.style.textAlign='center'
    div.style.backgroundColor='red'
    div.style.color='white';
    div.classList.add('inlineBlock')

  
      let movieName = document.createElement("h1");
      let img = document.createElement("img");
      let category = document.createElement("h2");
      let trailer = document.createElement("a");
      let actor = document.createElement("h2");
      let actress = document.createElement("h2");
      let rating = document.createElement("h3");
      
      movieName.textContent =`Name: ${d.head1}`; 
      img.setAttribute("src", d.imgLink); 
    img.style.width="200px";
    img.style.height="200px";

    category.textContent = `Category: ${d.head2}`;

    trailer.setAttribute("href",d.trailer) ;
    trailer.textContent=d.trailer;
    trailer.innerText="Watch Trailer";
    trailer.setAttribute("target","_blank");

    actor.textContent = `Actor: ${d.actor}`;

    actress.textContent = `Actress: ${d.actress}`;

    rating.textContent = `Rating: ${d.rating}`;
    div.append(movieName,img,category,actor,actress,rating,trailer);
    mainSection.append(div);



  });
  }
  


