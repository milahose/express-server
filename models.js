const uuid = require("uuid");

// temp blog post model

const BlogPosts = {
  create: function(title, content, author, publishDate) {
    const post = {
      id: uuid.v4(),
      title: title,
      content: content,
      author: author,
      publishDate: publishDate || Date.now()
    };
    this.posts.push(post);
    return post;
  },
  read: function(id = null) {
    if (id !== null) {
      return this.posts.find(post => post.id === id);
    }
    return this.posts.sort(function(a, b) {
      return b.publishDate - a.publishDate;
    });
  },
  update: function(updatedPost) {
    const {id} = updatedPost;
    const postIndex = this.posts.findIndex(post => post.id === updatedPost.id);
    this.posts[postIndex] = Object.assign(this.posts[postIndex], updatedPost);
    return this.posts[postIndex];
  },
  delete: function(id) {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex > -1) {
      this.posts.splice(postIndex, 1);
    }
  },
};

function createBlogPostsModel() {
  const storage = Object.create(BlogPosts);
  storage.posts = [];
  return storage;
}

module.exports = { BlogPosts: createBlogPostsModel() };
