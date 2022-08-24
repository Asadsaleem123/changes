import React, { useEffect } from "react";

import i18n from "i18next";
import { useTranslation } from "react-i18next";
import cookie from "js-cookie";
function Admin() {
  function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "35px";
    var about = document.getElementById('aboutt');
    about.classList.remove('invisible');
    var services = document.getElementById('services');
    services.classList.add('visible');
    services.classList.remove('invisible');
    var home = document.getElementById('homee');
    home.classList.add('visible');
    home.classList.remove('invisible');
    var contact = document.getElementById('con');
    contact.classList.add('visible');
    contact.classList.remove('invisible');
    var mul = document.getElementById('mul');
    mul.classList.add('visible');
    mul.classList.remove('invisible');
    var close_btn = document.getElementById("open")
    close_btn.classList.remove('visible');
    close_btn.classList.add('invisible');




  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "85PX";
    document.getElementById("main").style.marginLeft = "0";
    var about = document.getElementById('aboutt');
    about.classList.add('invisible');
    about.classList.remove('visible');
    var services = document.getElementById('services');
    services.classList.add('invisible');
    services.classList.remove('visible');
    var home = document.getElementById('homee');
    home.classList.add('invisible');
    home.classList.remove('visible');
    var contact = document.getElementById('con');
    contact.classList.add('invisible');
    contact.classList.remove('visible');
    var mul = document.getElementById('mul');
    mul.classList.add('invisible');
    mul.classList.remove('visible');
    var close_btn = document.getElementById("open")
    close_btn.classList.remove('invisible');
    close_btn.classList.add('visible');



  }

  // checking the slider is checked if checked change the language
  function checkbox() {
    if (document.getElementById('checkbox').checked) {
      i18n.changeLanguage('ar')
    } else {
      i18n.changeLanguage('en');
    }
  }
  // language changing functions here and ltr to rtl
  const { t } = useTranslation();
  const langauges = [{
    name: "English",
    code: "en",
    country_code: "usa"
  },
  {
    name: "العربيه",
    code: "ar",
    country_code: "Ksa",
    dir: "rtl"
  }
  ]
  const current_language_code = cookie.get('i18next') || 'en';
  const current_langauge = langauges.find(l => l.code == current_language_code);
  useEffect(() => {
    document.body.dir = current_langauge.dir || "ltr";
  }

    , [current_langauge])
  return (
    <div className="container container1">
      <div className="row row1 ">
        <div className="col-2 navbar1 bg-light vh-100 border border-light  text-white ">
          <div className="bg-light w-180 logo" style={{ height: "100px" }}>
            {/* <img src={xlogo} alt="logo" /> */}
          </div>
          <div id="main">
            <button className="openbtn visible" id="open" onClick={openNav}>&#9776; Open Sidebar</button>

          </div>
          <div id="mySidebar" className="sidebar">
            <a href="" className="closebtn visible" id="mul" onClick={closeNav}>&times;</a>

            <a id="aboutt" className="visible" href="#"><i className="fa fa-fw fa-envelope visible text-center"></i>About</a>
            <a id="services" className="visible" href="#"><i className="fa fa-fw fa-wrench visible"></i>Services</a>
            <a id="homee" className="visible" href="#"><i className="fa fa-fw fa-home visible"></i>Home</a>
            <a id="con" className="visible" href="#"><i className="fa fa-fw fa-user visible"></i>contact</a>
          </div>

        </div>



        <div className="col-10">
          <div className="row bg-light border border-light bg-light w-100 text-white ml-0 ">
            <div className="col-4 text-center mt-4 p-0 empty dashboard">
              <h3>Dashboard overview</h3>
            </div>

            <div className="col-4">

            </div>
            <div className="col-4">
              <h4 className="h4_en">En</h4><label className="switch m-3">
                <input type="checkbox" id="checkbox" value="checked" onClick={checkbox} />
                <span className="slider round"></span>
              </label><h4 className="h4_ar">Ar</h4>
              <button className="btn btn-success btn-lg m-2 ml-4 bt">{t('logout')}</button>

            </div>

            <ul class="nav nav-tabs nav1">
              <li class="nav-item">
                <a class="nav-link active fs-5" aria-current="page" href="..">Order</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-5" href="..">People</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-5" href="..">Client Satisfaction</a>
              </li>

            </ul>

          </div>
          <div className="row row3 bg-white">
            <div className="col-6 mt-3 ml-3 col1 bg-light">
              <h4 ><strong class="strong1"> Work Flow</strong></h4>
              <hr />

              <div class=" row2">
                <div class="col-3 text-center">
                  <div class="profile-overview">
                    <h4 className="text-primary">116</h4>
                    <p className="fs-4">Created</p>
                  </div>
                </div>

                <div class="col-3 text-center">
                  <div class="profile-overview">
                    <h4 className="text-primary">515</h4>
                    <p className="fs-4">Waiting for approving</p>
                  </div>
                </div>
                <div class="col-3 text-center">
                  <div class="profile-overview">
                    <h4 className="text-primary">647</h4>
                    <p className="fs-4">Processing</p>
                  </div>
                </div>

                <div class="col-3 text-center">
                  <div class="profile-overview">
                    <h4 className="text-primary">47</h4>
                    <p className="fs-4">completed</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary"> New Order</button>
              </div>
              <div className="mt-5" style={{ height: "180px", width: "480px" }}>

              </div>
            </div>

            <div className="col-6 col2">
              <h2>Recent Activity </h2>
              <div class="activity-feed">
                <div class="feed-item">
                  <div class="date">Sep 25</div>
                  <div class="text fs-5">Responded to need <a href="single-need.php">“Volunteer opportunity”</a></div>
                </div>
                <div class="feed-item">
                  <div class="date">Sep 24</div>
                  <div class="text fs-5">Added an interest “Volunteer Activities”</div>
                </div>
                <div class="feed-item">
                  <div class="date">Sep 23</div>
                  <div class="text fs-5">Joined the group <a href="single-group.php">“Boardsmanship Forum”</a></div>
                </div>
                <div>
                <ul className="nav-item dropdown">
                  <li><a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    show more
                  </a>

                    <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                      <div class="feed-item dropdown-item" >
                        <div class="date">Sep 21</div>
                        <div class="text fs-5">Responded to need <a href="single-need.php">“In-Kind Opportunity”</a></div>
                      </div>
                      <div class="feed-item dropdown-item">
                        <div class="date">Sep 18</div>
                        <div class="text fs-5">Created need <a href="single-need.php">“Volunteer Opportunity”</a></div>
                      </div>
                      <div class="feed-item dropdown-item">
                        <div class="date">Sep 17</div>
                        <div class="text fs-5">Attending the event <a href="single-event.php">“Some New Event”</a></div>
                      </div>
                    </ul>
                  </li>
                </ul>
              </div>



              <div class="feed-item">
                <div class="date">Sep 21</div>
                <div class="text fs-5">Responded to need <a href="single-need.php">“In-Kind Opportunity”</a></div>
              </div>
              <div class="feed-item">
                <div class="date">Sep 18</div>
                <div class="text fs-5">Created need <a href="single-need.php">“Volunteer Opportunity”</a></div>
              </div>
              <div class="feed-item">
                <div class="date">Sep 17</div>
                <div class="text fs-5">Attending the event <a href="single-event.php">“Some New Event”</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div >

  );
}
export default Admin;