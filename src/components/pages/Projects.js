import React from 'react';
import '../../styles/Projects.css';
import news_agg from '../../assets/News_Agg.png';
import pet from '../../assets/Pet.png';
import project3 from '../../assets/Project3.png';
import weather from '../../assets/Weather.png';
import css_sheet from '../../assets/CSS_Sheet.png';
import pwgen from '../../assets/PWGen.png';

const styles = {
  label: {
    textAlign: "center",
  },
  github: {
    fontSize: "2.5rem",
  }
}

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <section id='projectList'>
        {/* Project 1 */}
        <div className='project' style={styles.label}>
          <a href='https://honsumal.github.io/news-headline-aggregator/'>
            <img src={news_agg} className="preview" alt='Preview of News Aggregator'/>
          </a>
          <a className='image-label' style={styles.github} href='https://github.com/Honsumal/news-headline-aggregator'><i className='fa fa-github'></i></a>
        </div>
        {/* Project 2 */}
        <div className='project' style={styles.label}>
          <a href='#'>
            <img src={project3} className="preview" alt='Preview of password generator app'/>
          </a>
          <a className='image-label' style={styles.github}><i className='fa fa-github'></i></a>
        </div>
        {/* Project 3 */}
        <div className='project' style={styles.label}>
          <a href='https://petplace2141.herokuapp.com/'>
            <img src={pet} className="preview" alt='Preview of pet adoption site'/>
          </a>
          <a className='image-label' style={styles.github} href='https://github.com/Favour01216/Adoption-site'><i className='fa fa-github'></i></a>
        </div>
        {/* Project 4 */}
        <div className='project' style={styles.label}>
          <a href='https://ellisjlc.github.io/Weather_Forecast/'>
            <img src={weather} className="preview" alt='Preview of Weather Forecast app'/>
          </a>
          <a className='image-label' style={styles.github} href='https://github.com/EllisJLC/Weather_Forecast'><i className='fa fa-github'></i></a>
        </div>
        {/* Project 5 */}
        <div className='project' style={styles.label}>
          <a href='https://ellisjlc.github.io/CSS_Guide/'>
            <img src={css_sheet} className="preview" alt='Preview of CSS cheatsheet'/>
          </a>
          <a className='image-label' style={styles.github} href='https://github.com/EllisJLC/CSS_Guide'><i className='fa fa-github'></i></a>
        </div>
        {/* Project 6 */}
        <div className='project' style={styles.label}>
          <a href='https://ellisjlc.github.io/Password_Generator/'>
            <img src={pwgen} className="preview" alt='Preview of password generator app'/>
          </a>
          <a className='image-label' style={styles.github} href="https://github.com/EllisJLC/Password_Generator"><i className='fa fa-github'></i></a>
        </div>
      </section>
    </div>
  );
}
