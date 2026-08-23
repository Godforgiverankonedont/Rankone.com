RANKONE FINAL V7 — ENTER FIX

V6 มี JavaScript handler ซ้ำ/เหลือเศษคำสั่งเดิม ทำให้ browser parse script ไม่ผ่าน
จึงทำให้ปุ่ม ENTER ไม่ทำงานทั้งเว็บ

V7:
- ลบ handler ที่ซ้ำและ syntax error
- ใช้ event listener ชุดเดียวสำหรับ ENTER
- รองรับ mouse click + Enter + Space
- รองรับเปิดด้วย #members
- Directory ถูกซ่อนตอนเริ่ม และแสดงทันทีเมื่อกด
- คงขอบบนสีขาว ไม่มี RGB border
- เพิ่มข้อความ DIRECTORY LOADED สั้น ๆ เพื่อยืนยันการเปิดหน้า
