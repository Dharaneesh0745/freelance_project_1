import { Meetings } from "@/sections";
import Head from "next/head";
import React from "react";

const meetings = () => {
  return (
    <>
      <Head>
        <title>Meetings | Learn with Doctors</title>
      </Head>
      <Meetings />
    </>
  );
};

export default meetings;
