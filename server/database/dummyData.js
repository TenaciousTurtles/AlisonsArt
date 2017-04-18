// USERS
// **********************************************
const users = [
	{
		id: 1,
		password: 'a',
		username: 'winston',
		email: 'winston@gmail.com',
		first_name: 'Winston',
		last_name: 'Ku',
		type: 'artist',
		address: '944 Market St.',
	},
	{
		id: 2,
		password: 'a',
		username: 'alison',
		email: 'alison@gmail.com',
		first_name: 'Alison',
		last_name: 'Zhang',
		type: 'artist',
		address: '42 Wallaby Way',
	},
	{
		id: 3,
		password: 'a',
		username: 'anthony',
		email: 'anthony@gmail.com',
		first_name: 'Anthony',
		last_name: 'Bianco',
		type: 'user',
		address: '611 Mission St.',
	},
	{
		id: 4,
		password: 'a',
		username: 'bryan',
		email: 'bryan@gmail.com',
		first_name: 'Bryan',
		last_name: 'Nguyen',
		type: 'user',
		address: '666 Bluejay Way',
	}
];
//profiles:
//******************************
const profiles = [
	{
		id: 1,
		user_id: 1,
		profile: 'im no.1 talented!',
		fb_link: 'https://www.facebook.com/xueying.zhang.509',
		twitter_link: 'https://twitter.com/Alison_XYZ?lang=en',
		inst_link: 'https://www.instagram.com/alisonzthu/'
	},
	{
		id: 2,
		user_id: 2,
		profile: 'im no.2 talented!',
		fb_link: 'https://www.facebook.com/xueying.zhang.509',
		twitter_link: null,
		inst_link: 'https://www.instagram.com/alisonzthu/'
	}
];

//notifications:
//******************************
const notifications= [
	{
		id: 1,
		owner_id: 2,
		trigger_id: 2,
		type: 'auction',
		text: 'woohoo you won an auction',
		read: false,
		date: '2017-04-14 14:27:07',
	},
	{
		id: 2,
		owner_id: 2,
		trigger_id: null,
		type: 'fun',
		text: 'woohoo we messaged you for fun',
		read: false,
		date: '2017-03-14 14:27:07',
	},
	{
		id: 3,
		owner_id: 2,
		trigger_id: null,
		type: 'fun',
		text: 'woohoo we messaged you for fun twice',
		read: false,
		date: '2017-03-14 15:27:07',
	},
	{
		id: 4,
		owner_id: 2,
		trigger_id: null,
		type: 'fun',
		text: 'woohoo we messaged you for fun third times the charm',
		read: false,
		date: '2017-03-14 16:27:07',
	}
];

