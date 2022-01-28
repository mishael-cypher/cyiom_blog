import './single.css'
import { SideBar } from '../../components/sidebar/SideBar'
import { SinglePost } from '../../components/singlepost/SinglePost';
 
export const Single = () => {
  return(
    <div className="single">
        <SinglePost />
        <SideBar />
    </div>
  ) 
}; 
