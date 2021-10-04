import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import MyPic from "../images/mkgautam.jpeg";
import RailsIcon from "../images/rails.svg";
import ReactIcon from "../images/react.svg";
import ReduxIcon from "../images/redux.svg";
import UnHead from "../components/UnHead";
import Text from "../components/Text";

const Index = () => (
  <Layout>
    <Helmet>
      <title>Manindra Gautam</title>
      <meta
        name="Description"
        content="Manindra Gautam's portfolio and writings on Ruby on Rails, Node, React, Redux, GIT, Heroku Cloud, Linux, Python and Docker"
      ></meta>
      <link rel="canonical" href="https://mkgautam.xyz" />
    </Helmet>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <img
          className="w-48 h-48 rounded-full"
          src={MyPic}
          alt="Manindra Gautam"
        />
      </div>
      <div className="leading-normal md:col-span-3">
        <div className="mb-8">
          <div className="text-black text-2xl pb-2 border-b border-grey-light">
            Manindra Kumar Gautam
          </div>
          <p className="text-lg text-grey-darkest flex items-center pt-2">
            &lt; Software Engineer / &gt;
          </p>
          <Text>
            Hi, I am a software engineer based in India, having 5+ years of
            total experience, worked on multiple projects, primarily using
            ReactJS and Ruby on Rails Technologies.
            <br />
            <br />
            At Tebellion, I'm currently using Ruby inspired Crystal lang and
            ReactJS inspired SolidJS technologies for various projects.
            <br />
            <br />
            In my free time I do try to learn something, contribute to open
            source and watch web series or movies.
          </Text>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <img
            className="w-12 h-12 rounded"
            src={RailsIcon}
            alt="Ruby on Rails"
          />
          <img className="w-12 h-12 rounded" src={ReactIcon} alt="ReactJS" />
          <img className="w-12 h-12 rounded" src={ReduxIcon} alt="Redux" />
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
