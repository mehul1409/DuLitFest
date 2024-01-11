import './SectionHeader.scss'
import { motion } from 'framer-motion'
const SectionHeader = (props) => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="SectionHeaderMain">
            <div className='SectionHeader_text'>
                <div className='SectionHeader_text_text-content'>{props.text}</div>
                <div className='sectionHeaderUnderline'></div>
            </div>
        </motion.div>
    )
}
export default SectionHeader
