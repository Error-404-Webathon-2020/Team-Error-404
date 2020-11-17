import React from 'react'
// masks
import mask1 from '../img/products/mask1.jpg'
import mask2 from '../img/products/mask2.jpg'
import mask3 from '../img/products/mask3.jpg'
import mask4 from '../img/products/mask4.jpg'
import mask5 from '../img/products/mask5.jpg'
import mask6 from '../img/products/mask6.jpg'
// gloves
import gloves1 from '../img/products/gloves1.jpg'
import gloves2 from '../img/products/gloves2.jpg'
import gloves3 from '../img/products/gloves3.jpg'
import gloves4 from '../img/products/gloves4.jpg'
import gloves5 from '../img/products/gloves5.jpg'
import gloves6 from '../img/products/gloves6.jpg'
// sanitizers
import sanitizer1 from '../img/products/sanitizer1.jpg'
import sanitizer2 from '../img/products/sanitizer2.jpg'
import sanitizer3 from '../img/products/sanitizer3.jpg'
import sanitizer4 from '../img/products/sanitizer4.jpg'
import sanitizer5 from '../img/products/sanitizer5.jpg'
import sanitizer6 from '../img/products/sanitizer6.jpg'
import ProCard from './ProCard'
import ChatBot from './ChatBot.js'

export const Masks = () => {
    return (
    <>
    <ChatBot/>
          <h1 className="section-heading" style={{marginTop:'80px'}}>Best Deals </h1>
          <div className='container mb-5'>
            <div className="row mx-auto">
              <ProCard data={{comp:'Amazon',src:mask1,link:'https://www.amazon.in/s?k=mask'}}/>
              <ProCard data={{comp:'Flipkart',src:mask2,link:'https://www.flipkart.com/search?q=masks'}}/>
              <ProCard data={{comp:'Snapdeal',src:mask3,link:'https://www.snapdeal.com/search?keyword=mask&sort=rlvncy'}}/>
              <ProCard data={{comp:'Myntra',src:mask4,link:'https://www.myntra.com/masks'}}/>
              <ProCard data={{comp:'Ajio',src:mask5,link:'https://www.ajio.com/s/masks-more-4015-51?query=:relevance'}}/>
              <ProCard data={{comp:'Tata Cliq',src:mask6,link:'https://www.tatacliq.com/search/?searchCategory=all&text=mask'}}/>
            </div>
          </div>
    </>
    )
}

export const Sanitizers = () => {
  return (
  <>
      <ChatBot/>
        <h1 className="section-heading" style={{marginTop:'80px'}}>Best Deals </h1>
        <div className='container mb-5'>
          <div className="row mx-auto">
            <ProCard data={{comp:'Amazon',src:sanitizer1,link:'https://www.amazon.in/s?k=sanitizer'}}/>
            <ProCard data={{comp:'Flipkart',src:sanitizer2,link:'https://www.flipkart.com/search?q=sanitizers'}}/>
            <ProCard data={{comp:'Snapdeal',src:sanitizer3,link:'https://www.snapdeal.com/search?keyword=sanitizer&sort=rlvncy'}}/>
            <ProCard data={{comp:'Myntra',src:sanitizer4,link:'https://www.myntra.com/sanitizers'}}/>
            <ProCard data={{comp:'Ajio',src:sanitizer5,link:'https://www.ajio.com/search/?text=sanitizer'}}/>
            <ProCard data={{comp:'Tata Cliq',src:sanitizer6,link:'https://www.tatacliq.com/search/?searchCategory=all&text=sanitizer'}}/>
          </div>
        </div>
  </>
  )
}

export const Gloves = () => {
  return (
  <>
      <ChatBot/>
        <h1 className="section-heading" style={{marginTop:'80px'}}>Best Deals </h1>
        <div className='container mb-5'>
          <div className="row mx-auto">
            <ProCard data={{comp:'Amazon',src:gloves1,link:'https://www.amazon.in/s?k=gloves'}}/>
            <ProCard data={{comp:'Flipkart',src:gloves2,link:'https://www.flipkart.com/search?q=gloves'}}/>
            <ProCard data={{comp:'Snapdeal',src:gloves3,link:'https://www.snapdeal.com/search?keyword=glove'}}/>
            <ProCard data={{comp:'Myntra',src:gloves4,link:'https://www.myntra.com/gloves'}}/>
            <ProCard data={{comp:'Ajio',src:gloves5,link:'https://www.ajio.com/gloves/c/830202005?query=%3Arelevance'}}/>
            <ProCard data={{comp:'Tata Cliq',src:gloves6,link:'https://www.tatacliq.com/search/?searchCategory=all&text=gloves'}}/>
          </div>
        </div>
  </>
  )
}
