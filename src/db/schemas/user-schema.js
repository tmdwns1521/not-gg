import { Schema } from 'mongoose';

const UserSchema = new Schema(
	{
		id: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		summonerName: {
			type: String,
			required: false,
		},
		role: {
			type: String,
			required: false,
			default: 'basic-user',
		},
		profileIconURL: {
			// profileIcon -> https://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/6.png
			type: String,
		},
		summonerLevel: {
			type: Number,
		},
		matchIdList: [
			{
				type: String,
				required: false,
				default: 'before fetch',
			},
		],
		loginMethod: {
			type: String,
			default: 'basic', // basic / kakao(카카오 로그인) / google(구글 로그인)
		},
	},
	{
		collection: 'users',
		timestamps: true,
	},
);

export { UserSchema };
