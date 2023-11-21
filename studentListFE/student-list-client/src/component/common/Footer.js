import React from 'react'
import '../../../src/App.css';

const Footer = () => {
  return (
    <footer class="pt-1 mt-5 bg-dark text-light">
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-3 mt-2">
          <h4>PERSON LIST</h4>
          <ul class="nav flex-column">
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 footerlink">Biz Kimiz</a></li>
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 footerlink">Kariyer</a></li>
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 footerlink">İletişim</a></li>
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 footerlink">Satış Yap</a></li>
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 footerlink">Kurumsal Hediye Çeki</a></li>
            
          </ul>
        </div>

        <div class="col-md-3 mt-2">
          <h4>ABOUT US</h4>
          <ul class="nav flex-column">
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 footerlink">Who We Are</a></li>
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 footerlink">Careers</a></li>
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 footerlink">Contact Us</a></li>
            

          </ul>
        </div>

        <div class="col-md-3 mt-2">
          <h4>KAMPANYALAR</h4>
          <ul class="nav flex-column">
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 footerlink">Aktif Kapmanyalar</a></li>
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 footerlink">Elite Üyelik</a></li>
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 footerlink">Hediye Fikirleri</a></li>
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 footerlink">Fırsatlar</a></li>

            <div class="nav-item mt-2 mb-2">
              <h5>Follow Us</h5>
            </div>
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 fab fa-facebook-f footerlink"> Facebook</a>
            </li>
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 fab fa-instagram footerlink"> Instagram</a>
            </li>
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 fab fa-twitter footerlink"> Twitter</a></li>

          </ul>
        </div>
        

        <div class="col-md-3 mt-2">
          <h4>YARDIM</h4>
          <ul class="nav flex-column">
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 footerlink">Sıkça Sorulan Sorular</a></li>
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 footerlink">Canlı Yardım</a></li>
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 footerlink">Nasıl İade Edebilirim</a></li>
            <li class="nav-item mt-2 mb-2"><a href="#" class="nav-link p-0 footerlink">İşlem Rehberi</a></li>
          </ul>
        </div>


        <div class="d-flex py-4 mt-3 border-top">
          <p>© 2022 PERSON LIST. All rights reserved.</p>
        </div>
        </div>
      </div>
  </footer>
  )
}

export default Footer
