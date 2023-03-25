import React from 'react'
import './aboutPage.scss'

function AboutPage() {
    return (
        <div id="aboutPage" className="container">
            <div className="row">
                <div className="col-12 col-md-6 mx-auto text-center ">
                    <div className="text-wrapper">
                        <h2 className="fw-bolder">
                            We made this site using React, Bootstrap and using TV Maze API.
                            We hope you enjoy using it! :)
                        </h2>

                        <div className="d-flex gap-4 pt-4">
                            <img className="img-fluid w-50" src="https://media.licdn.com/dms/image/D4D03AQGQAnd7noetAQ/profile-displayphoto-shrink_800_800/0/1674410322610?e=1684972800&v=beta&t=c5XJhlIsWHH-fEZLWqdlhOfOu4zsRU67B9n-u0o5pMo" alt="Uros Ostojic"/>
                            <img className="img-fluid w-50" src="https://avatars.githubusercontent.com/u/34610553?v=4" alt="Vlastimir Bulatovic"/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AboutPage
