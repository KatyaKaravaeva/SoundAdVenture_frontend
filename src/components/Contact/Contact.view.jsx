import React from "react";
import style from "./Contact.module.css";
import CloudImage from "../../asserts/images/cloud.png";
import MountainImage from "../../asserts/images/mountains.png";
import ProfileImage from "../../asserts/images/profile.jpg";
import "./styleForm.css";

const ContactView = () => {
  return (
    <div className={style.container}>
      <div className={style.topContainer}>
        <img src={CloudImage} alt="cloud-image" className={style.topCloud} />
        <h1>SoundAdVenture</h1>
        <h2>Приложение для аудиотуров и курсов</h2>
        <img src={CloudImage} alt="cloud-image" className={style.bottomCloud} />
        <img
          src={MountainImage}
          alt="mountain-image"
          className={style.mountains}
        />
      </div>
      <div className={style.middleContainer}>
        <div className={style.profile}>
          <div>
            <img
              src={ProfileImage}
              className={style.profilePic}
              alt="profile-pic"
            />
          </div>
          <div className={style.intro}>
            <h2>Привет!</h2>
            <p>
              Это мой дипломный проект. Если Вас заинтересовала его идея или у
              Вас есть какие-то вопросы - смело связывайтесь со мной!
            </p>
          </div>
        </div>

        <hr className={style.hr_contact} />

        <div
          id="contact"
          className={`${style.contact_area} ${style.section_padding}`}
        >
          <div class="container">
            <div className={`${style.section_title} ${style.text_center}`}>
              <h1>Контакты</h1>
              <p>
                Для связи можете либо заполнить форму, либо связаться через
                социальные сети
              </p>
            </div>
            <div class="row">
              <div class="col-lg-7">
                <div class="contact">
                  <form class="form" name="enq">
                    <div class="row">
                      <div class="form-group col-md-6">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="Имя"
                          required="required"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                      <div class="form-group col-md-12">
                        <input
                          type="text"
                          name="subject"
                          class="form-control"
                          placeholder="Тема"
                          required="required"
                        />
                      </div>
                      <div class="form-group col-md-12">
                        <textarea
                          rows="6"
                          name="message"
                          class="form-control"
                          placeholder="Ваше сообщение"
                          required="required"
                        ></textarea>
                      </div>
                      <div class="col-md-12 text-center">
                        <button
                          type="submit"
                          value="Send message"
                          name="submit"
                          id="submitButton"
                          class="btn btn-contact-bg"
                          title="Submit Your Message!"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="single_address">
                  <i class="fa fa-camera-retro fa-lg"></i>
                  <h4>Telegram</h4>
                  <p>
                    <a href="https://t.me/KitKat01011">@KitKat01011</a>
                  </p>
                </div>
                <div class="single_address">
                  <i class="fa fa-envelope"></i>
                  <h4>Email</h4>
                  <p>eakaravaeva_1@edu.hse.ru</p>
                </div>
                <div class="single_address">
                  <i class="fa fa-phone"></i>
                  <h4>Phone</h4>
                  <p>+7 (927) 913 6327</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
