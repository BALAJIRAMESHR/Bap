import Homepage from "./Home"
import Features from "./Features"
import Manage from "./Manage"
// import Courese from "./Courseflot"
import Joinfamily from "./Joinfamily"
// import Form from "./form"
import Footer from "./Fooder"

export default function Home() {
  return (
    <div>
      <Homepage />
      <Features />
      <Manage />
      {/* <Courese /> */}
      <Joinfamily />
            {/* <Form/> */}
     <Footer/>
    </div>
  );
}