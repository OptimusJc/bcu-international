import { useEffect, useState } from "react";
import { fireStore as db } from "../firebase.js";
import ReactPlayer from "react-player";
import useFirestore from "../useFirestore";

import Podcast from "./Podcast";

const Podcasts = () => {
    // * Get docs array from useFirestore
    const featured_data = useFirestore("podcasts/others/other_podcasts");

    return (
        <div className="featured">
            <h3>Podcast</h3>
            <div className="featured-container">
                {featured_data &&
                    featured_data.map((doc) => {
                        const date = doc.createdAt.toDate().toDateString();
                        const title = doc.title;
                        return (
                            <Podcast
                                key={doc.id}
                                doc_id={doc.id}
                                path={doc.url}
                                author={title.split(".")[0]}
                                title={title}
                                date={date}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Podcasts;
