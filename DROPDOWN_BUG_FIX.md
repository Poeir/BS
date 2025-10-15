# แก้ไข Bug: Dropdown หายไปบน Mobile

## วันที่: 15 ตุลาคม 2025

### ปัญหา:
- เมื่อคลิก dropdown "8 ขั้นตอน" บน mobile menu แล้ว dropdown หายไป
- ไม่สามารถมองเห็นรายการ 8 ขั้นตอนได้

### สาเหตุ:
1. `max-height: 0` และ `overflow: hidden` ทำให้เนื้อหาซ่อนอยู่
2. CSS specificity ไม่เพียงพอในบาง case
3. JavaScript อาจโหลดก่อน DOM พร้อม
4. ขาด visual feedback เมื่อ dropdown เปิด

### การแก้ไข:

#### 1. CSS Improvements (/home/phuricharicha/BS/styles.css)

**Mobile Dropdown Styles (max-width: 768px):**
```css
.dropdown-menu {
    position: static !important;
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
    background: rgba(107, 142, 35, 0.5);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-out, padding 0.4s ease-out;
    width: 100%;
    display: block !important;
}

.nav-dropdown.active .dropdown-menu {
    max-height: 600px;
    overflow-y: auto;
    padding: 0.5rem 0;
}
```

**Dropdown Items:**
```css
.dropdown-menu a {
    display: block;
    padding: 0.9rem 1rem 0.9rem 3.5rem;
    font-size: 0.9rem;
    color: var(--text-light);
    width: 100%;
    box-sizing: border-box;
    text-align: left;
    white-space: normal;
}
```

**เพิ่ม !important** เพื่อ override CSS ที่อาจขัดแย้ง

#### 2. JavaScript Improvements (/home/phuricharicha/BS/script.js)

**ปรับปรุง initDropdown():**
- ใช้ `cloneNode()` เพื่อลบ event listeners เก่า
- เพิ่ม console.log เพื่อ debug
- ตรวจสอบ window width ก่อนทำงาน
- ปิด dropdown เมื่อคลิก menu item
- ปิด mobile menu ด้วยเมื่อเลือกหน้า

**เพิ่ม resize handler:**
- ปิด dropdown อัตโนมัติเมื่อขยายหน้าจอ
- ป้องกัน dropdown ค้างเปิดบน desktop

#### 3. Navigation Menu Structure

**เพิ่ม border และ width:**
```css
.nav-menu > li {
    margin: 0;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-menu > li > a {
    padding: 1.2rem 2rem;
    width: 100%;
    box-sizing: border-box;
}
```

#### 4. Dropdown Toggle

**เพิ่ม visual feedback:**
- ลูกศรหมุน 180 องศาเมื่อเปิด
- Background สีเขียวอ่อนบน dropdown items
- Padding เพิ่มขึ้นเมื่อ hover/active
- Active item มีสีส้ม (accent color)

### วิธีทดสอบ:

1. เปิดไฟล์ `test-dropdown.html` ในเบราว์เซอร์
2. หดหน้าจอเล็กกว่า 768px หรือใช้ Developer Tools (F12)
3. คลิกที่ hamburger menu (☰)
4. คลิกที่ "8 ขั้นตอน"
5. ดู console เพื่อตรวจสอบ debug messages

### ผลลัพธ์ที่คาดหวัง:

✅ Dropdown ขยายลงมาแสดงรายการ 8 ขั้นตอน
✅ Background สีเขียวอ่อน
✅ แต่ละขั้นตอนมี padding ซ้าย 3.5rem  
✅ ลูกศรหมุน 180 องศา
✅ คลิกที่ขั้นตอนแล้ว dropdown และ mobile menu ปิดอัตโนมัติ
✅ Active item แสดงสีส้ม

### Debug Console Messages:

เมื่อคลิก dropdown จะเห็น:
```
Toggle clicked! Window width: [width]
Dropdown state changed: false -> true
Dropdown classes: nav-dropdown active
Dropdown menu max-height: 600px
```

### ไฟล์ที่เกี่ยวข้อง:

- ✅ `/home/phuricharicha/BS/styles.css` - CSS fixes
- ✅ `/home/phuricharicha/BS/script.js` - JavaScript fixes  
- ✅ `/home/phuricharicha/BS/test-dropdown.html` - Test file

### หมายเหตุ:

- ใช้ `!important` ในบาง CSS rules เพื่อ override conflicts
- ใช้ `cloneNode()` เพื่อป้องกัน duplicate event listeners
- เพิ่ม console.log เพื่อช่วย debug (สามารถลบออกได้ในโปรดักชัน)

---

**สถานะ:** ✅ แก้ไขเสร็จสมบูรณ์
**ทดสอบแล้วบน:** Mobile (< 768px) และ Desktop (> 768px)
