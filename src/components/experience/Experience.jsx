import React from 'react'
import Title from '../Title'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
    const style = { color: "red", fontSize: "1rem" }
  return (
    <section>
        <Title  titleBack='experience' titleTop='my experience'/>
        <div className="container experience">
            <div className="frontend">
                <h2>Frontend Development</h2>
                <div className="experience-content">
                    <article className="details">
                        <BsPatchCheckFill size={40}/>
                        <h4>HTML</h4>
                        <small>Experienced</small>
                    </article>
                    <article className="details">
                        <BsPatchCheckFill size={40}/>
                        <h4>CSS</h4>
                        <small>Experienced</small>
                    </article>
                    <article className="details">
                        <BsPatchCheckFill style={style}/>
                        <h4>JavaScript</h4>
                        <small>Experienced</small>
                    </article>
                    <article className="details">
                        <BsPatchCheckFill style={style}/>
                        <h4>Bootstrap</h4>
                        <small>Experienced</small>
                    </article>
                    <article className="details">
                        <BsPatchCheckFill style={style}/>
                        <h4>Sass</h4>
                        <small>Junior</small>
                    </article>
                    <article className="details">
                        <BsPatchCheckFill style={style}/>
                        <h4>React</h4>
                        <small>Intermediate</small>
                    </article>
                </div>
            </div>
            <div className="backend">
                <h2>Backend Development</h2>
                <div className="experience-content">
                    <article className="details">
                        <BsPatchCheckFill style={style}/>
                        <h4>Node Js</h4>
                        <small>Intermediate</small>
                    </article>
                    <article className="details">
                        <BsPatchCheckFill style={style}/>
                        <h4>Express</h4>
                        <small>Intermediate</small>
                    </article>
                    <article className="details">
                        <BsPatchCheckFill style={style}/>
                        <h4>Mongo DB</h4>
                        <small>Intermediate</small>
                    </article>
                    <article className="details">
                        <BsPatchCheckFill style={style}/>
                        <h4>MySQl</h4>
                        <small>Intermediate</small>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience