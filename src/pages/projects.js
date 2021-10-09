import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import UnHead from "../components/UnHead";
import Space from "../components/Space";
import SiteReport from "../images/site-report.png";
import ProjectList from "../components/ProjectList";

const Projects = () => (
  <Layout>
    <Helmet>
      <title>Manindra Gautam</title>
      <meta
        name="Description"
        content="Manindra Gautam's portfolio and writings on Ruby on Rails, Node, React, Redux, GIT, Heroku Cloud, Linux, Python and Docker"
      ></meta>
      <link rel="canonical" href="https://mkgautam.xyz/projects" />
    </Helmet>
    <div className="w-full bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal text-justify">
      <div className="mb-8">
        <UnHead
          title="Tebillion Systems Pvt Ltd"
          location="Mumbai, India"
          position="Sr. Software Engineer"
          year="May 2021 - Present"
        />
        <ProjectList
          data={[
            {
              title: "WYSDOM DENTAL PMS",
              desc:
                " CloudPlus is a hardware tool that gives ability to dental practices to run it online\
                or offline, it helps to manage and maintain practitioners and patients records. It consists of multiple micro-frontend\
                applications.",
            },
          ]}
        />
        <Space />
        <UnHead
          title="Ardentia Technologies Pvt Ltd"
          location="Mumbai, India"
          position="Sr. Software Engineer"
          year="Apr 2019 - May 2021"
        />
        <ProjectList
          data={[
            {
              title: "WYSDOM STORE",
              desc:
                "Consumable supplies to compliment Digital X-Ray brands and many other everyday\
            products for dentists.",
            },
            {
              title: "WYSDOM ROTAANGEL",
              desc:
                "ROTAANGEL manages shift rotas and staff holidays at busy dental practices to\
            ease the day-to-day admin’ load.",
            },
          ]}
        />
        <Space />
        <UnHead
          title="Akaruilabs India Pvt Ltd"
          location="Lucknow, India"
          position="Software Engineer"
          year="Apr 2017 - Apr 2019"
        />
        <ProjectList
          data={[
            {
              title: "Equity Multiple",
              desc:
                "Equity Multiple is a US based marketplace for private real estate transactions. It enables\
                individual and institutional investors to invest alongside the market’s most sophisticated sponsors in many\
                commercial real estate assets.",
            },
            {
              title: "Zeehaus",
              desc:
                "Zeehaus is a US based real estate equity sharing marketplace and ownership management platform. It\
              connects homeowners and homebuyers with investors who are enabled to purchase fractional ownership in US real\
              estate digitally.",
            },
          ]}
        />
        <Space />
        <div className="text-black text-2xl pb-2 border-b border-grey-light">
          Other Projects
        </div>
        <ProjectList
          data={[
            {
              title: (
                <a
                  href="https://github.com/manindragautam/mkgautam.xyz"
                  target="_blank"
                >
                  Personal Site
                </a>
              ),
              desc:
                "This project is my personal portfolio site, built with Gatsby (a free and open source React framework, hosted\
          by Netlify (cloud host for static websites), resume generation using Latex (A document preparation system).",
            },
          ]}
        />
        <div>
          <img
            className="mt-8"
            src={SiteReport}
            alt="mkgautam.xyz site report"
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default Projects;
