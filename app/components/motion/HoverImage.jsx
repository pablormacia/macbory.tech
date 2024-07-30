'use client'
import { motion } from 'framer-motion';
import styles from './hoverImage.module.css'

function HoverImage({imagePath}) {
  return(
<motion.img
  src={imagePath}
  className={styles.animatedDiv}
  whileHover={{ scale: 1.2 }}
/>
  )
  
}

export default HoverImage