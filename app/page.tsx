import { Divide } from "lucide-react";
import Image from "next/image";

const bubble = [{ title: "lactofree" }, { title: "vigan" }, { title: "alergie" }];
const lists = [
  {
    cafename: "lactofree",
    time: "09:00 - 17:00",
    tag1: "alergie",
    tag2: "vigan",
    tag3: "lacto",
    image: "imgURL",
  },
  {
    cafename: "lactofree1",
    time: "vigan",
    tag1: "alergie",
    tag2: "vigan",
    tag3: "lacto",
    image: "imgURL",
  },
  {
    cafename: "lactofree3",
    time: "vigan",
    tag1: "alergie",
    tag2: "vigan",
    tag3: "lacto",
    image: "imgURL",
  },
  {
    cafename: "lactofree3",
    time: "vigan",
    tag1: "alergie",
    tag2: "vigan",
    tag3: "lacto",
    image: "imgURL",
  },
  {
    cafename: "lactofree3",
    time: "vigan",
    tag1: "alergie",
    tag2: "vigan",
    tag3: "lacto",
    image: "imgURL",
  },
  {
    cafename: "lactofree3",
    time: "vigan",
    tag1: "alergie",
    tag2: "vigan",
    tag3: "lacto",
    image: "imgURL",
  },
  {
    cafename: "lactofree3",
    time: "vigan",
    tag1: "alergie",
    tag2: "vigan",
    tag3: "lacto",
    image: "imgURL",
  },
  {
    cafename: "lactofree3",
    time: "vigan",
    tag1: "alergie",
    tag2: "vigan",
    tag3: "lacto",
    image: "imgURL",
  },
  {
    cafename: "lactofree3",
    time: "vigan",
    tag1: "alergie",
    tag2: "vigan",
    tag3: "lacto",
    image: "imgURL",
  },
  {
    cafename: "lactofree3",
    time: "vigan",
    tag1: "alergie",
    tag2: "vigan",
    tag3: "lacto",
    image: "imgURL",
  },
  {
    cafename: "lactofree3",
    time: "vigan",
    tag1: "alergie",
    tag2: "vigan",
    tag3: "lacto",
    image: "imgURL",
  },
  {
    cafename: "lactofree3",
    time: "vigan",
    tag1: "alergie",
    tag2: "vigan",
    tag3: "lacto",
    image: "imgURL",
  },
  {
    cafename: "lactofree3",
    time: "vigan",
    tag1: "alergie",
    tag2: "vigan",
    tag3: "lacto",
    image: "imgURL",
  },
];

export default function Home() {
  return (
    <main className='flex flex-col max-w-xl min-h-screen m-auto bg-gray-300'>
      <div className='flex my-4'>
        {bubble.map((item) => (
          <div className='p-2 mr-2 ' key={item.title}>
            <button className='w-auto btn btn-md rounded-3xl'># {item.title}</button>
          </div>
        ))}
      </div>
      <div className='w-50% flex flex-col justify-center p-3'>
        {lists.map((item) => (
          <div key={item.cafename} className='flex flex-row my-2'>
            <figure>
              <img src='/IMG_DDF3C1AD2182-1.jpeg' alt='Movie' className='w-32 h-40 ' />
            </figure>
            <div className='p-2 card-body'>
              <h2 className='card-title'>{item.cafename}</h2>
              <div className='flex flex-row'>
                <img src='/IMG_DDF3C1AD2182-1.jpeg' alt='Movie' className='w-4 h-4' />
                <p className='ml-2'>{item.time}</p>
              </div>
              <div className='flex-wrap justify-start w-56 card-actions'>
                <button className='w-auto btn btn-md rounded-3xl'># Lacto</button>
                <button className='w-auto btn btn-md rounded-3xl'># Vigan</button>
                <button className='w-auto btn btn-md rounded-3xl'># Alergie</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
