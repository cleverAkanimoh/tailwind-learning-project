import { useState } from 'react';
import SearchForm from "./SearchForm";
import AvailableWorks from "./availableWorks";
import data from "./works";
import SwitchCareer from './switchCareer';

export default function () {
  const [works, setWorks] = useState(data)
  return (
    <section className='w-full grid place-items-center'>
      <div className='w-full p-2 sm:w-11/12 md:p-0 xl:w-10/12'>
        <SearchForm />
        <AvailableWorks works={works} />
        <SwitchCareer />
      </div>
    </section>
  )
}