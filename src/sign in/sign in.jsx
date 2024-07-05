// import React, { useState, useEffect } from 'react';
// import { useFormik } from 'formik';
// import * as yup from "yup";
// import './sign in.css'
// import './sign in.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import Languageselectors from '../components/language-selectors';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faUser, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// const SignupForm = () => {
//     const { t } = useTranslation();
//     const navigate = useNavigate();
//     const [error, setError] = useState(null);

//     useEffect(() => {

//         document.body.classList.add('signup-body');
//         return () => {
//             document.body.classList.remove('signup-body');
//         };
//     }, []);

//     const userSchema = yup.object({
//         email: yup.string().required(t('youss')).email(t('emailError')),
//         password: yup.string().required(t('yous')).matches(/^(?=.*[A-Z])[A-Za-z0-9]/, t('passwordError')).min(8, t('passwordError')),

//     });

//     const formik = useFormik({
//         initialValues: {
//             email: "",
//             password: "",
//         },
//         validationSchema: userSchema,
//         onSubmit: async (values) => {
//             try {
//                 const response = await axios.post('https://jwt-bearer-auth1.p.rapidapi.com/login', values, {
//                     headers: {
//                         'content-type': 'application/json',
//                         'Content-Type': 'application/json',
//                         'X-RapidAPI-Key': 'ddf881fae0mshe761ff8e4a2b0cbp116c40jsne983689f024f',
//                         'X-RapidAPI-Host': 'jwt-bearer-auth1.p.rapidapi.com'
//                     }
//                 });
//                 if (response.status === 200) {
//                     console.log('Signup successful');
//                     const token = response.data.token;
//                     localStorage.setItem('token', token);
//                     navigate('/re');
//                 }
//             } catch (error) {
//                 setError(t("errer"));
//             }
//         },
//     });

//     const fetchData = async () => {
//         const token = localStorage.getItem('token');
//         try {
//             const response = await axios.get('https://jwt-bearer-auth1.p.rapidapi.com/login', {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 }
//             });

//             console.log(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <>
//             <div className='ccc container'>
//                 <Languageselectors />
//                 <div className='container-sign mt-5 form-signin row'>
//                     <form onSubmit={formik.handleSubmit} className='col-lg-12 col-sm-12 col-xl-12 col-xxl-12 col-xs-12' >
//                         {error && <p className="text-danger">{error}</p>}

//                         <div className='mb-3'>
//                             <label htmlFor="email" className='label'>{t("greeti")}</label>
//                             <input
//                                 className="form-label form-control"
//                                 id="email"
//                                 name="email"
//                                 type="email"
//                                 placeholder={t("greeti")}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 value={formik.values.email}
//                             />
//                             <FontAwesomeIcon icon={faEnvelope} className='iconnnn' />
//                             {formik.touched.email && formik.errors.email && <p className='message-error my-2 fs-6'>{formik.errors.email}</p>}
//                         </div>
//                         <div className='mb-3'>
//                             <label htmlFor="password" className='label'>{t("greet")}</label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 className="form-control"
//                                 id="password"
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 value={formik.values.password}
//                                 placeholder={t("greet")}
//                             />
//                             <FontAwesomeIcon icon={faLock} className='iconnnnn' />
//                             {formik.touched.password && formik.errors.password && <p className='message-error my-2 fs-6'>{formik.errors.password}</p>}
//                         </div>
//                         <span>
//                             <button type="submit" className='btn btn-primary pill'>{t("register")}</button>
//                             <Link to="/LL"><p className='sign'>{t("dont")}</p></Link>
//                         </span>
//                     </form >
//                 </div>
//             </div >
//         </>
//     );
// };

// export default SignupForm;
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";
import './sign in.css'
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Languageselectors from '../components/language-selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const SignupForm = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    useEffect(() => {
        document.body.classList.add('signup-body');
        return () => {
            document.body.classList.remove('signup-body');
        };
    }, []);

    const userSchema = yup.object({
        email: yup.string().required(t('youss')).email(t('emailError')),
        password: yup.string().required(t('yous')).matches(/^(?=.*[A-Z])[A-Za-z0-9]/, t('passwordError')).min(8, t('passwordError')),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: userSchema,
        onSubmit: async (values) => {
            try {
                const response = await axios.post('https://jwt-bearer-auth1.p.rapidapi.com/login', values, {
                    headers: {
                        'content-type': 'application/json',
                        'Content-Type': 'application/json',
                        'X-RapidAPI-Key': 'ddf881fae0mshe761ff8e4a2b0cbp116c40jsne983689f024f',
                        'X-RapidAPI-Host': 'jwt-bearer-auth1.p.rapidapi.com'
                    }
                });
                if (response.status === 200) {
                    console.log('Signup successful');
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    navigate('/re');
                }
            } catch (error) {
                setError(t("errer"));
            }
        },
    });

    const fetchData = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get('https://jwt-bearer-auth1.p.rapidapi.com/login', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className='ccc container'>
                <Languageselectors />
                <div className='container-sign mt-5 form-signin row'>
                    <form onSubmit={formik.handleSubmit} className='col-lg-12 col-sm-12 col-xl-12 col-xxl-12 col-xs-12'>
                        {error && <p className="text-danger">{error}</p>}

                        <div className='mb-3'>
                            <label htmlFor="email" className='label'>{t("greeti")}</label>
                            <div className='input-container'>
                                <input
                                    className="form-label form-control"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder={t("greeti")}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                <FontAwesomeIcon icon={faEnvelope} className='icon' />
                            </div>
                            {formik.touched.email && formik.errors.email && <p className='message-error my-2 fs-6'>{formik.errors.email}</p>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password" className='label'>{t("greet")}</label>
                            <div className='input-container'>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    placeholder={t("greet")}
                                />
                                <FontAwesomeIcon icon={faLock} className='icon' />
                            </div>
                            {formik.touched.password && formik.errors.password && <p className='message-error my-2 fs-6'>{formik.errors.password}</p>}
                        </div>
                        <span>
                            <button type="submit" className='btn btn-primary pill'>{t("register")}</button>
                            <Link to="/LL"><p className='sign'>{t("dont")}</p></Link>
                        </span>
                    </form >
                </div>
            </div >
        </>
    );
};

export default SignupForm;
