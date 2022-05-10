import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  aboutContainer,
  aboutContent,
  contentSkill,
  contentProfile,
  wrapperProfile,
  wrapperProfileImage
} from "./About.module.scss";

const About = () => {
  const skills = [
    { name: "Javascript" },
    { name: "Vue" },
    { name: "Nuxt.js" },
    { name: "React" },
    { name: "Flutter (GETX)" },
  ];

  const listSkills = skills.map((skill, index) => (
    <li key={index}>{skill.name}</li>
  ));

  return (
    <section id="about" className={aboutContainer}>
      <h2 className="section-title">About</h2>

      <div className={aboutContent}>
        <div className="content-desc">
          <div>
            <p>
              I am a Frontend Engineer with about 4 years of experience. I
              graduated from Hacktiv8 Coding Bootcamp in 2018. I enjoy the logic
              and stucture of coding and always strive to write elegant and
              effecient code.
            </p>
            <p>
              Currently i'm working at adtech company at{" "}
              <a href="https://stickearn.com">Stickearn</a>
              and develop LMS for internal at{" "}
              <a href="https://learning.kompasgramedia.com">
                Learning Kompas Gramedia
              </a>
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className={contentSkill}>{listSkills}</ul>
        </div>

        <div className={contentProfile}>
          <div className={wrapperProfile}>
            <StaticImage
              className={wrapperProfileImage}
              src="../../images/photo.png"
              alt="profile"
              width={300}
              height={300}
            ></StaticImage>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
