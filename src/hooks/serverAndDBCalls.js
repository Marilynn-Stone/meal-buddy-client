import { useState, useEffect } from "react";
import axios from 'axios';
// import { remainingSpots } from "helpers/remainingSpots";

export default function serverAndDBCalls() {

  function login(email, password) { {
    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => {
        const appointment = {
          ...state.appointments[id],
          interview: { ...interview }
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment
        };
        const days = newDays(id, appointments);
        setState(prev => ({ ...prev, appointments, days }));
      })
  }

  // cancels interview through API call to server and updates application state to reflect server details.
  const cancelInterview = function (id) {
    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        const appointment = {
          ...state.appointments[id],
          interview: null
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment
        };
        const days = newDays(id, appointments);
        setState(prev => ({ ...prev, appointments, days }))
      })
  }

  return { login }

}