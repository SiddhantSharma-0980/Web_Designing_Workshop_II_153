import Student from "./Components/Student";
function App() {
return (
<div>
  <h1>Student Information</h1>
  <Student
    name="Siddhant Saxena"
    course="Computer Science"
    marks="92" />
  <Student
    name="Aman Jha"
    course="MBBS"
    marks="96" />
  <Student
    name="Arjun Choudhary"
    course="Mechanical"
    marks="87" />
  <br /><br /><br /><br />
  <p>Siddhant Saxena<br />CSE-21</p>
</div>
);
}
export default App;