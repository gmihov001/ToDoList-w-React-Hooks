import React, { useState, useEffect } from "react";

export const ToDo = props => {
	const [myList, addToList] = useState([]);
	useEffect(() => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/georgi_todolist"
		)
			.then(response => response.json())
			.then(data => addToList(data)),
			[];
	});

	return (
		<div className="text-center mt-5">
			<h1>My ToDo List</h1>
			<p>
				<input
					type="textarea"
					onChange={e =>
						e.keyCode === 13 &&
						addToList.concat({ label: e.target.value, done: false })
					}
				/>
			</p>
			<a href="#" className="btn btn-success">
				Click to log entry
			</a>
			<div>
				<ul>
					{myList.map((task, index) => (
						<li key={index}>{task.label}</li>
					))}
				</ul>
			</div>
			<p>
				Made by <a href="http://www.4geeksacademy.com">Georgi</a>, with
				love!
			</p>
		</div>
	);
};
