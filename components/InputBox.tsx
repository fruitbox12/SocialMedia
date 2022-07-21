import Image from "next/image";
import React, { useRef, useState } from "react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";

function InputBox() {
  const inputRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current?.value) return;
  };

  const addImageToPost = (event: any) => {
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.onload = (reqderEvent: any) => {
      setImageToPost(reqderEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          src="https://links.papareact.com/l4v"
          width={40}
          height={40}
          layout="fixed"
          className="rounded-full"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 flex-grow focus:outline-none px-5  "
            type="text"
            placeholder="whats on your mind"
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain" src={imageToPost} />
            <p className="text-xs text-red-50 text-center">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-between p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-400" />
          <p className="text-xs sm:text-xs xl:text-base">Live Video</p>
        </div>
        <div onClick={() => fileRef.current?.click()} className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-xs xl:text-base">Photo/Video</p>
          <input ref={fileRef} onChange={addImageToPost} type="file" hidden />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-xs xl:text-base">Feeling/Ativity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
