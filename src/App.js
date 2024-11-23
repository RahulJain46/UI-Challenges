import Counter from "./challenges/counter/counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Frontend Mini Challenges</h1>
      <div style={{display: "flex", flexDirection: 'row' , justifyContent:'space-around'}}>
         <div>
            <Counter />
         </div>
         <div>
            Counter
         </div>
         <div>
            Counter
         </div>
         <div>
            Counter
         </div>
      </div>
    </div>
  );
}
