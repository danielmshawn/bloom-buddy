import "./WelcomePage.css"

export default function WelcomePage() {


    return (
        <div>
            <div className="brand">
                <img className="tomato-icon" src={require('./tomato-icon.png')} />
                <h1 className="flowerPowerFont" id="bloom-buddy-title">BloomBuddy</h1>
            </div>
        <p>
        Welcome to BloomBuddy! <br></br><br></br>

BloomBuddy is your go-to gardening companion, designed to help you cultivate your green thumb and connect with fellow plant enthusiasts in your area. Keep track of your gardening progress, discover plants thriving nearby, and exchange valuable insights with the community. Join us and watch your garden flourish!
        </p>
        </div>
    )
}