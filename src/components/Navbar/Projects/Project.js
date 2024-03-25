import React from 'react';
import "./Project.css";
import phar from '../../../assets/pharamcy.png';
import bus from '../../../assets/bus.jpg';
import ipl from '../../../assets/ipl.webp';


import mov from '../../../assets/movie.jpg';

const Project = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="projecthead">My Projects</h1>
                </div>
                <div className="col-12 col-md-3">
                <div class="card shadow p-3 mb-3 mt-3">
                    <img src={phar} alt="pharamcy" className="card-image w-100 h-50"/>
                    <h1 className="project1">Pharmacy Management System</h1>
                    <ul className="pl-3">
                        <p className="projectpara">Skills</p>
                        <li className="projectlist">
                            Java
                        </li>
                        <li className="projectlist">
                            SQL
                        </li>
                        <li className="projectlist">
                            HTML and CSS
                        </li>
                    </ul>
                    
                </div>
                

                </div>
                <div className="col-12 col-md-3">
                <div class="card shadow p-3 mb-3 mt-3">
                <img src={mov} alt="movie" className="card-image w-100 h-50"/>
                <h1 className="project1">Movie Ticket Booking</h1>
                <ul className="pl-3">
                        <p className="projectpara">Skills</p>
                        <li className="projectlist">
                            HTML and CSS
                        </li>
                        <li className="projectlist">
                            SQL lite
                        </li>
                        <li className="projectlist">
                            Bootstrap
                        </li>
                        <li className="projectlist">
                            Javascript
                        </li>
                    </ul>
                    
                </div>
                

                </div>
                <div className="col-12 col-md-3">
                <div class="card shadow p-3 mb-3 mt-3">
                <img src={ipl} alt="movie" className="card-image w-100 h-50"/>
                <h1 className="project1">IPL Preview Websites</h1>
                <ul className="pl-3">
                        <p className="projectpara">Skills</p>
                        <li className="projectlist">
                            HTML 
                        </li>
                        <li className="projectlist">
                            CSS
                        </li>
                        <li className="projectlist">
                            Bootstrap
                        </li>
                        <li className="projectlist">
                            Python
                        </li>
                    </ul>
                    
                </div>
                

                </div>
                <div className="col-12 col-md-3">
                <div class="card shadow p-3 mb-3 mt-3">
                <img src={bus} alt="movie" className="card-image w-100 h-50"/>
                <h1 className="project1">Bus Reservation System</h1>
                <ul className="pl-3">
                        <p className="projectpara">Skills</p>
                        <li className="projectlist">
                            Java
                        </li>
                        <li className="projectlist">
                            Xamp MySql
                        </li>
                        <li className="projectlist">
                            HTML
                        </li>
                        <li className="projectlist">
                            CSS
                        </li>
                    </ul>
                    
                </div>
                

                </div>
            </div>
        </div>
    </div>
  )
}

export default Project