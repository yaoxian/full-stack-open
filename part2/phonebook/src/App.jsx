/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import phonebook from "./services/phonebook";
import Notification from "./components/Notification";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [message, setMessage] = useState(null);
  const [success, setSuccess] = useState(true);

  useEffect(() => {
    phonebook.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const updatedPerson = { ...existingPerson, number: newNumber };
        phonebook
          .update(existingPerson.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== returnedPerson.id ? person : returnedPerson
              )
            );
            setNewName("");
            setNewNumber("");
            setSuccess(true);
            setMessage(`Changed ${updatedPerson.name}'s Number`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          });
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: (persons.length + 1).toString(),
      };

      phonebook.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        setSuccess(true);
        setMessage(`Added ${returnedPerson.name}`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
    }
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} success={success} />
      <Filter
        searchName={searchName}
        handleSearchNameChange={handleSearchNameChange}
      />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={filteredPersons}
        setPersons={setPersons}
        setSuccess={setSuccess}
        setMessage={setMessage}
      />
    </div>
  );
};

export default App;
