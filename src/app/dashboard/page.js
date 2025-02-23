import Image from "next/image";
import Card from "./components/userCard";
const Dashboard = () => {
  const user = {
    imageUrl: "/Frame91.svg",
    username: "John Doe",
    id: "12345",
    kycStatus: "Verified",
  };

  const copyText = (id) => {
    window.navigator.clipboard.writeText(id);
  };

  return (
    <div>
      <div className="flex justify-between items-start text-left pt-3">
        <div>
          <section className="space-y-5">
            <Card user={user} />
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
