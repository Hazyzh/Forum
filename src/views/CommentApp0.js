import React, { Component } from 'react';
import CommentInput from '../components/CommentInput.js';
import CommentList from '../components/CommentList.js';

import ForTest from '../components/test/ForTest.js';
import Textarea from '../components/test/Textarea.js';

class ComponentApp extends Component {
    constructor() {
        super()
        this.state = {
            commentlist: []
        }
    }

    _loadCommentList() {
        var commentlist = localStorage.getItem('commentlist')
        if(commentlist){
            var arr = JSON.parse(commentlist);
            this.setState({ commentlist: arr })
        }
    }

    _saveCommentList(list) {
        localStorage.setItem('commentlist', JSON.stringify(list))
    }

    handleSubmitComment(comment) {
        var id = this.state.commentlist.length+1;
        comment.id = id;
        var newlist = this.state.commentlist;
        newlist.push(comment);
        this.setState({ commentlist: newlist });
        this._saveCommentList(newlist);
    }

    handleDeleteComment(index) {
        var commentlist = this.state.commentlist
        commentlist.splice(index, 1)
        this.setState({ commentlist })
        this._saveCommentList(commentlist)
    }
    // 加载评论
    componentWillMount() {
        this._loadCommentList();
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

export default ComponentApp;
