import React from 'react'

function Header() {
  return (
    <>
      {/* <!-- Navigation--> */}
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-0 px-lg-12" id="top">
                {/* <img class="img-fluid" src="assets/img/logo-mooc.png" alt="..." /> */}
                <a class="navbar-brand" href="#top"><img class="img-nav" src="logo-mooc.ico" alt="..."></img></a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#top">หน้าแรก</a></li>
                        <li class="nav-item"><a class="nav-link" href="#project">วัตถุประสงค์โครงการ</a></li>
                        <li class="nav-item"><a class="nav-link" href="#step">ขั้นตอนการทำสื่อ</a></li>
                        <li class="nav-item"><a class="nav-link" href="#calendar">กำหนดการบันทึก</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">ติดต่อสอบถาม</a></li>
                        <li class="nav-item"><a class="nav-link bround" href="https://forms.gle/7VquUFn2Wi7MajM86">ส่งหัวข้อรายวิชา</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- Masthead--> */}
        <header class="masthead">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <h1 class="mx-auto my-0 text-uppercase">KMUTNB MOOC</h1>
                        <h2 class="text-white mx-auto mt-2 mb-5">โครงการ พัฒนาบทเรียนออนไลน์ <br></br> Non Degree และ Degree <br></br> เพื่อยกระดับการเรียนการสอนสู่ Digital University</h2>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
