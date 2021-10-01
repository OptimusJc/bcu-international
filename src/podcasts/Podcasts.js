import { useEffect, useState } from "react";
import db from "../firebase.config";
import ReactPlayer from "react-player";

const Podcasts = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchAll();
    }, []);

    function fetchAll() {
        //e.preventDefault();

        db.collection("songs")
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

    return (
        <div>
            {videos.map((doc, index) => {
                return (
                    <div key={index}>
                        <ReactPlayer
                            url={doc.mediaID}
                            width="400px"
                            height="100px"
                            playing={false}
                            controls={true}
                        />

                        <p>{doc.title}</p>
                        <p>{doc.subtitle}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Podcasts;
