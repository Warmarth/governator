"use client";

import Displaydetails from "./Display";
import VoteCasting from "./votecasting";

const page = () => {
  return (
    <div className="h-screen w-full p-4">
      <h1>Ballot Box</h1>
      <p>Vote for your favorite candidate</p>
      <section className="flex gap-4">
        <Displaydetails />
        <VoteCasting />
      </section>
    </div>
  );
};

export default page;
