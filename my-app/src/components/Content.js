import React, { Component } from 'react'
import css from "./css/Content.module.css";
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false
        }
    }

  componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
            })
        }, 2000)
    }

  render() {
    return (
      <div>
        <div className={css.TitleBar}>My Posts</div>
        <div className={css.SearchResults}>
            <div className={css.SearchItem}>
                {
                    !this.state.isLoaded ? (
                        <Loader />
                    ) : (
                        <PostItem savedPosts={savedPosts} />
                    )
                }
                
            </div>
        </div>
      </div>
    )
  }
}

export default Content