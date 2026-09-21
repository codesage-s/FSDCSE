const root=document.getElementById('root')
const button =document.getElementById('btn')

console.log(root)
const h2=document.createElement('h2');
const h3=document.createElement('h3');
const img=document.createElement('img')
const loader=document.createElement('h1');
loader.innerHTML='Loading data..'


function showData(){
   function showData(){
    try{

        loader.innerHTML='<h2>loading data..</h2>';
        root.appendchild(loader);
        const serverData= await  fetch('https://fakestoreapi.com/products')
       const jsonData=await serverData.json();
       root.innerHTML=`<h2 style= color:pink> ${jsonData[0].title}<h2>`
       let table='<table border ='2px>
        
        // root.appendChild(loader); // loader ko show karo

        // h2.innerText='Welcome to Dom manipulation'
        // h3.innerHTML='Abes Engineering college'
        // img.src='https://images.unsplash.com/photo-1786108503420-2881fec216b1?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0'
        // img.setAttribute('height',200);
        // img.setAttribute('width',200);

        // root.appendChild(h2);
        // root.appendChild(h3);
        // root.appendChild(img);
    }catch(e){
        console.log(e)
    }finally{
        root.removeChild(loader); // ab safe hai
    }
}

button.addEventListener("click",showData);