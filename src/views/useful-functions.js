// 문자열+숫자로 이루어진 랜덤 5글자 반환
export const randomId = () => {
	return Math.random().toString(36).substring(2, 7);
};

// 이메일 형식인지 확인 (true 혹은 false 반환)
export const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		);
};

// 숫자에 쉼표를 추가함. (10000 -> 10,000)
export const addCommas = (n) => {
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// 13,000원, 2개 등의 문자열에서 쉼표, 글자 등 제외 후 숫자만 뺴냄
// 예시: 13,000원 -> 13000, 20,000개 -> 20000
export const convertToNumber = (string) => {
	return parseInt(string.replace(/(,|개|원)/g, ''));
};

// ms만큼 기다리게 함.
export const wait = (ms) => {
	return new Promise((r) => setTimeout(r, ms));
};

//날짜 계산(몇일전, 몇시간전, 몇분전, ...)
export const timeForToday = (value) => {
	const today = new Date();
	const timeValue = new Date(value);

	const betweenTime = Math.floor(
		(today.getTime() - timeValue.getTime()) / 1000 / 60,
	);
	if (betweenTime < 1) return '방금전';
	if (betweenTime < 60) {
		return `${betweenTime}분전`;
	}

	const betweenTimeHour = Math.floor(betweenTime / 60);
	if (betweenTimeHour < 24) {
		return `${betweenTimeHour}시간전`;
	}

	const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
	if (betweenTimeDay < 365) {
		return `${betweenTimeDay}일전`;
	}

	return `${Math.floor(betweenTimeDay / 365)}년전`;
};

// TOP -> 탑 으로 변경해주는 함수
export const makePositionKR = (position) => {
	const positionKR = {
		TOP: '탑',
		JUNGLE: '정글',
		MIDDLE: '미드',
		BOTTOM: '원딜',
		UTIL: '서폿',
	};
	return positionKR[position];
};

// GOLD -> 골드 로 변경해주는 함수
export const makeTierKR = (tier) => {
	const tierKR = {
		IRON: '아이언',
		BRONZE: '브론즈',
		SILVER: '실버',
		GOLD: '골드',
		PLATINUM: '플래티넘',
		DIAMOND: '다이아',
		MASTER: '마스터',
		GRANDMASTER: '그마',
		CHALLENGER: '챌린저',
	};
	return tierKR[tier];
};
