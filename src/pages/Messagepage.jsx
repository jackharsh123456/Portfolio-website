import React from "react";
import "./messages.css";
import { usePageTitle } from "../Usepagetitle";
import { useForm } from "react-hook-form";

function Messagepage() {
  usePageTitle("Contact - Harshyyy");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/message", {method: "POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    let res = await r.text()
    alert(res)
  };

  return (
    <div className="main-msg">
      <div className="messagebox">
        <h1>Contact</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("Name", {
              required: { value: true, message: "This field is required" },
              maxLength: {
                value: 20,
                message: "Maximum length is 20",
              },
            })}
            type="text"
            id="name"
            placeholder="Name"
          />
          {errors.Name && <p className="errormsg">{errors.Name.message}</p>}
          <input
            {...register("Email", {
              required: { value: true, message: "This field is required" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            id="email"
            placeholder="Email"
          />
          {errors.Email && <p className="errormsg">{errors.Email.message}</p>}
          <textarea
            {...register("Message", {
              required: { value: true, message: "This field is required" },
            })}
            id="message"
            placeholder="Message"
          />
          {errors.Message && <p className="errormsg">{errors.Message.message}</p>}
          <button name="message" className="submit-btn">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Messagepage;