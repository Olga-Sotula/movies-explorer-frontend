import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";

import "./Techs.css";

const Techs = () => {
  return (
    <section className="techs" id="techs">
      <SectionTitle>
        Технологии
      </SectionTitle>
      <article className="techs__card">
        <h3 className="techs__card-title">7 технологий</h3>
        <p className="techs__card-description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </article>
      <ui className="techs__labels">
        <li className="techs__label">HTML</li>
        <li className="techs__label">CSS</li>
        <li className="techs__label">JS</li>
        <li className="techs__label">React</li>
        <li className="techs__label">Git</li>
        <li className="techs__label">Express.js</li>
        <li className="techs__label">mongoDB</li>
      </ui>
    </section>
  );
};

export default Techs;
