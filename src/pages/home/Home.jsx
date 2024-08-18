import React from 'react'
import Banner from '../../components/Banner';
import Categories from '../../components/Categories/Categories';
import JustForYou from '../../components/JustForYou';

const Home = () => {
  return (
    <div className="space-y-20 dark:text-gray-100">
      <Banner />
      <Categories/>
      <JustForYou/>

    </div>
  );
}

export default Home