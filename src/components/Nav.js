import React from 'react'
// import { Link } from 'react-router-dom'

function Nav() {
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
                        <li class="nav-item"><a class="nav-link" href="/">หน้าแรก</a></li>
                        <li class="nav-item"><a class="nav-link" href="#project">วัตถุประสงค์โครงการ</a></li>
                        <li class="nav-item"><a class="nav-link" href="#step">ขั้นตอนการทำสื่อ</a></li>
                        <li class="nav-item"><a class="nav-link" href="#calendar">กำหนดการบันทึก</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">ติดต่อสอบถาม</a></li>
                        <li class="nav-item"><a class="nav-link" href="StepProcess">ขั้นตอนการทำงาน</a></li>
                        <li class="nav-item"><a class="nav-link bround" href="https://forms.gle/sitH91WHRMiN1z4n7">ส่งหัวข้อรายวิชา</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Nav
