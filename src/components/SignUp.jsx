import { motion } from "framer-motion";


const SignUp = () => {
    return (
      <>
        <div className="backgroundImage"></div>
        <div className="sign-up-page">
          <div className="header">
            <h1>Sign Up</h1>
            <h1 style={{ color: "black" }}>Let's</h1>
            <h1>
              <span style={{ color: "white" }}>Keep</span>
              <span style={{ color: "black" }}>in</span>
              <span style={{ color: "white" }}>Touch!</span>
            </h1>
          </div>
          <form className="sign-up-form">
                    <div className="name-container">
                        <label htmlFor="name">Full Name:</label>
                        <motion.input whileFocus ={{scale:1.05}} transition={{ duration: 0.5 }} type="text" id="name" name="name" className="input-field" placeholder="Name" />
                    </div>
                    <div className="email-container">
                        <label htmlFor="email">Email:</label>
                        <motion.input whileFocus ={{scale:1.05}} transition={{ duration: 0.5 }} type="text" id="email" name="email" className="input-field" placeholder="Email" />
                    </div>
                    <div className="username-container">
                        <label htmlFor="username">Username:</label>
                        <motion.input whileFocus ={{scale:1.05}} transition={{ duration: 0.5 }} type="text" id="username" name="username" className="input-field" placeholder="Username" />
                    </div>
                    <div className="password-container">
                        <label htmlFor="password">Password:</label>
                        <motion.input whileFocus ={{scale:1.05}} transition={{ duration: 0.5 }} type="password" id="password" name="password" className="input-field" placeholder="Password" />
                    </div>
                    <div className="confirm-password-container">
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <motion.input whileFocus ={{scale:1.05}} transition={{ duration: 0.5 }} type="password" id="confirm-password" name="confirm-password" className="input-field" placeholder="Confirm Password" />
                    </div>
                    <div className="submit-container">
                        <motion.input whileHover={{scale: 1.1}} whileTap ={{scale:.8}}type="submit" className="submit" value={"Sign Up"}/>
                    </div>
                </form>
        </div>
      </>
    );
  };

export default SignUp