import React, { useState, useEffect } from "react";

export const ToDo = props => {
	const [myList, addToList] = useState([]);

	useEffect(
		() =>
			fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/georgi_todolist"
			)
				.then(response => response.json())
				.then(data => addToList(data)),
		[]
	);

	const sendToApi = () => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/georgi_todolist",
			{
				method: "put",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(myList)
			}
		)
			.then(response => response.json())
			.then(data => addToList(data));
	};

	return (
		<div className="text-center mt-5">
			<h1>My ToDo List</h1>
			<p>
				<input
					onKeyUp={e =>
						e.keyCode === 13 &&
						addToList(
							myList.concat({
								label: e.target.value,
								done: false
							})
						)
					}
				/>
			</p>
			<button className="btn btn-success" onClick={sendToApi}>
				Click to log entry
			</button>
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
