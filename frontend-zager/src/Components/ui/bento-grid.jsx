import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    (<div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  dark:border-black/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}>
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div
          className="font-sans font-bold text-black mb-2 mt-2">
          {title}
        </div>
        <div
          className="font-sans font-normal text-black text-xs">
          {description}
        </div>
      </div>
    </div>)
  );
};
