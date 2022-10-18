import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";

import photoPath from '../../images/avatar.jpg';
import Portfolio from "../Portfolio/Portfolio";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <SectionTitle>
        Студент
      </SectionTitle>
      <div className="about-me__card">
        <div className="about-me__profile">
          <div>
            <h3 className="about-me__name">Ольга</h3>
            <p className="about-me__about">
              Фронтенд-разработчик, 47 лет
            </p>
            <p className="about-me__description">
              Я изучаю веб-разработку с 2022 года. Мне нравится создавать красивые и удобные приложения.
            </p>
          </div>
          <a className="about-me__github" href='https://github.com/Olga-Sotula' target='_blank'>
            Github
          </a>
        </div>
        <img className="about-me__photo" src={photoPath} alt="Фото" />
      </div>
      <Portfolio/>
    </section>
  );
};

export default AboutMe;
