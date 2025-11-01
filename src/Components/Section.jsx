const Section = ({ children, id }) => {
    return (
        <section id={id} className='section'>
            {children}
        </section>
    )
}

export default Section
