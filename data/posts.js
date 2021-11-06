import users from './users';

export const POSTS = [
	{
		imageUrl: 'https://picsum.photos/800?random=1',
		user: users[0].user,
		likes: 789,
		caption: 'Salut les blaireaux de ouf',
		profile_picture: users[0].image,
		comments: [
			{ user: 'Superman', comment: "C'est trop de la boulette" },
			{ user: 'Patoche', comment: 'Je réflechis la nuit comme un taré' },
		],
	},
	{
		imageUrl: 'https://picsum.photos/800?random=2',
		user: users[1].user,
		likes: 788559,
		caption: 'Il fait beau et chaud',
		profile_picture: users[1].image,
		comments: [
			{ user: 'Supergril', comment: 'Je suis en chaleur' },
			{ user: 'Babette', comment: 'Je dors la nuit' },
		],
	},
	{
		imageUrl: 'https://picsum.photos/800?random=3',
		user: users[2].user,
		likes: 9,
		caption: 'Salut les blaireaux de ouf',
		profile_picture: users[2].image,
		comments: [
			{ user: 'Superman', comment: "C'est trop de la boulette" },
			{ user: 'Patoche', comment: 'Je réflechis la nuit comme un taré' },
		],
	},
	{
		imageUrl: 'https://picsum.photos/800?random=4',
		user: users[3].user,
		likes: 785449,
		caption: 'Salut les blaireaux de ouf',
		profile_picture: users[3].image,
		comments: [
			{ user: 'Superman', comment: "C'est trop de la choucroutte" },
			{ user: 'Patoche', comment: 'Je réflechis la nuit comme un bébé' },
		],
	},
	{
		imageUrl: 'https://picsum.photos/800?random=5',
		user: users[4].user,
		likes: 1,
		caption: 'Salut les blaireaux de ouf',
		profile_picture: users[4].image,
		comments: [
			{ user: 'Superman', comment: "C'est trop de la boulette" },
			{ user: 'Patoche', comment: 'Je réflechis la nuit comme un taré' },
		],
	},
	{
		imageUrl: 'https://picsum.photos/800?random=6',
		user: users[5].user,
		likes: 0,
		caption: 'Salut les blaireaux de ouf',
		profile_picture: users[5].image,
		comments: [
			{ user: 'Superman', comment: "C'est trop de la boulette" },
			{ user: 'Patoche', comment: 'Je réflechis la nuit comme un taré' },
		],
	},
];
