import About from "../pages/about";
import Projects from "../pages/projects";
import Resume from "../pages/resume";
import Skills from "../pages/skills";

function Body() {
  return (
    <div className="body-container">
      <About />
      <div className="my-list">
        <div className="prjclss">
          <Projects />
        </div>
        <div className="others">
          <Skills />
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default Body;
