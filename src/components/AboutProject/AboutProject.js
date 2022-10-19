import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";

import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <SectionTitle>
        О проекте
      </SectionTitle>
      <article className="about-project__cards">
        <div className="about-project__card">
          <h3 className="about-project__card-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__card-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__card">
          <h3 className="about-project__card-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__card-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </article>
      <article className="about-project__diagram">
        <div>
          <p className="about-project__stage-time about-project__stage-time_type_primary">1 неделя</p>
          <p className="about-project__stage-description">Back-end</p>
        </div>
        <div className="roadmap__frontend">
          <p className="about-project__stage-time">4 недели</p>
          <p className="about-project__stage-description">Front-end</p>
        </div>
      </article>
    </section>
  );
};

export default AboutProject;
