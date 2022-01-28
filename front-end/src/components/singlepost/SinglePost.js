import './singlepost.css'

export const SinglePost = () => {
  return(
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Mishael</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div> 
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laboriosam nam temporibus amet exercitationem repudiandae 
                eaque deleniti aut quod laudantium repellendus ad, 
                reprehenderit similique obcaecati? Molestiae ex quis enim 
                sunt quaerat ratione sequi ipsum expedita nemo odit maxime eos voluptates, 
                molestias adipisci, odio, perspiciatis excepturi assumenda? 
                Debitis, in, sequi asperiores soluta, itaque sit voluptatibus repellendus v
                ero iusto consequatur neque! Voluptatem, fugit!
            </p>
        </div>
    </div>
  ) 
};
