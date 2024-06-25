import React from 'react'

const Work = () => {
    return (
        <>
            <section className="work">
                <div className="heading">
                    <h2>MY WORKS</h2>
                    <h1>Some of My Completed Projects</h1>
                </div>
                <div className="content">
                            <>
                            <div className="box">
                                <div className="img grid">
                                <img src={require('./p1.png')} alt="Image Test" />
                                <img src={require('./p2.png')} alt="Image Test" />
                                <img src={require('./Picture 1.png')} alt="Image Test" />
                                </div>
                                <div className="overlay">
                                    <div className="text">
                                        <h2>Showing</h2>
                                        <h5>Problem:</h5>
                                        <p>The wrong link made my image failed to show correctly.</p>
                                        <h5>Reasons:</h5>
                                        <p> Ensures proper functionality of websites</p>
                                        <p>Improves user experience</p>    
                                        <p>Reduces maintenance time and costs</p>    
                                        <p>Prevents broken links and missing content</p>    
                                        
                                    </div>
                                    <div className="fa-div">
                                        <h5>Solution:</h5>
                                        <p>Checking whether the path is relative or absolute is the first choice.
                                        Punctuation is the second choice.
                                        </p>
                                        <i className="fa-solid fa-expand"></i>
                                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                    </div>
   
                                </div>
                            </div>
                            </>
                </div>
            </section>
        </>
    )
}

export default Work