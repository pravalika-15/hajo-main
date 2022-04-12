import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

function RideForm() {
  const [formInputs, setformInputs] = useState({
    name: "",
    phone: 0,
    email: "",
    from: "",
    to: "",
    date: "",
    time: "",
    vehicle: "",
  });

  const { data: session, status } = useSession();

  var my_input_class =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  // FORM HANDLERS
  const handleSubmit = (e) => {
    e.preventDefault();

    if (status !== "authenticated") {
      alert("Please Sign In before filling up the form!");
      return;
    }

    const form_object = {
      name: formInputs.name,
      phone: formInputs.phone,
      email: session.user.email,
      from: formInputs.from,
      to: formInputs.to,
      date: formInputs.date,
      time: formInputs.time,
      vehicle: formInputs.vehicle,
    };

    setformInputs({
      name: "",
      phone: "",
      email: "",
      from: "",
      to: "",
      date: "",
      time: "",
      vehicle: "cab",
    });

    axios
      .post("https://dry-tor-31695.herokuapp.com/form-data", form_object)
      .then((response) => {
        console.log(response);
        alert("Your data have been submitted. Happy Journey!");
      })
      .catch((err) => {
        console.log(`Error -> ${err}`);
        alert(`Error -> ${err}`);
      });
  };

  useEffect(() => {
    if (status === "authenticated") {
      setformInputs((prevObject) => ({
        ...prevObject,
        name: session.user.name,
      }));
    }
  }, [status, session?.user?.name]);

  const handleNameChange = (e) => {
    setformInputs((prevObject) => ({ ...prevObject, name: e.target.value }));
  };

  const handlePhoneChange = (e) => {
    setformInputs((prevObject) => ({ ...prevObject, phone: e.target.value }));
  };

  const handleFromChange = (e) => {
    setformInputs((prevObject) => ({ ...prevObject, from: e.target.value }));
  };

  const handleToChange = (e) => {
    setformInputs((prevObject) => ({ ...prevObject, to: e.target.value }));
  };

  const handleDateChange = (e) => {
    setformInputs((prevObject) => ({ ...prevObject, date: e.target.value }));
  };

  const handleTimeChange = (e) => {
    setformInputs((prevObject) => ({ ...prevObject, time: e.target.value }));
  };

  const handleVehicleChange = (e) => {
    setformInputs((prevObject) => ({
      ...prevObject,
      vehicle: e.target.value,
    }));
  };

  return (
    <div className="flex bg-white flex-col w-96 h-max mt-10 shadow-md rounded-md mb-28">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col h-full font-semibold space-y-4 p-4 text-lg text-gray-700"
      >
        <label htmlFor="name">
          Name:{" "}
          <input
            className={my_input_class}
            value={formInputs.name}
            onChange={handleNameChange}
            type="text"
            name="name"
            id="name"
            required
          />
        </label>

        <label htmlFor="phone">
          Phone Number:{" "}
          <input
            className={my_input_class}
            value={formInputs.phone}
            onChange={handlePhoneChange}
            type="number"
            name="phone"
            id="phone"
            required
          />
        </label>

        <label htmlFor="from">
          From:{" "}
          <input
            className={my_input_class}
            value={formInputs.from}
            onChange={handleFromChange}
            type="text"
            name="from"
            id="from"
            required
          />
        </label>

        <label htmlFor="to">
          To:{" "}
          <input
            className={my_input_class}
            value={formInputs.to}
            onChange={handleToChange}
            type="text"
            name="to"
            id="to"
            required
          />
        </label>

        <label htmlFor="date">
          Date:{" "}
          <input
            className={my_input_class}
            value={formInputs.date}
            onChange={handleDateChange}
            min={new Date().toISOString().split("T")[0]}
            type="date"
            name="date"
            id="date"
            required
          />
        </label>

        <label htmlFor="time">
          Time:{" "}
          <input
            className={my_input_class}
            value={formInputs.time}
            onChange={handleTimeChange}
            type="time"
            name="time"
            id="time"
            required
          />
        </label>

        <label htmlFor="vehicle">
          Vehicle:{" "}
          <select
            className={my_input_class}
            value={formInputs.vehicle}
            onChange={handleVehicleChange}
            name="vehicle"
            id=""
          >
            <option value="cab">Cab</option>
            <option value="auto">Auto</option>
            <option value="bike">Bike</option>
          </select>
        </label>
        <button
          className="bg-black text-white font-semibold hover:bg-gray-200 hover:text-black rounded-sm p-3 hover:shadow-lg shadow-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RideForm;
