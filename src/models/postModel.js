let posts = []

// Post {id, title, content, createdAt, updatedAt}
const postModel = {
    getAllPosts(){
        return posts
    },
    getPostById(id){
        return posts.find(post => post.id === id)
    },
    createPost(title, content){
        const post = {
            id: Date.now().toString(),
            title: title,
            content: content,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        return post
    },
    savePost(post){
        posts.push(post)
    },
    updatePost(id, updatedPost){
        const idex = posts.findIndex(post => post.id === id)
        posts[index] = {...posts[index], ...updatedPost, updatedAt: new Date()}
    },
    deletePost(id){
        posts = posts.filter(post => post.id !== id)
    }
}

module.exports = postModel