import React from 'react'
import ContactSection from '../components/contact/ContactSection'
import { motion } from "framer-motion";


function Contact() {
  return (
    <motion.div   
    style={{ scale: 0 }} animate={{ scale: [0 ,0.5 ,1] }}
    transition={{ duration: 0.5  }}>
    <ContactSection />
    </motion.div>
  )
}

export default Contact