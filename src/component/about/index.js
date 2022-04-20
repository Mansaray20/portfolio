import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
    return (
        <section className="my-5">
            <h2 id="about">Who am I?</h2>
            <img src={coverImage} className="my-2" style={{ width: '98%' }} alt="cover" />
            <div className="my-2">
                <p> 
formation overload occurs when decision-makers face a level of information that is greater than their information processing capacity, i.e., an overly high information load Schroder et al. Eppler and Mengis 2004 but the phenomenon is not confined to the modern world. As Blair. nformation overload occurs when decision-makers face a level of information that is greater than their information processing capacity, i.e., an overly high information load (Schroder et al. 1967; Eppler and Mengis 2004), but the phenomenon is not confined to the modern world. As Blair
                </p>
            </div>
        </section>
    );
}

export default About;