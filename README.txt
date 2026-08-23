RANKONE FINAL V5 — BACKGROUND FIX

แก้ปัญหาพื้นหลังแสดงไม่เต็ม/เหมือนโหลดมาแค่บางส่วน:
- Background เป็น fixed 100vw x 100vh
- ใช้ background-size: cover + center center
- แก้ z-index ไม่ให้พื้นหลังถูก body/background layer ทับ
- Overlay ถูกลดความเข้มเพื่อให้เห็นภาพมากขึ้น
- เอฟเฟกต์ grid/particles ยังอยู่แต่ไม่บังภาพ
- Dashboard จำนวนรายชื่อจะซ่อนตอนหน้า Main และแสดงเมื่อเข้า Directory
- รองรับทั้งรูปจาก URL และ data URL จากไฟล์ที่ Admin เลือก
