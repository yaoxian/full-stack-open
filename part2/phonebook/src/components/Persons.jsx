/* eslint-disable react/prop-types */
import phonebook from "../services/phonebook";

const Persons = ({ persons, setPersons, setSuccess, setMessage }) => {
  const deletePerson = (name, id) => {
    if (window.confirm(`Delete ${name} ?`)) {
      phonebook.remove(id).then((response) => {
        if (response !== null) {
          setPersons(persons.filter((p) => p.id !== id));
        } else {
          setSuccess(false);
          setMessage(
            `Information of ${name} has already been removed from server`
          );
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        }
      });
    }
  };

  return (
    <div>
      {persons.map((p) => (
        <div key={p.id} style={{ display: "flex", alignItems: "center" }}>
          <p style={{ margin: "0 10px 0 0" }}>
            {p.name} {p.number}
          </p>
          <button onClick={() => deletePerson(p.name, p.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
