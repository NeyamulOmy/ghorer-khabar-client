import React from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth'

const Login = () => {
    //useTitle("Log In");
    const { signIn, setLoading, handleGoogleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const Googleprovider = new GoogleAuthProvider();



    const from = location.state?.from?.pathname || '/';



    const handleGoogle = () => {
        handleGoogleSignIn(Googleprovider)
            .then((result) => {


                const user = result.user;
                navigate(from, { replace: true });
            }).catch((error) => {
                console.log("error : ", error);
            })
    }



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();

                navigate(from, { replace: true });


            })
            .catch(error => {
                console.error(error)

            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div>
                        <button onClick={handleGoogle} className="btn btn-sm btn-active btn-ghost">Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;