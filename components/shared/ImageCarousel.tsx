"use client";
import React, { useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Button } from "../ui/button";
function ImageCarousel({ images }: { images: string[] }) {
  const [defaultImg, setDefaultImg] = useState({
    src: images[0],
    index: 0,
  });
  return (
    <div className="flex flex-col h-[700px]">
      <span className="flex-1 border relative ">
        <Image
          src={defaultImg.src}
          alt="default"
          fill
          className="transition-all"
        />
        <Button
          className="absolute right-0 rounded-full top-56"
          variant={"outline"}
          size={"icon"}
          onClick={() => {
            if (defaultImg.index === images.length - 1) {
              setDefaultImg({
                src: images[0],
                index: 0,
              });
              return;
            }
            setDefaultImg({
              src: images[defaultImg.index + 1],
              index: defaultImg.index + 1,
            });
          }}
        >
          <ArrowRightIcon />
        </Button>
        <Button
          className="absolute left-0 rounded-full top-56"
          variant={"outline"}
          size={"icon"}
          onClick={() => {
            if (defaultImg.index === 0) {
              setDefaultImg({
                src: images[images.length - 1],
                index: images.length - 1,
              });
              return;
            }
            setDefaultImg({
              src: images[defaultImg.index - 1],
              index: defaultImg.index - 1,
            });
          }}
        >
          <ArrowLeftIcon />
        </Button>
      </span>
      <span className="flex-none border flex justify-between py-5 gap-2">
        {images.map((img, index) => (
          <div
            key={img}
            className={`${
              index === defaultImg.index ? "shadow-2xl " : ""
            } p-1 hover:cursor-pointer`}
          >
            <Image src={img} width={100} height={100} alt="image" />
          </div>
        ))}
      </span>
    </div>
  );
}

export default ImageCarousel;
