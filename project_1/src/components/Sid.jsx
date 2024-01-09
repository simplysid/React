import React from 'react'

function Sid() {
  return (
    <main className='sid container'>
        <div className='content'>
            <h1>FILM-MAKER WHO CODES</h1>
            <p>
                THIS IS A STORY OF A VIDEOGRAPHER AND A FILM-MAKER WHO LOVES CODING. 
                FOR HIM CODING IS A CAREER THAT HE CAN BE GOOD IN, BUT FILM-MAKING IS THERAPY FOR HIM.
                THAT'S ALL FOLKS, DO LIKE AND SHARE HIS STORY.
            </p>

            <div className='sid-btn'>
            <button>Shop Now</button>
            <button className='cat-btn'>Category</button>
            </div>

            <div className='shopping'>
                <p>
                    Also Available On
                </p>
                <div className='brand-icons'>
                <img src='/images/amazon.png' alt='amazon.logo' />
                <img src='/images/flipkart.png' alt='flipkart' />
                </div>
            </div>
        </div>

        <div className='image'>
            <img src='/images/shoe_image.png' alt='shoe' />
        </div>
    </main>
  )
}

export default Sid
