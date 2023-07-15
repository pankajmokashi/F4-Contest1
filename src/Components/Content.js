import Google from "../Images/Google.png"
import Facebook from "../Images/Facebook.png"
const Content = () => {
    return(
        <div className="content">
            <h1>Create Account</h1>
            <div className="btns">
                <button>
                    <img className="google" src={Google}></img>
                    <span>Sign up with Google</span>
                </button>
                <button>
                    <img className="facebook" src={Facebook}></img>
                    <span>Sign up with Facebook</span>
                </button>
            </div>
            <div className="text">-OR-</div>
        </div>
    )
}

export default Content