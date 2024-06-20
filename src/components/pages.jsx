import React from 'react';

const Pages = () => {
    return (
        <>
            <section className="pageContent">
                <div className="interests">
                    <div className="container">
                        <div className="heading">
                            <h4>Some of My Interests</h4>
                        </div>
                        <div className="full-content">
                            <div className="contain flex">
                                <h4>Reading</h4>
                                <h4>Thinking</h4>
                                <h4>Traveling</h4>
                                <h4>Coding</h4>
                                <h4>Sports</h4>
                                <h4>Learning</h4>
                                <h4>Enjoying Cuisine</h4>
                            </div>
                            <div className="photos flex">
                            <img src={require('./i2.JPG')} alt="Image Test" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pages;
