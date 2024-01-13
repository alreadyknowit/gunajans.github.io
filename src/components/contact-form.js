// ContactForm.js
import React, {useState} from 'react';
import '../styles/contact-form.css';
import contactImage from '../images/contactus2.jpg'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Lütfen isim ve soyisim giriniz!';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email girmeniz gerekiyor!';
        } else if (!/^\S+@\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Bize göndermek istediğiniz bir mesaj!';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Handle form submission logic (e.g., send email)
            console.log(formData);
        }
    };

    return (
        <div className="contact-wrapper">
            <div className="contact-image-wrapper">
                <img className="summary-image" src={contactImage} alt="Contact image"/>

            </div>
           <div className="contact-form-wrapper">
               <h5>BİZİMLE İLETİŞİME GEÇİN</h5>
               <form onSubmit={handleSubmit} className="contact-form">
                   <div className="form-group">
                       <label htmlFor="name">Ad Soyad:</label>
                       <input
                           type="text"
                           id="name"
                           name="name"
                           placeholder="Ad Soyad"
                           value={formData.name}
                           onChange={handleChange}
                       />
                       {errors.name && <p className="error">{errors.name}</p>}
                   </div>
                   <div className="form-group">
                       <label htmlFor="email">Email:</label>
                       <input
                           type="email"
                           id="email"
                           name="email"
                           placeholder="example@email.com"
                           value={formData.email}
                           onChange={handleChange}
                       />
                       {errors.email && <p className="error">{errors.email}</p>}
                   </div>
                   <div className="form-group">
                       <label htmlFor="message">Mesaj:</label>
                       <textarea
                           id="message"
                           name="message"
                           rows="4"
                           placeholder="Mesaj"
                           value={formData.message}
                           onChange={handleChange}
                       />
                       {errors.message && <p className="error">{errors.message}</p>}
                   </div>
                   <button className="form-group" type="submit">Gönder</button>

               </form>
           </div>

        </div>
    );
};

export default ContactForm;
