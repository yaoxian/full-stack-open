/* eslint-disable react/prop-types */
const Header = ({ course }) => <h2>{course}</h2>;

const Total = ({ sum }) => (
  <p>
    <strong>total of {sum} exercises</strong>
  </p>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  const total = parts.reduce((acc, cur) => {
    return acc + cur.exercises;
  }, 0);

  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total sum={total} />
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </>
  );
};

export default Course;
