'use client';
import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn,staggerContainer } from '../utils/motion';


const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Om Stark Entreprenør" textStyles="text-center" />
      <motion.p
      variants={fadeIn('up', 'tween', 0.2, 1)} 
      className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        
        <span className="font-extrabold text-white">Hos Stark Entreprenør</span> tror vi på å bygge mer enn bare strukturer - vi bygger tillit, pålitelighet og en forpliktelse til fortreffelighet. Med
        <span className="font-extrabold text-white"> 10 års erfaring</span> i byggebransjen har vi finpusset våre ferdigheter og etablert oss som en leder i å levere toppkvalitetsarbeid. Vårt team av fagfolk er dedikert til å opprettholde våre kjerneverdier som integritet,  <span className="font-extrabold text-white">profesjonalitet</span> og oppmerksomhet på detaljer i hvert prosjekt vi gjennomfører. Enten det er et bolig-, kommersiell- eller industribygg, er vi stolte av for å sikre at alle aspekter av prosjektet fullføres til høyeste standard. Med fokus på å levere eksepsjonelle resultater og eksepsjonell service, er vi sikre på vår evne til å overgå dine forventninger.  <span className="font-extrabold text-white">La oss vise deg</span>  hvorfor vi er det riktige valget for dit byggebehov.

      </motion.p>

      <motion.img
      variants={fadeIn('up', 'tween', 0.3, 1)}
      src="arrow-down.svg"
      alt="arrow down"
      className="w-[18px] h-[28px] object-contain mt-|28px]"
     />
</motion.div>
</section>
);

export default About;
