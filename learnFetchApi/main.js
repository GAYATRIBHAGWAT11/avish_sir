// fetch('https://jsonplaceholder.typicode.com/todos/1')
// 	.then(g=> g.json())
// 	.then(data => console.log(data))
// 	.catch(error => console.error(error));

    // sync await

    async function getData(){
        let d=await fetch('https://jsonplaceholder.typicode.com/todos/1') 
        // console.log(d);
        let data=await d.json()
        // ye time na le isilie iske upar bhi await laga diya convert krne tak wait krna chahiye
        console.log(data);
    }
    getData()
// https://jsonplaceholder.typicode.com/todos/1
//  https://api.imgflip.com/get_memes