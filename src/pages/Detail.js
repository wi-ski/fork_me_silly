import React from 'react';
import ajax from 'superagent';
import { IndexLink, Link } from 'react-router';

// const TEST_DATA = {
//     commits:[
//         {
//             author:{
//                 login:"Commits Author"
//             },
//             html_url:"Somewhere author.com"
//         },
//         {
//             author:{
//                 login:"Commits author"
//             },
//             html_url:"Somewhere author.com"
//         },
//         {
//             author:{
//                 login:"Commits author"
//             },
//             html_url:"Somewhere author.com"
//         }
//     ],
//     pulls:[
//         {
//             author:{
//                 login:"Pulls author"
//             },
//             html_url:"Somewhere author.com"
//         },
//         {
//             author:{
//                 login:"Pulls author"
//             },
//             html_url:"Somewhere author.com"
//         },
//         {
//             author:{
//                 login:"Pulls author"
//             },
//             html_url:"Somewhere author.com"
//         }
//     ],
//     forks:[
//         {
//             author:{
//                 login:"Forks author"
//             },
//             html_url:"Somewhere author.com"
//         },
//         {
//             author:{
//                 login:"Forks author"
//             },
//             html_url:"Somewhere author.com"
//         },
//         {
//             author:{
//                 login:"Forks author"
//             },
//             html_url:"Somewhere author.com"
//         }
//     ]
// }

class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = { commits: [] };
        this.state.commits = [];
        this.state.pulls = [];
        this.state.forks = [];
        this.state.catState = 'commits';
        this.state.categories = [
        'commits',
        'pulls',
        'forks',
        ]
    }
    componentWillMount() {
        this.state.categories.forEach((cat) => {
            this.getFeed(cat)
        })
    }
    saveFeed(type, contents) {
        this.setState({ [type]: contents });
    }
    getFeed(type) {
        if (this.props.params.repo === '') return;
        if(window._________testing) return this.setState({[type]:TEST_DATA[type]});

        const baseURL = 'https://api.github.com/repos/facebook';
        ajax.get(`${baseURL}/${this.props.params.repo}/${type}`)
            .end((error, response) => {
                if (!error && response) {
                    this.saveFeed(type,response.body);
                } else {
                    console.log(`Error fetching ${type}`, error);
                }
            }
        );
    }
    setCategoryState(cat) {
        this.state.catState = cat;
        this.forceUpdate();
    }
    render() {
        const categories = this.state[this.state.catState];
        return (<div>
        You are here: <IndexLink to="/" activeClassName="active">Home</IndexLink>
        > {this.props.params.repo}
        {this.state.categories.map((cat,_idx) => {
            return (<button ref={cat} key={_idx} onClick={this.setCategoryState.bind(this,cat)}>{cat}</button>)
        })}
        {categories.map((dataBlob, index) => {
            const author = dataBlob.author ? dataBlob.author.login : (dataBlob.owner ? dataBlob.owner.login : dataBlob.user.login);
            return (<p key={index} className='author-class'>
                <Link to={`/user/${author}`}>{author} : </Link>
                <a href={dataBlob.html_url}>{dataBlob.html_url}</a>.
            </p>);
        })}
        </div>);
    }
}

Detail.propTypes = {
    params: React.PropTypes.object,
};


export default Detail;