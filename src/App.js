
function App() {
  return (
<div>
  <div className="preloader">
    <div className="layer" />
    <div className="inner">
      <figure> <img src="images/loading.gif" alt="Image" /> </figure>
      <span className="typewriter" id="typewriter" /> </div>
    {/* end inner */} 
  </div>
  {/* end preloader */}
  <div className="navigation-menu">
    <div className="nav-bg" />
    {/* end nav-bg */}
    <div className="nav-bg2" />
    {/* end nav-bg2 */}
    <div className="inner">
      <address>
        <span>ADDRESS</span>
        <p>Boryissa Hymri Str. No : 126<br />
          Poxniaky Greenline<br />
          New York - USA</p>
      </address>
      <ul>
        <li><a href="#">HOME</a>
          <ul>
            <li><a href="index.html">Slider</a></li>
            <li><a href="index-video-bg.html">Video BG</a></li>
            <li><a href="index-carousel.html">Carousel</a></li>
          </ul>
        </li>
        <li><a href="Coding Dojo.html">ABOUT US</a></li>
        <li><a href="#">WORKS</a>
          <ul>
            <li><a href="works.html">3 Columns</a></li>
            <li><a href="works-2cols.html">2 Columns</a></li>
          </ul>
        </li>
        <li><a href="blog.html">BLOG</a></li>
        <li><a href="contact.html">CONTACT</a></li>
      </ul>
    </div>
    {/* end inner */} 
  </div>
  {/* end navigation-menu */}
  <div className="transition-overlay">
    <div className="layer" />
    {/* end layer */} 
  </div>
  {/* end transition-overlay */}
  <nav className="navbar">
    <div className="logo"> <a href="index.html"><img src="images/coding-dojo-white-logo.svg" alt="Image" /></a> </div>
    {/* end logo */}
    <div className="sandwich-nav">
      <div className="sandwich-text"><b>MENU<br />
          CLOSE</b> </div>
      {/* end sandwich-text */}
      <div className="sandwich-btn" id="sandwich-btn"> <span /> <span /> </div>
      {/* end sandwich-btn */} 
    </div>
    {/* end sandwich-nav */} 
  </nav>
  {/* end navbar */}
  <header className="header">
    <aside className="soundbar">
      <div className="sound">
        <div className="sound-title"> SOUND </div>
        {/* end sound-title */}
        <div className="equalizer">
          <div className="holder"> <span /> <span /> <span /> <span /><span /><span /> </div>
          {/* end holder */} 
        </div>
        {/* end equalizer */}
        <div className="sound-text"> <b>OFF<br />
            ON</b> </div>
        {/* end sound-text */} 
      </div>
      {/* end sound */} 
    </aside>
    {/* end soundbar */}
    <ul className="social-media">
      <li><a href="#">Facebook</a></li>
      <li><a href="#">Behance</a></li>
      <li><a href="#">Dribbble</a></li>
    </ul>
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="slide-inner bg-image" data-background="images/ui-ux-student-on-meeting-with-instructors.png">
            <div className="container">
 
              <h5 data-swiper-parallax={-200}>Land Your <span>Dream Job</span> in Tech with</h5>
              <h2 data-swiper-parallax={-300}>Coding Dojo</h2>
              <a href="works-single.html" data-swiper-parallax={-100} className="btn-ghost"><span data-hover="GET STARTED">GET STARTED</span></a> 
            </div>
            {/* end container */}
          </div>
          {/* end slide-inner */} 
        </div>
        {/* end swiper-slide */}
        <div className="swiper-slide">
          <div className="slide-inner bg-image" data-background="images/cyber_security_splash.png">
            <div className="container">
              <h5 data-swiper-parallax={-200}>Benefit from the <span>partial</span> uses</h5>
              <h2 data-swiper-parallax={-300}>New Advance</h2>
              <a href="video/UI_UX.mp4" data-swiper-parallax={-100} className="btn-play" data-fancybox><img src="images/icon-play.svg" alt="Image" /></a> 
            </div>
            {/* end container */}
          </div>
          {/* end slide-inner */} 
        </div>
        {/* end swiper-slide */}
        <div className="swiper-slide">
          <div className="slide-inner bg-image" data-background="images/uiux-student-on-disscussion.png">
            <div className="container">
              <h5 data-swiper-parallax={-200}>Discover <span>Our</span></h5>
              <h2 data-swiper-parallax={-300} className="small">Bootcamps</h2>
              <a href="works-single.html" data-swiper-parallax={-100} className="btn-ghost"><span data-hover="GET STARTED">GET STARTED</span></a> </div>
            {/* end container */}</div>
          {/* end slide-inner */} 
        </div>
        {/* end swiper-slide */} 
      </div>
      {/* end swiper-wrapper */}
      <div className="swiper-pagination" />
      {/* end swiper-pagination */}
      <div className="swiper-button-next"><span data-hover="NEXT">NEXT</span></div>
      {/* end swiper-button-next */}
      <div className="swiper-button-prev"><span data-hover="PREV">PREV</span></div>
      {/* end swiper-button-prev */} 
    </div>
    {/* end swiper-container */} 
  </header>
  {/* end header */}
  <main>
    <section className="works">
      <div className="container">
        <div className="works-title wow fadeIn">
          <h2>BOOTCAMPS</h2>
          <p>We create digital experiences for brands communicating the unique services provided to your customers. Creativity for us something personal.</p>
        </div>
        {/* end works-title */}
      </div>
      {/* end container */}
      <ul className="works-grid">
        <li className="wow fadeIn" data-wow-delay="0s">
          <figure> <a href="works-single.html"><img src="images/professional_profile.png" alt="Image" /></a>
            <figcaption> <span /> <small>Online Part-Time Bootcamp</small>
              <h3>Cybersecurity</h3>
            </figcaption>
          </figure>
        </li>
        <li className="wow fadeIn" data-wow-delay="0.1s">
          <figure> <a href="works-single.html"><img src="images/bh_capitalist.png" alt="Image" /></a>
            <figcaption> <span /> <small>Online Part-Time Bootcamp</small>
              <h3>UI/UX Design</h3>
            </figcaption>
          </figure>
        </li>
        <li className="wow fadeIn" data-wow-delay="0.2s">
          <figure> <a href="works-single.html"><img src="images/digital-marketing.png" alt="Image" /></a>
            <figcaption> <span /> <small>Online Part-Time Bootcamp</small>
              <h3>Digital Marketing</h3>
            </figcaption>
          </figure>
        </li>
        <li className="wow fadeIn" data-wow-delay="0s">
          <figure> <a href="works-single.html"><img src="images/pexels-mikhail-nilov-7988081.jpg" alt="Image" /></a>
            <figcaption> <span /> <small>Online Part-Time Bootcamp</small>
              <h3>Full-Stack Web Development</h3>
            </figcaption>
          </figure>
        </li>
        <li className="wow fadeIn" data-wow-delay="0.1s">
          <figure> <a href="works-single.html"><img src="images/pexels-tima-miroshnichenko-7567228.jpg" alt="Image" /></a>
            <figcaption> <span /> <small>Online Part-Time Bootcamp</small>
              <h3>Data Science</h3>
            </figcaption>
          </figure>
        </li>
        <li className="wow fadeIn" data-wow-delay="0.2s">
          <figure> <a href="works-single.html"><img src="images/software.png" alt="Image" /></a>
            <figcaption> <span /> <small>Online Part-Time Bootcamp</small>
              <h3>Software Development</h3>
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>
    {/* end works */}

    <footer className="footer">
      <div className="container">
        <div className="content-box wow fadeIn" data-wow-delay="0s">
          <h2>ADDRESS</h2>
          <p> Boryissa Hymri Str. No : 126<br />
            Poxniaky Greenline<br />
            New York - USA </p>
        </div>
        {/* end content-box */}
        <div className="content-box wow fadeIn" data-wow-delay="0.1s">
          <h2>GET IN TOUCH</h2>
          <p>+380 98 294 80 86<br />
            hello [at] Coding Dojo.com.ua</p>
        </div>
        {/* end content-box */}
        <div className="content-box wow fadeIn" data-wow-delay="0.2s">
          <h2>CAREER</h2>
          <p>To see currently open positions<br />
            career [at] Coding Dojo.com.ua</p>
        </div>
        {/* end content-box */} 
      </div>
      {/* end container */}
    </footer>
    {/* end footer */}
    <footer className="sub-footer">
      <div className="container wow fadeIn"><small>All rights reserved 2022 © Coding Dojo</small>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Behance</a></li>
          <li><a href="#">Dribbble</a></li>
        </ul>
      </div>
      {/* end container */}
    </footer>
    {/* end sub-footer */} 
  </main>
</div>

  );
}

export default App;
