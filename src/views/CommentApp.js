import React, { Component } from 'react';
import CommentInput from '../components/CommentInput.js';
import CommentList from '../components/CommentList.js';

import ForTest from '../components/test/ForTest.js';
import Textarea from '../components/test/Textarea.js';

import LocalStorageActions from '../higherOrderCompentent/LocalStorageActions.js';

class ComponentApp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            commentlist: props.data,
        }
    }


    handleSubmitComment(comment) {
        var id = this.state.commentlist.length+1;
        comment.id = id;
        var newlist = this.state.commentlist;
        newlist.push(comment);
        this.setState({ newlist })
        this.props.saveDate( newlist );
    }

    handleDeleteComment(index) {
        var commentlist = this.state.commentlist
        commentlist.splice(index, 1)
        this.setState({ commentlist })
        this.props.saveDate( commentlist );
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList
                    list={this.state.commentlist}
                    onDeleteComment={this.handleDeleteComment.bind(this)}/>

                <ForTest />
                <Textarea />
            </div>
        )
    }
}

export default LocalStorageActions(ComponentApp, 'commentlist');
