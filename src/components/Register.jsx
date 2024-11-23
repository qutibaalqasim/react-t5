import { useFormik } from 'formik'
import React from 'react'

export default function Register() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },onSubmit:async (values)=>{
           const response = await fetch ('http://localhost:3000/users',{method: 'POST',
            body:JSON.stringify(values)
           });

           console.log (response);
            
           
        }
    });

  return (
    <form onSubmit={formik.handleSubmit} className='container mt-4'>
        <div className="row">
    <div className="form-floating mb-3 col-lg-5">
        <input type="text" className="form-control" id="floatingInput" name='name' value={formik.name} onChange={formik.handleChange} placeholder="" />
        <label htmlFor="floatingInput">UserName</label>
    </div>

    <div className="form-floating mb-3 col-lg-5">
        <input type="email" className="form-control" id="floatingInput" name='email' value={formik.email} onChange={formik.handleChange} placeholder="" />
        <label htmlFor="floatingInput">UserEmail</label>
    </div>

    <div className="form-floating mb-3 col-lg-5">
        <input type="password" className="form-control" id="floatingInput" name='password' value={formik.password} onChange={formik.handleChange} placeholder="" />
        <label htmlFor="floatingInput">UserPassword</label>
    </div>


    <button type='submit' className='btn btn-outline-success'>Register</button>
    </div>
    </form>

  )
}
