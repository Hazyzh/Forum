import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {

    onDeleteComment(index) {
        if (this.props.onDeleteComment) {
          this.props.onDeleteComment(index)
        }
    }

    render() {
        return (
            <div>
                {this.props.list.map((comment, i) =>
                  (<Comment
                      index={i}
                      key={comment.id}
                      comment={comment}
                      onDeleteComment={this.onDeleteComment.bind(this)} />)
                )}
            </div>
        )
    }
}
export default CommentList;
