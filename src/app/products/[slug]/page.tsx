import LandingPageLayout from "@/components/layout/LandingPage/LandingPageLayout";
import DetailProduct from "@/components/views/DetailProduct/DetailProduct";
import React from "react";

const page = () => {
  return (
    <LandingPageLayout>
      <DetailProduct />
    </LandingPageLayout>
  );
};

export default page;
