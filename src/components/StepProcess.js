import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import FacebookProvider from "./FBLive";
import ScrollToTop from "./ScrollToTop";
import Header2 from "./Header2";
import ScrollToTopBtn from "./ScrollToTopBtn";

function StepProcess() {
  return (
    <>
      <ScrollToTopBtn />
      <ScrollToTop />
      <Header2 />
      {/* <!-- Projects--> */}
      <section class="projects-section bg-gray" id="step-process">
        <div class="container px-4 px-lg-5">
          <h3 class="text-center textpad">การผลิตสื่อวีดิทัศน์</h3>
          {/* <!-- Featured Project Row--> */}
          <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div class="col-xl-6 col-lg-7">
              <img
                class="img-fluid mb-3 mb-lg-0"
                src="assets/img/step-process1.jpg"
                alt="..."
              />
            </div>
            <div class="col-xl-6 col-lg-5">
              <div class="featured-text text-lg-start">
                <h4>การจัดเตรียม Electronic Slide (Power Point)</h4>
                <p class="text-black-50 mb-0">
                  1. เลือกใช้ Template Slide Electronic (Power Point) ที่ถูกลิขสิทธิ์{" "}
                  <br></br>
                  2. ตั้งค่าขนาดหน้าจอเป็น WideScreen <br></br> &ensp;&nbsp;&nbsp;การตั้งค่า : เมนู Design {">"} Slide Size {">"} WideScreen (16:9){" "}
                  <br></br>
                  3. ข้อความ รูปภาพ เสียง และ วิดีโอ ที่นำมาใช้ ต้องทำการขออนุญาต <br></br> &ensp;&nbsp;&nbsp;หรือใส่แหล่งที่มาใต้สื่อนั้น ๆ <br></br>
                  4. Font ที่นำมาใช้ต้องเป็น Font ที่ถูกลิขสิทธิ์ หรือ Font ฟรี <br></br> &ensp;&nbsp;&nbsp;เช่น TH Sarabun เป็นต้นสามารถดาวน์โหลดได้ที่ <br></br> &ensp;&nbsp;&nbsp;<a href="https://www.f0nt.com/release/13-free-fonts-from-sipa/" target="noopener">https://www.f0nt.com/release/13-free-fonts-from-sipa/{" "}</a>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div class="col-xl-6 col-lg-7">
              <img
                class="img-fluid mb-3 mb-lg-0"
                src="assets/img/step-process2.jpg"
                alt="..."
              />
            </div>
            <div class="col-xl-6 col-lg-5">
              <div class="featured-text text-lg-start">
                <h4>การบันทึกสื่อวีดิทัศน์</h4>
                <p class="text-black-50 mb-0">
                  1. วิดีโอ 1 ตอน ใช้เวลาประมาณ 10 - 30 นาที ขึ้นอยู่กับเนื้อหา{" "}
                  <br></br>
                  2. ภายในวิดีโอจะประกอบไปด้วย หน้า Intro, Content และ Outro{" "}
                  <br></br>
                  &emsp; 2.1 Intro เป็นส่วนของบทนำ ชื่อเรื่องวิชา <br></br> &emsp;&emsp;&emsp;(สำนักพัฒนาเทคนิคศึกษาดำเนินการจัดทำ) <br></br>
                  &emsp; 2.2 Content เป็นส่วนของเนื้อหาที่บรรยายจาก Slide Electronic <br></br> &emsp;&emsp;&emsp;(อาจารย์ผู้สอนจัดเตรียม) <br></br>
                  &emsp; 2.3 Outro เป็นส่วนปิดท้ายของวิดีโอ <br></br> &emsp;&emsp;&emsp;(สำนักพัฒนาเทคนิคศึกษาดำเนินการจัดทำ) <br></br>
                </p>
              </div>
            </div>
          </div>
          <h3 class="text-center textpad">การเตรียมหัวข้อในการบันทึกสื่อวีดิทัศน์และการนำเนื้อหาเข้าสู่ระบบอีเลิร์นนิง</h3>
          <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div class="col-lg-5 bg-white card py-4 h-100">
              <h4 class="textpad text-center text-black"><a href="https://drive.google.com/file/d/1UIP-opbopbDqQhSLywGtyprsz7G1kIAo/view?usp=sharing" target="noopener">ขั้นตอนการจัดทำสื่อเพื่อการบันทึก</a></h4>
              <div class="text-center mb-4 mb-lg-12 align-items-center">
              <button class="textwhiteup fw-semibold btn broundBlack"><a class="nav-link" href="https://forms.gle/sitH91WHRMiN1z4n7" target="noopener">กรอกแบบฟอร์ม <br></br>หัวข้อในการบันทึกสื่อวีดิทัศน์ <br></br>(Google Form)</a></button>
              </div>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-5 bg-white card py-4 h-100">
              <h4 class="textpad text-center text-black"><a href="https://docs.google.com/document/d/1qJQUd-o8-_HRoHOL-KB3yWFCi1reXj59/edit?usp=sharing&ouid=117648227180513084001&rtpof=true&sd=true" target="noopener">แบบฟอร์มคำถามปรนัย</a></h4>
              <div class="text-center mb-4 mb-lg-12 align-items-center">
              <button class="textwhiteup fw-semibold btn broundBlack"><a class="nav-link" href="https://forms.gle/BGUZtB5HsnfSJVy7A" target="noopener">อัปโหลดไฟล์เอกสาร <br></br>แบบทดสอบก่อนเรียนและหลังเรียน <br></br>(Google Form)</a></button>
              </div>
            </div>
          </div>
          

        </div>
      </section>
      <Contact />
      <Footer />
      <FacebookProvider />
    </>
  );
}

export default StepProcess;
