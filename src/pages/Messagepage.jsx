const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

function Messagepage() {
  usePageTitle("Contact - Harshyyy");

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
