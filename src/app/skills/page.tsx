import React from 'react';
 

const skills = [
  { name: 'HTML', percentage: 90 },
  { name: 'CSS', percentage: 81 },
  { name: 'Tailwind Css', percentage: 81 },
  { name: 'JavaScript', percentage: 80 },
  { name: 'TypeScript', percentage: 80 },
  { name: 'React', percentage: 70 },
  { name: 'Next.js', percentage: 85 },
  { name: 'MySQL', percentage: 75 },
  { name: 'MongoDB', percentage: 50 },
  { name: 'Git', percentage: 65 },
  { name: 'Redux', percentage: 65 },
  { name: 'Use Contex', percentage: 75 },

];

const App = () => {
  return (
    <div className='skills-container'>
              <h2 >My Skills</h2>
              <p  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis labore debitis perspiciatis nihil rerum id ipsa quibusdam nesciunt voluptatem dolores nemo, enim vero officiis voluptas odio dolore. Odit, tempore voluptate!</p>
    <div className="skills">
      {skills.map((skill, index) => (
        <div key={index} className="skill-container">
          <span className="skill-name">{skill.name}</span>
          <div className="skill-bar">
            <div
              className="skill-fill"
              style={{ width: `${skill.percentage}%` }}
            ></div>
            <span className="skill-percentage">{skill.percentage}%</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default App;
