const DEFAULT_TOKEN="RANKONE-ADMIN-2026";
const defaultMembers=[
{name:"Thomas Winterfell",role:"Founder",facebook:"#",active:true,image:""},
const $=s=>document.querySelector(s);
let members=JSON.parse(localStorage.getItem("rankone_members")||JSON.stringify(defaultMembers));
const save=()=>localStorage.setItem("rankone_members",JSON.stringify(members));
function loadBg(){const bg=localStorage.getItem("rankone_bg");if(bg)$("#bgLayer").style.backgroundImage=`url("${bg}")`}loadBg();
function renderEditor(){
 $("#memberSelect").innerHTML=members.map((m,i)=>`<option value="${i}">${m.name}</option>`).join("");
 $("#memberEditor").innerHTML=members.map((m,i)=>`<div class="member-row"><input data-i="${i}" data-k="name" value="${m.name}"><select data-i="${i}" data-k="role"><option ${m.role==="Founder"?"selected":""}>Founder</option><option ${m.role==="Leader"?"selected":""}>Leader</option><option ${m.role==="Member"?"selected":""}>Member</option></select><input data-i="${i}" data-k="facebook" value="${m.facebook}" placeholder="Facebook URL"><button data-del="${i}">DELETE</button></div>`).join("");
}
function openDash(){localStorage.setItem("rankone_auth","1");$("#loginBox").hidden=true;$("#dashboard").hidden=false;renderEditor()}
function logout(){localStorage.removeItem("rankone_auth");location.reload()}
if(localStorage.getItem("rankone_auth")==="1")openDash();
$("#login").onclick=()=>{if($("#token").value===DEFAULT_TOKEN)openDash();else $("#loginMsg").textContent="TOKEN ไม่ถูกต้อง"};
$("#token").addEventListener("keydown",e=>{if(e.key==="Enter")$("#login").click()});$("#logout").onclick=logout;
$("#bgFile").onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{localStorage.setItem("rankone_bg",r.result);$("#bgLayer").style.backgroundImage=`url("${r.result}")`};r.readAsDataURL(f)};
$("#clearBg").onclick=()=>{localStorage.removeItem("rankone_bg");$("#bgLayer").style.backgroundImage=""};
let music=new Audio();music.loop=true;
$("#musicFile").onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{localStorage.setItem("rankone_music",r.result);music.src=r.result;music.play().catch(()=>{})};r.readAsDataURL(f)};
$("#playTest").onclick=()=>{const src=localStorage.getItem("rankone_music");if(!src){alert("ยังไม่มีเพลง");return}music.src=src;music.paused?music.play():music.pause()};
$("#clearMusic").onclick=()=>{localStorage.removeItem("rankone_music");music.pause();music.removeAttribute("src")};
$("#memberSelect").onchange=()=>{};
$("#memberImage").onchange=e=>{const f=e.target.files[0],i=Number($("#memberSelect").value);if(!f||Number.isNaN(i))return;const r=new FileReader();r.onload=()=>{members[i].image=r.result;save();renderEditor();$("#memberSelect").value=String(i);alert("เปลี่ยนรูปสมาชิกแล้ว")};r.readAsDataURL(f)};
$("#removeMemberImage").onclick=()=>{const i=Number($("#memberSelect").value);if(!Number.isNaN(i)){members[i].image="";save();alert("ลบรูปแล้ว")}};
$("#memberEditor").addEventListener("change",e=>{const i=e.target.dataset.i,k=e.target.dataset.k;if(i!==undefined&&k){members[Number(i)][k]=e.target.value;save();}});
$("#memberEditor").addEventListener("click",e=>{const i=e.target.dataset.del;if(i===undefined)return;if(confirm("ลบสมาชิกนี้หรือไม่?")){members.splice(Number(i),1);save();renderEditor()}});
$("#addMember").onclick=()=>{members.push({name:"New Member",role:"Member",facebook:"#",active:true,image:""});save();renderEditor();window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})};
