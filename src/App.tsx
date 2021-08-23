import logo from "./logo.svg";
import "./App.css";
import { readdirSync } from 'fs';

function App() {
  const fileNames=readdirSync("./class_skills",{withFileTypes:true}).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
  console.log(fileNames);
  const skillData=fileNames.map((fileName)=>{
    return require(fileName);
  });
  console.log(skillData);
  return (
    <div className="App">
      <div className="Search_col"></div>
      <div className="Skill_col"></div>
    </div>
  );
}

export default App;
