import React from "react";

function Search(props:any){
	const selectClass=()=>{
		return props.skillData.map((data:any):React.ReactElement=><option key={data.name} value={data.name}>{data.name}</option>);
	};

	const handleClassChange=(event:any)=>{
		props.setViewingClass(event.target.value);
	}

	return (
		<div>
			<select name="class" defaultValue={props.viewingClass} onChange={handleClassChange}>
				{selectClass()}
			</select>
		</div>
	);
}

export default Search;