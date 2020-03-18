import React from "react";
import { CSSTransition } from "react-transition-group";
import { withRouter } from "react-router";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputVal: "",
            showList: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.selectWord = this.selectWord.bind(this);
        this.switchShow = this.switchShow.bind(this);
        this.disableFocusOut = this.disableFocusOut.bind(this);
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({
            inputVal: e.currentTarget.value
        })
    }
    
    switchShow () {

        this.setState(prevState => ({showList: !prevState.showList }))
        // console.log("I'm switch show")
    }

    disableFocusOut (e) {
        e.preventDefault();
        console.log(e.currentTarget)
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

        
        this.switchShow();
        let filter = new Promise((resolve) => this.props.filterPictures(e.currentTarget.innerText, resolve));
        
        console.log(this.props.location, "check")
        if (this.props.location.pathname !== "/") filter.then(this.props.history.push("/"))

    }


    render() {

        if (!this.match()) return null;
        const results = this.match().map((result,i) => 
        <li key={i} onClick={this.selectWord}>
            {result}
        </li>
        )


        return(
            <div className='auto'
                
                >
                <input
                    className="nav-search"
                    onChange={this.handleInput}
                    onFocus={this.switchShow}
                    onBlur={this.disableFocusOut}
                    
                    value={this.state.inputVal}
                    placeholder='Search...' />
                <ul>
                    
                    {/* <CSSTransition */}
                        {/* transitionName='auto'
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}> */}
                        {this.state.showList && results}
                    {/* </CSSTransition> */}
                </ul>
            </div>
        )

    }


// https://blog.logrocket.com/improve-your-ui-with-react-transition-group-999fa35f7cae/

}


export default withRouter(Search);