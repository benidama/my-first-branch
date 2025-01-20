import React from "react";

const convertor = "https://benidama.github.io/convert-temperature/convert.htm";
const website = "https://benidama.github.io/website/beni.html";
const filter = "https://benidama.github.io/Filfterobject/filer.html";
const fullApp = "https://benidama.github.io/Data-to-local-storage/";
const more = "https://github.com/benidama?tab=repositories";
const quiz = "https://react-quiz-app-five-gamma.vercel.app/";
const job = "https://ui-big-project.vercel.app/";

const Projects = () => {
  return (
    <>
      <h1 className="container">Improvement on my front-end web development</h1>
      <div className="row m-3">
        <div className="col-sm-5 p-3 bg-dark text-white">
          <p
            className=" text-white p-3"
            style={{ width: "400px", height: "290px", fontSize: "16px" }}
          >
            With Front-end development skills, you can create the following
            projects: <br /> <br />
            Quiz App. <br />
            Build a Calculator. <br />
            Build a Content Management System. <br />
            Music player using JavaScript.
            <br />
            To Do List App.
            <br />
            Responsive Blog Website.
            <br />
            Job Listings with filtering.
            <br />
            Build a Weather App.
          </p>
          <button type="button" class="btn btn-info">
            <a className="nav-link" href={more}>
              Get more...
            </a>
          </button>
        </div>

        <div className="col-sm-7 p-3 bg-primary text-white">
          <h3>Some of my projects</h3>
          <nav className="navbar navbar-expand-sm p-3 m-3">
            <ul className="navbar-nav">
              <button className="btn btn-secondary m-3">
                <li className="nav-item">
                  <a className="nav-link text-info" href={convertor}>
                    {" "}
                    Heat-convertor
                  </a>
                </li>
              </button>
              <button className="btn bg-white">
                <li className="nav-item">
                  <a className="nav-link text-info" href={website}>
                    Website
                  </a>
                </li>
              </button>{" "}
              <br />
              <button className="btn bg-warning m-3">
                <li className="nav-item">
                  <a className="nav-link text-white" href={filter}>
                    Filter-app
                  </a>
                </li>
              </button>
              <button className="btn bg-danger">
                <li className="nav-item">
                  <a className="nav-link text-info" href={fullApp}>
                    Full-project
                  </a>
                </li>
              </button>
              <button className="btn bg-danger">
                <li className="nav-item">
                  <a className="nav-link text-info" href={quiz}>
                    Quiz-App
                  </a>
                </li>
              </button>
              <button className="btn bg-danger">
                <li className="nav-item">
                  <a className="nav-link text-info" href={job}>
                    Job-List
                  </a>
                </li>
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Projects;
