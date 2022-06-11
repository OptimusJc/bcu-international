import "./podcast.modules.css";
import Podcast from "./Podcast";

import useFirestore from "../useFirestore";

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
