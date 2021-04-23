import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as Bookmarked} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as NotBookmarked} from '@fortawesome/free-regular-svg-icons';

import './App.css';
import moment from 'moment';

class AuthorSection extends Component {
  render() {
    const bookmarked = () => {
      if (this.props.bookmarked) {
        return <FontAwesomeIcon icon={Bookmarked} className="bookmark-icon" onClick={this.props.onBookmark(this.props.info.title)} />;
      } else {
        return <FontAwesomeIcon icon={NotBookmarked} className="bookmark-icon" onClick={this.props.onBookmark(this.props.info.title)} />;
      }
    }

    return (
      <div className="author-section">
        <div className="author-content">
          <img className={this.props.info.author.isMediumMember ? "author-image-green" : "author-image" } src={this.props.info.author.image} alt={`Author ${this.props.info.author.name}`} />
          <div>
            <p>{this.props.info.author.name}</p>
            <p className="date-read-time">{`${moment(this.props.info.postedDate).format('MMM D')}`} &#8226; {this.props.minutesToRead} min read</p>
          </div>
        </div>
        {bookmarked()}
      </div>
    )
  }
}

AuthorSection.propTypes = {
  bookmarked: PropTypes.bool.isRequired,
  info: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      author: PropTypes.shape({
          name: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          isMediumMember: PropTypes.bool.isRequired
      }),
      postedDate: PropTypes.string.isRequired,
      minutesToRead: PropTypes.number.isRequired,
      hasAudioAvailable: PropTypes.bool.isRequired,
      memberPreview: PropTypes.bool.isRequired
  }),
  onBookmark: PropTypes.func.isRequired
}


export default AuthorSection;