// ARTWORKS
// *****************************
const artworks = [
	{
		id: 1,
		artist_id: 1,
		age: '1801\'s',
		estimated_price: 10001,
		art_name: 'Some flowers (1)',
		description: 'My name is Winston and I love flowers... A lot.',
		dimensions: '1200 x 538',
		image_url: 'https://s-media-cache-ak0.pinimg.com/originals/46/25/3b/46253b46982fe8f6e4094ce15f742c41.jpg',
	},
	{
		id: 2,
		artist_id: 1,
		age: '1802\'s',
		estimated_price: 15002,
		art_name: 'That\'s a Bridge (2)',
		description: 'I saw a bridge once, changed my life forever.',
		dimensions: '319 x 400',
		image_url: 'http://www.metmuseum.org/toah/images/h5/h5_29.100.113.jpg',
	},
	{
		id: 3,
		artist_id: 1,
		age: '1803\'s',
		estimated_price: 17803,
		art_name: 'Boats and Stuff at Dusk (3)',
		description: 'I rode in a boat once and got really sea sick. I am not a nautical person.',
		dimensions: '700 x 551',
		image_url: 'http://www.theartpostblog.com/wp-content/uploads/2016/05/monet-impressione-levar-del-sole.jpg',
	},
	{
		id: 4,
		artist_id: 1,
		age: '1804\'s',
		estimated_price: 11004,
		art_name: 'Some more flowers (4)',
		description: 'One time I was cooking and I mixed up flour with flower. That was a tasty macaroon.',
		dimensions: '800 x 609',
		image_url: 'http://www.artcyclopedia.org/art/claude-monet-lilies.jpg',
	},
	{
		id: 5,
		artist_id: 2,
		age: '1905\'s',
		estimated_price: 20005,
		art_name: 'Some lillies (5)',
		description: 'My name is Alison and I love lillies.',
		dimensions: '636 x 411',
		image_url: 'https://www.ibiblio.org/wm/paint/auth/monet/waterlilies/monet.wl-green.jpg',
	},
	{
		id: 6,
		artist_id: 2,
		age: '1906\'s',
		estimated_price: 16306,
		art_name: 'Poppies in Bloon (6)',
		description: 'I really wanted to see the super bloom this year but I missed it... again',
		dimensions: '900 x 674',
		image_url: 'http://www.claude-monet.com/images/paintings/poppies.jpg',
	},
	{
		id: 7,
		artist_id: 2,
		age: '1917\'s',
		estimated_price: 21007,
		art_name: 'Questionable Poppies (7)',
		description: 'Those are some precarious looking poppies',
		dimensions: '564 x 785',
		image_url: 'https://s-media-cache-ak0.pinimg.com/564x/ed/d0/0c/edd00c34430f2a627d443e92fc9c8627.jpg',
	},
	{
		id: 8,
		artist_id: 2,
		age: '1808\'s',
		estimated_price: 7808,
		art_name: 'Flowers in a Vase (8)',
		description: 'Those flowers are really in that vase. What\'s next? ' ,
		dimensions: '399 x 480',
		image_url: 'https://s-media-cache-ak0.pinimg.com/736x/95/d5/3b/95d53b6122ca5d4cfaaf1854e5092e87.jpg',
	},
	{
		id: 9,
		artist_id: 3,
		age: '1809\'s',
		estimated_price: 7809,
		art_name: 'Some Kind of Castle (9)',
		description: 'I think that looks like Venice or something.' ,
		dimensions: '399 x 480',
		image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Claude_Monet%2C_Le_Grand_Canal.jpg'
	},
	{
		id: 10,
		artist_id: 3,
		age: '1810\'s',
		estimated_price: 10010,
		art_name: 'Gothic(?) Castle (10)',
		description: 'I think that looks like Venice or something. Maybe the British Isles?' ,
		dimensions: '399 x 480',
		image_url: 'https://d32dm0rphc51dk.cloudfront.net/ZCMSLi6EifgkcwApfmE50w/larger.jpg'
	},
	{
		id: 11,
		artist_id: 3,
		age: '1811\'s',
		estimated_price: 10011,
		art_name: 'Ladies and the Ocean (11)',
		description: 'Got some lotions, got some potions, down by the ocean, got the three wheel motion',
		dimensions: '399 x 480',
		image_url: 'http://kingofwallpapers.com/monet/monet-001.jpg'
	},
	{
		id: 12,
		artist_id: 3,
		age: '1812\'s',
		estimated_price: 18012,
		art_name: 'Saturday in the Park (12)',
		description: 'I thought it was the Fourth of July',
		dimensions: '399 x 480',
		image_url: 'https://d32dm0rphc51dk.cloudfront.net/Z-uAiWOSzgyuTmg0Xsko3Q/larger.jpg'
	},
	{
		id: 13,
		artist_id: 3,
		age: '1813\'s',
		estimated_price: 18013,
		art_name: 'That is a Red Bush (13)',
		description: 'It looks like its by a river bank. Maybe.',
		dimensions: '399 x 480',
		image_url: 'https://s-media-cache-ak0.pinimg.com/originals/c1/f0/26/c1f0269023694d21a8786f928ec92072.jpg'
	},
	{
		id: 14,
		artist_id: 2,
		age: '1814\'s',
		estimated_price: 18014,
		art_name: 'A sea... arch? (14)',
		description: 'I saw one of these last time I was in Ensenada. I should figure out what these are called',
		dimensions: '399 x 480',
		image_url: 'https://cdn0.vox-cdn.com/thumbor/5ec3wGPmJ7JQtxGbJc68E9hrsoE=/0x73:800x523/1600x900/cdn0.vox-cdn.com/assets/3905027/800px-Monet_-_Sonnenaufgang_bei_Etretat.jpg'
	},
	{
		id: 15,
		artist_id: 2,
		age: '1815\'s',
		estimated_price: 18015,
		art_name: 'Poppies in a Plane (15)',
		description: 'I\'M TIRED OF THESE MOTHA LICKIN\n POPPIES ON MY MOTHA LICKIN\' PLANE',
		dimensions: '399 x 480',
		image_url: 'http://1.bp.blogspot.com/-ii9a2EoLT7A/VVIMzFF27fI/AAAAAAAEcR0/8jXHWFmJtWw/s1600/Claude%2BMonet%2BLetters%2BTutt%27Art%40%2B(53).jpg'
	},
	{
		id: 16,
		artist_id: 4,
		age: '1816\'s',
		estimated_price: 18016,
		art_name: 'A Tunnel of Plants (16)',
		description: 'I don\'t know what this is. I almost cut my ear off painting this.',
		dimensions: '399 x 480',
		image_url: 'https://s-media-cache-ak0.pinimg.com/originals/c0/db/0c/c0db0ccb6ca1d535a7cf5ea1f0698488.jpg'
	},
	{
		id: 17,
		artist_id: 4,
		age: '1817\'s',
		estimated_price: 18017,
		art_name: 'Water at Dusk (17)',
		description: 'It\'s getting late.',
		dimensions: '399 x 480',
		image_url: 'https://www.artfund.org/assets/what-to-see/exhibitions/2016/06/inspiring-impressionism/claude-monet-sunset-on-the-river-at-lavacourt-winter-effect-1880-2.jpg'
	},
	{
		id: 18,
		artist_id: 4,
		age: '1818\'s',
		estimated_price: 18018,
		art_name: 'Out in the Bush (18)',
		description: 'Look at all them flowers!',
		dimensions: '399 x 480',
		image_url: 'http://monet.staedelmuseum.de/en/images/modules/bigpicture/0c8f122e.04-Woman-Parasol-1400x1300.jpg'
	},
	{
		id: 19,
		artist_id: 4,
		age: '1819\'s',
		estimated_price: 18019,
		art_name: 'Some Trains (19)',
		description: 'I think its a train depot...',
		dimensions: '399 x 480',
		image_url: 'https://ka-perseus-images.s3.amazonaws.com/260f26184ff2db18867944d041b20ad1b6248c8c.jpg'
	},
	{
		id: 20,
		artist_id: 4,
		age: '1820\'s',
		estimated_price: 18020,
		art_name: 'Melting Clocks (20)',
		description: 'Time keeps on slipping... slipping... slipping... into the future',
		dimensions: '399 x 480',
		image_url: 'http://www.dalipaintings.com/images/paintings/the-persistence-of-memory.jpg'
	},
	{
		id: 21,
		artist_id: 4,
		age: '1821\'s',
		estimated_price: 18021,
		art_name: 'Plastic Surgery Disasters (21)',
		description: 'I love the Dead Kennedys.',
		dimensions: '399 x 480',
		image_url: 'http://illusion.scene360.com/wp-content/uploads/2015/11/salvador-dali-paintings-14.jpg'
	},
	{
		id: 22,
		artist_id: 3,
		age: '1822\'s',
		estimated_price: 18022,
		art_name: 'Tall Horse and Elephants (22)',
		description: 'That\'s no horse... THIS is a horse.',
		dimensions: '399 x 480',
		image_url: 'http://webneel.com/daily/sites/default/files/images/daily/09-2013/1-the-temptation-surreal-painting-by-salvador-dali.jpg'
	},
	{
		id: 23,
		artist_id: 1,
		age: '1823\'s',
		estimated_price: 18023,
		art_name: 'The Birth of Mane (23)',
		description: 'I\'m not a rapper.',
		dimensions: '399 x 480',
		image_url: 'http://www.museoreinasofia.es/sites/default/files/exposiciones/dali-03.jpg'
	},
	{
		id: 24,
		artist_id: 1,
		age: '1824\'s',
		estimated_price: 18024,
		art_name: 'Another Pirates Movie (24)',
		description: 'Now you\'re dissing Pirates? What\'s wrong with you people? People loved Pirates.',
		dimensions: '399 x 480',
		image_url: 'https://s-media-cache-ak0.pinimg.com/originals/0c/3d/e9/0c3de9736d897f535a19c11a04b51e1d.jpg'
	},
	{
		id: 25,
		artist_id: 1,
		age: '1825\'s',
		estimated_price: 18025,
		art_name: '2001: A Space Odyssey (25)',
		description: 'Monkeys banging stuff. I can\'t let you do that, Dave. Etc.',
		dimensions: '399 x 480',
		image_url: 'https://d32dm0rphc51dk.cloudfront.net/nUu8r2Fn3HnMHdbBfnN-Qw/larger.jpg'
	},
	{
		id: 26,
		artist_id: 1,
		age: '1826\'s',
		estimated_price: 18026,
		art_name: 'Sad Statue (26)',
		description: 'Lookin sad and all that good stuff.',
		dimensions: '399 x 480',
		image_url: 'https://s-media-cache-ak0.pinimg.com/originals/dc/70/45/dc704577ded6b77c063665bd97c95fad.jpg'
	},
	{
		id: 27,
		artist_id: 3,
		age: '1827\'s',
		estimated_price: 18027,
		art_name: 'Screwed Up Windmills (27)',
		description: 'We really screwed up the windmills this time.',
		dimensions: '399 x 480',
		image_url: 'https://s-media-cache-ak0.pinimg.com/originals/a9/72/6e/a9726e09d0e155fa5f810b2e82ccb508.jpg'
	},
	{
		id: 28,
		artist_id: 3,
		age: '1828\'s',
		estimated_price: 18028,
		art_name: 'Some Tasty Eggs (28)',
		description: 'These seem a bit beyond their prime. ',
		dimensions: '399 x 480',
		image_url: 'http://www.tate.org.uk/art/images/work/T/T02/T02343_10.jpg'
	},
	{
		id: 29,
		artist_id: 3,
		age: '1829\'s',
		estimated_price: 18029,
		art_name: 'Aquaman on a Tuesday (29)',
		description: 'He can talk to fish and stuff. How cool is that?',
		dimensions: '399 x 480',
		image_url: 'http://img3.etsystatic.com/000/0/6318777/il_fullxfull.270453411.jpg'
	},
	{
		id: 30,
		artist_id: 3,
		age: '1830\'s',
		estimated_price: 175030,
		art_name: 'Bold and Brashy (30)',
		description: 'The pioneers used to ride these bad boys for miles!',
		dimensions: '399 x 480',
		image_url: 'http://orig00.deviantart.net/3893/f/2014/271/e/8/bold_and_brash_by_berni11-d806iij.png'
	},
];

