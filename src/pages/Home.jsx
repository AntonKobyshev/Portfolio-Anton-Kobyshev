import Header from "../components/header/Header";

const Home = () => {
    return ( 

        <>
              <Header />
      <main className="section">
        <div className="container">

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>JavaScript, TypeScript, ReactJS, Redux, Vue, HTML5, CSS3, SASS, RestAPI, NPM, Yarn, Webpack, Parcel, BootStrap, MaterialUI, StyledComponents</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, Express, MongoDB, Mongoose</p>
            </li>
          </ul>

        </div>
            </main>
            </>
     );
}
 
export default Home;