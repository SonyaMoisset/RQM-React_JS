class RandomQuoteMachine extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                quote: "We are fsociety, we are finally free, we are finally awake!"
            };
    }

    getRandomQuote () {
        const quotes = [
            "I should just tell her what she wants to hear.",
            "I also have security flaws. I don't like being outside. I liked morphine too much.",
            "I only need to press one key to run the exploit. Or, I can press another and disable the entire plan.",
            "I don't know what I'm supposed to do.",
            "We live in a kingdom of bullshit.",
            "I'm only supposed to be your prophet. You're supposed to be my God.",
            "Hackers. We inherently trust no one, including each other.",
            "There, that's the look I was looking for.",
            "I'm just playing my best move.",
            "Trust yourself. You'll do what's right.",
            "Unfortunately, we're all human. Except me. of course.",
            "I made my move. You make yours",
            "Life is so much easier when you're numb"
        ];

        let newQuote = quotes[index(0, quotes.length - 1)];
        return newQuote;

        function index(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    handleRandomQuote () {
        this.setState({
            quote: this.getRandomQuote()
        })
    }

    render () {
        return (
            <div>
                <div className="container free-bird">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-7">
                            <div className="card">
                                <img
                                    className="img-fluid"
                                    src="img/cover.jpg"
                                    alt="Mr Robot" />
                                <QuoteContainer quote={ this.state.quote } />
                                <div className="row">
                                    <div className="col-md-12">
                                        <a className="btn btn-unique btn-lg btn-block btn-quote waves-effect waves-light" onClick={ this.handleRandomQuote.bind(this) }>
                                            New Quote
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class QuoteContainer extends React.Component {
    render () {
        return (
            <div>
                <div className="card-block">
                    <blockquote className="blockquote blockquote-reverse">
                        <h1 className="card-text body-quote">{ this.props.quote }</h1>
                    </blockquote>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <RandomQuoteMachine />,
    document.getElementById('RQM')
);
