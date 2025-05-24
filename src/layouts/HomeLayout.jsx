import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import LeftAside from '../homelayouts/LeftAside';
import RightSide from '../homelayouts/RightAside';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const HomeLayout = () => {
  return (
    <div className="bg-base-200 text-text">
      <header>
        <Navbar />
        <Banner />
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside />
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightSide />
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;