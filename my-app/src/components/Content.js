import React, { Component } from 'react'
import css from "./css/Content.module.css";
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

  render() {
    return (
      <div>
        <div className={css.TitleBar}>My Posts</div>
        <div className={css.SearchResults}>
            <div className={css.SearchItem}>
                <PostItem savedPosts={savedPosts} />
            </div>
        </div>
      </div>
    )
  }
}

export default Content