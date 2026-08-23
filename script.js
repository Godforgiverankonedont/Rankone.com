const defaults=[
{name:"Thomas Winterfell",role:"Founder",facebook:"#",active:true,image:""},
{name:"Paul Winterfell",role:"Founder",facebook:"#",active:true,image:""},
{name:"Awake Prime",role:"Founder",facebook:"#",active:true,image:""},
{name:"MeudMon Winterfell",role:"Founder",facebook:"#",active:true,image:""},
{name:"JabGas Winterfell",role:"Founder",facebook:"#",active:true,image:""},
{name:"Nelro Winterfell",role:"Leader",facebook:"#",active:true,image:""},
{name:"Turk Godyouknow",role:"Leader",facebook:"#",active:true,image:""},
{name:"Rankone Member 01",role:"Member",facebook:"#",active:true,image:""},
{name:"Rankone Member 02",role:"Member",facebook:"#",active:true,image:""},
{name:"Rankone Member 03",role:"Member",facebook:"#",active:true,image:""}];
const members=JSON.parse(localStorage.getItem("rankone_members")||JSON.stringify(defaults));
const $=s=>document.querySelector(s);
const initials=n=>n.split(/\s+/).slice(0,2).map(x=>x[0]).join("").toUpperCase();
const bg=localStorage.getItem("rankone_bg");if(bg)$("#backdrop").style.backgroundImage=`url("${bg}")`;
function card(m){
 return `<article class="card" data-name="${m.name.replace(/"/g,"&quot;")}">
 <div class="avatar">${m.image?`<img src="${m.image}">`:initials(m.name)}</div>
 <div class="card-info"><div class="role">${m.role.toUpperCase()}</div><h3>${m.name}</h3><a class="fb" href="${m.facebook}" target="_blank" onclick="event.stopPropagation()">Facebook</a></div><span class="status"></span></article>`;
}
function render(){
 const q=$("#search").value.toLowerCase(),f=$("#filter").value;
 const list=members.filter(m=>m.name.toLowerCase().includes(q)&&(f==="all"||m.role===f));
 const put=(id,role)=>{$(id).innerHTML=list.filter(m=>m.role===role).map(card).join("")};
 put("#founders","Founder");put("#leaders","Leader");put("#members","Member");
 $("#founderCount").textContent=String(list.filter(x=>x.role==="Founder").length).padStart(2,"0");
 $("#leaderCount").textContent=String(list.filter(x=>x.role==="Leader").length).padStart(2,"0");
 $("#memberCount").textContent=String(list.filter(x=>x.role==="Member").length).padStart(2,"0");
 $("#empty").hidden=list.length>0;
 ["#founderSection","#leaderSection","#memberSection"].forEach(id=>$(id).style.display=(list.some(m=>({ "#founderSection":"Founder","#leaderSection":"Leader","#memberSection":"Member"}[id])===m.role))?"block":"none");
}
render();$("#search").addEventListener("input",render);$("#filter").addEventListener("change",render);
document.querySelectorAll(".member-grid").forEach(g=>g.addEventListener("mousemove",e=>{const c=e.target.closest(".card");if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty("--mx",`${e.clientX-r.left}px`);c.style.setProperty("--my",`${e.clientY-r.top}px`)}));
document.addEventListener("click",e=>{const c=e.target.closest(".card");if(!c)return;const m=members.find(x=>x.name===c.dataset.name);$("#profileName").textContent=m.name;$("#profileRole").textContent=m.role.toUpperCase();$("#profileFb").href=m.facebook;if(m.image){$("#profilePhoto").src=m.image;$("#profilePhoto").style.display="block";$("#profileInitial").style.display="none"}else{$("#profilePhoto").style.display="none";$("#profileInitial").style.display="grid";$("#profileInitial").textContent=initials(m.name)}$("#profileModal").classList.add("show")});
$("#closeModal").onclick=()=>$("#profileModal").classList.remove("show");$("#profileModal").onclick=e=>{if(e.target.id==="profileModal")$("#profileModal").classList.remove("show")};
const audio=$("#audio"),music=localStorage.getItem("rankone_music");if(music)audio.src=music;
$("#musicBtn").onclick=()=>{if(!audio.src){alert("ยังไม่มีเพลง กรุณาตั้งค่าจาก Admin");return}audio.paused?audio.play():audio.pause()};
document.addEventListener("keydown",e=>{if(e.ctrlKey&&e.shiftKey&&e.key.toLowerCase()==="a"){e.preventDefault();location.href="admin.html"}});
