import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function MyTrips() {
  const { data: session, status } = useSession();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    if (status === "authenticated") {
      axios
        .get("https://dry-tor-31695.herokuapp.com/form-data", {
          params: { email: session.user.email },
        })
        .then((res) => {
          setTrips(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [status, session]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <h1 className=" font-bold text-center text-3xl">Access Denied</h1>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Upcoming Trips For {session.user.name}</h1>
      {trips.map((trip) => (
        <div
          className="flex flex-col text-left items-center mb-2"
          key={uuidv4()}
        >
          <p>_id: {trip._id}</p>
          <p>Name: {trip.name}</p>
          <p>Phone: {trip.phone}</p>
          <p>From: {trip.from}</p>
          <p>To: {trip.to}</p>
          <p>Date: {trip.date.slice(0, 10)}</p>
          <p>Time: {trip.time}</p>
          <p>Vehicle: {trip.vehicle}</p>
          <hr className="w-screen text-black" />
        </div>
      ))}
    </div>
  );
}

export default MyTrips;
