import { useEffect, useState } from "react";
import db from "../firebase";

 

const Videos = () => {
  const [videos,setVideos]=useState([])
  useEffect(()=>{
    fetchAll()
},[])
  

  function fetchAll(){
    //e.preventDefault();

     db.collection("trialdatabase").get().then((snapshot)=>{
       if(snapshot.docs.length>0){
         snapshot.docs.forEach((doc)=>{
           setVideos((prev)=>{
             return [...prev,doc.data()];
           })
         })
       }
     })
     console.log(videos)
  }


  return (
    <div>

   {
     videos.map((doc,index)=>{
       return(
         <div key={index}>
<video class="video-fluid z-depth-1" autoplay loop controls muted>
  <source src={doc.mediaId}type="video/mp4" />
</video>   
   
         <p>{doc.title}</p>
         <p>{doc.subtitle}</p>
         </div>
       )
     })
   }
    </div>
  )
}

export default Videos;