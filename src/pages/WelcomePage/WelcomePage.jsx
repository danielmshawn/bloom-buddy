import "./WelcomePage.css"

export default function WelcomePage() {


    return (
        <div>
            <div className="brand">
                <img className="tomato-icon" src={require('./tomato-icon.png')} />
                <h1 className="flower-power-font" id="bloom-buddy-title">BloomBuddy</h1>
            </div>
        <h3 className="goudy-font">Welcome to BloomBuddy!</h3> 
    <br/>
    <br/>
<div className="bilo-light-font">
BloomBuddy is your go-to gardening companion, designed to help you cultivate your green thumb and connect with fellow plant enthusiasts in your area.
Keep track of your gardening progress, discover plants thriving nearby, and exchange valuable insights with the community.
Join us and watch your garden flourish!
    <br/>
    <br/>
For the best experience, allow BloomBuddy to access your location in order to use it's location-based features.

        </div>
        </div>
    )
}