import './SectionHeader.scss'
const SectionHeader = (props) => {
    return (
        <div className="SectionHeaderMain">
            <div className='SectionHeader_text'>
                <div className='SectionHeader_text_text-content'>{props.text}</div>
                <div className='sectionHeaderUnderline'></div>
            </div>
        </div>
    )
}
export default SectionHeader
