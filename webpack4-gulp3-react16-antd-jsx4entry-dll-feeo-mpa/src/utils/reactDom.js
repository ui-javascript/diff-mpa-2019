import React from "react";
import { render } from "react-dom";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default Component => {
  render(
    <>
      <PageHeader />
      {Component}
      <PageFooter />
    </>,
    document.getElementById("root")
  );
};
