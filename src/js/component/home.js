import React, { useState, useEffect } from "react";

export const ToDo = props => {
	const [myList, setMyList] = useState([]);

	useEffect(() => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/georgi_todolist"
		)
			.then(response => response.json())
			.then(data => setMyList(data))
			.catch(err => console.log("There was the following error: ", err));
	}, []);

	const sendToApi = e => {
		e.preventDefault;
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/georgi_todolist",
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(myList)
			}
		)
			.then(response => response.json())
			.then(jsonified => {
				console.log(jsonified);
				fetch(
					"https://assets.breatheco.de/apis/fake/todos/user/georgi_todolist"
				)
					.then(response => response.json())
					.then(data => setMyList(data))
					.catch(err =>
						console.log("There was the following error: ", err)
					);
			})
			.catch(err => console.log("There was the following error: ", err));
	};

	console.log(myList);

	return (
		<div className="text-center mt-5">
			<h1>My ToDo List</h1>
			<p>
				<input
					onKeyUp={e =>
						e.keyCode === 13 &&
						setMyList(
							myList.concat({
								label: e.target.value,
								done: false
							})
						)
					}
				/>
			</p>
			<button
				type="text"
				className="btn btn-success"
				onClick={e => sendToApi(e)}>
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
