import React, { useState } from "react";
import { graphql, useStaticQuery } from 'gatsby'
import {
  expContainer,
  expContent,
  jobList,
  active,
  jobPanel,
  jobPanelTime,
} from "./Experience.module.scss";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { allStrapiExperience } = useStaticQuery(graphql`
    query {
      allStrapiExperience {
        nodes {
          id
          name
          role
          tasks {
            name
            id
          }
          time
        }
      }
    }
  `)

  const jobsList = allStrapiExperience?.nodes.map((job, index) => (
    <button
      key={index}
      id={`list-${index}`}
      className={activeIndex === index ? active : null}
      onClick={() => setActiveIndex(index)}
    >
      {job.name}
    </button>
  ));

  const jobsActive = allStrapiExperience?.nodes[activeIndex];
  const jobPannelActive = (
    <div className={jobPanel}>
      <h3>
        {jobsActive?.role} <span>@ {jobsActive?.name}</span>
      </h3>
      <p className={jobPanelTime}>{jobsActive?.time}</p>

      <ul>
        {jobsActive?.tasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="experience" className={expContainer}>
      <h2 className="section-title">Where I've Worked</h2>

      <div className={expContent}>
        <div className={jobList}>{jobsList}</div>
        {jobPannelActive}
      </div>
    </section>
  );
};

export default Experience;
