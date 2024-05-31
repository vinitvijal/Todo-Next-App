import Link from "next/link";
export const dynamic = 'force-dynamic'


export default async function Home() {

  return (
   <main className=" min-h-screen bg-zinc-900 relative">
      <header className=" h-16 bg-white rounded-md w-full border-b shadow-md">
        <img src="/taskify1.png" alt="" className=" h-full ml-4" />
      </header>
      <section className=" absolute top-0  h-screen w-full gap-9 flex justify-evenly items-center">
        <img src="/sidebar.svg" alt="" className=" h-1/2 w-1/3" />
        <div className=" w-1/3 flex flex-col gap-3">
          <h1 className=" text-5xl font-bold text-orange-400">Taskify</h1>
          <h1 className=" text-2xl font-semibold">Your personal task manager</h1>
          <p className=" text-base font-light">Taskify is a simple task manager that helps you keep track of your daily tasks. It helps you keep track of your tasks and helps you manage your time efficiently.</p>
          <Link href={'/dashboard'} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Get Started
        </span>
      </Link>
        </div>
        <div className=" absolute bottom-4 font-semibold">
         Note: I will design this page later.
        </div>
      </section>
   </main>
  );
}
