import Homepage from "./components/Home"
import Features from "./components/Features"
import Manage from "./components/Manage"
import Courese from "./components/Courseflot"
import Joinfamily from "./components/Joinfamily"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div>
      <Homepage />
      <Features />
      <Manage />
      <Courese />
      <Joinfamily />
      <Contact />
    </div>
  );
}