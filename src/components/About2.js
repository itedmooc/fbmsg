import React from "react";

function Project() {
  return (
    <>
      {/* <!-- Projects--> */}
      <section class="projects-section bg-gray" id="project">
        <div class="container px-4 px-lg-5">
          {/* <!-- Featured Project Row--> */}
          <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div class="col-xl-6 col-lg-7">
                <br></br><br></br><br></br>
              <img
                class="img-fluid mb-3 mb-lg-0"
                src="assets/img/plan.jpg"
                alt="..."
              />
            </div>
            <div class="col-xl-6 col-lg-5">
              <div class="featured-text text-lg-start">
                <h4>วัตถุประสงค์โครงการ</h4>
                <p class="text-black-50 mb-0">
                  1. เพื่อพัฒนาบทเรียนออนไลน์ (Upskill / Reskill/ New Skill){" "}
                  <br></br>
                  2. เพื่อเพิ่มช่องทางการเข้าถึงการเรียนการสอนในรูปแบบ Digital{" "}
                  <br></br>
                  3. เพื่อช่วยสนับสนุนให้อาจารย์ บุคลากร และผู้เชี่ยวชาญ
                  ของมหาวิทยาลัย สามารถผลิตบทเรียนออนไลน์
                  หรือสื่อการเรียนการสอนได้ <br></br>
                  4. เพื่อให้อาจารย์สามารถนำสื่อไปใช้ประโยชน์ในการสอนได้{" "}
                  <br></br>
                  5.
                  เพื่อสร้างเครือข่ายความร่วมมือในการพัฒนาสื่อเพื่อการเรียนการสอนออนไลน์{" "}
                  <br></br>
                  6.
                  เพื่อเป็นศูนย์กลางการพัฒนาการเรียนการสอนออนไลน์ของมหาวิทยาลัย{" "}
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <br></br>
          {/* <!-- Project Two Row--> */}
          {/* <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src="assets/img/demo-image-02.jpg" alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Mountains</h4>
                                    <p class="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        </div>
      </section>
    </>
  );
}

export default Project;
