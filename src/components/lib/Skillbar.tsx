import React, { useRef, useState, useEffect } from "react";
import "./skillbar.css";

interface skillbarProps {
  name: String;
  level: 1 | 2 | 3 | 4 | 5;
}

export const Skillbar = ({ name, level }: skillbarProps) => {
  return (
    <div className="skill">
      <p>{name}</p>
      <div className="skill_level">
        <span className={`level first ${level >= 1 ? "filled" : ""}`}></span>
        <span className={`level mid ${level >= 2 ? "filled" : ""}`}></span>
        <span className={`level mid ${level >= 3 ? "filled" : ""}`}></span>
        <span className={`level mid ${level >= 4 ? "filled" : ""}`}></span>
        <span className={`level last ${level == 5 ? "filled" : ""}`}></span>
      </div>
    </div>
  );
};

type newSkillbarProps = {
  name: string;
  progress: number;
};

export const NewSkillbar = ({ name, progress }: newSkillbarProps) => {
  const progressBarRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the progress bar is in the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.5 } // Change threshold as needed
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, []);

  const progressWidth = isVisible ? `${progress}%` : "0%";

  return (
    <div className="single_skill">
      <span className="progress_tag">{name}</span>
      <div className="progress_wrapper">
        <span
          className="progress_inner"
          style={{ width: progressWidth }}
          ref={progressBarRef}
        >
          <span className="progress_count">{progress}</span>
        </span>
      </div>
    </div>
  );
};
