import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';
import { useAuth } from '../context/Authcontext'; // Import useAuth hook from your AuthContext
import logo from '../assets/communify.png'; // Import the logo image
function Login() {
  const responseGoogle = (response) => {
    


    console.log(response); // Handle Google OAuth response here
    
  };

  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const { login, register, isLoggedIn } = useAuth(); // Get the login and register functions from your AuthContext

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await register(formData); // Call the register function with form data
        navigate('/bussines');
        console.log('Registration successful!');
      } else {
        await login(formData); // Call the login function with the form data
        navigate('/bussines');
        isLoggedIn(true);
        console.log('Login successful!');
      }
    } catch (error) {
      console.error(`${isRegister ? 'Registration' : 'Login'} failed:`, error);
    }
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-center">
          <img src={logo} alt="Communify" className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-900">
          {isRegister ? 'Register for Communify' : 'Login to Communify'}
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md flex flex-col gap-3 shadow-sm -space-y-px">
            {isRegister && (
              <div className="flex items-center border-b border-gray-300">
                <svg className="w-5 h-5 text-gray-500 mx-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.131 0 3.854-1.723 3.854-3.854S14.131 4.293 12 4.293 8.146 6.016 8.146 8.146 9.869 12 12 12zm0 1.707c-2.961 0-8.707 1.484-8.707 4.445v1.152a.855.855 0 00.854.855h15.706a.855.855 0 00.854-.855v-1.152c0-2.961-5.746-4.445-8.707-4.445z"/>
                </svg>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border-none text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                />
              </div>
            )}
            <div className="flex items-center border-b border-gray-300">
              <svg className="w-5 h-5 text-gray-500 mx-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 2c-3.313 0-6 2.687-6 6 0 3.312 2.687 6 6 6s6-2.688 6-6c0-3.313-2.687-6-6-6zM6 4C2.69 4 0 6.69 0 10s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm12 12c-4.411 0-8 3.589-8 8h2c0-3.309 2.691-6 6-6s6 2.691 6 6h2c0-4.411-3.589-8-8-8zm-12 2c-2.206 0-4 1.794-4 4h2c0-1.105.895-2 2-2s2 .895 2 2h2c0-2.206-1.794-4-4-4z"/>
              </svg>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-none text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="flex items-center border-b border-gray-300">
              <svg className="w-5 h-5 text-gray-500 mx-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 21.333c-5.148 0-9.333-4.185-9.333-9.333S6.852 2.667 12 2.667 21.333 6.852 21.333 12 17.148 21.333 12 21.333z"/>
                <path d="M12 10.666c-.736 0-1.333.597-1.333 1.334 0 .736.597 1.333 1.333 1.333.736 0 1.334-.597 1.334-1.333 0-.737-.598-1.334-1.334-1.334zm0-6.666c-3.682 0-6.667 2.985-6.667 6.667h2c0-2.577 2.09-4.667 4.667-4.667 2.577 0 4.667 2.09 4.667 4.667h2c0-3.682-2.985-6.667-6.667-6.667z"/>
              </svg>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border-none text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {isRegister ? 'Register' : 'Sign In'}
          </button>
          {/* <div className="flex items-center justify-center">
            <span className="mx-2">or</span>
            <GoogleLogin
              clientId="597899999242-95od2qqb9tcad1cuahf1eskno80l3mh3.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
               redirectUri="http://localhost:3000/auth/google/callback"
              className="google-login-button"
            />
          </div> */}
        </form>
        <div className="text-center">
          <p>
            {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button onClick={toggleForm} className="text-indigo-500 hover:text-indigo-600 focus:outline-none">
              {isRegister ? 'Login here' : 'Register here'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
