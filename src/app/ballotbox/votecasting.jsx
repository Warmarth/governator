const VoteCasting = () => {
  return (
    <div>
      <h1>Vote Casting </h1>
      <p>Cast your vote for your favorite candidate</p>

      <form action="">
        <label htmlFor="candidate">Select your candidate</label>
        <select name="candidate" id="candidate">
          <option value="1">Candidate 1</option>
          <option value="2">Candidate 2</option>
          <option value="3">Candidate 3</option>
        </select>

        <button type="submit">Cast Vote</button>
      </form>
    </div>
  );
};

export default VoteCasting;
