import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExtraDetails from './ExtraDetails';

class InfoSection extends Component {
  render() {
    return (
      <div>
        <div className="article-description">
          <ExtraDetails 
            articleType={this.props.articleType} 
            audioAvailable={this.props.audioAvailable} 
            memberPreview={this.props.memberPreview}
          />
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

InfoSection.propTypes = {
  articleType: PropTypes.string.isRequired,
  audioAvailable: PropTypes.bool.isRequired,
  memberPreview: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default InfoSection;
