import React, {useState} from 'react'
import reviews from './data.js'
import {
    FaChevronLeft,
    FaChevronRight,
    FaQuoteRight} from 'react-icons/fa'

const Review = () => {
    const [index, setIndex] = useState(3)
    const {name, job, image, text} = reviews[index]
    
    const prevReview = () => {
        setIndex((index) => {
            if(index === 0) {
                return reviews.length - 1
            }
            return index - 1
        })
    }

    const nextReview = () => {
        setIndex((index) => {
            if(index === reviews.length - 1) {
                return 0
            }
            return index + 1
        })
    }

    const surpriseReview = () => {
        let randomIndex = Math.floor(Math.random() * reviews.length)        
        if(index === randomIndex) {            
            if(randomIndex === reviews.length - 1) {
                randomIndex = 0
            } else {
                randomIndex++
            }
        }
        setIndex(randomIndex)       
    }
    

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='text'>{text}</p>
            <div>
                <button className='prev-btn' onClick={prevReview}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextReview}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='surprise-btn' onClick={surpriseReview}>
                Surprise Me
            </button>
        </article>
    )
}

export default Review