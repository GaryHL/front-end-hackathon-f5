import React, { useState } from "react";
import swal from "sweetalert";
import { useForm, Controller } from "react-hook-form";

import "./formBooks.css";

//Form Hilda

const FormBooks = () => {
  const [checkButton, setCheckButton] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const customSubmit = (data) => {
    console.log(data);
    swal("Submitted form!", "Successful validation", "Success");
  };

  return (
    <>
      <div className="form-book" id="form">
        <div className="container-formbook">
          <form onSubmit={handleSubmit(customSubmit)} className="form-react">
            <h2>Advertise your book</h2>
            <div className="form-control">
              <label>Title</label>
              <input
                className="place"
                placeholder="Enter name"
                type="text"
                {...register("title", {
                  required: true,
                  maxLength: 8,
                })}
              />
              {errors.title?.type === "required" && (
                <small className="fail">The field cannot be empty</small>
              )}
              {errors.title?.type === "maxLength" && (
                <small className="fail">Maximum characters are eight</small>
              )}
            </div>

            <div className="form-control">
              <label>Description</label>
              <input
                className="place message"
                placeholder="Enter your message"
                type="text"
                {...register("description", {
                  required: true,
                  minLength: 5,
                  maxLength: 200,
                })}
              />
              {errors.description?.type === "required" && (
                <small className="fail">The field cannot be empty</small>
              )}
              {errors.description?.type === "minLength" && (
                <small className="fail">The minimum characters must be 5</small>
              )}
              {errors.descri?.type === "maxLength" && (
                <small className="fail">
                  The maximum characters should be 200
                </small>
              )}
            </div>

            <div className="form-control">
              <label>Category</label>
              <input
                className="place"
                placeholder="Enter name"
                type="text"
                {...register("category", {
                  required: true,
                  maxLength: 8,
                })}
              />
              {errors.category?.type === "required" && (
                <small className="fail">The field cannot be empty</small>
              )}
              {errors.category?.type === "maxLength" && (
                <small className="fail">Maximum characters are eight</small>
              )}
            </div>

            <div className="form-control">
              <label>Price</label>
              <input
                className="place"
                placeholder="Enter price"
                type="text"
                {...register("price", {
                  required: true,
                  maxLength: 8,
                })}
              />
              {errors.price?.type === "required" && (
                <small className="fail">The field cannot be empty</small>
              )}
              {errors.price?.type === "maxLength" && (
                <small className="fail">Maximum characters are eight</small>
              )}
            </div>

            <div className="form-control">
              <label>Image</label>
              <input
                className="place"
                placeholder="Enter price"
                type="number"
                {...register("title", {
                  required: true,
                  
                })}
              />
              {errors.name?.type === "required" && (
                <small className="fail">The field cannot be empty</small>
              )}
              {errors.name?.type === "maxLength" && (
                <small className="fail">Maximum characters are eight</small>
              )}
            </div>

            <div className="form-check form-switch">
              <Controller
                name="checkbox"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...field}
                  />
                )}
              />
              <label>I accept terms and conditions</label>
              {errors.checkbox?.type === "required" && (
                <small className="fail">
                  The field cannot be empty
                  <br></br>
                </small>
              )}
            </div>

            <div className="form-check">
              <Controller
                name="checkbox"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...field}
                  />
                )}
              />
              <label>
                Accept if you want to receive news from our Newsletter
              </label>
            </div>

            <div className="form">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormBooks;
