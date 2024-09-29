import React from 'react'
import "./main.css"
import Button from '../../Common/Button/Button'
import iphone from "../../../assets/iphone.png"
import grad from "../../../assets/Grad.png"
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'


const Maincomp = () => {
    const Navigate = useNavigate();

    return (
        <>
            <div className="flex-info">
                <div className="left-comp">
                    <motion.h1 className='track'
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}>Track Crypto</motion.h1>
                    <motion.h1 className='real'
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}>Real Time.</motion.h1>
                    <motion.p className='info-text'
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.75 }}>Track crypto through a public api in real life. Visit the dashboard to do so!</motion.p>
                    <motion.div className='btn-flex'
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.75 }}>
                        <Button onClick={()=>Navigate('/dashboard')} text={"Dashborad"} outlined={false}
                        />
                        <Button text={"Share"} outlined={true} />

                    </motion.div>
                </div>
                <div className="right-comp">
                    <motion.img src={iphone} className='iphone'
                        initial={{ y: -10 }}
                        animate={{ y: 10 }}
                        transition={{
                            type: "smooth",
                            repeatType: "mirror",
                            duration: 1,
                            repeat: Infinity,
                        }}></motion.img>
                    <img src={grad} className='gradient'></img>

                </div>

            </div>


        </>
    )
}

export default Maincomp