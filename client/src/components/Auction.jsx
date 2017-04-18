import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';
import * as Auctions from '../actions/auctionActionCreator.jsx';
import { connect } from 'react-redux';
import AuctionDetail from './AuctionDetail.jsx';
import ClosedAuction from './ClosedAuction.jsx';
import * as bids from '../actions/bidActionCreator';
import Moment from 'moment';


class Auction extends Component {

  //when user clicks submit, check if user is logged in
    //if not re-direct
    //if logged in, grab all info and redirect to payment page.
  componentWillMount() {
    let auctionId = this.props.match.params.auctionId;
    let { dispatch, user } = this.props;
    dispatch(Auctions.fetchingAnAuction(true));
    fetch(`/auctions/${auctionId}`)
    .then(response => {
      if(!response.ok) {
        throw Error(response.statusText);
      }
        dispatch(Auctions.fetchingAnAuction(false));
        return response.json();
    })
    .then(data => {
      dispatch(Auctions.fetchedAnAuction(data[0]));
    })
    .catch((err) => dispatch(Auctions.fetchAuctionErrored(true, err)));
  }

  setBid(bid) {
    const { dispatch } = this.props;
    dispatch(bids.setBid(bid));
  }

  handleClick(id) {
    const { bid, user, history, dispatch } = this.props;
    if (bid.bid === 0) {
      alert('Please select a value');
    } else {
      console.log('bid value is a number');
      console.log('useris: ', user);
      //if user not logged in, redirect
      if(!user.username) {
        alert('you are not logged in, please sign up or log in');
        history.push('/signup')
      } else {
      //grab userid, artwork_id and value
        dispatch(bids.toggleSend());
        fetch(`/auctions/${id}/bids`, {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
          }),
          body: JSON.stringify({ bidPrice: bid.bid, user: user.userId })
        })
        .then((answer) => {
          if (!answer.ok) {
            throw Error(answer.json());
          } else {
            answer.json()
            .then((bid) => {
              console.log(bid);
              //dispatch(bids.toggleSend());
              return dispatch(Auctions.updateBid(bid));
            });
          }
        })
        .catch((err) => {
          dispatch(bids.error(err));
        });
      }
    }
  }

  render() {

    const { auction } = this.props.auction;
    const { bid } = this.props;
    // console.log('key length: ', Object.keys(auction).length);
    if (Object.keys(auction).length === 0) {
      return (
        <p>loading~~~</p>
      );
    } else {
      const end = new Moment(auction.end_date);
      const now = new Moment();
      if (end.isBefore(now)) {
        return (
          <ClosedAuction auction={auction} />
        );
      } else {
        return (
          <div>
            <AuctionDetail handleClick={this.handleClick.bind(this, auction.id)} auction={auction} setBid={this.setBid.bind(this)} /> 
          </div>
        );
      }
    }
  }
}
//connect to the store to get the artwork to render:
const mapStateToProps = (state) => {
  return {
    auction: state.auction,
    user: state.user,
    bid: state.bid,
  }
}
export default connect(mapStateToProps)(Auction);