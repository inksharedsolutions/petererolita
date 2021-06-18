import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book.png'
import { Helmet } from "react-helmet"

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'peter-e-rolita',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
             <Helmet title="About the Book | Peter E. Rolita"/>
		 		<Nav pathExt={props.path}/>
            
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`I AM HERE FOR THE BATH`,
                                    spanTitle: '',
                                    imgSrc: Book1,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                    <p>I'm Here for the Bath presents a look at Hospice Care from the perspective of a Hospice Aide who works at the bedside caring for patients and supporting family members.</p>
                                    <p>Peter Rolita lives in Northern California and most recently worked for Kaiser Permanente. Peter is also a member of the Centers for Spiritual Living where he has served on the Board of Trustees and as a RScP.</p>
                                    `,
                                    
                                    ebooks:{
                                        stratton : '',
                                        barnes: 'https://www.barnesandnoble.com/w/im-here-for-the-bath-peter-rolita/1122746653?ean=9781648953910',
                                        amazon :'https://www.amazon.com/Im-Here-Bath-Peter-Rolita-ebook/dp/B094BZ8KPV/ref=sr_1_1?dchild=1&keywords=9781648953910&qid=1620659418&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Im-Here-Bath-Peter-Rolita/dp/1648953905/ref=sr_1_1?dchild=1&keywords=9781648953903&qid=1620659182&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/the-god-particle-dr-rhy-ronald-p-rozzi-ms-d/1137333891?ean=9781648951053',
                                        booksamillion:'https://www.booksamillion.com/p/Im-Here-Bath/Peter-E-Rolita/9781648953903?id=8230387821951&_ga=2.217593557.295057274.1624029810-1205166702.1623175305',
                                    },
                                }}
                            />
                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>
		 	</Layout>
		</>
	)
}


export default ATB;