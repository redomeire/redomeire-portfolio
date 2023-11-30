import Head from "next/head";
import React from "react";

import Hero from "@/components/pages/sections/landing-page/Hero";
import Service from "@/components/pages/sections/landing-page/Service";

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome to my website!</title>
      </Head>
      <Hero />
      <Service />
    </>
  );
};

export default Home;
