/* eslint-disable react/prop-types */
const Filter = ({ searchName, handleSearchNameChange }) => (
  <div>
    filter shown with
    <input value={searchName} onChange={handleSearchNameChange} />
  </div>
);

export default Filter;
