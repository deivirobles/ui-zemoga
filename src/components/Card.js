import React, { Component } from 'react';

import like from '../assets/img/like.svg';

class Card extends Component {


    constructor(props) {
        super(props);

        this.state = {
            likes: 0,
            dislikes: 0,
            count: 0,
            vote: 0,
            actualData: [],
            message: false
        }
    }

    componentDidMount() {
        let actualData = JSON.parse(localStorage.getItem('actualData'))
        this.setState({
            actualData: actualData
        });
        const i = actualData.findIndex(r => r.id == this.props.props.id);
        this.setState({
            likes: actualData[i].likes,
            dislikes: actualData[i].dislikes,
        });
    }

    handleVote(e, user) {
        e.preventDefault();
        const idx = this.state.actualData.findIndex(r => r.id == user.id);
        const vote = this.state.vote;
        if (idx > -1 && vote != 0) {
            this.setState({
                message: true,
                vote: 0
            });
            if (vote === 1) {
                this.state.actualData[idx].likes = this.state.actualData[idx].likes + 1;
            }
            if (vote === 2) {
                this.state.actualData[idx].dislikes = this.state.actualData[idx].dislikes + 1
            }
            this.setState({
                likes: this.state.actualData[idx].likes,
                dislikes: this.state.actualData[idx].dislikes,
            });
            localStorage.setItem('actualData', JSON.stringify(this.state.actualData));
            setTimeout(() => this.setState({ message: false }), 3000);
        }
    }

    assignVote(e) {
        e.event.preventDefault()
        this.setState({
            vote: e.vote
        });
    }

    render() {
        const styl = {
            backgroundImage: `url(../assets/img/${this.props.image}.jpg)`
        }
        return (
            <div className={this.props.props.image + ' app-card'}>
                <div className="name">
                    <div className="vote">
                        <a href="#" className="like">
                            <img src={like} alt="like" />
                        </a>
                    </div>
                    <div className="label">
                        <h2>{this.props.name}</h2>
                    </div>
                </div>
                <div className="caption">
                    <div className="date">
                        <span>1 Month ago</span> in {this.props.topic}
                    </div>
                    <div className="detail">
                        <p>
                            {this.state.message ?
                                <span>Thank you for your voting!</span>
                                :
                                <span>
                                    Lorem ipsum, dolor sit amet
                        </span>
                            }
                        </p>
                        <a href="#" className={`like ${this.state.vote == 1 ? 'border' : ''}`} onClick={(e) => this.assignVote({ event: e, vote: 1, user: this.props.props.id })}>
                            <img src={like} />
                        </a>
                        <a href="#" className={`dislike ${this.state.vote == 2 ? 'border' : ''}`} onClick={(e) => this.assignVote({ event: e, vote: 2, user: this.props.props.id })}>
                            <img src={like} />
                        </a>
                        <a href="#" className="vote-btn" onClick={(e) => this.handleVote(e, this.props.props)}>Vote now</a>
                    </div>

                </div>
                <div className="percent">
                    <div className="rate-like" style={{ width: this.state.likes + '%' }}>
                        <img src={like} alt="like" /><span>{this.state.likes + '%'}</span>
                    </div>
                    <div className="rate-dislike" style={{ width: this.state.dislikes + '%' }}>
                        <img src={like} alt="dislike" /><span>{this.state.dislikes + '%'}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;