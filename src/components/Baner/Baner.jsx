import './Baner.css'
function Baner() {
    return (
        <div>
            <div className='center container'>
                <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />

                <div className="text">
                    <div className="banner-content">
                        <h1>Welcome to TheMealDB</h1>
                        <p>
                            Welcome to TheMealDB: An open, crowd-sourced database of recipes from around the world.
                            We offer a <span>free recipe API</span> for anyone wanting to use it, with additional premium features if required.
                        </p>
                        <div className="banner-btn">
                            <button className="button">Free API</button>
                            <button className="button1">Go Premium</button>
                        </div>
                        <p>
                            Click above to upgrade the free Recipe API to premium for <span>$10 lifetime one-off</span>
                            Currently 93 supporters.
                        </p>

                    </div>
                </div>
                    <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
                    
            </div>
          
        </div>
    )
}

export default Baner
