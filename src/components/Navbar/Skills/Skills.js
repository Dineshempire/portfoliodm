import React from 'react';
import './skill.css';
import cardig from '../../../assets/html.png';
import cardig1 from '../../../assets/css.png';
import cardig2 from '../../../assets/bootstrap.png';
import cardig3 from '../../../assets/js1.png';
import cardig4 from '../../../assets/sql1.png';
import cardig5 from '../../../assets/python.png';



const Skills = () => {
  return (
    <div>
      <div className="skillbor">
      <h1 className="skillhead">Skills and Projects</h1>
      </div>
        
        <p className='para2'>I am a skilled and passionate web designer with experience in creating both static and dynamic websites. I have a strong<br/> understanding of design and a kenn eye for detail. I am proficient in HTML,CSS,Bootstrap and Javascript.</p>
        <h1 className='skillhead1'>My Technical Skills</h1>
        <div className="cardbox d-flex flex-row">
          <div className="card1 d-flex flex-row">
            <img src={cardig} alt="python" className="cardimage"/>
            <div className="cardspace">
            <p className="cardpara">HTML</p>
            <p>HTML is the standard markup language for creating web pages and applications.</p>

            </div>
            
          </div>

          <div className="card1 d-flex flex-row">
            <img src={cardig1} alt="python" className="cardimage"/>
            <div className="cardspace">
            <p className="cardpara">CSS</p>
            <p> Cascading Style Sheets, is used to style the appearance and provides layout.</p>

            </div>
            
          </div>
          <div className="card1 d-flex flex-row">
            <img src={cardig2} alt="python" className="cardimage"/>
            <div className="cardspace">
            <p className="cardpara">Bootstrap</p>
            <p>Bootstrap is a popular front-end framework for building responsive websites.</p>

            </div>
            
          </div>
          
          
        </div>


        <div className="cardbox d-flex flex-row">
          <div className="card1 d-flex flex-row">
            <img src={cardig3} alt="python" className="cardimage"/>
            <div className="cardspace">
            <p className="cardpara">Javascript</p>
            <p>JavaScript is used for creating interactive effects within web browsers.</p>

            </div>
            
          </div>

          <div className="card1 d-flex flex-row">
            <img src={cardig4} alt="python"className="cardimage"/>
            <div className="cardspace">
            <p className="cardpara">SQL</p>
            <p>It is a programming language designed for managing, manipulating and data.</p>

            </div>
            
          </div>
          <div className="card1 d-flex flex-row">
            <img src={cardig5} alt="python" className="cardimage"/>
            <div className="cardspace">
            <p className="cardpara">Python</p>
            <p>It is an high-level programming language with dynamic semantics.</p>
            

            </div>
            
          </div>
          
          
        </div>
        
        

    </div>
  )
}

export default Skills
