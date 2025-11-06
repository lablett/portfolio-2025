import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} Lucille Ablett</p>
      </div>
    </footer>
  )
}

export default Footer
