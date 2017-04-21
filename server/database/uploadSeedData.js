const db = require('./config.js');
const data = require('./dummyData.js');
const users = data.users;
const artworks = data.artworks;
const auctions = data.auctions;
const closedAuctions = data.closedAuctions;
const bids = data.bids;
const profiles = data.profiles;
const notifications = data.notifications;

var helpers = db.$config.pgp.helpers;

var csUsers = new helpers.ColumnSet(['username', 'first_name', 'last_name', 'email', 'address', 'type', 'password'], {table: 'users'});
var csArtWorks = new helpers.ColumnSet(['artist_id', 'age', 'estimated_price', 'art_name', 'description', 'dimensions', 'image_url'], {table: 'artworks'});
var csAuctions = new helpers.ColumnSet(['owner_id', 'artwork_id', 'start_date','end_date', 'start_price', 'buyout_price', 'current_bid_id', 'current_bid', 'bid_counter'], {table: 'auctions'});
var csBids = new helpers.ColumnSet(['bidder_id', 'auction_id', 'bid_date', 'bid_price'], {table: 'bids'});
var csProfiles = new helpers.ColumnSet(['user_id', 'profile', 'fb_link', 'twitter_link', 'inst_link'], {table: 'profiles'});
var csNotifications = new helpers.ColumnSet(['owner_id', 'trigger_id', 'type', 'text', 'read', 'date'], {table: 'notifications'});
var csClosedAuctions = new helpers.ColumnSet(['auction_id', 'winner', 'payment_status'], {table: 'closed_auctions'});

module.exports = function insertDummyData(db) {
  return db.tx((t) => {
   
    var multiInsert = helpers.concat([
      helpers.insert(users, csUsers),
      helpers.insert(artworks, csArtWorks),
      helpers.insert(auctions, csAuctions),
      helpers.insert(bids, csBids),
      helpers.insert(profiles, csProfiles),
      helpers.insert(notifications, csNotifications),
      helpers.insert(closedAuctions, csClosedAuctions)
    ]);
    
    return t.none(multiInsert);
  })
  .then(() => {
    console.log('success seeding data');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
};
