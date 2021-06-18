import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author.jpg'
import { Helmet } from "react-helmet"
const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
             <Helmet title="About the Author | Peter E. Rolita"/>
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>


		 		<div className="container">
				    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile"/>
                            </div> 

                            <div className="heading-quote">
                                <h4>
                                {/* “Sounds a lot like God to me”.  */}
                                </h4>
                                
                                <span className="ata-span-fx">
                                "Our bodies are like used cars that we can't trade in."
                                </span>
                            </div>
                        </div>

                        <article 
                            className="article-section" id="author">

                            <p>
                            I wrote " I'm Here for the Bath" because I wanted to honor the people I have met and worked with as a caregiver over the last 30 plus years. The journeys I wrote about  and the life experiences I  shared are rich and valuable signposts for anyone who is approaching or a part of  the separation from a loved one or friend as they die.  Dying is the one experience we share with each  other. We know death lies before us at some point and that everyone around us will experience it as well. My book is a selection of short stories that reveal my journey with end of life and how it changed and contributed to my own life in expected and unexpected ways. 
                            </p>

                            <p>
                            I am approaching retirement from my work as a caregiver and would welcome the opportunity to answer your questions and offer support and encouragement to you. I live in Carmichael California where I share an apartment with my best friend of 46 plus years Emma, who joined me here a few years ago.  I am not married nor do I have any children. I love people and the more I live the dearer my loved ones are to me. I enjoy reading and the media offerings of movies and documentaries offered on the variety of platforms available. If you have a question or want to share your own experience with me I invite you to contact me at &nbsp;<a href="mailto:imhereforthebath@gmail.com">imhereforthebath@gmail.com</a> 
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    Peter E. Rolita
                                </span>
                            </p>
                            
                        </article>
              

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;