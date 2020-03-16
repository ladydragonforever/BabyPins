import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputVal: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.selectWord = this.selectWord.bind(this);
    }

    handleInput(e) {
        this.setState({
            inputVal: e.currentTarget.value
        })
    }

    match() {
        const matches = [];
        const words = this.props.searchWords
        if (this.state.inputVal.length===0) {
            return words
        }
        
        words.forEach(word => {
            const sub = word.slice(0, this.state.inputVal.length);
            if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
                matches.push(word);
            }
        });

        if (matches.length === 0) {
            matches.push('No matches');
        }

        return matches;
    }

    selectWord(e){
        e.preventDefault();
        this.setState({
            inputVal: e.currentTarget.innerText
        });

        // console.log(e.currentTarget.innerText)
        
        this.props.filterPictures(e.currentTarget.innerText);

    }


    render() {

        if (!this.match()) return null;
        const results = this.match().map((result,i) => 
        <li key={i} onClick={this.selectWord}>
            {result}
        </li>
        )


        return(
            <div className='auto'>
                <input
                    className="nav-search"
                    onChange={this.handleInput}
                    value={this.state.inputVal}
                    placeholder='Search...' />
                <ul>
                    <ReactCSSTransitionGroup
                        transitionName='auto'
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        {results}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        )

    }


// https://blog.logrocket.com/improve-your-ui-with-react-transition-group-999fa35f7cae/

}


export default Search;