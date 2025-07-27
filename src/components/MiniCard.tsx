import type { ReactNode, CSSProperties } from "react";

interface MiniCardProps {
  icon: ReactNode;
  title: string;
  className?: string;
  style?: CSSProperties;
}

const MiniCard = ({ icon, title, className = "", style }: MiniCardProps) => {
  return (
    <div
      className={`rounded-full px-6 py-4 flex items-center gap-4 shadow-md
      bg-gradient-to-b from-[#212121] to-[#111111] 
      border border-[#2a2a2a] backdrop-blur-sm absolute ${className}`}
      style={style}
    >
      <div
        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3D3D3D] to-[#111]
        flex items-center justify-center"
      >
        <div className="w-6 h-6">{icon}</div>
      </div>
      <p className="text-[#DEDEDE] font-medium text-sm whitespace-nowrap">{title}</p>
    </div>
  );
};

export default MiniCard;
