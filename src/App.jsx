import Navbar from "./components/Navbar/Navbar";
import '../src/App.css'
import PriceOptions from "./components/PriceOption/PriceOptions";


export default function App() {
  return (
    <div className="container mx-auto">

      <Navbar />

      <h1 className="text-3xl font-bold underline mt-8">Welcome to Milestone</h1>

      <PriceOptions />

    </div>
  );
}
