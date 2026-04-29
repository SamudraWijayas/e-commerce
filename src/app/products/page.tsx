import LandingPageLayout from "@/components/layout/LandingPage/LandingPageLayout";
import Product from "@/components/views/Product/Product";
import React from "react";

const page = () => {
  return (
    <LandingPageLayout>
      <Product />
    </LandingPageLayout>
  );
};

export default page;
