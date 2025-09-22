
export default function ActionButton({ label, href = "#", className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex pl-[14px] py-2 pb-2 pr-2 md:px-[14px] md:py-3 xl:px-4 xl:py-3 
        bg-midnight text-barley-white rounded-full hover:opacity-90 transition 
        text-h-1 items-center text-base gap-3 lg:text-[18px] h-12 lg:h-14 xl:ml-0 ${className}`}
    >
      {label}
      <div className="bg-secondary rounded-full w-8 h-8 flex items-center justify-center transition-transform">
        <img
          src="/arrow.svg"
          alt="arrow icon"
          className="bg-secondary w-[10px] h-[10px] stroke-[1.5px]"
        />
      </div>
    </a>
  );
}
