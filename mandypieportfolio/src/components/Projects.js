import React from 'react';
import bubbly from '../assets/images/bubbly.jpg';
import oneup from '../assets/images/oneup.jpg';
import fly from '../assets/images/fly.jpg';
import cinema from '../assets/images/cinema.jpg';
import sips from '../assets/images/sips.jpg';
import exercise from '../assets/images/exercise.jpg';

// projects highlights and academic work - 6 total with photos
const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-section">
        <h3>Highlights</h3>

        <div className="project-item">
          <div className="project-text">
            <h4>Universal Orlando Resort</h4>
            <h5>The Bubbly Barrel</h5>
            <p>Built a new POI page utilizing the CMS given to implement new components and copy. Added the SEO and assets given by our UX/UI team to create The Bubbly Barrel page.</p>
            <a href="https://www.universalorlando.com/web/en/us/things-to-do/dining/the-bubbly-barrel" target="_blank" rel="noopener noreferrer">View Page</a>
          </div>
          <img src={bubbly} alt="Bubbly Barrel" className="project-image" />
        </div>

        <div className="project-item">
          <img src={oneup} alt="1-UP Factory" className="project-image" />
          <div className="project-text">
            <h4>Universal Orlando Resort</h4>
            <h5>The 1-UP Factory</h5>
            <p>Built a new POI page utilizing the CMS given to implement new components and copy. Added the SEO and assets given by our UX/UI team to create The 1-UP Factory page.</p>
            <a href="https://www.universalorlando.com/web/en/us/things-to-do/shopping/1-up-factory" target="_blank" rel="noopener noreferrer">View Page</a>
          </div>
        </div>

        <div className="project-item">
          <div className="project-text">
            <h4>Universal Orlando Resort</h4>
            <h5>Funky's Fly-n-Buy</h5>
            <p>Built a new POI page utilizing the CMS given to implement new components and copy. Added the SEO and assets given by our UX/UI team to create Funky's Fly-n-Buy page.</p>
            <a href="https://www.universalorlando.com/web/en/us/things-to-do/shopping/funkys-fly-n-buy" target="_blank" rel="noopener noreferrer">View Page</a>
          </div>
          <img src={fly} alt="Funky's Fly-n-Buy" className="project-image" />
        </div>

        <div className="project-item">
          <img src={cinema} alt="Universal Cinema" className="project-image" />
          <div className="project-text">
            <h4>Universal Studios Hollywood</h4>
            <h5>Universal Cinema</h5>
            <p>Tasked with a refresh of an existing page to implement new components through the entire page adding gallery images, new hero, copy updates, and more. This reshaped the Universal Studios Hollywood Cinema Page.</p>
            <a href="https://www.universalstudioshollywood.com/web/en/us/things-to-do/entertainment/citywalk/universal-cinema" target="_blank" rel="noopener noreferrer">View Page</a>
          </div>
        </div>
      </div>

      <div className="project-section">
        <h3>Academic Work</h3>

        <div className="project-item">
          <div className="project-text">
            <h4>University of Central Florida</h4>
            <h5>SIPS Application</h5>
            <p>SIPS is a crafted application currently in the works utilizing VS Code, MongoDB, and Github. It is an app created to find local beverages within your area. There is a high-fi prototype utilizing Figma to showcase.</p>
            <a href="https://www.figma.com/proto/qcuj2t8P6GbsvPsvhEdrk5/SIPS-HighFi-Prototype-Layout?node-id=4125-2359&t=E4O2m5DpQHvlQ3F2-1&starting-point-node-id=4125%3A2359" target="_blank" rel="noopener noreferrer">View Page</a>
          </div>
          <img src={sips} alt="SIPS Application" className="project-image" />
        </div>

        <div className="project-item">
          <img src={exercise} alt="Exercise App" className="project-image" />
          <div className="project-text">
            <h4>University of Central Florida</h4>
            <h5>Exercise Application</h5>
            <p>Utilizing VS Code, X Code, React, and GitHub. This was tasked to implement components and utilize terminal to download packages. Each component has a repetition, duration, or running exercise tied to each one.</p>
            <a href="https://piepie22.github.io/reactfresh/" target="_blank" rel="noopener noreferrer">View Page</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