// AUCTIONS
// **********************************

const auctions = [
	{
		id: 1,
		owner_id: 1,
		artwork_id: 1,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-04-11 14:27:07',
		start_price: 10000,
		buyout_price: 30000,
		current_bid_id: 2,
		current_bid: 12500,
		bid_counter: 2,
	}, 
	{
		id: 2,
		owner_id: 1,
		artwork_id: 2,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-04-13 11:45:07',
		start_price: 10000,
		buyout_price: 30000,
		current_bid_id: 3,
		current_bid: 15000,
		bid_counter: 1,
	}, 
	{
		id: 3,
		owner_id: 1,
		artwork_id: 3,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-04-12 10:27:07',
		start_price: 12500,
		buyout_price: 35000,
		current_bid_id: 4,
		current_bid: 17000,
		bid_counter: 1,
	}, 
	{
		id: 4,
		owner_id: 1,
		artwork_id: 4,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-04-13 14:27:07',
		start_price: 9000,
		buyout_price: 27000,
		current_bid_id: 5,
		current_bid: 10000,
		bid_counter: 1,
	}, 
	{
		id: 5,
		owner_id: 2,
		artwork_id: 5,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-05-05 14:27:07',
		start_price: 17000,
		buyout_price: 35000,
		current_bid_id: null,
		current_bid: null,
		bid_counter: 0,
	}, 
	{
		id: 6,
		owner_id: 2,
		artwork_id: 6,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-05-05 14:27:07',
		start_price: 13000,
		buyout_price: 20000,
		current_bid_id: null,
		current_bid: null,
		bid_counter: 0,
	},
	{
		id: 7,
		owner_id: 3,
		artwork_id: 13,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-04-18 10:27:07',
		start_price: 13000,
		buyout_price: 20000,
		current_bid_id: 5,
		current_bid: 17000,
		bid_counter: 1,
	},	
	{
		id: 8,
		owner_id: 2,
		artwork_id: 14,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-04-18 10:27:07',
		start_price: 13000,
		buyout_price: 20000,
		current_bid_id: 6,
		current_bid: 17000,
		bid_counter: 1,
	},
	{
		id: 9,
		owner_id: 4,
		artwork_id: 16,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-04-18 10:27:07',
		start_price: 13000,
		buyout_price: 20000,
		current_bid_id: 7,
		current_bid: 17000,
		bid_counter: 1,
	},
	{
		id: 10,
		owner_id: 4,
		artwork_id: 17,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-05-05 10:27:07',
		start_price: 13000,
		buyout_price: 20000,
		current_bid_id: 8,
		current_bid: 17000,
		bid_counter: 1,
	},
	{
		id: 11,
		owner_id: 4,
		artwork_id: 18,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-05-05 10:27:07',
		start_price: 13000,
		buyout_price: 20000,
		current_bid_id: 9,
		current_bid: 17000,
		bid_counter: 1,
	},	
	{
		id: 12,
		owner_id: 4,
		artwork_id: 19,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-05-05 10:27:07',
		start_price: 13000,
		buyout_price: 20000,
		current_bid_id: 10,
		current_bid: 17000,
		bid_counter: 1,
	},
	{
		id: 13,
		owner_id: 4,
		artwork_id: 20,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-04-14 10:27:07',
		start_price: 13000,
		buyout_price: 20000,
		current_bid_id: 12,
		current_bid: 18000,
		bid_counter: 2,
	},	
	{
		id: 14,
		owner_id: 4,
		artwork_id: 21,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-04-15 10:27:07',
		start_price: 13000,
		buyout_price: 20000,
		current_bid_id: 14,
		current_bid: 18000,
		bid_counter: 2,
	},
	{
		id: 15,
		owner_id: 3,
		artwork_id: 22,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-04-16 10:27:07',
		start_price: 13000,
		buyout_price: 20000,
		current_bid_id: 16,
		current_bid: 18000,
		bid_counter: 2,
	},	
	{
		id: 16,
		owner_id: 2,
		artwork_id: 7,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-05-10 10:27:07',
		start_price: 13000,
		buyout_price: 20000,
		current_bid_id: 16,
		current_bid: 18000,
		bid_counter: 2,
	},	
	{
		id: 17,
		owner_id: 2,
		artwork_id: 8,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-05-10 10:27:07',
		start_price: 13000,
		buyout_price: 20000,
		current_bid_id: 16,
		current_bid: 18000,
		bid_counter: 2,
	},	
	{
		id: 18,
		owner_id: 3,
		artwork_id: 9,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-05-16 10:27:07',
		start_price: 13000,
		buyout_price: 20000,
		current_bid_id: 16,
		current_bid: 18000,
		bid_counter: 2,
	},	
	{
		id: 19,
		owner_id: 3,
		artwork_id: 10,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-05-16 10:27:07',
		start_price: 13000,
		buyout_price: 20000,
		current_bid_id: 16,
		current_bid: 18000,
		bid_counter: 2,
	},
	{
		id: 20,
		owner_id: 2,
		artwork_id: 11,
		start_date: '2017-04-09 14:27:07',
		end_date: '2017-05-16 10:27:07',
		start_price: 13000,
		buyout_price: 20000,
		current_bid_id: 16,
		current_bid: 18000,
		bid_counter: 2,
	},
];

