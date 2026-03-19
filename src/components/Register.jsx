import React, { useState } from "react";
import { registerSchema } from "../utils/validationSchema";

const Register = ({ goToLogin }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = registerSchema.safeParse(formData);

        if (!result.success) {
            const formatted = {};
            result.error.issues.forEach((err) => {
                formatted[err.path[0]] = err.message;
            });
            setErrors(formatted);
            return;
        }

        setErrors({});
        console.log("Registered:", formData);


        goToLogin();
    };

    return (

        <div
            className="min-h-screen flex justify-center items-center bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8')",
            }}
        >
            <form className="w-full max-w-sm p-8 bg-white/30 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

                <div className="mb-4">
                    <label className="block text-gray-800 text-sm font-semibold mb-1"> FirstName </label>

                    <input
                    className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        name="firstName"
                        placeholder="FirstName"
                        onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                        }
                    />
                    {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                    </div>

                    <div className="mb-4">
                         <label className="block text-gray-800 text-sm font-semibold mb-1"> Email Address </label>
                    <input
                        className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        name="email"
                        placeholder="Email"
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                   </div>
                   <div className="mb-4">
                     <label className="block text-gray-800 text-sm font-semibold mb-1"> Password </label>
                    <input
                       className="w-full p-2 bg-white/50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })
                        }
                    />
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                     </div>
                    <button type="Register" className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg active:scale-95 transition-all" >
                        Register</button>

                    <p className="text-sm text-center mt-3">
                        Already have an account?{" "}
                        <span className="text-orange-600 cursor-pointer" onClick={goToLogin}> Login
                        </span>
                    </p>
            </form>
        </div>
    );
};

export default Register;