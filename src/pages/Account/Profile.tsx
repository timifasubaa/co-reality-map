import React from "react";
import { useForm } from "react-hook-form";

import "./Account.scss";

interface ProfileFormData {
  username: string;
}

const Profile = () => {
  const { register, handleSubmit, errors, formState } = useForm<
    ProfileFormData
  >({
    mode: "onBlur",
  });
  const onSubmit = async (data: ProfileFormData) => {
    await alert("TODO: save profile in Firebase");
    console.log(data);
  };

  return (
    <div className="page-container">
      <div className="coreality-logo-sparkles"></div>
      <div className="login-container">
        <h2>First, create your account</h2>
        <p>This will give you access to all sorts of events in Sparkle Town</p>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="input-group">
            <input
              name="username"
              className="input-block input-centered"
              placeholder="Your Username"
              ref={register({
                required: true,
                maxLength: 16,
              })}
            />
            <span className="input-info">
              This is your public party name (max 16 characters)
            </span>
            {errors.username && errors.username.type === "required" && (
              <span className="input-error">Username is required</span>
            )}
            {errors.username && errors.username.type === "maxLength" && (
              <span className="input-error">
                Username is less than 16 characters
              </span>
            )}
          </div>
          <input
            className="btn btn-primary btn-block btn-centered"
            type="submit"
            value="Create profile"
            disabled={!formState.isValid}
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;