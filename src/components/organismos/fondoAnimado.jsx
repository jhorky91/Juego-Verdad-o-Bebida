import cerdon from "../../assets/cerdon.png";

export function Fondoanimado() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[1] pointer-events-none">
      <ul className="relative w-full h-full">
        <li className="absolute left-[10%] bottom-[-100px] w-[30px] h-[30px] bg-[#57108d] rounded-full opacity-50 animate-float2" />
        <li className="absolute left-[25%] bottom-[-100px] w-[80px] h-[80px] bg-[#57108d] rounded-full opacity-40 animate-float2 delay-[2s]" />
        <li className="absolute left-[70%] bottom-[-100px] w-[20px] h-[20px] bg-[#4c4c4c] rounded-full opacity-30 animate-float2 delay-[4s] duration-[14s]" />
        <li className="absolute left-[40%] bottom-[-100px] w-[60px] h-[60px] bg-[#6a6a6a] rounded-full opacity-40 animate-float2 duration-[18s]" />
        <li className="absolute left-[65%] bottom-[-100px] w-[20px] h-[20px] bg-[#4c4c4c] rounded-full opacity-30 animate-float2 delay-[1s] duration-[16s]" />
        <li className="absolute left-[75%] bottom-[-100px] w-[110px] h-[110px] bg-[#999999] rounded-full opacity-50 animate-float2 delay-[3s] duration-[22s]" />
        <li className="absolute left-[35%] bottom-[-100px] w-[150px] h-[150px] bg-[#4c4c4c] rounded-full opacity-50 animate-float2 delay-[7s] duration-[25s]" />
        <li className="absolute left-[50%] bottom-[-100px] w-[25px] h-[25px] bg-[#57108d] rounded-full opacity-40 animate-float2 delay-[15s] duration-[30s]" />
        <li className="absolute left-[20%] bottom-[-100px] w-[15px] h-[15px] bg-[#aaa] rounded-full opacity-20 animate-float2 delay-[2s] duration-[35s]" />
        <li className="absolute left-[85%] bottom-[-100px] w-[150px] h-[150px] bg-[#4c4c4c] rounded-full opacity-50 animate-float2 duration-[11s]" />
        {/* Extra elemento decorativo */}
        <li className="absolute left-[5%] top-[10%] w-[30px] animate-float2">
          <img src={cerdon} className="w-full opacity-70" />
        </li>
      </ul>
    </div>
  );
}
