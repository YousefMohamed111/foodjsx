import React from 'react';
import { useTranslation } from 'react-i18next';
import './z.css'
const languages = [
    { code: "en", lang: "English" },
    { code: "ar", lang: "Arabic" },
    { code: "de", lang: "Detch" },
    { code: "fr", lang: "France" }
]

const Languageselectors = () => {
    const { i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className='select-container'>
            <select
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}>
                {languages.map((lng) => (
                    <option key={lng.code} value={lng.code}>
                        {lng.lang}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Languageselectors;
