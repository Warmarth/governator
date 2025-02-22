import Image from "next/image";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-start text-left pt-3">
        <div>
          <section className="space-y-5">
            <Image src={"/Frame15.svg"} width={500} height={300} />
            <div className="flex items-start gap-2 justify-start">
              <Image src={"/Frame92.svg"} width={100} height={100} />
              <Image src={"/Frame93.svg"} width={100} height={100} />
            </div>
          </section>
        </div>
        <div>
          <section className="space-y-3 border border-3 h-[30rem] p-2">
            <Image src={"/Frame25.svg"} width={250} height={250} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
