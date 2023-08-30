import { useFormik } from "formik";
import * as Yup from "yup";
import { AppRouter } from "../App";

const LoginForm = () => {

    const formik = useFormik({
        initialValues : {
            email : '',
            password : ''
        },
        validationSchema : Yup.object({
            email: Yup.string().email("invalid email address").required("Required"),
            password: Yup.string().min(6, 'minium 6 characters').max(20, 'maximum 20 characters').required("Required")
        }),
        onSubmit : (values, { resetForm }) => {
            alert("Form is validated! Submitting the form");
            resetForm()
        }
    })
    return (
        <>
            <span className="form-details">
                <form className="login-form" onSubmit={formik.handleSubmit}>
                    <div className="title text-center"><h2>Login</h2></div>
                    <div className="login-email d-block text-center pt-3">
                        <label className="email d-block" htmlFor="email">Email Address</label>
                        <input type="email" id="email" label="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                    </div>
                    <div className="login-password d-block text-center p-4">
                        <label className="password d-block" htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
                    </div>
                    <div className="button text-center"><button className="w-50 text-center" type="submit">Submit</button></div>
                </form>
            </span>
            {/* <div className="item1 flex justify-center items-center bg-black/10">
                <div className="item2 login-main pt-16 flex max-h-[400px] my-8 justify-center items-center text-sociogram bg-black/20 rounded-xl">
                    <div className="item3 login-form-card lg:w-[30vw] xs:w-[400px] p-6 rounded-lg">
                        <h1 class="item 4text-center text-3xl pb-4">Login</h1>
                        <form className="item5 flex flex-col gap-3" onSubmit={formik.handleSubmit}>
                            <label for="email" class="ite6 flex-column flex flex-col">Username<input required="" type="text" name="username" id="username" placeholder="@Hrishi" class="rounded-lg py-2 px-3 text-black bg-sociogram dark:bg-white" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} /></label>
                            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                            <label for="password" class="item7 flex flex-col">Password<input required="" type="password" name="password" id="password" placeholder="*******" class="rounded-lg py-2 px-3 text-black bg-sociogram dark:bg-white" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} /></label>
                            {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
                            <label class="item8 checkbox flex gap-2 items-center cursor-pointer"><input type="checkbox" name="remember" id="remember" class="w-4 h-4" />Remember Me</label>
                            <button type="button" class="item9 bg-transparent border-2 font-semibold p-3 rounded-lg hover:bg-black/30">Guest Mode</button>
                            <button type="submit" class="item10 bg-button p-3 rounded-lg text-white mb-10">Submit</button>
                        </form>
                    </div>
                </div>
            </div> */}
        </>
    )
};

export default LoginForm;