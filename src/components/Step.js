import React from "react";
import { Link } from "react-router-dom";

function Step() {
  return (
    <>
      <section class="projects-section bg-gray">
        <div class="container px-4 px-lg-5">
          {/* <!-- Project One Row--> */}
          <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <h3 class="text-center textpad">ประเภทสื่อที่นำไปใช้ประโยชน์</h3>
            <div class="col-lg-6">
              <img class="img-fluid" src="assets/img/slide.png" alt="..." />
            </div>
            <div class="col-lg-6">
              <div class="bg-white text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-left">
                    <h4 class="text-black">Slide Electronic</h4>
                    <p class="mb-0 text-black-50">
                      สื่อสไลด์อิเล็กทรอนิกส์ <br></br>{" "}
                      สามารถนำสื่อใช้ประโยชน์ในการเรียนการสอนในชั้นเรียนได้
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div class="col-lg-6">
              <img class="img-fluid" src="assets/img/video.png" alt="..." />
            </div>
            <div class="col-lg-6">
              <div class="bg-white text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-left">
                    <h4 class="text-black">Videos</h4>
                    <p class="mb-0 text-black-50">
                      สื่อวีดิทัศน์ สามารถนำไปใช้เป็นสื่อทบทวน <br></br>{" "}
                      หรือสื่อช่วยสอน ทั้งในรูปแบบ Online หรือ Offline
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div class="col-lg-6">
              <img
                class="img-fluid"
                src="assets/img/online-course.png"
                alt="..."
              />
            </div>
            <div class="col-lg-6">
              <div class="bg-white text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-left">
                    <h4 class="text-black">Online Course</h4>
                    <p class="mb-0 text-black-50">
                      บทเรียนออนไลน์ สามารถเรียนรู้จากทุกที่ <br></br> ทุกเวลา
                      รวมถึงการวัดผลการเรียนรู้ได้ด้วยตนเอง
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br><br id="step"></br>
          <h3 class="text-center text-black textpad">ขั้นตอนการทำสื่อ</h3>
          {/* <!-- Project Two Row--> */}
          <div class="row gx-0 justify-content-center">
            <div class="col-lg-6">
              <img class="img-fluid" src="assets/img/slide2.png" alt="..." />
            </div>
            <div class="col-lg-6 order-lg-first">
              <div class="bg-white text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-right">
                    <h4 class="text-black">สื่อ Slide Electronic</h4>
                    <p class="mb-0 text-black-50">
                      นำสไลด์การเรียนการสอนของอาจารย์มาปรับปรุง <br></br>{" "}
                      เพื่อให้เหมาะสมกับขั้นตอนการทำในข้อถัดไป
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Project One Row--> */}
          <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div class="col-lg-6">
              <img
                class="img-fluid"
                src="assets/img/making-video.png"
                alt="..."
              />
            </div>
            <div class="col-lg-6">
              <div class="bg-white text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-left">
                    <h4 class="text-black">บันทึกวีดิทัศน์</h4>
                    <p class="mb-0 text-black-50">
                      ทำการอัดวีดิทัศน์ ณ ห้อง Studio ตามตารางกำหนดอัดวีดิทัศน์ และทำการตัดต่อวีดิทัศน์
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row gx-0 justify-content-center">
            <div class="col-lg-6">
              <img
                class="img-fluid"
                src="assets/img/online-course2.png"
                alt="..."
              />
            </div>
            <div class="col-lg-6 order-lg-first">
              <div class="bg-white text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-right">
                    <h4 class="text-black">บทเรียนออนไลน์ (MOOC)</h4>
                    <p class="mb-0 text-black-50">
                      และนำขึ้นระบบ MOOC <br></br>{" "}
                      เพื่อเป็นบทเรียนออนไลน์
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br><br></br>
          <div class="text-center mb-4 mb-lg-12 align-items-center">
            <Link to="/StepProcess">
              <button class="textblackup fw-semibold btn bround">คลิกเพื่อดู <br></br>การเตรียมการก่อนการผลิตสื่อวีดิทัศน์</button>
            </Link>
          </div>
          <br></br> <br></br> <br></br>
          {/* <!-- Project One Row--> */}
          {/* <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div><h3 class="text-black text-center">กระบวนการทำสื่อ</h3><br></br></div>
                    <div class="col-xl-4 col-lg-7"><h2 class="text-end">1. &emsp;</h2><br></br></div>
                    <div class="col-xl-8 col-lg-5">
                        <div class="featured-text2 text-lg-start">
                            <h4>อาจารย์ผู้สอน</h4>
                            <p class="text-black-50 mb-0">
                                จัดเตรียมเนื้อหาในรูปแบบสื่อ Slide Electronic (PPT, Canva)
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-7"><h2 class="text-end">2. &emsp;</h2><br></br></div>
                    <div class="col-xl-8 col-lg-5">
                        <div class="featured-text2 text-lg-start">
                            <h4>ITED Team</h4>
                            <p class="text-black-50 mb-0">
                                ดำเนินการปรับแต่ง Slide Electronic บางส่วนเพื่อให้เหมาะสมกับการจัดทำสื่อในรูปแบบวีดิทัศน์
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-7"><h2 class="text-end">3. &emsp;</h2><br></br></div>
                    <div class="col-xl-8 col-lg-5">
                        <div class="featured-text2 text-lg-start">
                            <h4>ITED Team, อาจารย์</h4>
                            <p class="text-black-50 mb-0">
                                กำหนดวันเพื่อดำเนินการถ่ายวีดิทัศน์ร่วมกับอาจารย์
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-7"><h2 class="text-end">4. &emsp;</h2><br></br></div>
                    <div class="col-xl-8 col-lg-5">
                        <div class="featured-text2 text-lg-start">
                            <h4>ITED Team, อาจารย์</h4>
                            <p class="text-black-50 mb-0">
                                ดำเนินการถ่ายวีดิทัศน์
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-7"><h2 class="text-end">5. &emsp;</h2><br></br></div>
                    <div class="col-xl-8 col-lg-5">
                        <div class="featured-text2 text-lg-start">
                            <h4>ITED Team</h4>
                            <p class="text-black-50 mb-0">
                                ดำเนินการตัดต่อ ปรับแต่งวีดิทัศน์
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-7"><h2 class="text-end">6. &emsp;</h2><br></br></div>
                    <div class="col-xl-8 col-lg-5">
                        <div class="featured-text2 text-lg-start">
                            <h4>ITED Team, อาจารย์</h4>
                            <p class="text-black-50 mb-0">
                                ดำเนินการออกข้อสอบ หรือแบบทดสอบสำหรับนำเข้าระบบ MOOC
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-7"><h2 class="text-end">7. &emsp;</h2><br></br></div>
                    <div class="col-xl-8 col-lg-5">
                        <div class="featured-text2 text-lg-start">
                            <h4>ITED Team</h4>
                            <p class="text-black-50 mb-0">
                                จัดทำบทเรียนในรูปแบบออนไลน์ในระบบ MOOC
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-7"><h2 class="text-end">8. &emsp;</h2><br></br></div>
                    <div class="col-xl-8 col-lg-5">
                        <div class="featured-text2 text-lg-start">
                            <h4>ITED Team</h4>
                            <p class="text-black-50 mb-0">
                                บริหารจัดการระบบ MOOC
                            </p>
                        </div>
                    </div>
                </div> */}
          <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div>
                <br></br>
              <h3 class="text-black text-center">รายละเอียดการทำสื่อ</h3>
              <br></br>
            </div>
            {/* <div><img class="img-fluid" src="assets/img/process.png" alt="..." /></div> */}
            <div>
              <table class="table">
                <tr class="tr">
                  <th class="th text-white">
                    <center>ลำดับที่</center>
                  </th>
                  <th class="th text-white">
                    <center>ขั้นตอนการทำสื่อ</center>
                  </th>
                  <th class="th text-white">
                    <center>อาจารย์</center>
                  </th>
                  <th class="th text-white">
                    <center>ITED Team</center>
                  </th>
                </tr>
                <tr class="tr">
                  <td class="td">
                    <center>1</center>
                  </td>
                  <td class="td text-black">
                    จัดเตรียมเนื้อหาในรูปแบบสื่อ Slide Electronic (PPT, Canva)
                  </td>
                  <td class="td">
                    <center>
                      <i class="fa-solid fa-check"></i>
                    </center>
                  </td>
                  <td class="td">
                    <center></center>
                  </td>
                </tr>
                <tr class="tr">
                  <td class="td">
                    <center>2</center>
                  </td>
                  <td class="td text-black">
                    ดำเนินการปรับแต่ง Slide Electronic
                    บางส่วนเพื่อให้เหมาะสมกับการจัดทำสื่อในรูปแบบวีดิทัศน์
                  </td>
                  <td class="td">
                    <center></center>
                  </td>
                  <td class="td">
                    <center>
                      <i class="fa-solid fa-check"></i>
                    </center>
                  </td>
                </tr>
                <tr class="tr">
                  <td class="td">
                    <center>3</center>
                  </td>
                  <td class="td text-black">
                    กำหนดวันเพื่อดำเนินการถ่ายวีดิทัศน์ร่วมกับอาจารย์
                  </td>
                  <td class="td">
                    <center>
                      <i class="fa-solid fa-check"></i>
                    </center>
                  </td>
                  <td class="td">
                    <center>
                      <i class="fa-solid fa-check"></i>
                    </center>
                  </td>
                </tr>
                <tr class="tr">
                  <td class="td">
                    <center>4</center>
                  </td>
                  <td class="td text-black">ดำเนินการถ่ายวีดิทัศน์</td>
                  <td class="td">
                    <center>
                      <i class="fa-solid fa-check"></i>
                    </center>
                  </td>
                  <td class="td">
                    <center>
                      <i class="fa-solid fa-check"></i>
                    </center>
                  </td>
                </tr>
                <tr class="tr">
                  <td class="td">
                    <center>5</center>
                  </td>
                  <td class="td text-black">
                    ดำเนินการตัดต่อ ปรับแต่งวีดิทัศน์
                  </td>
                  <td class="td">
                    <center></center>
                  </td>
                  <td class="td">
                    <center>
                      <i class="fa-solid fa-check"></i>
                    </center>
                  </td>
                </tr>
                <tr class="tr">
                  <td class="td">
                    <center>6</center>
                  </td>
                  <td class="td text-black">
                    ดำเนินการออกข้อสอบ หรือแบบทดสอบสำหรับนำเข้าระบบ MOOC
                  </td>
                  <td class="td">
                    <center>
                      <i class="fa-solid fa-check"></i>
                    </center>
                  </td>
                  <td class="td">
                    <center>
                      <i class="fa-solid fa-check"></i>
                    </center>
                  </td>
                </tr>
                <tr class="tr">
                  <td class="td">
                    <center>7</center>
                  </td>
                  <td class="td text-black">
                    จัดทำบทเรียนในรูปแบบออนไลน์ในระบบ MOOC
                  </td>
                  <td class="td">
                    <center></center>
                  </td>
                  <td class="td">
                    <center>
                      <i class="fa-solid fa-check"></i>
                    </center>
                  </td>
                </tr>
                <tr class="tr">
                  <td class="td">
                    <center>8</center>
                  </td>
                  <td class="td text-black">บริหารจัดการระบบ MOOC</td>
                  <td class="td">
                    <center></center>
                  </td>
                  <td class="td">
                    <center>
                      <i class="fa-solid fa-check"></i>
                    </center>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="signup-section" id="signup">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-10 col-lg-8 mx-auto text-center">
                        <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 class="text-white mb-5">Subscribe to receive updates!</h2> */}
      {/* <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!--> */}
      {/* <form class="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">
                            {/* <!-- Email address input--> */}
      {/* <div class="row input-group-newsletter">
                                <div class="col"><input class="form-control" id="emailAddress" type="email" placeholder="Enter email address..." aria-label="Enter email address..." data-sb-validations="required,email" /></div>
                                <div class="col-auto"><button class="btn btn-primary disabled" id="submitButton" type="submit">Notify Me!</button></div>
                            </div>
                            <div class="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">An email is required.</div>
                            <div class="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">Email is not valid.</div> */}
      {/* <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted--> */}
      {/* <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3 mt-2 text-white">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div> */}
      {/* <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form--> */}
      {/* <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
                        </form>
                    </div>
                </div>
            </div>
        </section> */}
    </>
  );
}

export default Step;
