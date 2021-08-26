import "./App.css";
import SkillView from "./SkillView";
import Search from "./Search";
import React, { useEffect, useState } from "react";

function App():React.ReactElement {
  interface skill{
		skillName:string;
		timing:string;
		roll:string;
		subject:string;
		range:string;
		cost:string;
		maxSL:string;
		critical:string;
		useRestraint:string;
		learnRestraint:string;
		effect:string;
	}
  const skillData=require("./class_skills/Skills.json");
  const [viewingClass,setViewingClass]=useState<string>("ウォーリア");
  const [viewingSkills,setViewingSkills]=useState<skill[]>([]);
  useEffect(()=>setViewingSkills(skillData[viewingClass].skills),[viewingClass,skillData]);
  console.log(viewingSkills);

  return (
    <div className="App">
      <div className="Search_col">
        <Search
          skillData={skillData}
          viewingClass={viewingClass}
          setViewingClass={setViewingClass}
        />
      </div>
      <div className="Skill_col">{viewingSkills.map((skill)=><SkillView skill={skill}/>)}</div>
    </div>
  );
}

export default App;
