<template>

    <section class="topbar">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-9">
                    <ul class="topbar_left d-flex flex-wrap">
                        <li>
                            <p><i class="fas fa-map-marker-alt"></i> Blackwell Street,Dry Creek,Alaska</p>
                        </li>
                        <li><a href="mailto:support@yourdomain.com"><i class="fas fa-envelope"></i>
                                support@themefax.com</a></li>
                        <li><a href="callto:+442099947740"><i class="fas fa-phone-alt"></i> +4 4204 9946 7403</a>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-4 col-lg-3">
                    <ul class="topbar_right d-flex flex-wrap">
                        <li>
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fab fa-pinterest-p"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!--=====================================
        TOPBAR END
    =====================================-->


    <!--=====================================
        MENU START
    =====================================-->
    <nav class="navbar navbar-expand-lg main_menu">
        <div class="container">
            <RouterLink class="navbar-brand" to="/">
                <img src="../../../images/BonFax_logo.png" alt="BonFax" class="img-fluid w-100">
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fal fa-bars menu_icom"></i>
                <i class="fal fa-times menu_close"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav m-auto">
                    
                    <li class="nav-item">
                        <RouterLink class="nav-link active" to="/">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/about">About</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/service">Service</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/blog">Blog</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/contect">Contect</RouterLink>
                    </li>
                </ul>
                <ul class="menu_right d-flex flex-wrap">
                    <li><a href="#" class="menu_search"><i class="far fa-search"></i></a>
                        <div class="search_form">
                            <form>
                                <span class="close_search"><i class="far fa-times"></i></span>
                                <input type="text" placeholder="Search . . .">
                                <button type="submit">search</button>
                            </form>
                        </div>
                    </li>
                    <li><a class="reservation" href="#" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">reservation</a></li>
                    <li><a href="dashboard.html"><i class="fas fa-user"></i></a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- <div class="reservation">
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">make an appointment</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="reservation_form">
                            <input class="reservation_input" type="text" placeholder="Name">
                            <input class="reservation_input" type="text" placeholder="Phone">
                            <input class="reservation_input" type="text" placeholder="address">
                            <select class="reservation_input" id="select_js">
                                <option value="">select service</option>
                                <option value="">Facial Therapy</option>
                                <option value="">Candle Message</option>
                                <option value="">Stone Spa</option>
                                <option value="">Body Treatments</option>
                                <option value=""> Aroma Therapy</option>
                            </select>
                            <input class="reservation_input" type="date">
                            <select class="reservation_input" id="select_js2">
                                <option value="">select time</option>
                                <option value="">08.00 am to 09.00 am</option>
                                <option value="">10.00 am to 11.00 am</option>
                                <option value="">12.00 pm to 01.00 pm</option>
                                <option value="">02.00 pm to 03.00 pm</option>
                                <option value="">04.00 pm to 05.00 pm</option>
                            </select>
                            <textarea rows="5" placeholder="Message"></textarea>
                            <button class="common_btn" type="submit">submit now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

</template>