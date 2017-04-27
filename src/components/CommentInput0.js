import React, { Component } from 'react';

class CommentInput extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit() {
        if (this.props.onSubmit) {
          const { username, content } = this.state
          this.props.onSubmit({
              username,
              content,
              createdTime: +new Date()
          })
          this._saveUsername(username)
        }
        this.setState({ content: '' })
    }
    // 本地存储usernmame
    _saveUsername(username) {
        localStorage.setItem('username', username);
    }
    // 获取input焦点
    componentDidMount() {
        this.textarea.focus()
    }
    // 取得用户名
    componentWillMount() {
        this._loadUsername()
    }
    // 本地加载用户名
    _loadUsername() {
        const username = localStorage.getItem('username')
        if(username){
            this.setState({ username })
        }
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                  <span className='comment-field-name'>用户名：</span>
                  <div className='comment-field-input'>
                    <input
                        value={this.state.username}
                        onChange={this.handleUsernameChange.bind(this)} />
                  </div>
                </div>
                <div className='comment-field'>
                  <span className='comment-field-name'>评论内容：</span>
                  <div className='comment-field-input'>
                    <textarea
                        value={this.state.content}
                        onChange={this.handleContentChange.bind(this)}
                        ref={(textarea) => {this.textarea = textarea}} />
                  </div>
                </div>
                <div className='comment-field-button'>
                  <button
                      onClick={this.handleSubmit.bind(this)} >
                    发布
                  </button>
                </div>
            </div>
        )
    }
}
export default CommentInput;