// BIDS
// ******************************
const bids = [
	{
		id: 1,
		bidder_id: 3,
		auction_id: 1,
		bid_date: '2017-04-10 08:27:07',
		bid_price: 12000,
	},
	{
		id: 2,
		bidder_id: 4,
		auction_id: 1,
		bid_date: '2017-04-10 09:27:07',
		bid_price: 12500,
	},
	{
		id: 3,
		bidder_id: 3,
		auction_id: 2,
		bid_date: '2017-04-10 10:27:07',
		bid_price: 15000,
	},
	{
		id: 4,
		bidder_id: 4,
		auction_id: 3,
		bid_date: '2017-04-10 11:27:07',
		bid_price: 17000,
	},	
	{
		id: 5,
		bidder_id: 1,
		auction_id: 7,
		bid_date: '2017-04-10 11:27:07',
		bid_price: 17000,
	},	
	{
		id: 6,
		bidder_id: 1,
		auction_id: 8,
		bid_date: '2017-04-10 11:27:07',
		bid_price: 17000,
	},	
	{
		id: 7,
		bidder_id: 1,
		auction_id: 9,
		bid_date: '2017-04-10 11:27:07',
		bid_price: 17000,
	},
	{
		id: 8,
		bidder_id: 1,
		auction_id: 10,
		bid_date: '2017-04-10 11:27:07',
		bid_price: 17000,
	},	
	{
		id: 9,
		bidder_id: 1,
		auction_id: 11,
		bid_date: '2017-04-10 11:27:07',
		bid_price: 17000,
	},	
	{
		id: 10,
		bidder_id: 1,
		auction_id: 12,
		bid_date: '2017-04-10 11:27:07',
		bid_price: 17000,
	},
	{
		id: 11,
		bidder_id: 1,
		auction_id: 13,
		bid_date: '2017-04-10 11:27:07',
		bid_price: 17000,
	},
	{
		id: 12,
		bidder_id: 4,
		auction_id: 13,
		bid_date: '2017-04-11 11:27:07',
		bid_price: 18000,
	},
	{
		id: 13,
		bidder_id: 1,
		auction_id: 14,
		bid_date: '2017-04-10 11:27:07',
		bid_price: 17000,
	},
	{
		id: 14,
		bidder_id: 4,
		auction_id: 14,
		bid_date: '2017-04-11 11:27:07',
		bid_price: 18000,
	},
	{
		id: 15,
		bidder_id: 1,
		auction_id: 14,
		bid_date: '2017-04-10 11:27:07',
		bid_price: 17000,
	},
	{
		id: 16,
		bidder_id: 4,
		auction_id: 14,
		bid_date: '2017-04-11 11:27:07',
		bid_price: 18000,
	},
];

module.exports = {
	users,
	artworks,
	auctions,
	bids,
	profiles,
	notifications,
};
