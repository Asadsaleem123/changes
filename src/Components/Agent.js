import React, { useEffect } from "react";
import Icon from "../assets/user_icon.jpg";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import cookie from "js-cookie";

function Agent() {
    function change_ar() {
        i18n.changeLanguage('ar')
    }
    function change_en() {
        i18n.changeLanguage('en');
    }
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
    function checkbox() {
        if (document.getElementById('checkbox').checked) {
            i18n.changeLanguage('ar')
        } else {
            i18n.changeLanguage('en');
        }
    }
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

    return (
        <div>
            <div className="container-fluid container1">
                <div className="row row1 p-2">
                    <div className="col-sm-2 navbar1 bg-light vh-100 border border-light  text-white  mt-2 ml-2">
                        <div className="bg-light w-100 logo" style={{ height: "100px" }}>
                            logo here
                        </div>
                        <div className="col-sm-2 bg-light vh-100 sidebar" id="mySidebar">

<div id="main">
  <button className="openbtn" onClick={openNav}>&#9776; Open Sidebar</button>

</div>
<div className=" bg-light text-black">


  <a href="javascript:void(0)" className="closebtn visible" id="mul" onClick={closeNav}>&times;</a>

  <a id="aboutt" className="visible" href="#"><i className="fa fa-fw fa-envelope visible text-center"></i>About</a>
  <a id="services" className="visible" href="#"><i className="fa fa-fw fa-wrench visible"></i>Services</a>
  <a id="homee" className="visible" href="#"><i className="fa fa-fw fa-home visible"></i>Home</a>
  <a id="con" className="visible" href="#"><i className="fa fa-fw fa-user visible"></i>contact</a>
</div>

</div>
                        
                       




                    </div>
                    <div className="col-sm-10">
                        <div className="row bg-light border border-light bg-light mt-2 w-100 text-white ml-0 ">
                            <div className="col-sm-4 text-center mt-2 p-0 empty dashboard">
                                <h4>Dashboard overview</h4>


                            </div>
                            <div className="col-sm-4 text-left text-black ">



                            </div>
                            <div className="col-sm-4 mr-0 text-center">

                                <div className="btnnn text-black">
                                    <h4 className="h4_en">En</h4><label className="switch m-3">
                                        <input type="checkbox" id="checkbox" value="checked" onClick={checkbox} />
                                        <span className="slider round"></span>
                                    </label><h4 className="h4_ar">Ar</h4>
                                    <button className="btn btn-success btn-lg m-2 ml-4 bt">{t('logout')}</button>
                                </div>
                                <div className="div_inline"></div>


                            </div>

                        </div>

                    </div>


                </div>

            </div>



            <footer className="bg-dark text-white p-3 text-center mt-4">
                &copyxtecknow.com
            </footer>





        </div>


    )
}
export default Agent;