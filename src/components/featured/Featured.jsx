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
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Exercitationem vero rerum repudiandae recusandae voluptatibus totam iste perspiciatis, 
            facilis voluptatum quibusdam provident officia. 
            Ad aspernatur obcaecati nemo ea deleniti officia consectetur.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured;