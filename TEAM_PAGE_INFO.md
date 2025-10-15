# หน้าคณะผู้จัดทำ (Team Page)

## วันที่สร้าง: 15 ตุลาคม 2025

### ภาพรวม:
หน้าแสดงข้อมูลสมาชิกทีมผู้จัดทำโครงการ BanaWare ทั้งหมด 8 คน พร้อมบทบาทและความสามารถของแต่ละคน

### ไฟล์: `/home/phuricharicha/BS/team.html`

---

## โครงสร้างหน้า:

### 1. Navigation Bar
- เหมือนหน้าอื่นๆ
- มีลิงก์ "คณะผู้จัดทำ" เป็น active

### 2. Page Header
- ชื่อหน้า: "คณะผู้จัดทำ"
- รายละเอียด: "ทีมงานที่ร่วมพัฒนาโครงการ BanaWare"
- Breadcrumb: หน้าแรก / คณะผู้จัดทำ

### 3. Team Introduction
- ข้อความแนะนำทีม
- อธิบายวิสัยทัศน์และเป้าหมาย

### 4. Team Grid (8 คน)
แบ่งเป็น Grid แสดงการ์ดสมาชิก แต่ละคนมี:

#### สมาชิกทั้ง 8 คน:

1. **สมชาย ใจดี** - Project Manager
   - 👨‍💼 Avatar
   - Skills: Leadership, Planning, Communication
   - รับผิดชอบการวางแผนและบริหารโครงการ

2. **สุดา วิจัยดี** - Research Lead
   - 👩‍🔬 Avatar
   - Skills: Research, Analysis, Data
   - ดำเนินการวิจัยและรวบรวมข้อมูล

3. **ชัยชนะ เทคโนโลยี** - Tech Lead
   - 👨‍💻 Avatar
   - Skills: Web Dev, UI/UX, Programming
   - พัฒนาเว็บไซต์และระบบ

4. **สวยงาม ดีไซน์** - Creative Designer
   - 👩‍🎨 Avatar
   - Skills: Graphic Design, Branding, Creative
   - ออกแบบกราฟิกและภาพลักษณ์แบรนด์

5. **รวยเงิน การเงิน** - Financial Analyst
   - 👨‍💼 Avatar
   - Skills: Finance, Budgeting, ROI Analysis
   - วิเคราะห์ต้นทุนและการเงิน

6. **มาร์เก็ต โปรโมท** - Marketing Specialist
   - 👩‍💼 Avatar
   - Skills: Marketing, Social Media, PR
   - วางแผนกลยุทธ์การตลาด

7. **ผลิต สร้างสรรค์** - Production Manager
   - 👨‍🏭 Avatar
   - Skills: Production, Quality Control, Operations
   - ดูแลกระบวนการผลิต

8. **ธรรมชาติ สิ่งแวดล้อม** - Sustainability Expert
   - 👩‍🌾 Avatar
   - Skills: Sustainability, Environment, Green Tech
   - ศึกษาผลกระทบสิ่งแวดล้อม

### 5. Team Stats
สถิติทีมแสดงเป็น Grid:
- 👥 8 สมาชิกในทีม
- 📚 8 ขั้นตอน NPD
- 🎯 100% ความทุ่มเท
- 🌱 ∞ ความยั่งยืน

### 6. Footer
- เหมือนหน้าอื่นๆ

---

## การออกแบบ (Design):

### Team Card:
```
┌─────────────────────┐
│   [Avatar 8rem]     │ <- Gradient background
│                     │
├─────────────────────┤
│   ชื่อ-นามสกุล      │
│   ตำแหน่ง           │
│   Student ID        │
│   รายละเอียด        │
│   [Skills tags]     │
└─────────────────────┘
```

### สี:
- **Avatar Background**: Gradient จาก #2d5016 → #6b8e23
- **Card Background**: White
- **Role Color**: #f4a460 (accent)
- **Skills Tags**: Background #f8f9fa, Text #6b8e23

### Hover Effects:
- การ์ดยกขึ้น (translateY -10px)
- Shadow เข้มขึ้น
- Smooth transition 0.4s

---

## Responsive Design:

### Desktop (> 768px):
- Grid: auto-fit, minmax(280px, 1fr)
- Avatar height: 320px
- Font size: 8rem

### Tablet (768px):
- Grid: 1 column
- Avatar height: 280px
- Font size: 6rem

### Mobile (< 480px):
- Avatar height: 240px
- Font size: 5rem
- Padding ลดลง

---

## ฟีเจอร์พิเศษ:

### 1. Card Animation
- Hover → ยกขึ้น 10px
- Shadow ขยายใหญ่ขึ้น
- Smooth transition

### 2. Avatar Design
- Emoji icon ขนาดใหญ่
- Gradient background สวยงาม
- Radial gradient overlay

### 3. Skill Tags
- แสดงเป็น badges
- Flexbox wrap ได้
- สีสันสอดคล้องกับธีม

### 4. Stats Section
- แสดงข้อมูลสถิติทีม
- Icon ขนาดใหญ่น่าสนใจ
- Responsive grid

---

## วิธีใช้งาน:

### สำหรับผู้ดูแลเว็บ:
1. แก้ไขชื่อ-นามสกุลจริงของสมาชิก
2. เปลี่ยน Student ID เป็นรหัสจริง
3. อัปเดตรายละเอียดและ Skills
4. เปลี่ยน Avatar เป็นรูปจริง (ถ้าต้องการ)

### แก้ไขข้อมูลสมาชิก:
```html
<div class="team-card">
    <div class="team-avatar">👨‍💼</div> <!-- เปลี่ยน emoji หรือใส่รูป -->
    <div class="team-info">
        <h3 class="team-name">ชื่อจริง</h3> <!-- แก้ไขที่นี่ -->
        <p class="team-role">ตำแหน่ง</p>
        <p class="team-id">Student ID: 65XXXXXX1</p> <!-- รหัสนักศึกษา -->
        <p class="team-description">รายละเอียด</p>
        <div class="team-skills">
            <span class="skill-tag">Skill 1</span>
            <span class="skill-tag">Skill 2</span>
        </div>
    </div>
</div>
```

### ใส่รูปจริง:
เปลี่ยนจาก:
```html
<div class="team-avatar">👨‍💼</div>
```

เป็น:
```html
<div class="team-avatar">
    <img src="images/member1.jpg" alt="ชื่อสมาชิก" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

---

## การอัปเดตใน Navigation:

เพิ่มลิงก์ "คณะผู้จัดทำ" ในไฟล์:
- ✅ index.html
- ⏳ idea-generation.html (ต้องเพิ่ม)
- ⏳ idea-screening.html (ต้องเพิ่ม)
- ⏳ concept-development.html (ต้องเพิ่ม)
- ⏳ marketing-strategy.html (ต้องเพิ่ม)
- ⏳ business-analysis.html (ต้องเพิ่ม)
- ⏳ product-development.html (ต้องเพิ่ม)
- ⏳ market-testing.html (ต้องเพิ่ม)
- ⏳ commercialization.html (ต้องเพิ่ม)

---

## Browser Compatibility:
- ✅ Chrome/Edge (modern)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

---

## SEO & Accessibility:
- ✅ Semantic HTML
- ✅ Alt text (ถ้าใช้รูปจริง)
- ✅ Proper heading hierarchy
- ✅ Responsive meta viewport
- ✅ Descriptive titles

---

**สถานะ:** ✅ สร้างเสร็จสมบูรณ์
**URL:** `/team.html`
**พร้อมใช้งาน:** ใช่
