import { useForm } from "react-hook-form";
import usePageTitle from "../Usepagetitle";
import "./messages.css"

function Messagepage() {
  usePageTitle("Contact - Harshyyy");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message); // ✅ Success alert
        reset();
      } else {
        alert(result.message || "Something went wrong."); // ⚠️ Error alert
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Network error. Please try again later.");
    }
  };

  return (
    <div className="main-container">
      <div className="message-box">
        <h1 className="contact-title">Contact</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div>
            <input
              {...register("Name", {
                required: "Name is required.",
                maxLength: { value: 20, message: "Maximum length is 20 characters." },
              })}
              type="text"
              placeholder="Name"
              className="form-input"
            />
            {errors.Name && <p className="error-msg">{errors.Name.message}</p>}
          </div>

          {/* Email Field */}
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

          {/* Message Field */}
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

          {/* Submit Button */}
          <button type="submit" disabled={isSubmitting} className="submit-btn">
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Messagepage;
