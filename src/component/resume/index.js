import React from 'react';

function Resume() {

    return (
        <div>
            <br />
            <p>
                Download my
                <a href="#">Resume
                </a> {/* to upload updated Resume to link */}
            </p>
            <br />
            <ul>
                <h4>
                    Front-End Properties
                </h4>
            </ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Responsive Design</li>
            <li>Bootstrap</li>

            <div>
                <br />
                <br />
                <ul>
                    <h4>Back-End Properties</h4>
                </ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </div>
        </div>

    )
};

export default Resume;