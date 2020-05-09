<template>
	<div id="container-404" @mousemove="move">
		<div class="content-404">
			<h1>404</h1>
			<blockquote class="blockquote">{{ getMsg() }}</blockquote>
			<p>
				{{ getExp() }}
			</p>
			<RouterLink to="/">
				Take Me Home.
			</RouterLink>
		</div>
	</div>
</template>

<script>
const msgs = [
	`Opps! Page not found`,
	`There's nothing here.`,
	`How did we get here?`,
	`That's a Four-Oh-Four.`,
	`Looks like we've got some broken links.`
];

const exps = [
	`404 not found，是HTTP对网页错误情况返回的一种状态码，当用户在浏览器中输入网址时，服务器会根据输入的地址判断是否有对应的网页信息，如果没有对应信息，说明用户输入的可能是一串无效的链接，服务器就会向用户返回404 not found状态码，告诉用户没有找到对应的网页信息。`,
	`HTTP 404或Not Found错误消息是HTTP的其中一种“标准回应消息” （HTTP状态码），此消息代表客户端在浏览网页时，服务器无法正常提供消息，或是服务器无法回应且不知原因。通常是因为用户所访问的对应网页已被删除、移动或从未存在。404也是互联网上最常见的错误之一。`,
	`通俗来讲，其实404 not found就代表一个404页面，当用户在浏览网页的时候，由于 服务器无法正常提供信息，或者是服务器无法回应，且不知道原因而返回的错误页面。目的是告诉搜索引 擎该页面不存在，不再让搜索引擎爬虫去继续访问这个页面了。`,
	`404 not found是一种标准的HTTP返回代码，当用户输入一个链接时，服务器上的IIS(Internet信息服务)会首先检测用户输入的地址链接是否有对应的网页信息，如果没有对应的网页信息，说明用户输入的是一串无效的链接，这时IIS就会通过服务器向终端用户发送404错误代码页提示，告诉用户找不到与该地址链接对应的网页信息。`
];

export default {
	methods: {
		getMsg() {
			return msgs[Math.floor(Math.random() * msgs.length)];
		},

		getExp() {
			return exps[Math.floor(Math.random() * exps.length)];
		},

		move() {
			const container = document.getElementById("container-404");
			// 窗口的鼠标移动事件,传入event对象
			window.onmousemove = function(e) {
				// 返回被触发时的鼠标X，Y位置
				let x = e.clientX / 5;
				let y = e.clientY / 5;
				// 将容器的背景图片定位进行修改
				container.style.backgroundPositionX = x + "px";
				container.style.backgroundPositionY = y + "px";
			};
		}
	}
};
</script>

<style lang="stylus" scoped>
#container-404 {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: url('/p404.png'), #151729;
	box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);

	.content-404 {
		max-width: 600px;
		text-align: center;

		.blockquote {
			text-align: left;
		}

		h1 {
			margin: 0;
			font-size: 18vw;
			color: #fff;
			line-height: 1em;
		}

		h4 {
			position: relative;
			font-size: 1.5em;
			margin-bottom: 20px;
			color: #111;
			background: #fff;
			font-weight: 300;
			padding: 10px 20px;
			display: inline-block;
		}

		p {
			color: #fff;
			font-size: 1.2em;
			text-align: left;
		}

		a {
			position: relative;
			display: inline-block;
			padding: 10px 25px;
			background: #ff0562;
			color: #fff;
			text-decoration: none;
			margin-top: 25px;
			border-radius: 25px;
			border-bottom: 4px solid #d00d56; /* 下边框 */
			user-select: none;
		}
	}
}
</style>
