"use client";
import { useState, useEffect } from "react";
import fs from "fs/promises";
export default function Home() {
  const initialText = "Hello, welcome to the profile.";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [content, setContent] = useState("");

  useEffect(() => {
    async function getTextContent() {
      try {
        const response = await fetch("/text.txt"); // เราใช้เส้นทางเรียกไฟล์โดยตรง
        if (!response.ok) {
          throw new Error("Failed to fetch text content.");
        }
        const textContent = await response.text();
        return textContent;
      } catch (error) {
        console.error("Error fetching text content:", error);
        return "";
      }
    }
    getTextContent().then((textContent) => {
      setContent(textContent);
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < initialText.length) {
        setText((prevText) => prevText + initialText.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
        setIndex(0);
        setText("");
      }
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, [index]);

  return (
    <>
      <div className=" text-center text-5xl mt-24 h-10">
        <p>{text}</p>
      </div>
      <div className=" mt-20 p-10 content w-5/6">{content}</div>
    </>
  );
}
