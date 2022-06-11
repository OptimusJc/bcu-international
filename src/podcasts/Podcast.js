import "./podcast.modules.css";
import baby_image from "../images/pexels-nappy-935944.jpg";

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
                        <div className="image_cont">
                            <img
                                src={baby_image}
                                alt=""
                                className="featureImage"
                            />
                        </div>
                        <div className="feature_details">
                            <h6 className="h6">{author}</h6>
                            <p>{title}</p>
                            <span>
                                {/* <BiTime className={["clock"]} /> */}
                                {/* {date} */}
                            </span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Podcast;
