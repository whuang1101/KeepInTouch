/* eslint-disable react/no-unescaped-entities */
import "../css/login.css"
import { motion } from "framer-motion"
import GitHubLogo from "../assets/GitHubLogo"
import GoogleLogo from "../assets/GoogleLogo"
import { Link } from "react-router-dom"
const Login = () => {
    return(
        <>
        <div className="backgroundImage">
        </div>
        <div className="login">
            <div className="header">
                <h1 style={{color:"black"}}>Let's</h1> 
                <h1><span style={{color:"white"}}>Keep<span style={{color:"black"}}>in</span>Touch!</span></h1>
            </div>
                <form className="login-form">
                    <div className="username-container">
                        <label htmlFor="username">Username:</label>
                        <motion.input whileFocus ={{scale:1.05}} transition={{ duration: 0.5 }} type="text" id="username" name="username" className="input-field" placeholder="Username" />
                    </div>
                    <div className="password-container">
                        <label htmlFor="password">Password:</label>
                        <motion.input whileFocus ={{scale:1.05}} transition={{ duration: 0.5 }} type="password" id="password" name="password" className="input-field" placeholder="Password" />
                    </div>
                    <div className="submit-container">
                        <motion.input whileHover={{scale: 1.1}} whileTap ={{scale:.8}}type="submit" className="submit" value={"Login"}/>
                    </div>
                </form>
                <div className="sign-up">
                    <p>Or Login using </p>
                    <div className="logos">
                        <GitHubLogo />
                        <GoogleLogo/>
                    </div>
                    <p>Or sign up <Link to="/sign-up" style={{color:"white"}}>here</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login