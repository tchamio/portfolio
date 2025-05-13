import Image from "next/image";
import Wr from "@/public/images/wr.png";
import Afma from "@/public/images/afma.png";
import Pics from "@/public/images/picsprint.png";
import Inwi from "@/public/images/inwi.png";
import Livry from "@/public/images/livry.png";
import LZ from "@/public/images/lz.png";

export default function Tutorials() {
  const items = [
    {
      title: "Picsprint",
      link: "https://play.google.com/store/apps/details?id=com.picsprint",
      image: Pics,
    },
    {
      title: "Afma",
      link: "https://play.google.com/store/apps/details?id=com.tsf.afma&hl=fr",
      image: Afma,
    },
    {
      title: "Lyazidi",
      link: "https://play.google.com/store/apps/details?id=com.lyazidi&hl=fr",
      image: LZ,
    },
    {
      title: "Livry",
      link: "https://play.google.com/store/apps/details?id=com.fl.livry",
      image: Livry,
    },
    {
      title: "Inwi",
      link: "#0",
      image: Inwi,
    },
    {
      title: "Weekly Recipes",
      link: "#0",
      image: Wr,
    },
  ];

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Portfolio
      </h2>
      <div className="grid min-[580px]:grid-cols-2 gap-4 group">
        {items.map((item, index) => (
          <article
            key={index}
            className="relative aspect-video rounded-xl shadow-lg overflow-hidden min-[580px]:odd:-rotate-2 min-[580px]:even:rotate-2 even:group-hover:rotate-0 odd:group-hover:rotate-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
          >
            <figure className="absolute inset-0 before:absolute before:inset-0 before:bg-linear-to-t before:to-75% before:from-gray-950/50 before:to-transparent">
              <Image
                className="h-full w-full object-cover"
                src={item.image}
                width={600}
                height={338}
                alt={item.title}
              />
            </figure>
            <div className="relative flex flex-col justify-end h-full w-full px-6 py-5">
              <h3 className="text-sm font-medium text-white">
                <a className="before:absolute before:inset-0" href={item.link}>
                  {item.title}
                </a>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
