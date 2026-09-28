import { useState } from "react";

function PostComposer() {
  const [post, setPost] = useState("");
  const [platform, setPlatform] = useState("Twitter");

  const limit = platform === "Twitter" ? 280 : 3000;
  const characterCount = post.length;
  const isExceeded = characterCount > limit;

  const handlePostChange = (event) => {
    setPost(event.target.value);
  };

  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  };

  return (
    <div className="composer">
      <h1>Post Composer</h1>

      <label htmlFor="platform">Select Platform</label>
      <select
        id="platform"
        value={platform}
        onChange={handlePlatformChange}
      >
        <option value="Twitter">Twitter</option>
        <option value="LinkedIn">LinkedIn</option>
      </select>

      <label htmlFor="post">Write your post</label>
      <textarea
        id="post"
        value={post}
        onChange={handlePostChange}
        placeholder="Write your post here..."
        rows="8"
      />

      <p className={isExceeded ? "count error-text" : "count"}>
        {characterCount} / {limit} characters
      </p>

      {isExceeded && (
        <p className="error-text">
          Error: Your post exceeds the {limit}-character limit for {platform}.
        </p>
      )}

      <button disabled={isExceeded || post.trim() === ""}>
        Post
      </button>
    </div>
  );
}

export default PostComposer;
