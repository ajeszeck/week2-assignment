import React, { Component } from 'react';
import Article from './Article';
import yourArticles from './your-articles.json';
import missedArticles from './missed-articles.json';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yourArticles: yourArticles,
      missedArticles: missedArticles,
      bookmarks: {}
    }
  }

  handleBookmark = (title) => {
    return () => {
      let bookmarks = this.state.bookmarks;

      if (bookmarks[title]) {
        bookmarks[title] = !bookmarks[title];
      } else {
        bookmarks[title] = true;
      }

      this.setState({
        bookmarks: bookmarks
      })
    }
  }
  
  render() {
    const yourArticles = this.state.yourArticles.map(article => {
      return <Article 
                key={article.title} 
                info={article} 
                articleType="your-article" 
                bookmarked={this.state.bookmarks[article.title] || false} 
                onBookmark={this.handleBookmark} 
              />
    });

    const missedArticles = this.state.missedArticles.map(article => {
      return <Article 
                key={article.title} 
                info={article} 
                articleType="missed-article" 
                bookmarked={this.state.bookmarks[article.title] || false} 
                onBookmark={this.handleBookmark} 
              />
    });

    return (
      <div className="Homepage">
        <h2>For You</h2>
        <section className="yourArticles">
          {yourArticles}
        </section>
        <h2>In Case You Missed It</h2>
        <section className="missedArticles">
          {missedArticles}
        </section>
      </div>
    )
  }
}

export default HomePage;