import LandingPageLayout from "@/components/layout/LandingPage/LandingPageLayout";
import Product from "@/components/views/Product/Product";
import React, { Suspense } from "react";

const page = () => {
  return (
    <LandingPageLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Product />
      </Suspense>
    </LandingPageLayout>
  );
};

export default page;
