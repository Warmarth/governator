"use client";
import { HomeFilter } from "./components/homeFilter";
import { HomeTracker, HomeVoteCard } from "./components/helper";
// import { useAccount } from "wagmi";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

const Home = () => {
  // const //
  //   { address, isConnected } = useAccount(),
  //   { push } = useRouter();
  // useEffect(() => {
  //   if (!(address, isConnected)) {
  //     push("/");
  //   }
  // }, [address, isConnected, push]);
  return (
    <div className=" space-y-3 gap-y-4 m-auto flex items-start justify-center flex-col">
      <div className="lg:w-5/6 space-y-3">
        <HomeFilter />
        <div className="text-left">
          <section className=" space-y-4 py-3  transition">
            <div className=" hover:border-b-2 shadow-md rounded-lg hover:bg-slate-500 bg-[url('/Frame.svg')]  ">
              <HomeTracker tracker={true} />
              <HomeVoteCard trend={true} />
            </div>
            <div className=" hover:border-b-2 shadow-md rounded-lg hover:bg-slate-500 bg-[url('/Frame.svg')]  ">
              <HomeTracker tracker={false} />
              <HomeVoteCard trend={false} />
            </div>
            <div className=" hover:border-b-2 shadow-md rounded-lg hover:bg-slate-500 bg-[url('/Frame.svg')] ">
              <HomeTracker tracker={null} />
              <HomeVoteCard trend={true} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
