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
	};

	const selectClass=():React.ReactElement[]=>{
		return Object.values(props.skillData).map((data:skill|any):React.ReactElement=><option key={data.name} value={data.name}>{data.name}</option>);
	};

	const handleClassChange=(event: React.ChangeEvent<HTMLSelectElement>):void=>{
		props.setViewingClass(event.target.value);
	};

	const SearchSkillDetail=(name:string):React.ReactElement[]=>{
		const array:string[]=props.skillData[props.viewingClass].skills.map((data:any):string=>data[name]);
		const res=new Set(array);
		const settedArray:string[]=Array.from(res);
		return settedArray.map((value:string):React.ReactElement=><option key={value} value={value}>{value}</option>);
	};

	const SearchClass:React.VFC=():React.ReactElement=>{
		return (
			<div>
				<h2>クラス</h2>
				<select className="selectClass" name="selectClass" defaultValue={props.viewingClass} onChange={handleClassChange}>
					{selectClass()}
				</select>
			</div>
		);
	};

	const SearchSkillKinds=(props:any)=>{
		
	}

	return (
		<div>
			<SearchClass/>
		</div>
	);
}

export default Search;