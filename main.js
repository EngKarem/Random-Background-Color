let create = document.getElementById('btn');
let hex = document.getElementById('hex');
let rgb = document.getElementById('rgb');
let notification = document.getElementById('notification');

create.onclick=()=>{
  let RGB =`rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
  let color = tinycolor(RGB)
  document.body.style.backgroundColor=RGB;
  hex.innerHTML = "#" + color.toHex();
  rgb.innerHTML = `${RGB}`;
}

function copy(id){
  let element = document.getElementById(id);
  navigator.clipboard.writeText(element.innerText).then();
  notification.innerHTML = `<div>Code copied!</div>`
  setTimeout(()=>{
    notification.innerHTML = ""
  },3000)
}
