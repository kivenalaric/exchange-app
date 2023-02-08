import React from 'react';
import phone from '../../Assets/Images/phone.png';
import Menu from '../../Components/Menu/Menu';
import LandingCss from './Landing.module.css';

function Currency() {
  return (
    <div className={LandingCss.landing__main}>
      <Menu />
      <div className={LandingCss.landing__sec}>
        <div className={LandingCss.landing__sech}>
          <h1 className={LandingCss.landing__sechh1}>
            INNOVA
            <span>
              <img
                src="https://logodix.com/logo/1075173.png"
                alt="imagelogo"
                className={LandingCss.landing__logo}
              />
              CHANGE
            </span>
          </h1>
        </div>
        <div className={LandingCss.landing__sec2}>
          <div className={LandingCss.landing__left}>
            <div className={LandingCss.landing__lefttext}>
              <h1 className={LandingCss.landing__lefth1}>
                Tracking exchange rates has never been easier
              </h1>
              <p className={LandingCss.landing__leftp1}>
                With exchange you can keep an eye on any current exchange rate.
                Always stay on point!!
              </p>
            </div>
            <div className={LandingCss.landing__leftbottom}>
              <img
                src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="bitcoin-img"
                className={LandingCss.landing__leftbottomimg}
              />
            </div>
          </div>
          <div className={LandingCss.landing__right}>
            <div className={LandingCss.landing__righttop}>
              <img
                src={phone}
                alt="bitcoin-img"
                className={LandingCss.landing__rightpic}
              />
            </div>
            <div className={LandingCss.landing__righttext}>
              <h1>Never be left behind!!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                itaque facilis optio nihil? Tenetur at asperiores, cupiditate ad
                ex eveniet, sapiente laborum, maiores placeat in eius! Et ut
                tempora nostrum. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Ut illum, recusandae voluptate hic ratione
                eaque accusantium aliquid, blanditiis fugiat nisi quibusdam quas
                dolore totam asperiores molestias ipsam rem deserunt quasi?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium consectetur expedita id molestiae quam fuga magni
                vitae, harum veritatis eius veniam maiores minima perspiciatis
                officiis dignissimos vero iusto excepturi nam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Currency;
