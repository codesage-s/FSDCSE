const container=document.getElementById('root');
//console.log(container);
const root =ReactDOM.createRoot(container);// r eact dom creating root for 
const h21=<h2> Welcome to JSX</h2>
const h22=<h1> ABES Engineering college</h1>
const wrapper=<div style={{border:'2px solid red'}}>{h21}{h22}</div>
const div=
<div style={{}}>
{wrapper}
<h2> heyyy.using JSX</h2>
<img></img>
</div>
root.render(div); 