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
      <span className="flex-1  relative overflow-hidden ">
        <Image
          src={defaultImg.src}
          alt="default"
          fill
          className="transition-all object-contain"
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
      <span className="flex-none  flex justify-between py-5 gap-2">
        {images.map((img, index) => (
          <div
            key={img}
            className={`overflow-hidden relative h-[150px] w-[150px] rounded-md ${
              index === defaultImg.index ? "scale-125 " : ""
            } p-1 hover:cursor-pointer`}
            onClick={() => {
              setDefaultImg({
                src: images[index],
                index,
              });
            }}
          >
            <Image src={img} fill alt="image" className="object-contain" />
          </div>
        ))}
      </span>
    </div>
  );
}

export default ImageCarousel;
