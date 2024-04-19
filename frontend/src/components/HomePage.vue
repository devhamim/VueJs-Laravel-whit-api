<template>
    <!--===================================== 
        BANNER START
    =====================================-->
    <!-- <section class="banner">
        <div class="row banner_slider">
            <div class="col-12" v-for="(banner, index) in banners" :key="index">
                <div class="single_slider">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-md-8">
                                <div class="single_slider_text wow fadeInUp" data-wow-duration="1s">
                                    <h5>{{ banner.title }}</h5>
                                    <h1>Grow Up Your Skin With The Power Of Natural Service!!</h1>
                                    <p>{{ banner.description }}</p>
                                    <img :src="'http://127.0.0.1:8000/' + banner.image" :alt="banner.title" />
                                    <ul class="d-flex flex-wrap">
                                        <li>
                                            <a class="common_btn" href="#">Get Started</a>
                                        </li>
                                        <li v-if="banner.video_url">
                                            <a class="venobox play_btn" :href="banner.video_url">
                                                <i class="fas fa-play"></i>
                                            </a>
                                            <span>Intro Video</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!--=====================================
        BANNER END
    =====================================-->

    <!-- =====================================
        FUTURED SERVICES START
    =====================================-->
    <section class="futured_services mt_115 xs_mt_70">
        <div class="container">
            <div class="row">
                <div class="col-xl-7 col-md-10 m-auto wow fadeInUp" data-wow-duration="1s">
                    <div class="section_heading mb_50 xs_mb_55">
                        <h5>What We're Offering</h5>
                        <h3>For Your Future Services</h3>
                    </div>
                </div>
            </div>
            <div class="row futured_slider wow fadeInUp" data-wow-duration="1s">
                <div class="col-xl-3">
                    <div class="featured_service_single">
                        <span><i class="fas fa-user-shield"></i></span>
                        <h3>Spa Membership</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia .</p>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="featured_service_single">
                        <span><i class="fas fa-restroom"></i></span>
                        <h3>Referal Program</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia .</p>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="featured_service_single">
                        <span><i class="fas fa-gift"></i></span>
                        <h3>Gifts Certificates</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia .</p>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="featured_service_single">
                        <span><i class="fas fa-comment-dots"></i></span>
                        <h3>Give Us a Feed Back</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia .</p>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="featured_service_single">
                        <span><i class="fas fa-restroom"></i></span>
                        <h3>Referal Program</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia .</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--=====================================
        FUTURED SERVICES END
    =====================================-->


    <!--=====================================
        ABOUT START
    =====================================-->
    <section class="about mt_120 xs_mt_70">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-md-10 col-lg-6 wow fadeInUp" data-wow-duration="1s">
                    <div class="row">
                        <div class="col-12">
                            <div class="section_heading heading_left mb_25">
                                <h5>{{ about.subtitle }}</h5>
                                <h3>{{ about.title }}</h3>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="about-text" v-html="about.description"></div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 wow fadeInUp" data-wow-duration="1s">
                    <div class="about_img">
                        <a class="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/xsnCYCEbdr4">
                            <i class="fas fa-play"></i>
                        </a>
                        <img :src="getAboutImageUrl(about.image)" alt="About Us" class="img-fluid-100 large_img_1">
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--=====================================
        ABOUT END
    =====================================-->


    <!--=====================================
        CATEGORIES START
    =====================================-->
    <section class="categories mt_115 xs_mt_70">
        <div class="container">
            <div class="row">
                <div class="col-xl-7 col-lg-8 col-md-10 m-auto wow fadeInUp" data-wow-duration="1s">
                    <div class="section_heading mb_35">
                        <h5>Top Categories</h5>
                        <h3>Explore Categories</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div class="single_categories">
                        <span>
                            <img src="../../images/category_icon_1.png" alt="category" class="img-fluid w-100">
                        </span>
                        <h4>Aroma Therapy</h4>
                        <p>Lorem ipsum dolor sit amet consectetur into adipiscing elit</p>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div class="single_categories">
                        <span>
                            <img src="../../images/category_icon_2.png" alt="category" class="img-fluid w-100">
                        </span>
                        <h4>Sauna Relax</h4>
                        <p>Lorem ipsum dolor sit amet consectetur into adipiscing elit</p>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div class="single_categories">
                        <span>
                            <img src="../../images/category_icon_3.png" alt="category" class="img-fluid w-100">
                        </span>
                        <h4>Facials</h4>
                        <p>Lorem ipsum dolor sit amet consectetur into adipiscing elit</p>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div class="single_categories">
                        <span>
                            <img src="../../images/category_icon_4.png" alt="category" class="img-fluid w-100">
                        </span>
                        <h4>Mineral Baths</h4>
                        <p>Lorem ipsum dolor sit amet consectetur into adipiscing elit</p>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div class="single_categories">
                        <span>
                            <img src="../../images/category_icon_5.png" alt="category" class="img-fluid w-100">
                        </span>
                        <h4>Body Treatments</h4>
                        <p>Lorem ipsum dolor sit amet consectetur into adipiscing elit</p>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div class="single_categories">
                        <span>
                            <img src="../../images/category_icon_6.png" alt="category" class="img-fluid w-100">
                        </span>
                        <h4>Waxing</h4>
                        <p>Lorem ipsum dolor sit amet consectetur into adipiscing elit</p>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div class="single_categories">
                        <span>
                            <img src="../../images/category_icon_7.png" alt="category" class="img-fluid w-100">
                        </span>
                        <h4>Massage</h4>
                        <p>Lorem ipsum dolor sit amet consectetur into adipiscing elit</p>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div class="single_categories">
                        <span>
                            <img src="../../images/category_icon_8.png" alt="category" class="img-fluid w-100">
                        </span>
                        <h4>Geothermal Spa</h4>
                        <p>Lorem ipsum dolor sit amet consectetur into adipiscing elit</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--=====================================
        CATEGORIES END
    =====================================-->


    <!--=====================================
        SERVICES START
    =====================================-->
    <section class="services mt_115 xs_mt_70" style="background: url(../../images/background_shapes.jpg);">
        <div class="container">
            <div class="row">
                <div class="col-xl-7 col-lg-8 col-md-10 wow fadeInUp" data-wow-duration="1s">
                    <div class="section_heading heading_left mb_35">
                        <h5>Our Services</h5>
                        <h3>Explore Popular Services</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 wow fadeInUp" data-wow-duration="1s" v-for="service in services" :key= service.id>
                    <div class="services_item">
                        <div class="services_img">
                            <img :src="getServiceImageUrl(service.image)" alt="services" class="img-fluid w-100">
                        </div>
                        <div class="services_text">
                            <a class="title" href="service_details.html">{{ service.title }}</a>
                            <p>{{ service.sort_desp }}</p>
                        </div>
                    </div>
                </div>

            </div>
            <RouterLink class="common_btn" to="/service">All Services</RouterLink>
        </div>
    </section>
    <!--=====================================
        SERVICES END
    =====================================-->


    <!--=====================================
        WHY CHOOSE START
    =====================================-->
    <section class="why_choose mt_115 xs_mt_70">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-xl-5 col-lg-6 col-md-10 wow fadeInUp" data-wow-duration="1s">
                    <div class="section_heading heading_left mb_25">
                        <h5>Why Choose Us</h5>
                        <h3>Why You Choose Our Bonfax Spa Salon</h3>
                    </div>
                    <div class="why_choose_text">
                        <p>Excepteur sint occaecat cupidatat non proident,sunt inculpk qui officia deserunt mollit anim
                            id est laborum.sed do eiusmod.</p>
                        <ul>
                            <li>
                                <h4>Qualified Staff</h4>
                                <span>Duis aute irure dolor in Cillumr reprehenderit in voluptate.</span>
                            </li>
                            <li>
                                <h4>Relax Zones</h4>
                                <span>Duis aute irure dolor in Cillumr reprehenderit in voluptate.</span>
                            </li>
                            <li>
                                <h4>Variety Of Care</h4>
                                <span>Duis aute irure dolor in Cillumr reprehenderit in voluptate.</span>
                            </li>
                            <li>
                                <h4>Herbal Product</h4>
                                <span>Duis aute irure dolor in Cillumr reprehenderit in voluptate.</span>
                            </li>
                        </ul>
                        <RouterLink class="common_btn mt_25" to="/about">read more</RouterLink>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-6 col-sm-8 col-md-8 col-xxl-6 wow fadeInUp" data-wow-duration="1s">
                    <div class="why_choose_img">
                        <div class="large_img">
                            <img src="../../images/why_choose_img_1.jpg" alt="why choose" class="img-fluid w-100">
                        </div>
                        <div class="small_img">
                            <img src="../../images/why_choose_img_2.jpg" alt="why choose" class="img-fluid w-100">
                        </div>
                        <a class="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/xsnCYCEbdr4">
                            <i class="fas fa-play"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--=====================================
        WHY CHOOSE END
    =====================================-->


    <!--=====================================
        WORK START
    =====================================-->
    <section class="work mt_115 xs_mt_70">
        <div class="container">
            <div class="row">
                <div class="col-xl-7 col-lg-8 col-md-10 m-auto wow fadeInUp" data-wow-duration="1s">
                    <div class="section_heading mb_85 xs_mb_30">
                        <h5>3 Easy Step</h5>
                        <h3>How It works?</h3>
                    </div>
                </div>
            </div>
            <div class="work_text_area">
                <div class="row">
                    <div class="col-xl-4 col-md-4 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                        <div class="work_single first">
                            <h4>Meeting</h4>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                        <div class="work_single second">
                            <h4>Treatment</h4>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                        <div class="work_single third">
                            <h4>Finalizing</h4>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--=====================================
        WORK END
    =====================================-->


    <!--=====================================
        GALLERY START
    =====================================-->
    <section class="gallery mt_85 xs_mt_35">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-md-10 col-lg-5 wow fadeInUp" data-wow-duration="1s">
                    <div class="section_heading heading_left mb_35 xs_mb_30">
                        <h5>Our Gallery</h5>
                        <h3>Let's See Our Gallery</h3>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-7 wow fadeInUp" data-wow-duration="1s">
                    <div class="gallery_filter">
                        <button class="active" type="button" data-filter="*" @click="filterGallery('all')">Show All</button>
                        <button type="button" v-for="gallery in gallerys" :key="gallery.id" @click="filterGallery(gallery.id)">
                            {{ gallery.title }}
                        </button>
                    </div>

                </div>
            </div>
            <div class="row grid" >
                <div class="col-lg-4 col-sm-6 {{ gallery.id }} wow fadeInUp" data-wow-duration="1s" v-for="gallery in filteredGallery" :key="gallery.id">
                    <div class="gallery_item">
                        <a class="venobox" :data-gall="'gallery' + gallery.id" :href="getGalleryImageUrl(gallery.image)">
                            <img :src="getGalleryImageUrl(gallery.image)" :alt="gallery.title" class="img-fluid w-100">
                            <div class="gal_img_overlay">
                            <h4>{{ gallery.title }}</h4>
                            <p>{{ gallery.address }}</p>
                            </div>
                            <span><i class="fas fa-eye"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--=====================================
        GALLERY END
    =====================================-->


    <!--=====================================
        COUNTER START
    =====================================-->
    <section class="counter_section mt_105 xs_mt_55 " style="background: url(../../images/counter_bg.jpg);">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="1s">
                    <div class="single_counter">
                        <div class="single_counter_center">
                            <h2>
                                <span class="counter">378</span>
                            </h2>
                        </div>
                        <p>Worldwide Clients</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="1s">
                    <div class="single_counter">
                        <div class="single_counter_center">
                            <h2>
                                <span class="counter">835</span>
                            </h2>
                        </div>
                        <p>Wellness & Spa</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="1s">
                    <div class="single_counter">
                        <div class="single_counter_center">
                            <h2>
                                <span class="counter">712</span>
                            </h2>
                        </div>
                        <p>Happy Customers</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="1s">
                    <div class="single_counter">
                        <div class="single_counter_center">
                            <h2>
                                <span class="counter">75</span>
                            </h2>
                        </div>
                        <p>Awards Winner</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--=====================================
        COUNTER END
    =====================================-->


    <!--=====================================
        TEAM START
    =====================================-->
    <section class="team mt_115 xs_mt_65">
        <div class="container">
            <div class="row">
                <div class="col-xl-7 col-md-10 m-auto wow fadeInUp" data-wow-duration="1s">
                    <div class="section_heading mb_35">
                        <h5>Our Team</h5>
                        <h3>Our Experience Specialists</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div class="single_team">
                        <div class="single_team_img">
                            <img src="../../images/team_img_1.jpg" alt="team" class="img-fluid w-100">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                        <div class="single_team_text">
                            <a class="title" href="team_details.html">Mattie Joseph</a>
                            <p>Dermatologist</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div class="single_team">
                        <div class="single_team_img">
                            <img src="../../images/team_img_2.jpg" alt="team" class="img-fluid w-100">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                        <div class="single_team_text">
                            <a class="title" href="team_details.html">Edna Marxten</a>
                            <p>Sr.Dermatologist</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
                    <div class="single_team">
                        <div class="single_team_img">
                            <img src="../../images/team_img_3.jpg" alt="team" class="img-fluid w-100">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                        <div class="single_team_text">
                            <a class="title" href="team_details.html">Jessica Brown</a>
                            <p>Dermatologist</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--=====================================
        TEAM END
    =====================================-->


    <!--=====================================
        TESTIMONIAL START
    =====================================-->
    <section class="testimonial mt_115 xs_mt_70">
        <div class="container">
            <div class="row">
                <div class="col-xl-7 col-md-10 m-auto wow fadeInUp" data-wow-duration="1s">
                    <div class="section_heading mb_35">
                        <h5>our testimonial</h5>
                        <h3>What Our Clients Says</h3>
                    </div>
                </div>
            </div>
            <div class="row testi_slider wow fadeInUp" data-wow-duration="1s">
                <div class="col-xl-4">
                    <div class="single_testimonial">
                        <div class="single_testimonial_img">
                            <img src="../../images/client_1.jpg" alt="client" class="img-fluid w-100">
                        </div>
                        <div class="single_testimonial_text">
                            <p class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </p>
                            <p class="cliect_comment">
                                Duis aute irure dolor in reprehenderit into volupjl
                                tate velit esse cillum dolore eu fugiat nulla partr
                                iatur sunt in culp qui officia deserunt mollit
                            </p>
                            <h3 class="title">Courtney Henry</h3>
                            <p class="designation">Sr. UX/UI Designer</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="single_testimonial">
                        <div class="single_testimonial_img">
                            <img src="../../images/client_2.jpg" alt="client" class="img-fluid w-100">
                        </div>
                        <div class="single_testimonial_text">
                            <p class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </p>
                            <p class="cliect_comment">
                                Duis aute irure dolor in reprehenderit into volupjl
                                tate velit esse cillum dolore eu fugiat nulla partr
                                iatur sunt in culp qui officia deserunt mollit
                            </p>
                            <h3 class="title">Rishmika Lane</h3>
                            <p class="designation">Software Engineer</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="single_testimonial">
                        <div class="single_testimonial_img">
                            <img src="../../images/client_3.jpg" alt="client" class="img-fluid w-100">
                        </div>
                        <div class="single_testimonial_text">
                            <p class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </p>
                            <p class="cliect_comment">
                                Duis aute irure dolor in reprehenderit into volupjl
                                tate velit esse cillum dolore eu fugiat nulla partr
                                iatur sunt in culp qui officia deserunt mollit
                            </p>
                            <h3 class="title">Letitia Shelton</h3>
                            <p class="designation">Content Writter</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="single_testimonial">
                        <div class="single_testimonial_img">
                            <img src="../../images/client_2.jpg" alt="client" class="img-fluid w-100">
                        </div>
                        <div class="single_testimonial_text">
                            <p class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </p>
                            <p class="cliect_comment">
                                Duis aute irure dolor in reprehenderit into volupjl
                                tate velit esse cillum dolore eu fugiat nulla partr
                                iatur sunt in culp qui officia deserunt mollit
                            </p>
                            <h3 class="title">Rishmika Lane</h3>
                            <p class="designation">Software Engineer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--=====================================
        TESTIMONIAL END
    =====================================-->


    <!--=====================================
        BLOG START
    =====================================-->
    <section class="blog mt_115 xs_mt_70">
        <div class="container">
            <div class="row">
                <div class="col-xl-7 col-md-10 m-auto wow fadeInUp" data-wow-duration="1s">
                    <div class="section_heading mb_35">
                        <h5>Our News Blogs</h5>
                        <h3>Read Latest News Blog</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 wow fadeInUp" data-wow-duration="1s">
                    <div class="featured_blog">
                        <div class="featured_blog_img">
                            <img src="../../images/featured_blog_img.jpg" alt="blog" class="img-fluid w-100">
                        </div>
                        <div class="featured_blog_text">
                            <ul class="d-flex flex-wrap justify-content-between">
                                <li><i class="fas fa-user"></i> Dahid Wilson</li>
                                <li><i class="fas fa-calendar-alt"></i> 05 Nov 2022</li>
                                <li><i class="fas fa-comment-dots"></i> 12 Comments</li>
                            </ul>
                            <a class="title" href="blog_details.html">The Balance & Harmony Of Body And Mind</a>
                            <p>Quis autem vel eum iure reprehenderit qui ina voluptate trwltl in esse quam nihil
                                molestiae consequatur vel illum quiint aliquipex
                                eum fugiat quo voluptas nulla pariatur reprehenderit.</p>
                            <a class="read_more_btn" href="blog_details.html">read more <i
                                    class="far fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-xl-12 wow fadeInUp" data-wow-duration="1s">
                            <div class="single_blog">
                                <div class="single_blog_img">
                                    <img src="../../images/blog_img_1.jpg" alt="blog" class="img-fluid w-100">
                                </div>
                                <div class="single_blog_text">
                                    <ul class="d-flex flex-wrap justify-content-between">
                                        <li><i class="fas fa-user"></i> Dahid Wilson</li>
                                        <li><i class="fas fa-calendar-alt"></i> 05 Nov 2022</li>
                                        <li><i class="fas fa-comment-dots"></i> 12 Comments</li>
                                    </ul>
                                    <a class="title" href="blog_details.html">Massage Therapy For Anxiety And Stress</a>
                                    <p>Quis autem vel eum iure reprehenderit qui inav
                                        esse quam nihil molestiae consequatur vel illum
                                        eum fugiat quo voluptas nulla pariatur.</p>
                                    <a class="blog_read_btn" href="blog_details.html">read more <i
                                            class="far fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12 wow fadeInUp" data-wow-duration="1s">
                            <div class="single_blog">
                                <div class="single_blog_img">
                                    <img src="../../images/blog_img_2.jpg" alt="blog" class="img-fluid w-100">
                                </div>
                                <div class="single_blog_text">
                                    <ul class="d-flex flex-wrap justify-content-between">
                                        <li><i class="fas fa-user"></i> Dahid Wilson</li>
                                        <li><i class="fas fa-calendar-alt"></i> 05 Nov 2022</li>
                                        <li><i class="fas fa-comment-dots"></i> 12 Comments</li>
                                    </ul>
                                    <a class="title" href="blog_details.html">Skin Care Therapy For Anxiety And
                                        Stress</a>
                                    <p>Quis autem vel eum iure reprehenderit qui inav
                                        esse quam nihil molestiae consequatur vel illum
                                        eum fugiat quo voluptas nulla pariatur.</p>
                                    <a class="blog_read_btn" href="blog_details.html">read more <i
                                            class="far fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--=====================================
        BLOG END
    ===================================== -->
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      about: {},
      services:[],
      gallerys:[],
    };
  },
  mounted() {
    this.fetchAboutData();
    this.fetchServiceData();
    this.fetchGalleryData();
  },
  methods: {
    // about
    async fetchAboutData() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/about');
            this.about = response.data;
        } catch (error) {
            console.error('Error fetching about data:', error);
        }
    },
    
    getAboutImageUrl(filename) {
      return `http://127.0.0.1:8000/uploads/about/${filename}`;
    },

    // service
    async fetchServiceData(){
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/service');
            this.services = response.data;
        }
        catch(error){
            console.error('Error Fetching service data', error);
        }
    },

    getServiceImageUrl(filename) {
      return `http://127.0.0.1:8000/uploads/service/${filename}`;
    },

    // gallery
    async fetchGalleryData(){
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/gallery');
            this.gallerys = response.data;
        }
        catch(error){
            console.error('Error Fetching Gallery data', error);
        }
    },
    
    
    getGalleryImageUrl(filename) {
      return `http://127.0.0.1:8000/uploads/gallery/${filename}`;
    },
    filterGallery(category) {
    if (category === 'all') {
      // Show all gallery items
      this.filteredGallery = this.gallerys;
    } else {
      // Filter gallery items by category
      this.filteredGallery = this.gallerys.filter(item => item.id === category);
    }
  },

  }
};
</script>