import { useState } from 'react';
// import SearchForm from "./SearchForm";
// import AvailableWorks from "./availableWorks";
import data from "./works";
import SwitchCareer from './switchCareer';

export default function () {
  const [works, setWorks] = useState(data)
  return (
    <section className='w-full grid place-items-center'>
      <div className='w-11/12'>
        {/* <SearchForm />
      <AvailableWorks works={works} /> */}
        <SwitchCareer />
      </div>
    </section>
  )
}