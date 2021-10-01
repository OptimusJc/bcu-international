import { useEffect, useState } from "react";
import db from "../firebase";
import ReactPlayer from "react-player";

const Videos = () => {
    // const [videos, setVideos] = useState([]);
    // useEffect(() => {
    //     fetchAll();
    // }, []);

    // function fetchAll() {
    //     //e.preventDefault();

    //     db.collection("trialdatabase")
    //         .get()
    //         .then((snapshot) => {
    //             if (snapshot.docs.length > 0) {
    //                 snapshot.docs.forEach((doc) => {
    //                     setVideos((prev) => {
    //                         return [...prev, doc.data()];
    //                     });
    //                 });
    //             }
    //         });
    // }

    return (
        <div>
            {/* {videos.map((doc, index) => {
                return (
                    <div key={index}>
                        
                        <video controls width="250">
                            <source
                                src={doc.mediaId}
                                type="video/mp4"
                                target="_blank"
                            />
                            Sorry, your browser doesn't support embedded videos.
                        </video>

                       
                        <p>{doc.title}</p>
                        <p>{doc.subtitle}</p>
                    </div>
                );
            })} */}
        </div>
    );
};

export default Videos;
