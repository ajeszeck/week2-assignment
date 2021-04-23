import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthorSection from './AuthorSection';
import InfoSection from './InfoSection';

class Article extends Component {
  render() {
    return (
      <div className={this.props.articleType}>
        <div>
          <img className="article-image" src={this.props.info.image} alt={this.props.info.description} />
        </div>
        <div className="content">
          <InfoSection 
            audioAvailable={this.props.info.hasAudioAvailable}
            memberPreview={this.props.info.memberPreview}
            articleType={this.props.articleType} 
            title={this.props.info.title}
            description={this.props.info.description}
          />
          <AuthorSection 
            info={this.props.info} 
            minutesToRead={this.props.info.minutesToRead} 
            date={this.props.info.postedDate} 
            bookmarked={this.props.bookmarked} 
            onBookmark={this.props.onBookmark}
          />
        </div>
      </div>
    )
  }
}

Article.propTypes = {
  bookmarked: PropTypes.bool.isRequired,
  articleType: PropTypes.string.isRequired,
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

export default Article;