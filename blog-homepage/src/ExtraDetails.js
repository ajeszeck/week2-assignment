import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class ExtraDetails extends Component {
  render() {
    let audioAvailable = this.props.audioAvailable;
    let memberPreview = this.props.memberPreview;
    let customClass = `audio-available-${this.props.articleType}`;

    return (
      <div className={customClass}>
        {audioAvailable && 
          <div>
            <FontAwesomeIcon icon={ faVolumeUp } className="volume-icon" />
            <p>Audio available</p>
          </div>
        }
        {memberPreview && 
          <div>
            <FontAwesomeIcon icon={ faStar } className="star-icon" size="xs" />
            {this.props.articleType === "missed-article" &&
              <p>Member preview</p>
            }
          </div>
        }
      </div>
    )
  }
}

ExtraDetails.propTypes = {
  audioAvailable: PropTypes.bool.isRequired,
  memberPreview: PropTypes.bool.isRequired,
  articleType: PropTypes.string.isRequired
}

export default ExtraDetails;
