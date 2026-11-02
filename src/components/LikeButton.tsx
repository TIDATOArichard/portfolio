"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

export default function LikeButton() {
  const [likes, setLikes] = useState(42);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLiked = localStorage.getItem("portfolio_user_liked");
    const storedCount = localStorage.getItem("portfolio_likes_count");

    if (storedCount) {
      setLikes(parseInt(storedCount, 10));
    }
    if (storedLiked === "true") {
      setIsLiked(true);
    }
  }, []);

  const handleLike = () => {
    if (isLiked) {
      // Toggle off
      const newCount = Math.max(0, likes - 1);
      setLikes(newCount);
      setIsLiked(false);
      localStorage.setItem("portfolio_user_liked", "false");
      localStorage.setItem("portfolio_likes_count", newCount.toString());
    } else {
      // Like
      const newCount = likes + 1;
      setLikes(newCount);
      setIsLiked(true);
      setIsAnimating(true);
      localStorage.setItem("portfolio_user_liked", "true");
      localStorage.setItem("portfolio_likes_count", newCount.toString());
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  if (!mounted) {
    return (
      <div className="w-36 h-10 rounded-full border border-[#ffffff15] bg-[#1414149c] opacity-50" />
    );
  }

  return (
    <button
      onClick={handleLike}
      className={`group relative h-10 px-5 flex items-center justify-center gap-2.5 rounded-full transition-all duration-300 border-2 select-none ${
        isLiked
          ? "border-[#a476ff] bg-[#a476ff]/10 text-white"
          : "border-[#ffffff15] hover:border-white/50 text-[#f3f3f398] hover:text-white bg-[#1414149c]"
      } ${isAnimating ? "animate-heart-pulse scale-105" : "hover:scale-105"}`}
      aria-label="Aimer ce portfolio"
      title="Aimer ce portfolio"
    >
      <Heart
        className={`w-4 h-4 transition-all duration-300 ${
          isLiked
            ? "fill-[#a476ff] text-[#a476ff] scale-110"
            : "text-[#f3f3f398] group-hover:text-white"
        }`}
      />
      <span className="text-xs font-semibold tracking-wide">
        {likes} {likes > 1 ? "Likes" : "Like"}
      </span>
    </button>
  );
}
