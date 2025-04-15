import Lottie from "lottie-react";

export function LottieAnimacion({ alto = 120, ancho = 120, animacion }) {
  return (
    <div className="flex justify-center items-center">
      <Lottie
        animationData={animacion}
        loop
        autoplay
        style={{ height: alto, width: ancho }}
      />
    </div>
  );
}
