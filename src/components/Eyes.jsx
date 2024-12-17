import React, { useEffect, useState } from "react";

function Eyes() {
  const [eyes, setEyes] = useState({ left: { x: 0, y: 0 }, right: { x: 0, y: 0 } });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Get the mouse position
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate eye positions and bounds
      const leftEye = document.getElementById("left-eye");
      const rightEye = document.getElementById("right-eye");

      const calculatePupilPosition = (eyeElement) => {
        const rect = eyeElement.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const deltaX = mouseX - eyeCenterX;
        const deltaY = mouseY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);

        // Limit the pupil movement to within the eye boundary
        const maxDistance = rect.width / 4; // Adjust this to control the pupil's max movement
        const distance = Math.min(maxDistance, Math.sqrt(deltaX ** 2 + deltaY ** 2));

        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        };
      };

      setEyes({
        left: calculatePupilPosition(leftEye),
        right: calculatePupilPosition(rightEye),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="eyes w-full h-screen flex items-center justify-center bg-gray-200"
      style={{
        backgroundImage: `url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* First Eye */}
      <div 
        id="left-eye"
        className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100 relative"
      >
        <div
          className="pupil w-1/3 h-1/3 rounded-full bg-zinc-900 absolute"
          style={{
            transform: `translate(${eyes.left.x}px, ${eyes.left.y}px)`,
          }}
        ></div>
      </div>

      {/* Second Eye */}
      <div
        id="right-eye"
        className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100 relative ml-10"
      >
        <div
          className="pupil w-1/3 h-1/3 rounded-full bg-zinc-900 absolute"
          style={{
            transform: `translate(${eyes.right.x}px, ${eyes.right.y}px)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Eyes;
