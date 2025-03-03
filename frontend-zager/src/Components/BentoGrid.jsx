import React from "react";
import { BentoGrid, BentoGridItem } from "../../src/Components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const ImageHeader = ({ imageUrl }) => (
    <div className="image-header">
      <img 
        src={imageUrl}
        alt="card header"
        className="unsplash-image"
      />
    </div>
  );

export function BentoGridDemo() {
  return (
    (<BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
      ))}
    </BentoGrid>)
  );
}
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  
    {
      title: "Innovation Culture",
      description: "Cultivate a culture of innovation and continuous improvement.",
      header: <ImageHeader imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa" />,
      icon: "💡"
    },
    {
      title: "Tech-Driven Problem Solving",
      description: "Leverage technology to solve complex business challenges.",
      header: <ImageHeader imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c" />,
      icon: "⚡"
    },
    {
      title: "Client-Centric Solutions",
      description: "Deliver tailor-made digital solutions that meet our clients' unique needs.",
      header: <ImageHeader imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3" />,
      icon: "🎯"
    },
    {
      title: "Partnership Building",
      description: "Build long-term partnerships based on trust and exceptional service.",
      header: <ImageHeader imageUrl="https://images.unsplash.com/photo-1521737711867-e3b97375f902" />,
      icon: "🤝"
    },
    {
      title: "Digital Transformation",
      description: "Guide businesses through their digital evolution with cutting-edge solutions.",
      header: <ImageHeader imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" />,
      icon: "🚀"
    },
    {
      title: "Quality Excellence",
      description: "Maintain the highest standards of quality in every project we deliver.",
      header: <ImageHeader imageUrl="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2" />,
      icon: "✨"
    },
    {
      title: "Global Reach",
      description: "Connect businesses with opportunities across borders through innovative technology.",
      header: <ImageHeader imageUrl="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc" />,
      icon: "🌐"
    },
    {
      title: "Sustainable Growth",
      description: "Create scalable solutions that support long-term business sustainability.",
      header: <ImageHeader imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" />,
      icon: "🌱"
    },
    {
      title: "Team Development",
      description: "Foster a collaborative environment where talent thrives and innovation flourishes.",
      header: <ImageHeader imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c" />,
      icon: "👥"
    },
    {
      title: "Future-Ready Solutions",
      description: "Develop adaptable systems that evolve with changing business needs.",
      header: <ImageHeader imageUrl="https://images.unsplash.com/photo-1535378917042-10a22c95931a" />,
      icon: "🔮"
    }
  ];
