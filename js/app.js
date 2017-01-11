class App extends React.Component {
  render () {
    return (
      <div className="container free-bird">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="card">
              <QuoteImage />
              <div className="card-block">
                <QuoteBody />
                <div className="row">
                  <div className="col-md-6"><QuoteButton /></div>
                  <div className="col-md-6"><QuoteTwitterButton /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class QuoteImage extends React.Component {
  render () {
    return (
      <div>
        <img
          id="quote-image"
          className="img-fluid"
          src="img/cover.jpg"
          alt="Mr Robot" />
      </div>
    )
  }
}

class QuoteBody extends React.Component {
  render () {
    return (
      <div>
        <blockquote className="blockquote blockquote-reverse">
          <h1 id="quote-body" className="card-text">
            We are fsociety, we are finally free, we are finally awake!
          </h1>
        </blockquote>
      </div>
    )
  }
}

class QuoteButton extends React.Component {
  render () {
    return (
      <a
        id="quote-btn"
        href="#"
        className="btn btn-unique btn-lg btn-block waves-effect waves-light">
        New Quote
      </a>
    )
  }
}

class QuoteTwitterButton extends React.Component {
  render() {
    return (
      <div>
        <a
          id="quote-tw"
          className="btn btn-tw btn-lg btn-block btn-info"
          target="_blank">
          <i className="fa fa-twitter"></i>
        </a>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
