import React from 'react'

function Contact() {
  return (
    <>
      {/* <!-- Contact--> */}
        <section class="contact-section bg-gray" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt mb-2"></i>
                                <h4 class="text-uppercase m-0">ติดต่อ</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">ฝ่ายพัฒนาระบบสารสนเทศ สำนักพัฒนาเทคนิคศึกษา มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ 1518 ถนนประชาราษฎร์ 1 แขวงวงศ์สว่าง เขตบางซื่อ กรุงเทพฯ 10800</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope mb-2"></i>
                                <h4 class="text-uppercase m-0">Facebook</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50"><a class="text-black-50" href="https://www.facebook.com/profile.php?id=100063697356016">kmutnbmooc</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-mobile-alt mb-2"></i>
                                <h4 class="text-uppercase m-0">โทรศัพท์</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">+66 2 555-2000 ต่อ 2315</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="social d-flex justify-content-center">
                    <a class="mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-github"></i></a>
                </div> */}
            </div>
        </section>
    </>
  )
}

export default Contact
