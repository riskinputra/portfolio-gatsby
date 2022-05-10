import React from "react";
import { Dyba } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import {
  workContainer,
  workList,
  workItem,
  workItemContent,
  workItemImage,
  contentType,
  contentTitle,
  contentDescription,
  contentStack
} from "./Work.module.scss";

const Work = () => {
  const { allStrapiWork } = useStaticQuery(graphql`
    query {
      allStrapiWork {
        nodes {
          id
          name
          url
          description
          image {
            url
          }
          tags {
            id
            name
          }
        }
      }
    }
  `);

  const listProject = allStrapiWork.nodes.map((work, index) => (
    <li className={workItem} key={index}>
      <div className={workItemContent}>
        <div>
          <div className={contentType}>Featured Project</div>
          <h3 className={contentTitle}>
            <a href={work.url} target="_blank">{work.name}</a>
          </h3>
          <div className={contentDescription}>{work?.description}</div>
          <ul className={contentStack}>
            {work.tags.map(tag => <li key={tag.id}>{tag.name}</li>)}
          </ul>
        </div>
      </div>
      <div className={workItemImage}>
        <a href={work?.url} target="__blank">
          <div className="img">
            <img
              src={`${process.env.STRAPI_API_URL}${work?.image?.url}`}
              alt={work.name}
            />
          </div>
        </a>
      </div>
    </li>
  ));

  return (
    <section id="work" className={workContainer}>
      <h2 className="section-title">Some Things I’ve Built</h2>

      <ul className={workList}>{listProject}</ul>
    </section>
  );
};

export default Work;
