import Image from 'next/image';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex justify-between">
      <div className="bg-[url('/bg3.png')] h-screen bg-no-repeat w-[50%] bg-cover hidden lg:block"></div>
      <div className="flex flex-col items-center mt-40 lg:w-1/2 w-full gap-10 p-2">
        <div>
          <Image
            className="h-16 w-auto"
            src={'/mainlogo.png'}
            width={600}
            height={600}
            alt="UAlgo Logo"
          />
        </div>
        {children}
      </div>
    </section>
  );
}
