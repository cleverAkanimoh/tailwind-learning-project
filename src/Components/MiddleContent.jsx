import { useState } from 'react';
// import SearchForm from "./SearchForm";
import AvailableWorks from "./availableWorks";
import data from "../Components/works";

export default function () {
  const [works, setWorks] = useState(data)
  return (
    <section>
      {/* <SearchForm /> */}
      <AvailableWorks works={works} />
    </section>
  )
}