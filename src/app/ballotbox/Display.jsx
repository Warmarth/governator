const Displaydetails = () => {
  const votes = [
    {
      id: 1,
      title: "Vote for your favorite candidate",
      description: "Vote for your favorite candidate",
      votes: 100,
    },
  ];

  return (
    <section className="flex flex-col w-2/3 gap-4">
      {votes.map((vote) => (
        <article key={vote.id} className="border p-4 rounded-lg">
          <h3 className="text-xl font-bold">{vote.title}</h3>
          <p className="text-gray-500">{vote.description}</p>
          <p className="text-green-500">Votes: {vote.votes}</p>
        </article>
      ))}
    </section>
  );
};

export default Displaydetails;
