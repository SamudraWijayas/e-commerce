import { Fragment, ReactNode } from "react";
import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";

interface PropTypes {
  children: ReactNode;
}

const LandingPageLayout = (props: PropTypes) => {
  const { children } = props;

  return (
    <Fragment>
      <Navbar />
      <div className="mt-6 ">{children}</div>
      <Footer />
    </Fragment>
  );
};

export default LandingPageLayout;
