import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Kashmir Chronicles</b> Stories, Insights, and Perspectives from the Valley
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Discover the Paradise of Kashmir</h1>
          <p className={styles.postDesc}>
            Step into the heart of Kashmir, a land of breathtaking landscapes and rich cultural heritage. 
            From the serene Dal Lake to the majestic Himalayas, explore the stories, traditions, 
            and wonders that make this region a true paradise on Earth. Discover hidden gems, travel tips, 
            and firsthand experiences that will transport you to the enchanting beauty of Kashmir.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured;
