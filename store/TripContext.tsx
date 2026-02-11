import { mockTrip } from "@/data/mockTrip";
import { Trip } from "@/types/trip";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface TripContextValue {
  trip: Trip;
  updateTrip: (trip: Trip) => void;
}

const TripContext = createContext<TripContextValue | undefined>(undefined);

export const TripProvider = ({ children }: { children: ReactNode }) => {
  const [trip, setTrip] = useState<Trip>(mockTrip);

  const updateTrip = (newTrip: Trip) => setTrip(newTrip);

  return (
    <TripContext.Provider value={{ trip, updateTrip }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTrip = (): TripContextValue => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error("useTrip must be used within a TripProvider");
  }
  return context;
};
