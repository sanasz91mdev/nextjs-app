import styled from "styled-components";

const Placeholder = styled.div`
	margin-top: 25vh;
	text-align: center;
	font-family: Arial, Helvetica, sans-serif;
	img {
		width: 100px;
	}
	h1 {
		color: #4a566e;
	}
`;

function Index() {
	return (
		<Placeholder>
			<img src="https://cdn-images-1.medium.com/max/222/1*CAL6MRkz-KF6U2oZY4JWJg@2x.png" />
			<h1>Woo-hoo you've created</h1>
			<h1> your first Next.js app 🎉</h1>
		</Placeholder>
	);
}

export default Index;