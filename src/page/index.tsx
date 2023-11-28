import React from "react";
import { HomeContainer } from "../components/container/homeContainer";
import { AboutContainer } from "../components/container/aboultContainer";
import { ListContainer } from "../components/container/listContainer";
import { ChartContainer } from "../components/container/chartContainer";
import { FooterContainer } from "../components/container/footerContainer";

export const LandingPage: React.FC = () => {
  return (
    <>
      <HomeContainer/>
      <AboutContainer/>
      <ListContainer/>
      <ChartContainer/>
      <FooterContainer/>
    </>
  );
};
