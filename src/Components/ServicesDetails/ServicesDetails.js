import React, { useEffect, useState } from "react";
// , { useEffect, useState }
// import { useHistory, useParams } from "react-router";
import { HashLink } from "react-router-hash-link";
import "./ServicesDetails.css";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useParams } from "react-router";
const ServicesDetails = () => {
  const { user } = useAuth();
  console.log(user);
  const userEmail = user?.email;
  const username = user?.displayName;
  const { name } = useParams();
  const [selectedItem, setSelectedItem] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${name}`).then((res) =>
      res.json().then((data) => setSelectedItem(data))
    );
  }, [name]);
  console.log(selectedItem);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.servicesItem = selectedItem;
    fetch(`https://infinite-stream-87987.herokuapp.com/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order processed Successfully");
          reset();
        }
      });
  };
  return (
    <section id="services_details" className="order">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="py-3">Register as a Travelo Tour</h2>
            <form
              className="orderform border p-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                defaultValue={username}
                {...register("firstName")}
                placeholder="username"
              />
              <input
                defaultValue={userEmail}
                {...register("email")}
                placeholder="email"
              />
              <input {...register("address")} placeholder="Address" required />
              <input {...register("number")} placeholder="phone" required />

              <input className="submitbtn" type="submit" />
            </form>
          </div>
        </div>

        <div className="text-center py-4 ">
          <HashLink to="/home#services">
            <button className="regular_btn">See All Services</button>
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetails;
