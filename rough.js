let btn = document.getElementById('submitbtn')
btn.addEventListener('click',(event)=>{
​
    add(event)
​
})
​
function add(event){
    event.preventDefault()
    let link = document.getElementById('link').value
    let name = document.getElementById('name').value
    let category = document.getElementById('select').value
    let object =  {
        imgLink:link,
        head1:name,
        head2:category
    }
    const container = document.getElementById('container');
​
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    h1.textContent = object.head1
    h2.textContent = object.head2
    img.setAttribute('src', object.imgLink)
    div.append(h1,img,h2)
    
    container.append(div);
    
}