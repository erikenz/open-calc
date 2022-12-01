import classnames from "classnames";
import styled from "styled-components";
interface BurgerProps {
	children?: React.ReactNode;
	cn?: string;
}
export default function Burger({ children, cn, ...props }: BurgerProps) {
	return (
		<div>
			<svg viewBox="0 0 100 80" width="40" height="40">
				<rect width="100" height="20"></rect>
				<rect y="30" width="100" height="20"></rect>
				<rect y="60" width="100" height="20"></rect>
			</svg>
		</div>
	);
	return <div className={classnames("", { [`${cn}`]: cn })} {...props} />;
}
// const BurgerIcon = styled.button`
// 	.open span:nth-child(1) {
// 		animation: ease 0.3s top-in forwards;
// 	}

// 	.open span:nth-child(2) {
// 		animation: ease 0.3s mid-in forwards;
// 	}

// 	.open span:nth-child(3) {
// 		animation: ease 0.3s bot-in forwards;
// 	}

// 	.closed span:nth-child(1) {
// 		animation: ease 0.3s top-out forwards;
// 	}

// 	.closed span:nth-child(2) {
// 		animation: ease 0.3s mid-out forwards;
// 	}

// 	.closed span:nth-child(3) {
// 		animation: ease 0.3s bot-out forwards;
// 	}
// 	@keyframes top-in {
// 		0% {
// 			top: 0;
// 			transform: translateY(0%) rotate(0);
// 		}
// 		50% {
// 			top: 50%;
// 			transform: translateY(-50%) rotate(0);
// 		}
// 		100% {
// 			top: 50%;
// 			transform: translateY(-50%) rotate(45deg);
// 		}
// 	}
// 	@keyframes top-out {
// 		0% {
// 			top: 50%;
// 			transform: translateY(-50%) rotate(45deg);
// 		}
// 		50% {
// 			top: 50%;
// 			transform: translateY(-50%) rotate(0);
// 		}
// 		100% {
// 			top: 0;
// 			transform: translateY(0%) rotate(0);
// 		}
// 	}
// 	@keyframes bot-in {
// 		0% {
// 			top: 100%;
// 			transform: translateY(-100%) rotate(0);
// 		}
// 		50% {
// 			top: 50%;
// 			transform: translateY(-50%) rotate(0);
// 		}
// 		100% {
// 			top: 50%;
// 			transform: translateY(-50%) rotate(-45deg);
// 		}
// 	}
// 	@keyframes bot-out {
// 		0% {
// 			top: 50%;
// 			transform: translateY(-50%) rotate(-45deg);
// 		}
// 		50% {
// 			top: 50%;
// 			transform: translateY(-50%) rotate(0);
// 		}
// 		100% {
// 			top: 100%;
// 			transform: translateY(-100%) rotate(0);
// 		}
// 	}
// 	@keyframes mid-in {
// 		100% {
// 			top: 50%;
// 			transform: translateY(-50%) scale(0);
// 		}
// 	}
// 	@keyframes mid-out {
// 		0% {
// 			top: 50%;
// 			transform: translateY(-50%) scale(0);
// 		}
// 		50% {
// 			top: 50%;
// 			transform: translateY(-50%) scale(1);
// 		}
// 		100% {
// 			top: 50%;
// 			transform: translateY(-50%) scale(1);
// 		}
// 	}
// `;
