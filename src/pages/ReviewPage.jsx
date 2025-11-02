import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: "", comment: "", rating: 0 });
  const [hover, setHover] = useState(0);

  // ✅ Fetch reviews from backend when page loads
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("https://geomax-backend.onrender.com");
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  // ✅ Submit new review
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.comment || formData.rating === 0) {
      alert("Please fill all fields and select a rating!");
      return;
    }

    try {
      const res = await fetch("https://geomax-backend.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          message: formData.comment, // 👈 your backend expects "message"
          rating: formData.rating,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Review submitted successfully!");
        setReviews([data, ...reviews]); // Add new review instantly
        setFormData({ name: "", comment: "", rating: 0 });
        setHover(0);
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("⚠ Failed to submit review. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1e47] via-[#102b72] to-[#1a3fa8] text-white p-8">
      {/* Review Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white/10 backdrop-blur-md border border-white/20 
        rounded-2xl p-8 shadow-lg shadow-blue-500/20 transition-all mb-10"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-300">
          Share Your Experience ✨
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 mb-4 bg-white/10 border border-white/30 rounded-lg 
          text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        {/* Comment */}
        <textarea
          name="comment"
          placeholder="Write your comment..."
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          rows="4"
          className="w-full p-3 mb-4 bg-white/10 border border-white/30 rounded-lg 
          text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
        ></textarea>

        {/* Star Rating */}
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            const isFilled = starValue <= (hover || formData.rating);
            return (
              <Star
                key={index}
                onClick={() => setFormData({ ...formData, rating: starValue })}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
                className={`cursor-pointer w-9 h-9 mx-1 transition-transform duration-300 ${
                  isFilled
                    ? "text-blue-400 scale-110 drop-shadow-[0_0_10px_#60A5FA]"
                    : "text-gray-400"
                }`}
                fill={isFilled ? "#60A5FA" : "none"}
              />
            );
          })}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 rounded-lg font-medium 
          bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-[0_0_15px_#38bdf8]
          transition"
        >
          Submit Review
        </button>
      </form>

      {/* Review List */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-center text-blue-300">
          What People Say 💬
        </h3>

        {reviews.length === 0 ? (
          <p className="text-center text-white/70">
            No reviews yet. Be the first to share your experience!
          </p>
        ) : (
          <div className="space-y-4">
            {reviews.map((rev, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 
                rounded-xl p-4 shadow-md hover:shadow-blue-500/20 transition"
              >
                <div className="flex items-center mb-2">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-blue-400 mr-1" fill="#60A5FA" />
                  ))}
                </div>
                <p className="font-semibold">{rev.name}</p>
                <p className="text-white/80">{rev.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsPage;