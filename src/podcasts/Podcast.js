import "./podcast.modules.css";

const Podcast = ({ title, author, date, path, doc_id }) => {
    return (
        <div className="feature">
            <ul>
                <li>
                    <a
                        href={`/download/${doc_id}`}
                        state={{
                            document_title: { title },
                            document_author: { author },
                            document_url: { path },
                        }}
                    >
                        <img
                            src="https://via.placeholder.com/300x200"
                            alt=""
                            className="featureImage"
                        />
                        <div>
                            <h6 className="h6">{author}</h6>
                            <p>{title}</p>
                            <span>
                                {/* <BiTime className={["clock"]} /> */}
                                {date}
                            </span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Podcast;
