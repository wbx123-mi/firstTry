import React, { useState } from "react";
import axios from "axios";
import PubSub from "pubsub-js";
export default function StateHook() {
	const [data, func] = useState([]);
	const getData = () => {
		axios.get("http://localhost:3000/api/students").then(
			(res) => {
				func(res.data);
				PubSub.publish("getmessage", res.data); //发布消息
			},
			(error) => {
				console.log(error);
			}
		);
	};
	return (
		<>
			<ul>
				{data.map((item) => {
					return (
						<li key={item.id}>{"姓名：" + item.name + "年龄：" + item.age}</li>
					);
				})}
			</ul>
			<button onClick={getData}>点击获取数据</button>
		</>
	);
}
