import { useEffect, useState } from "react";
import db from "../firebase";
import "./Video.css";



const Videos = () => {
    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    

    useEffect(() => {
        fetchAll();
    }, []);

    function fetchAll() {
        //e.preventDefault();

        db.collection("trialdatabase")
            .get()
            .then((snapshot) => {
                if (snapshot.docs.length > 0) {
                    snapshot.docs.forEach((doc) => {
                        setVideos((prev) => {
                            return [...prev, doc.data()];
                        });
                    });
                }
            });
    }
    
    // * filtered videos 
    const filterVideos = (videos_list, searchTerm) => {
        if(!searchTerm) return videos_list;
        
        return videos_list.filter(video => {
            const videoTag = video.mediaId.toLowerCase();
            return videoTag.includes(searchTerm);
        }) 
    }

    const filtered_videos = filterVideos(videos, searchTerm);
    console.log(filtered_videos);

    return (
        <div className="container-video">
        <input type="text"
        style={{color: 'black'}}
        placeholder="search..." onChange={(event)=>{
            event.preventDefault();
 
            setSearchTerm(event.target.value);
        }}/>
            
            {videos.map((doc, index) => {
                return (
                    <div key={index}>
                        <video controls width="200" className="videos">
                            <source
                                src={doc.mediaId}
                                type="video/mp4"
                                target="_blank"
                            />
                            Sorry, your browser doesn't support embedded videos.
                        </video>

                        <p >{doc.title}</p>
                        <p>{doc.subtitle}</p>
                    </div>
                );
            })}
        </div>
    );
};


export default Videos;
