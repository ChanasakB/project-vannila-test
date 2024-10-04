import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { PrevClick } from "./PrevClick";
import { NextClick } from "./NextClick";
import { DotComponent } from "./DotComponent";

export const images = [
  { src: "/carousel/step-leave-type 1.svg", alt: "Image 1" },
  { src: "/carousel/step-approved.svg", alt: "Image 2" },
  { src: "/carousel/step-approve-alert.svg", alt: "Image 3" },
];
export const dots = [
  { color: "gray-400", id: 1 },
  { color: "gray-400", id: 2 },
  { color: "gray-400", id: 3 },
];
export const CarouselBar = () => {
  const [progress, setProgress] = useState(0);
  const [progressStyle, setProgressStyle] = useState("w-0");
  const [activeImage, setActiveImage] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  const touchStartRef = useRef(0);

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (window.innerWidth < 768) {
      const touchEnd = e.touches[0].clientX;
      const touchDiff = touchStartRef.current - touchEnd;
  
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (touchDiff > 50) {
          if (activeImage < images.length - 1) {
            setActiveImage((prev) => prev + 1);
            updateProgress(activeStep + 1);
            if (progress === 100) {
              setProgress(50);
              setProgressStyle("animation-full-revert");
            }
          }
        } else if (touchDiff < 100) {
          if (activeImage > 0) {
            setActiveImage((prev) => prev - 1);
            updateProgress(activeStep - 1);
            setProgressStyle("animation-full-revert");
            if (progress === 50) {
              setProgress(0);
              setProgressStyle("animation-1-2-revert");
            }
          }
        }
      }, 300); 
    }
  };

  const timeoutRef = useRef(null);

  const updateProgress = (step) => {
    if (step === 1) {
      setProgress(0);
      setProgressStyle("w-0");
    } else if (step === 2) {
      setProgress(50);
      setProgressStyle("animation-1-2");
    } else if (step === 3) {
      setProgress(100);
      setProgressStyle("animation-full");
    }
    setActiveStep(step);
  };
  return (
    <div
      className={`w-[335px] h-[483px] md:w-[552px] md:h-[423px] bg-[#DEEDFF] rounded-[10px] drop-shadow-md flex justify-between `}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <PrevClick
        progress={progress}
        setProgress={setProgress}
        setProgressStyle={setProgressStyle}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        setActiveImage={setActiveImage}
      />

      <div className={`flex flex-col justify-around md:justify-between `}>
        <div
          className={` border-b-[10px] border-white w-[208px]  mt-[45px] mx-auto relative `}
        >
          <div
            className={`border-b-[10px] border-[#4C71F1] ${progressStyle} absolute`}
          />
          <div
            className={`top-5 left-0 -translate-x-1/2 -translate-y-1/2  absolute flex flex-col justify-center items-center`}
          >
            <div
              className={`w-[30px] h-[30px] bg-[#4C71F1] rounded-[100%] flex justify-center items-center`}
            >
              <Image
                src={`/carousel/iconn1.${activeStep}.svg`}
                width={15}
                height={15}
                alt="1"
              />
            </div>
            <p
              className={`text-[16px]  w-[80px] text-center font-semibold mt-[10px] text-[#4C71F1] font-anuphan`}
            >
              แจ้งวันลา
            </p>
          </div>
          <div
            className={`top-5 left-[50%] -translate-x-1/2 -translate-y-1/2  absolute flex flex-col justify-center items-center `}
          >
            <Image
              src={`/carousel/iconn2.${activeStep}.svg`}
              width={30}
              height={30}
              alt="1"
            />
            <p
              className={`text-[16px] font-anuphan w-[90px] text-center font-semibold mt-[10px] ${
                activeStep >= 2 ? "text-[#4C71F1]" : ""
              }`}
            >
              อนุมัติวันลา
            </p>
          </div>
          <div
            className={`top-5 left-[100%] -translate-x-1/2 -translate-y-1/2  absolute flex flex-col justify-center items-center `}
          >
            <Image
              src={`/carousel/iconn3.${activeStep}.svg`}
              width={30}
              height={30}
              alt="1"
            />
            <p
              className={`text-[16px] w-[80px] text-center font-semibold mt-[10px] font-anuphan ${
                activeStep === 3 ? "text-[#4C71F1]" : ""
              }`}
            >
              พักร้อน!
            </p>
          </div>
        </div>
        <div>
          <Image
            src={images[activeImage].src}
            alt={images[activeImage].alt}
            width={293}
            height={301}
            className={`pt-[30px] md:pt-[0]`}
          />
        </div>
        <DotComponent
          setProgressStyle={setProgressStyle}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          setActiveImage={setActiveImage}
          dots={dots}
        />
      </div>
      <NextClick
        progress={progress}
        setProgress={setProgress}
        setProgressStyle={setProgressStyle}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        setActiveImage={setActiveImage}
      />
    </div>
  );
};
