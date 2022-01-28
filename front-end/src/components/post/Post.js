import './post.css'

export const Post = () => {
  return(
    <div className="post">
        <img className="postImg" src="" alt="" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">Lorem ipsum dolor sit amet</span>
          <span className="postDate">i hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          At incidunt quos, cum, quia nulla unde nihil dolor beatae 
          est explicabo quidem rerum 
          sit reiciendis vero, ducimus maiores sed iure voluptatem.
        </p>
    </div>
  ) 
};
