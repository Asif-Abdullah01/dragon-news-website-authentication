import { FaShareAlt, FaRegEye, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = (props = {}) => {
    const { news } = props || {};

    return (
        <div className=" p-4 bg-white rounded-lg shadow-md">
            {/* Author Information */}
            <div className="flex items-center mb-4">
                <img
                    src={news.author.img}
                    alt={news.author.name}
                    className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                    <p className="font-semibold">{news.author.name}</p>
                    <p className="text-sm text-gray-500">{news.author.published_date}</p>
                </div>
                <div className="ml-auto">
                    <FaShareAlt className="text-gray-600" />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold mb-2">{news.title}</h2>

            {/* Thumbnail Image */}
            <img
                src={news.image_url}
                alt="Thumbnail"
                className="w-full  object-cover rounded-lg mb-4"
            />

            {/* Details */}
            <p className="text-gray-700 text-sm mb-4">
                {news.details.slice(0, 150)}...{" "}
                <span className="text-primary">Read More</span>
            </p>

            {/* Ratings and Views */}
            <div className="flex items-center justify-between text-gray-600 text-sm">
                {/* Rating */}
                <div className="flex gap-x-3 items-center mb-4">
                    <Rating
                        initialRating={news.rating.number}
                        readonly={true}
                        fullSymbol={<FaStar size={20} color="gold"></FaStar>}
                        emptySymbol={<FaStar size={20} color="gray"></FaStar>}
                    ></Rating>
                    <p className="font-semibold"> {news.rating.number} </p>
                </div>

                {/* Views */}
                <div className="flex items-center">
                    <FaRegEye className="mr-1" />
                    <span>{news.total_view}</span>
                </div>
            </div>
        </div>
    );
};
export default NewsCard;

