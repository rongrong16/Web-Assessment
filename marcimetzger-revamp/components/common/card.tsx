import { ReactNode } from "react";

interface CardProps {
  icon?: ReactNode;
  label: string;
  desc?: string;
  className?: string;
}

export default function Card({ icon, label, desc, className }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1 ${className}`}
    >
      <div className="flex items-center gap-4">
        {icon && (
          <div className="p-3 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-xl">
            {icon}
          </div>
        )}
        <div>
          <p className="text-2xl font-bold text-[#0F172A]">{label}</p>
          {desc && <p className="text-sm text-[#475569]">{desc}</p>}
        </div>
      </div>
    </div>
  );
}
