
export default function Summary({ dataF, setDataF, setViewer, viewer }) {
    const updateHooks = () => {
        setDataF({});
        setViewer(0);
    }

  return (
    <div>
      <h1>Payment Summary:</h1>
      <h3>{dataF.fullName}</h3>
      <p>{dataF.email}</p>

      <p>{dataF.city}, {dataF.state} {dataF.zip}</p>

      <button onClick={updateHooks} className="btn btn-secondary">Submit</button>
    </div>
  );
}