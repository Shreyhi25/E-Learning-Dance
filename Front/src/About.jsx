import React from 'react'
import icon from "D:/Shrey Project/Front/src/components/image/About.png"
import './about.css'
import Header from './Header'

export default function About() {
  return (
    <div>
      {<Header/>}
        <div className="about-main">
        
        <div className='about-content'>
            <h2>Welcome to our dance website! Here is some information about us:</h2>
            <p>At DS Studio, we are passionate about dance and dedicated to providing a nurturing and inspiring environment for dancers of all ages and skill levels. Our mission is to share the joy of dance and promote its numerous benefits, including physical fitness, artistic expression, and personal growth. <br />
            Our team of experienced and talented instructors brings a wealth of knowledge and expertise to our dance community. With their guidance and support, we strive to help each dancer reach their full potential while fostering a love for dance that lasts a lifetime. 
            <h4> <b> What We Offer: </b></h4>
            Dance Classes: We offer a wide range of dance classes for all ages and levels, including ballet, contemporary, hip-hop, classiscal and more. Whether you're a beginner taking your first steps or an experienced dancer looking to refine your technique, we have something for everyone. <br />
            Performance Opportunities: We believe in the power of performance to showcase our dancers' skills and provide valuable stage experience. Throughout the year, we organize recitals, showcases, and community performances, allowing our dancers to shine and share their passion with others. <br />
            Workshops and Masterclasses: We regularly host workshops and masterclasses with renowned guest instructors and choreographers. These special events offer a unique opportunity for dancers to learn from industry professionals, expand their repertoire, and challenge themselves artistically. <br />
            Summer Intensive Programs: During the summer months, we offer intensive training programs designed to accelerate dancers' progress and elevate their skills. These focused and immersive programs cover various dance styles and provide a supportive and inspiring environment for growth. <br />
            <h4> <b>Join Us: </b></h4>
            
            Whether you're a child, teen, adult, or a parent seeking a dance studio for your child, we welcome you to become part of our dance family. We provide a warm and inclusive atmosphere where everyone can thrive, make new friends, and discover the joy of dance. <br />
            Come visit us at [Studio/Company Address] to learn more about our programs, meet our instructors, and experience the magic of dance firsthand. We can't wait to embark on this dance journey with you! <br />
            Feel free to explore the rest of our website to find detailed class schedules, registration information, and updates on upcoming events and performances. If you have any questions or need further assistance, don't hesitate to contact us. Happy dancing!

            </p>
        </div>
        <div className='about-img'>
            <img src={icon} />
        </div>
        </div>
    </div>
  )
}