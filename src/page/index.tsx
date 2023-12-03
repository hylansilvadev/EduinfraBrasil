import React from "react";
import { HomeContainer } from "../components/container/homeContainer";
import { AboutContainer } from "../components/container/aboultContainer";
import { ListContainer } from "../components/container/listContainer";
import { MapContainer } from "../components/container/mapContainer";
import { FooterContainer } from "../components/container/footerContainer";
import { ChartContainer } from "../components/container/chartContainer";

export const LandingPage: React.FC = () => {
  return (
    <>
      <HomeContainer/>
      <AboutContainer/>
      <ListContainer/>
      <MapContainer/>
      <ChartContainer/>
      <FooterContainer/>
    </>
  );
};
