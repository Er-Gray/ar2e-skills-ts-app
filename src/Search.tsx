import React from "react";
import "./Search.css";

function Search(props:any):React.ReactElement{
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

	const selectClass=()=>{
		return Object.values(props.skillData).map((data:skill|any):React.ReactElement=><option key={data.name} value={data.name}>{data.name}</option>);
	};

	const handleClassChange=(event:any)=>{
		props.setViewingClass(event.target.value);
	}

	return (
		<div>
			<h2>クラス</h2>
			<select className="selectClass" name="selectClass" defaultValue={props.viewingClass} onChange={handleClassChange}>
				{selectClass()}
			</select>
		</div>
	);
}

export default Search;