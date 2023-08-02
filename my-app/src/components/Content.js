import React, { Component } from 'react'
import css from "./css/Content.module.css";
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: [],
            name: ''
        }
    }

  componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
                posts: savedPosts,
                name: ''
            })
        }, 2000)
    }

// Captures the event value of the user text input and saves it as name.
// Filters your savedPosts using name, and saves it to a new const = filteredPosts
// Don't forget to convert posts.name to lowercase first.
// Sets the state of posts to 'fiteredPosts'
// In the form tag, replace the text for the number '100', with a reference to the length of the 'posts' array in state.

  handleChange = (event) => {
    const name = event.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter( p => p.name.toLowerCase().includes(name) )

    this.setState({
        name: event.target.value,
        posts: filteredPosts
    })
    console.log(this.state.name)
    

  }

  render() {
    return (
      <div>
        <div className={css.TitleBar}>My Posts</div>
        <label htmlFor="searchInput">Search:</label>
        <input type="search" id="searchInput"  onChange={this.handleChange} />
        <h4>posts found: {this.state.posts.length}</h4>
        <div className={css.SearchResults}>
            <div className={css.SearchItem}>
                {
                    !this.state.isLoaded ? (
                        <Loader />
                    ) : (
                        <PostItem savedPosts={this.state.posts} />
                    )
                }
                
            </div>
        </div>
      </div>
    )
  }
}

export default Content