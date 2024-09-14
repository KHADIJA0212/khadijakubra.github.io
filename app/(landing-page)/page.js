import { HugeHeading } from "../components/HugeHeading";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 place-items-center md:mt-20">
          <div className="mt-20 md:mt-0">
            <h1>Hello!</h1>
            <h2>I am Khadija Tul Kubra, a visual designer</h2>
          </div>
          <div className="bg-red-200 flex w-full h-[40rem]"></div>
        </div>
      </section>
      <section className="clients-love-section">
        <div className="flex justify-center">
          <HugeHeading></HugeHeading>
        </div>
      </section>
      <section className="hire-me-section">
        <div className="shadow-2xl rounded-3xl m-10 bg-stone-100 h-[40rem]">
          <div className="grid grid-cols-2 place-items-center h-full">
            <div>hi</div>
            <div>Over here</div>
          </div>
        </div>
      </section>
    </>
  );
}