
function App() {
  const student = {
    name: "Soyal Khan",
    age: 26,
    Add: "Ghaziabad",
    phone: 7535964612,
  };

  return (
    <>
      <h1>Here the student details from HNB Garhwal Univercity !</h1>
      <p>Full Name : {student.name}</p>
      <p>Student Number : {student.phone}</p>
      <p>Student Age : {student.age}</p>
      <p>Student Address : {student.Add}</p>
    
    </>
  );
} 
export default App;
