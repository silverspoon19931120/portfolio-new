import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// Service Card
const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                >
                    <img
                        src={icon}
                        alt={title}
                        className='w-16 h-16 object-contain'
                    />
                    <h3 className='text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

// About
const About = () => {
    return (
        <>
            {/* Title */}
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>

            {/* Body */}
            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className='empty-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                Highly skilled and versatile web developer with over 10 years of experience, specializing in front-end development using React and Next.js.
                Possesses strong proficiency in a range of front-end frameworks, including Angular. 
                Back-end development knowledge is also strong, with experience in Python, Node.js (including Express and Flask frameworks), and familiarity with additional frameworks like Laravel and PHP. 
                I am proficient in multiple database technologies (MySQL, PostgreSQL, MongoDB, Firebase) and cloud platforms (AWS, Azure, Google Cloud). 
                Adept at building user-centric, scalable, and secure web applications.
            </motion.p>

            {/* Service Card */}
            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, i) => (
                    <ServiceCard key={service.title} index={i} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, 'about');
