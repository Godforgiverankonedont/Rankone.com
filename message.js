<!doctype html>
<html lang="th">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>GODFORGIVERANKONEDONT</title>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&family=Orbitron:wght@500;700;800;900&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box }
        html,body { margin: 0; min-height: 100%; background: #080808; color: #eee; font-family: Kanit,sans-serif }
        body { position: relative; overflow-x: hidden }
        .bg { position: fixed; inset: 0; width: 100vw; height: 100vh; background-color: #111; background-position: center center; background-repeat: no-repeat; background-size: cover; z-index: 0; transition: background-image .5s,background-color .5s; will-change: background-image }
        .bg:after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg,#07070770 0%,#070707a8 55%,#070707e8 100%); pointer-events: none }
        .ambient { position: fixed; inset: 0; z-index: 1; pointer-events: none; background-image: radial-gradient(circle at 15% 20%,#fff2 0 1px,transparent 2px),radial-gradient(circle at 75% 30%,#fff2 0 1px,transparent 2px),radial-gradient(circle at 45% 80%,#fff2 0 1px,transparent 2px),radial-gradient(circle at 88% 75%,#fff2 0 1px,transparent 2px); background-size: 220px 220px,310px 310px,260px 260px,350px 350px; animation: drift 22s linear infinite }
        .cursorGlow { position: fixed; left: 0; top: 0; width: 260px; height: 260px; border-radius: 50%; pointer-events: none; z-index: 2; background: radial-gradient(circle,#fff1,transparent 65%); transform: translate(-50%,-50%); mix-blend-mode: screen; opacity: .25 }
        .grid { position: fixed; inset: 0; z-index: 1; opacity: .12; background-image: linear-gradient(#aaa 1px,transparent 1px),linear-gradient(90deg,#aaa 1px,transparent 1px); background-size: 70px 70px; mask-image: linear-gradient(#000,transparent 75%) }
        .page { min-height: 100vh; position: relative; z-index: 3 }
        .landing { position: relative; z-index: 20; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 50px 20px }
        .hero { position: relative; z-index: 10; width: min(980px,94vw); text-align: center }
        .main-logo { position: relative; z-index: 3; width: 92px; height: 92px; margin: 0 auto 24px; border: 1px solid #555; border-radius: 18px; background: #151515 center/cover no-repeat; display: grid; place-items: center; box-shadow: 0 18px 55px #000; overflow: hidden; animation: up .7s ease }
        .main-logo span { font: 800 28px Orbitron; color: #bbb }
        .main-logo img { width: 100%; height: 100%; object-fit: cover }
        .hero h1 { font: 800 clamp(34px,6.4vw,88px)/1 Orbitron; letter-spacing: 3px; margin: 0; text-shadow: 0 5px 35px #000; animation: up .8s ease }
        .hero .sub { font: 10px Orbitron; letter-spacing: 7px; color: #777; margin: 22px 0 34px; display: flex; justify-content: center; gap: 18px; align-items: center }
        .sub i { display: block; width: 45px; height: 1px; background: #555 }
        .entry { position: relative; z-index: 20; width: min(660px,92vw); margin: auto; border: 1px solid #444; border-top: 2px solid #fff; border-radius: 20px; background: linear-gradient(#161616e8,#111111e8); box-shadow: 0 22px 70px #000b; backdrop-filter: blur(14px); overflow: hidden; z-index: 30 }
        .crown { font-size: 35px; margin-bottom: 10px }
        .entry h2 { font: 700 30px Orbitron; margin: 0 }
        .entry p { color: #777; margin: 10px auto 28px; max-width: 470px }
        .enter { border: 1px solid #777; background: #eee; color: #090909; border-radius: 4px; padding: 15px 35px; font: 700 11px Orbitron; letter-spacing: 2px; cursor: pointer; transition: .25s }
        .enter:hover { background: #bbb; transform: translateY(-2px); box-shadow: 0 12px 30px #000 }
        .enter span { margin-left: 12px }
        .bottom { position: fixed; z-index: 4; left: 30px; right: 30px; bottom: 22px; display: flex; justify-content: space-between; color: #555; font: 8px Orbitron; letter-spacing: 2px }
        .music { position: fixed; z-index: 5; right: 25px; top: 22px; border: 1px solid #333; background: #111a; color: #999; padding: 10px 14px; border-radius: 20px; font: 8px Orbitron; cursor: pointer }
        .directory { position: relative; z-index: 10; display: none; max-width: 1200px; margin: auto; padding: 55px 24px 80px }
        .directory.show { display: block!important }
        .showStats { display: grid!important }
        .dir-head { text-align: center; margin-bottom: 35px }
        .main-logo.small { width: 64px; height: 64px; margin-bottom: 15px }
        .dir-head h1 { font: 800 clamp(32px,5vw,65px) Orbitron; margin: 0 }
        .dir-head p { font: 9px Orbitron; color: #666; letter-spacing: 5px }
        .entry:before { content: ""; position: absolute; left: 8%; right: 8%; top: -1px; height: 1px; background: #fff; box-shadow: 0 0 12px #fff8; opacity: .9; pointer-events: none }
        .entry:after { content: ""; position: absolute; left: -20%; top: 0; width: 20%; height: 100%; background: linear-gradient(90deg,transparent,#fff2,transparent); transform: skewX(-18deg); animation: sweep 8s ease-in-out infinite; pointer-events: none }
        
        /* ฟอร์มสำหรับเพิ่มชื่อใหม่ */
        .add-member-box { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 15px; justify-content: flex-end; }
        .add-member-box input, .add-member-box select, .add-member-box button { background: #101010; color: #ddd; border: 1px solid #303030; padding: 10px; font-family: inherit; font-size: 11px; }
        .add-member-box button { background: #eee; color: #111; font-weight: bold; cursor: pointer; border-radius: 4px; }
        .add-member-box button:hover { background: #ccc; }

        .tools { display: flex; gap: 8px; justify-content: flex-end; margin-bottom: 22px }
        .tools input,.tools select { background: #101010; color: #ddd; border: 1px solid #303030; padding: 12px; font-family: inherit }
        .tools input { width: 260px }
        .sec { margin: 40px 0 }
        .sec-title { display: flex; align-items: baseline; gap: 8px; margin-bottom: 14px }
        .sec-title h2 { font: 700 25px Orbitron; margin: 0 }
        .sec-title small { color: #555; font: 9px Orbitron }
        .cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px }
        .founders { grid-template-columns: repeat(2,1fr); max-width: 780px; margin: auto }
        .card { position: relative; display: flex; align-items: center; gap: 14px; min-height: 96px; padding: 14px 18px; background: linear-gradient(110deg,#181818,#0d0d0d); border: 1px solid #333; border-top: 2px solid #fff; border-radius: 10px; overflow: hidden; cursor: pointer; transition: .25s }
        .card:hover { transform: translateY(-5px) scale(1.008); box-shadow: 0 18px 45px #000 }
        .avatar { width: 52px; height: 52px; min-width: 52px; border-radius: 50%; border: 1px solid #555; background: #222; display: grid; place-items: center; overflow: hidden; font: 700 12px Orbitron }
        .avatar img { width: 100%; height: 100%; object-fit: cover }
        .role { font: 8px Orbitron; color: #777; letter-spacing: 1px }
        .card h3 { font-size: 16px; font-weight: 500; margin: 5px 0 }
        .fb { color: #777; text-decoration: none; font: 8px Orbitron }
        .live { margin-left: auto; width: 5px; height: 5px; background: #aaa; border-radius: 50%; box-shadow: 0 0 12px #fff }
        .modal { display: none; position: fixed; inset: 0; background: #000b; backdrop-filter: blur(8px); z-index: 10; place-items: center }
        .modal.on { display: grid }
        .modalbox { width: min(420px,90vw); padding: 35px; background: #111; border: 1px solid #444; border-radius: 15px; text-align: center; position: relative }
        .close { position: absolute; right: 15px; top: 7px; background: none; border: 0; color: #888; font-size: 26px; cursor: pointer; }
        .modalbox .avatar { margin: auto; width: 100px; height: 100px }
        .modalbox h3 { font: 700 23px Orbitron }
        .modalbox a { display: block; background: #eee; color: #111; padding: 12px; text-decoration: none; font: 700 9px Orbitron }
        
        @keyframes drift { from { transform: translate3d(0,0,0) } 50% { transform: translate3d(18px,-24px,0) } to { transform: translate3d(0,0,0) } }
        @keyframes sweep { 0%,55% { transform: translateX(-120%) } 75%,100% { transform: translateX(120%) } }
        @keyframes up { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
        
        @media(max-width: 800px) {
            .cards,.founders { grid-template-columns:1fr }
            .tools, .add-member-box { justify-content: stretch; flex-wrap: wrap }
            .tools input, .add-member-box input { flex: 1; width: auto }
            .bottom { display: none }
        }
        
        .statusBar { display: none; position: relative; z-index: 4; width: min(1120px,92vw); margin: 0 auto 28px; grid-template-columns: repeat(4,1fr); gap: 10px }
        .stat { position: relative; padding: 14px 16px; border: 1px solid #2a2a2a; border-radius: 12px; background: #111c; backdrop-filter: blur(12px); overflow: hidden }
        .stat .num { display: block; font: 800 24px Orbitron, sans-serif; color: #eee }
        .stat .label { display: block; margin-top: 4px; font-size: 10px; letter-spacing: 2px; color: #777 }
        .directoryOpenToast { position: fixed; left: 50%; bottom: 28px; transform: translateX(-50%) translateY(12px); padding: 9px 14px; border: 1px solid #444; border-top: 1px solid #fff; background: #111e; color: #aaa; font: 9px Orbitron; letter-spacing: 2px; opacity: 0; pointer-events: none; z-index: 9999; transition: .25s }
        .directoryOpenToast.on { opacity: 1; transform: translateX(-50%) translateY(0) }
    </style>
</head>
<body>
    <div class="bg" id="bg"></div>
    <div class="grid"></div>
    <div class="ambient" id="ambient"></div>
    <div class="cursorGlow" id="cursorGlow"></div>
    <button class="music" id="musicBtn">♫ MUSIC</button>
    
    <div class="statusBar" id="statusBar">
        <div class="stat total"><span class="num" id="statTotal">0</span><span class="label">TOTAL MEMBERS</span></div>
        <div class="stat founder"><span class="num" id="statFounder">0</span><span class="label">FOUNDERS</span></div>
        <div class="stat leader"><span class="num" id="statLeader">0</span><span class="label">LEADERS</span></div>
        <div class="stat member"><span class="num" id="statMember">0</span><span class="label">MEMBERS</span></div>
    </div>

    <section class="landing" id="landing">
        <div class="hero">
            <div class="main-logo" id="mainLogo"><span>R</span></div>
            <h1>Godforgiverankonedont</h1>
            <div class="sub"><i></i> RANKONE NEVERLOSER <i></i></div>
            <div class="entry">
                <div class="crown"></div>
                <h2>RANKONE</h2>
                <p>NEVER LOSE.<br>WELCOME TO THE OFFICIAL MEMBER RANKONE.</p>
                <button class="enter" id="enter">ENTER MEMBER RANKONE <span>↗</span></button>
            </div>
        </div>
    </section>

    <section class="directory" id="directory">
        <div class="dir-head">
            <div class="main-logo small" id="dirLogo"><span>R</span></div>
            <h1>GODFORGIVERANKONEDONT</h1>
            <p>RANKONE NEVERLOSER</p>
        </div>

        <!-- ฟอร์มสำหรับเพิ่มรายชื่อเข้าฐานข้อมูลกลาง -->
        <div class="add-member-box">
            <input id="newName" placeholder="ชื่อสมาชิกใหม่...">
            <select id="newRole">
                <option value="Member">Member</option>
                <option value="Leader">Leader</option>
                <option value="Founder">Founder</option>
            </select>
            <input id="newFb" placeholder="ลิงก์ Facebook (ถ้ามี)">
            <button onclick="addNewMember()">+ เพิ่มชื่อเข้าสู่ระบบ</button>
        </div>

        <div class="tools">
            <input id="search" placeholder="SEARCH MEMBERS...">
            <select id="filter">
                <option>ALL</option>
                <option>Founder</option>
                <option>Leader</option>
                <option>Member</option>
            </select>
        </div>

        <div class="sec">
            <div class="sec-title"><h2>FOUNDERS</h2><small>/ <b id="fc">00</b></small></div>
            <div id="founders" class="cards founders"></div>
        </div>
        <div class="sec">
            <div class="sec-title"><h2>LEADERS</h2><small>/ <b id="lc">00</b></small></div>
            <div id="leaders" class="cards"></div>
        </div>
        <div class="sec">
            <div class="sec-title"><h2>MEMBERS</h2><small>/ <b id="mc">00</b></small></div>
            <div id="members" class="cards"></div>
        </div>
    </section>

    <div class="directoryOpenToast" id="directoryOpenToast">DIRECTORY LOADED</div>
    
    <div class="bottom">
        <span>GODFORGIVERANKONEDONT</span>
        <span>DESIGN BY RIDE RANKONE © 2026</span>
        <span></span>
    </div>

    <div class="modal" id="modal">
        <div class="modalbox">
            <button class="close" id="close">×</button>
            <div id="mAvatar" class="avatar"></div>
            <div id="mRole" class="role"></div>
            <h3 id="mName"></h3>
            <a id="mFb" target="_blank">OPEN FACEBOOK ↗</a>
        </div>
    </div>

    <!-- โหลด Firebase SDK เพื่อเป็นฐานข้อมูลกลางที่ทุกคนมองเห็นตรงกัน -->
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js"></script>

    <script>
        // 1. การตั้งค่าสตรีมข้อมูลออนไลน์ผ่าน Firebase Database
        const firebaseConfig = {
            databaseURL: "https://rankone-database-default-rtdb.asia-southeast1.firebasedatabase.app/"
        };
        firebase.initializeApp(firebaseConfig);
        const db = firebase.database().ref("rankone_members");

        let members = [];
        const $ = s => document.querySelector(s);
        const initial = n => (n||'').split(/\s+/).slice(0, 2).map(x => x[0]).join("").toUpperCase();

        // 2. ดึงข้อมูลจากฐานข้อมูลกลางแบบ Real-time (เมื่อใครเพิ่มข้อมูล ทุกคนจะเห็นทันที)
        db.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                members = Object.values(data);
            } else {
                members = [];
            }
            render();
        });

        // 3. ฟังก์ชันเพิ่มรายชื่อลงฐานข้อมูลกลาง
        function addNewMember() {
            const name = $("#newName").value.trim();
            const role = $("#newRole").value;
            const facebook = $("#newFb").value.trim() || "#";

            if (!name) {
                alert("กรุณากรอกชื่อสมาชิก");
                return;
            }

            const newMember = { name, role, facebook, image: "" };
            
            // ส่งขึ้นฐานข้อมูลออนไลน์กลาง
            db.push(newMember, (error) => {
                if (error) {
                    alert("บันทึกไม่สำเร็จ: " + error.message);
                } else {
                    alert("เพิ่มรายชื่อสำเร็จ! ตอนนี้ทุกคนที่เข้ามามองเห็นตรงกันแล้ว");
                    $("#newName").value = "";
                    $("#newFb").value = "";
                }
            });
        }

        function render() {
            let q = $("#search").value.toLowerCase(), f = $("#filter").value;
            let a = members.filter(x => x && x.name && x.name.toLowerCase().includes(q) && (f === "ALL" || x.role === f));
            
            let put = (id, r) => $(id).innerHTML = a.filter(x => x.role === r).map(x => 
                `<article class="card" data-n="${x.name}">
                    <div class="avatar">${x.image ? `<img src="${x.image}">` : initial(x.name)}</div>
                    <div>
                        <div class="role">${x.role ? x.role.toUpperCase() : ''}</div>
                        <h3>${x.name}</h3>
                        <a class="fb" href="${x.facebook}" target="_blank" onclick="event.stopPropagation()">Facebook</a>
                    </div>
                    <span class="live"></span>
                </article>`
            ).join("");

            put("#founders", "Founder");
            put("#leaders", "Leader");
            put("#members", "Member");

            let fc = a.filter(x => x.role === "Founder").length;
            let lc = a.filter(x => x.role === "Leader").length;
            let mc = a.filter(x => x.role === "Member").length;

            $("#fc").textContent = String(fc).padStart(2, "0");
            $("#lc").textContent = String(lc).padStart(2, "0");
            $("#mc").textContent = String(mc).padStart(2, "0");
            
            $("#statTotal").textContent = a.length;
            $("#statFounder").textContent = fc;
            $("#statLeader").textContent = lc;
            $("#statMember").textContent = mc;
        }

        $("#search").oninput = render;
        $("#filter").onchange = render;

        // เปิดปิดหน้า Directory
        (function() {
            const enter = document.getElementById("enter");
            const landing = document.getElementById("landing");
            const directory = document.getElementById("directory");
            const stats = document.getElementById("statusBar");

            function openDirectory(ev) {
                if (ev) { ev.preventDefault(); ev.stopPropagation(); }
                if (landing) landing.style.display = "none";
                if (directory) {
                    directory.style.display = "block";
                    directory.classList.add("show");
                }
                if (stats) stats.classList.add("showStats");
            }

            if (enter) {
                enter.addEventListener("click", openDirectory);
            }
        })();

        // Modal แสดงรายละเอียด
        document.addEventListener("click", e => {
            let c = e.target.closest(".card");
            if (!c) return;
            let m = members.find(x => x.name === c.dataset.n);
            if (!m) return;
            $("#mRole").textContent = m.role ? m.role.toUpperCase() : "";
            $("#mName").textContent = m.name;
            $("#mFb").href = m.facebook;
            $("#mAvatar").innerHTML = m.image ? `<img src="${m.image}">` : initial(m.name);
            $("#modal").classList.add("on");
        });

        $("#close").onclick = () => $("#modal").classList.remove("on");
        $("#modal").onclick = e => { if (e.target.id === "modal") $("#modal").classList.remove("on"); };

        // Effect ติดตามเมาส์
        const cg = $("#cursorGlow");
        document.addEventListener("pointermove", e => {
            cg.style.left = e.clientX + "px";
            cg.style.top = e.clientY + "px";
        });
    </script>
</body>
</html>