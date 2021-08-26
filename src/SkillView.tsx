import React, { ReactElement } from "react";
import "./SkillView.css";

function SkillView(props:any){
	const view=(
		<table>
			<tr>
				<th colSpan={3} className="skill-name cell">{props.skill.skillName}</th>
			</tr>
			<tr>
				<td colSpan={1} className="three-col cell">タイミング:{props.skill.timing}</td>
				<td colSpan={1} className="three-col cell">判定:{props.skill.roll}</td>
				<td colSpan={1} className="three-col cell">対象:{props.skill.subject}</td>
			</tr>
			<tr className="three-col">
				<td colSpan={1} className="three-col cell">射程:{props.skill.range}</td>
				<td colSpan={1} className="three-col cell">コスト:{props.skill.cost}</td>
				<td colSpan={1} className="three-col cell">最大SL:{props.skill.maxSL}</td>
			</tr>
			<tr>
				<td colSpan={1} className="two-col cell">使用制限:{props.skill.useRestraint}</td>
				<td colSpan={2} className="two-col cell">取得制限:{props.skill.learnRestraint}</td>
			</tr>
			<tr>
				<td colSpan={3} className="effect cell">{props.skill.effect}</td>
			</tr>
		</table>
	);
	return view;
}

export default SkillView;