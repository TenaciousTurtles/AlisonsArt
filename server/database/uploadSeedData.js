const db = require('./config.js');
const data = require('./dummyData.js');
const users = data.users;
const artworks = data.artworks;
const auctions = data.auctions;
const bids = data.bids;
const profiles = data.profiles;
const saves = data.saves;
const followers = data.followers;
const notifications = data.notifications;

const helpers = db.$config.pgp.helpers;

var csUsers = new helpers.ColumnSet(['username', 'first_name', 'last_name', 'email', 'address', 'type', 'password'], {table: 'users'});
var csArtWorks = new helpers.ColumnSet(['artist_id', 'age', 'estimated_price', 'art_name', 'description', 'dimensions', 'image_url'], {table: 'artworks'});
var csAuctions = new helpers.ColumnSet(['owner_id', 'artwork_id', 'start_date', 'end_date', 'start_price', 'buyout_price', 'current_bid_id', 'current_bid', 'bid_counter'], {table: 'auctions'});
var csBids = new helpers.ColumnSet(['bidder_id', 'auction_id', 'bid_date', 'bid_price'], {table: 'bids'});
var csProfiles = new helpers.ColumnSet(['user_id', 'image_url', 'profile', 'fb_link', 'twitter_link', 'inst_link', 'stripe_user_id', 'refresh_token'], {table: 'profiles'});
var csSaves = new helpers.ColumnSet(['user_id', 'auction_id'], {table: 'saves'});
var csFollowers = new helpers.ColumnSet(['follower_id', 'followee_id'], {table: 'followers'})
var csNotifications = new helpers.ColumnSet(['owner_id', 'trigger_id', 'type', 'text', 'read', 'date'], {table: 'notifications'});
module.exports = function insertDummyData(db) {
  return db.tx((t) => {
    
    var userInserts = t.none(helpers.insert(users, csUsers));
    var artWorkInserts = t.none(helpers.insert(artworks, csArtWorks));
    var auctionInserts = t.none(helpers.insert(auctions, csAuctions));
    var bidInserts = t.none(helpers.insert(bids, csBids));
    var profileInserts = t.none(helpers.insert(profiles, csProfiles));
    var saveInserts = t.none(helpers.insert(saves, csSaves));
    var followerInserts = t.none(helpers.insert(followers, csFollowers));
    var notificationInserts = t.none(helpers.insert(notifications, csNotifications));
    
        return t.batch([userInserts, artWorkInserts, auctionInserts, bidInserts, profileInserts, saveInserts, followerInserts, notificationInserts]);
    })
  .then(() => {
    console.log('success seeding data');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
};
