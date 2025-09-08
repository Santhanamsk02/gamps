import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

   const [registerdata, setdata] = useState({
        username: "",
        email: "",
        password: "",
        fullname: "",
        college: "",
        dept: "",
        year: "",
        domain:""
   })
    
    function registerUser()
    {
        console.log(registerUser);
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-[#e0e5ec] rounded-2xl shadow-xl overflow-hidden relative flex"
        style={{
          boxShadow: "20px 20px 40px #a3b1c6, -20px -20px 40px #ffffff",
        }}
      >
        {/* Left side - Welcome/Login */}
        <div className=" p-10 flex flex-col justify-center bg-gradient-to-br from-blue-100 to-blue-200" style={{width:"40%"}}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Hello, Welcome!
            </h2>
            <p className="text-gray-600 mb-6">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <button
              onClick={toggleForm}
              className="px-6 py-3 rounded-xl text-gray-700 font-semibold mb-8 transition-all duration-300"
              style={{
                background: "#e0e5ec",
                boxShadow: "8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff",
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.boxShadow = 
                  "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.boxShadow = 
                  "8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff";
              }}
            >
              {isLogin ? "Register" : "Login"}
            </button>

            <AnimatePresence mode="wait">
              {isLogin && (
                <motion.div
                  key="login-form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <InputBox placeholder="Username" type="text" />
                  <InputBox placeholder="Password" type="password" />
                  <div className="text-right">
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-gray-700 font-semibold mt-4 transition-all duration-300"
                    style={{
                      background: "#e0e5ec",
                      boxShadow: "8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff",
                    }}
                    onMouseDown={(e) => {
                      e.currentTarget.style.boxShadow = 
                        "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff";
                    }}
                    onMouseUp={(e) => {
                      e.currentTarget.style.boxShadow = 
                        "8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff";
                    }}
                  >
                    Login
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right side - Registration Form */}
        <div className=" p-10 bg-gradient-to-br from-blue-50 to-blue-100" style={{width:"60%"}}>
          <AnimatePresence mode="wait">
            {!isLogin ? (
              <motion.div
                key="signup-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                  Registration
                </h2>
                <p className="text-gray-600 mb-6 text-center">
                  Already have an account?
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <InputBox placeholder="username" type="text"  registerdata={registerdata} setdata={setdata} name="username" />
                  <InputBox placeholder="email" type="email" registerdata={registerdata} setdata={setdata} name="email" />
                  <InputBox placeholder="password" type="password" registerdata={registerdata} setdata={setdata} name="password"/>
                  <InputBox placeholder="fullname" type="text" registerdata={registerdata} setdata={setdata} name="fullname" />
                  <InputBox placeholder="college" type="text" registerdata={registerdata} setdata={setdata} name="college"/>
                  <InputBox placeholder="dept" type="text" registerdata={registerdata} setdata={setdata} name="dept" />
                  <InputBox placeholder="year" type="text" registerdata={registerdata} setdata={setdata} name="year" />
                  <InputBox placeholder="domain" type="text" registerdata={registerdata} setdata={setdata} name="domain" />
                </div>
                
                <button
                                  type="submit"
                                    onClick={()=>{console.log(registerdata)}}
                  className="w-full py-3 rounded-xl text-gray-700 font-semibold mt-6 transition-all duration-300"
                  style={{
                    background: "#e0e5ec",
                    boxShadow: "8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff",
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.boxShadow = 
                      "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff";
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.boxShadow = 
                      "8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff";
                  }}
                >
                  Register
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="welcome-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="h-full flex flex-col justify-center items-center"
              >
                <h3 className="text-xl font-semibold text-gray-700 mb-6">
                  or login with social platforms
                </h3>
                <div className="flex space-x-6">
                  <SocialButton icon="G" />
                  <SocialButton icon="f" />
                  <SocialButton icon="in" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

function InputBox({ placeholder, type, registerdata, setdata, name }) {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        name={name}// controlled input
        required
        className="w-full px-4 py-3 rounded-xl bg-[#e0e5ec] text-gray-700 outline-none transition-all duration-300"
        style={{
          boxShadow: "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff",
        }}
        onChange={(e) =>
          setdata({ ...registerdata, [name]: e.target.value })
        }
      />
    </div>
  );
}


function SocialButton({ icon }) {
  return (
    <button
      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        background: "#e0e5ec",
        boxShadow: "8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff",
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.boxShadow = 
          "inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.boxShadow = 
          "8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff";
      }}
    >
      <span className="font-bold text-gray-700">{icon}</span>
    </button>
  );
}