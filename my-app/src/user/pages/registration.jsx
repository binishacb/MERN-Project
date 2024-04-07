import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
function Registration() {
  const {register,handleSubmit,formState: { errors },} = useForm({mode: "onChange"});
  
  const onSubmit = (data) => {
    console.log(data);


    
    axios.post('http://localhost:5000/api/college1', data)
   .then((response) => {
     console.log('Host Registered:', response.data); 
     alert(response.data.message);
      
    })
    .catch((error) => {
      alert("Something Went Wrong");
      console.error('Error while Registering theater:', error);
 
    });
  }

  const isDateWithinLast10Years = (value) => {
    const selectedDate = new Date(value);
    const currentDate = new Date();
    const tenYearsAgo = new Date();
    tenYearsAgo.setFullYear(currentDate.getFullYear() - 10);
  
    return selectedDate <= currentDate && selectedDate <= tenYearsAgo;
  };
  const validationRules = {
    name: {
      required: "**Title is required",
      pattern: {
        value: /^[a-zA-Z ]{3,20}$/, // Allow only letters and spaces, minimum 3 letters, maximum 20 characters
        message: "**Invalid title. It should contain only letters, spaces, and be between 3 and 20 characters long",
      },
      validate: {
        noSpecialChars: value => !/[!@#$%^&*(),.?":{}|<>0-9]/.test(value) || "**Title should not contain special characters or numbers",
        noContinuousRepeating: value => !/(.)\1\1/.test(value) || "**Title should not have 3 continuous repeating characters",
      },
    },
    email: {
      required: "Email is required",
      pattern: {
        value:
          /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/i,
        message: "Invalid email address",
      },
    },

    phone: {
      required: "**Phone number is required",
      pattern: {
        value: /^(?!.*(.)\1{3})[6-9]\d{9}$/, // Avoid continuous repeating numbers more than 3 times
        message: "**Invalid phone number. It should start with a digit greater than 5 and not have continuous repeating numbers ",
      },
    },



    dob: {
      required: "**Date of Birth is required",
      pattern: {
        value: /^\d{4}-\d{2}-\d{2}$/, // Assumes the date is in the format YYYY-MM-DD
        message: "**Invalid date format. Please use YYYY-MM-DD",
      },
      validate: {
        withinLast10Years: (value) => isDateWithinLast10Years(value) || "**Date of Birth should be before 10 years",
      },
    },
};

  
  return (
    <div className="container mt-5">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            {...register("name", validationRules.name)}
          />
          <p className="text-danger">{errors?.name && errors.name.message}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            {...register("email", validationRules.email)}
            />
            <p className="text-danger">{errors?.email && errors.email.message}</p>
          </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone:
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            {...register("phone", validationRules.phone)}
            />
            <p className="text-danger">{errors?.phone && errors.phone.message}</p>
          </div>
          <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date of Birth:
          </label>
          <input
            type="date"
            className="form-control"
            id="dob"
            name="dob"
            {...register("dob", validationRules.date)}
          />
          <p className="text-danger">{errors?.dob && errors.dob.message}</p>
        </div>


        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
