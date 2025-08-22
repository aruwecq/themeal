import React from 'react'
import './Footer.css'

function Footer() {
  return (
 <footer className="footer">
      <div className="footer-container">
        {/* Левая часть */}
        <div className="footer-left">
          <p>© 2025 BestMen</p>
          <p>Proudly built for style & care</p>
        </div>

        {/* Центр */}
     <div className='footer-boss'>   <div className="footer-center">
          <span>Socials:</span>
          <img src="https://www.themealdb.com/images/facebook_icon.png" alt="" />
          <img src="https://www.themealdb.com/images/twitter_icon.png" alt="" />
          <img src="https://www.themealdb.com/images/discord_icon.png" alt="" />
        </div>
        <div><img src="https://www.themealdb.com/images/logo-tcdb.png" alt="" />
        <img src="https://www.themealdb.com/images/logo-tadb.png" alt="" />
        <img src="https://www.themealdb.com/images/logo-tsdb.png" alt="" /></div>
</div>
        {/* Правая часть */}
        <div className="footer-right">
          <a href="#">About</a>
          <a href="#">Faq</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer