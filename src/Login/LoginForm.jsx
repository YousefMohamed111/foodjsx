import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useTranslation } from 'react-i18next';
import Languageselectors from '../components/language-selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
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
        firstName: yup.string().required(t('youssef')).min(2, t('lengthError')).max(11, t('lengthError')),
        lastName: yup.string().required(t('yousse')).min(2, t('lengthError')).max(11, t('lengthError')),
        email: yup.string().required(t('youss')).email(t('emailError')),
        password: yup.string().required(t('yous')).matches(/^(?=.*[A-Z])[A-Za-z0-9]/, t('passwordError')).min(8, t('passwordError')),
        repassword: yup.string().required(t('you')).oneOf([yup.ref('password')], t('repasswordError')),
        number: yup.string().required(t('yo')).matches(/^01[1250][0-9]{8}$/, t('numberError'))
    });

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            password: "",
            repassword: "",
        },
        validationSchema: userSchema,
        onSubmit: async () => {
            try {
                console.log('Signup successful');
                navigate('/L');
            } catch (error) {
                setError(error.message);
            }
        },
    });


    return (
        <>
            <div className='ccc'>
                <Languageselectors />
                <div className='container-sign mt-5 form-signin'>
                    <form onSubmit={formik.handleSubmit}>
                        {error && <p className="text-danger">{error}</p>}
                        <div className='mb-3' >
                            <label htmlFor="firstName" className='label'>{t("greeting")}</label>
                            <input
                                className="form-label form-control"
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder={t("greeting")}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                            />
                            <FontAwesomeIcon icon={faUser} className='icon1' />
                            {formik.touched.firstName && formik.errors.firstName && <p className='message-error my-2 fs-6'>{formik.errors.firstName}</p>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="lastName" className='label'>{t("greetin")}</label>
                            <input
                                className="form-label form-control"
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder={t("greetin")}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                            />
                            <FontAwesomeIcon icon={faUser} className='icon2' />
                            {formik.touched.lastName && formik.errors.lastName && <p className='message-error my-2 fs-6'>{formik.errors.lastName}</p>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email" className='label'>{t("greeti")}</label>
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
                            <FontAwesomeIcon icon={faEnvelope} className='icon3' />
                            {formik.touched.email && formik.errors.email && <p className='message-error my-2 fs-6'>{formik.errors.email}</p>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password" className='label'>{t("greet")}</label>
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
                            <FontAwesomeIcon icon={faLock} className='icon4' />
                            {formik.touched.password && formik.errors.password && <p className='message-error my-2 fs-6'>{formik.errors.password}</p>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="repassword" className='label'>{t("gree")}</label>
                            <input
                                type="password"
                                name='repassword'
                                className="form-control"
                                id="repassword"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.repassword}
                                placeholder={t("gree")}
                            />
                            <FontAwesomeIcon icon={faLock} className='icon5' />
                            {formik.touched.repassword && formik.errors.repassword && <p className='message-error my-2 fs-6'>{formik.errors.repassword}</p>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="number" className='label'>{t("gre")}</label>
                            <input
                                type="text"
                                name='number'
                                className="form-control"
                                id="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.number}
                                placeholder={t("gre")}
                            />
                            <FontAwesomeIcon icon={faPhone} className='icon6' />
                            {formik.touched.number && formik.errors.number && <p className='message-error my-2 fs-6'>{formik.errors.number}</p>}
                        </div>
                        <span>
                            <button type="submit" className='btn btn-primary pill'>{t("register")}</button>
                        </span>
                    </form >
                </div>
            </div >
        </>
    );
};

export default LoginForm;
