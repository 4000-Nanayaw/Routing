import React from "react";

function About() {
	return (
		
		<>
		<div class="container fluid">
         <div class="row">
          <div class="col-md-12 ">
           <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" href="homepage.html">HOME PAGE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="www.abisams.com">Sound Recording</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="www.abisams.com">Master Track</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="www.abisams.com">Video Editing</a>
            </li>
          </ul>
        </div>
      </div>


      <div class="row">

      	<div class="col-md-6 you">
      		<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Ceyans Recording Studio</h5>

            </div>
            <div class="offcanvas-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <p><img src="images/18.jpg" class="img-fluid" alt="one" /></p>
        </div>
      </div>

      <div class="row">
      	<div class="col-md-4">
      		<div class="card" style={{width: "18rem"}}>
            <img src="images/8.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card" style={{width: "18rem"}}>
            <img src="images/5.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
				<p></p>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>

      <div class="col-md-4">
      	<div class="card" style={{width: "18rem"}}>
          <img src="images/6.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
      </div>


          <div class="row">
          	<div class="col-md-12 a">
          		<div class="card-body">
                <p class="card-text">
                 <p class="PP">CONTACT US</p>
                 <p>TEL: +233-557290719</p>
                 <p>EMAIL: samunanaadomah@gmal.com</p>
                 <p>CARD: Ringstreet Australia</p>


           </p>
           <a href="www.abisams.com" class="btn btn-primary">LET`S GO HOME</a>
         </div>
       </div>
      </div>




      </div>
    </>
	);
}

export default About;