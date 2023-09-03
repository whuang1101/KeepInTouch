/* eslint-disable react/no-unescaped-entities */
import "../css/login.css"
import { motion } from "framer-motion"
import GitHubLogo from "../assets/GitHubLogo"
import GoogleLogo from "../assets/GoogleLogo"
import { Link } from "react-router-dom"
const Login = ({setUser, setLoading}) => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Replace these with the actual username and password values
        const username = "whuang1101";
        const password = "Orange12345";
      
        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }), // Include user credentials in the request body
        })
          .then((response) => {
            if (response.ok) {
                setLoading(false);
              return response.json();
              // You can handle the successful login here, e.g., redirect the user
            } else {
              console.log("Login failed");
              // You can handle the failed login here, e.g., display an error message
            }
          }).then(data => {
            localStorage.setItem("userData", JSON.stringify(data));
            setUser(data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    return(
        <>
        <div className="backgroundImage">
        </div>
        <div className="login">
            <div className="header">
                <h1 style={{color:"black"}}>Let's</h1> 
                <h1><span style={{color:"white"}}>Keep<span style={{color:"black"}}>in</span>Touch!</span></h1>
            </div>
                <form className="login-form" onSubmit= {handleFormSubmit}>
                    <div className="username-container">
                        <label htmlFor="username">Username:</label>
                        <motion.input whileFocus ={{scale:1.05}} transition={{ duration: 0.5 }} type="text" id="username" name="username" className="input-field" placeholder="Username" required={true} />
                    </div>
                    <div className="password-container">
                        <label htmlFor="password">Password:</label>
                        <motion.input whileFocus ={{scale:1.05}} transition={{ duration: 0.5 }} type="password" id="password" name="password" className="input-field" placeholder="Password" required={true} />
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