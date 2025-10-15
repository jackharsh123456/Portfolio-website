import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { X, CheckCircle, AlertTriangle } from 'lucide-react'; 

const API_BASE_URL = 'https://backend-one-delta-19.vercel.app/'; 
const MESSAGE_ENDPOINT = "message";

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const Notification = ({ message, type, onClose }) => {
  const notificationClass = `notification-container notification-${type}`;
  let Icon = AlertTriangle;

  switch (type) {
    case 'success':
      Icon = CheckCircle;
      break;
    case 'error':
      Icon = AlertTriangle;
      break;
    default:
      Icon = AlertTriangle;
      break;
  }

  return (
    <div className={notificationClass}>
      <Icon size={24} className="notification-icon" />
      <div className="notification-content">
        <p className="notification-title">{type === 'success' ? 'Success!' : 'Error!'}</p>
        <p className="notification-message">{message}</p>
      </div>
      <button onClick={onClose} className="notification-close-btn">
        <X size={16} className="notification-icon-small" />
      </button>
    </div>
  );
};

function Messagepage() {
  usePageTitle("Contact - Harshyyy");
  
  
  const [notification, setNotification] = useState(null); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000); 
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setNotification(null); 
    
    const url = `${API_BASE_URL}${MESSAGE_ENDPOINT}`;
    console.log(`Submitting message to: ${url}`);

    try {
      const r = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await r.json();

      if (r.ok) {
        console.log("Submission successful:", resData);
        showNotification(resData.message || 'Message sent successfully!', 'success');
        reset(); // Clear form fields
      } else {
        console.error("Submission failed:", resData);
        // Safely extract message for notification
        const errorMessage = resData.message || 'Failed to send message. Please check the console for details.';
        showNotification(errorMessage, 'error');
      }
    } catch (error) {
      console.error('Network or CORS error:', error);
      showNotification('Could not connect to the server. Check the API URL and CORS settings.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="main-container">
        <div className="message-box">
          <h1 className="contact-title">Contact</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            
            <div>
              <input
                {...register("Name", {
                  required: "Name is required.",
                  maxLength: {
                    value: 20,
                    message: "Maximum length is 20 characters.",
                  },
                })}
                type="text"
                placeholder="Name"
                className="form-input"
              />
              {errors.Name && <p className="error-msg">{errors.Name.message}</p>}
            </div>

            <div>
              <input
                {...register("Email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address.",
                  },
                })}
                type="email"
                placeholder="Email"
                className="form-input"
              />
              {errors.Email && <p className="error-msg">{errors.Email.message}</p>}
            </div>

            <div>
              <textarea
                {...register("Message", {
                  required: "Message is required.",
                })}
                placeholder="Message"
                rows="5"
                className="form-input form-textarea"
              />
              {errors.Message && <p className="error-msg">{errors.Message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        
        {/* Render the Notification component */}
        {notification && (
          <Notification 
            message={notification.message} 
            type={notification.type} 
            onClose={() => setNotification(null)} 
          />
        )}
      </div>
    </>
  );
}

export default Messagepage;
