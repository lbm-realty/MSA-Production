// import React, { useState } from 'react';
// import '../css/checkout.css'; // Assuming you'll create a CSS file with this name

// const CheckoutForm = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     location: '',
//     phone: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would integrate with Stripe
//     console.log('Form data submitted:', formData);
//     alert('Form submitted! Ready for Stripe integration.');
//   };

//   return (
//     <div className="checkout-outer">
//     <div className="checkout-container">
//       <div className="checkout-header">
//         <h1>Checkout</h1>
//       </div>
      
//       <form id="checkout-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email" className="required-field">Email</label>
//           <input 
//             type="email" 
//             id="email" 
//             name="email" 
//             value={formData.email}
//             onChange={handleChange}
//             required 
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="firstName" className="required-field">First Name</label>
//           <input 
//             type="text" 
//             id="firstName" 
//             name="firstName" 
//             value={formData.firstName}
//             onChange={handleChange}
//             required 
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="lastName" className="required-field">Last Name</label>
//           <input 
//             type="text" 
//             id="lastName" 
//             name="lastName" 
//             value={formData.lastName}
//             onChange={handleChange}
//             required 
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="location" className="required-field">Location</label>
//           <input 
//             type="text" 
//             id="location" 
//             name="location" 
//             value={formData.location}
//             onChange={handleChange}
//             required 
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="phone" className="optional-label">Phone Number</label>
//           <input 
//             type="tel" 
//             id="phone" 
//             name="phone" 
//             value={formData.phone}
//             onChange={handleChange}
//           />
//         </div>
        
//         <button type="submit">Complete Purchase</button>
//       </form>
      
//       <div className="form-footer">
//         <p>Secure payment processed by Stripe</p>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default CheckoutForm;



import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../css/checkout.css'; // Assuming you'll create a CSS file with this name

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    location: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    // Replace with your actual EmailJS public key
    emailjs.init("LtuqxcFti1fOU04yO");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Send email with form data
      const emailResponse = await emailjs.send(
        "service_46qcp95", // Replace with your EmailJS service ID
        "template_28hbnlv", // Replace with your EmailJS template ID
        {
          to_email: "labeebmuntasir@gmail.com", // Replace with recipient email
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: "New Checkout Form Submission",
          message: `
            Customer Information:
            -------------------
            Name: ${formData.firstName} ${formData.lastName}
            Email: ${formData.email}
            Location: ${formData.location}
            Phone: ${formData.phone || "Not provided"}
          `,
          ...formData // Also send all form fields individually
        }
      );
      
      console.log('Email sent successfully:', emailResponse);
      setSubmitStatus('success');
      
      // After email is sent, you would integrate with Stripe for payment
      console.log('Form data submitted, ready for Stripe payment');
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="checkout-outer">
    <div className="checkout-container">
      <div className="checkout-header">
        <h1>Checkout</h1>
      </div>
      
      <form id="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="required-field">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="firstName" className="required-field">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={formData.firstName}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="lastName" className="required-field">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={formData.lastName}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="location" className="required-field">Location</label>
          <input 
            type="text" 
            id="location" 
            name="location" 
            value={formData.location}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone" className="optional-label">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Complete Purchase'}
        </button>
        
        {submitStatus === 'success' && (
          <div className="status-message success">
            Form submitted successfully!
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="status-message error">
            There was an error submitting the form. Please try again.
          </div>
        )}
      </form>
      
      <div className="form-footer">
        <p>Secure payment processed by Stripe</p>
      </div>
    </div>
    </div>
  );
};

export default CheckoutForm;
