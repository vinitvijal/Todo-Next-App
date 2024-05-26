"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import {
  CheckSquare,
  LayoutDashboard,
  ListChecks,
  MoreHorizontalIcon,
  TimerIcon,
} from "lucide-react";
import Link from "next/link";

import React from "react";

function LeftDash() {
  const { user } = useUser();
  return (
    <section className=" w-1/6  flex flex-col relative">
      <div className=" w-full flex justify-evenly items-center flex-col ">
        <img
          src="/TADA.svg"
          alt="TADA"
          className="w-3/4 h-12 mt-4 object-cover"
        />
      </div>
      <div className=" flex justify-center flex-col items-center">
        <SignedIn>
          <div className=" w-[96%] border p-2 rounded-lg flex justify-evenly gap-2 items-center">
            <UserButton />
            <div className=" w-5/6">
              <h1 className=" text-sm font-semibold">
                Welcome {user?.firstName}
              </h1>
              <h1 className=" text-xs text-zinc-600">
                {user?.primaryEmailAddress?.toString()}
              </h1>
            </div>
          </div>
        </SignedIn>
        <SignedOut>
          <div className=" w-[96%] text-lg shadow-sm font-medium border p-2 rounded-lg flex justify-evenly gap-2 items-center">
            <SignInButton />
          </div>
        </SignedOut>

        <div className=" flex w-[96%] flex-col">
          <h1 className=" font-semibold text-zinc-600 p-2">Menu</h1>
          <div className=" flex flex-col  mx-2 gap-2">
            <Link href="#" className=" flex text-sm  text-white bg-orange-400 rounded-lg items-center p-3 gap-2">
              {" "}
              <LayoutDashboard size={20} /> Overview
            </Link>
            <Link href="#" className=" flex items-center text-sm p-3 gap-2">
              {" "}
              <ListChecks size={20}  /> Task List
            </Link>
            <Link href="#" className=" flex items-center text-sm p-3 gap-2">
              {" "}
              <CheckSquare size={20}  /> Completed
            </Link>
            <Link href="#" className=" flex items-center text-sm p-3 gap-2">
              {" "}
              <TimerIcon size={20}  /> In Progess
            </Link>
          </div>
        </div>

        <div className=" flex w-[96%] flex-col">
          <h1 className=" font-semibold text-zinc-600 p-2 border-t">List</h1>
          <div className=" flex flex-col text-sm  mx-2 gap-2 max-h-[50%] pb-10 overflow-y-auto">
            <Link href="#" className=" flex rounded-lg items-center p-3 gap-2">
              {" "}
              ✌️ Personal
            </Link>
            <Link href="#" className=" flex items-center p-3 gap-2">
              {" "}
              👨‍💻 Development
            </Link>
            <Link href="#" className=" flex items-center p-3 gap-2">
              {" "}
              🎨 Paint
            </Link>
            <Link href="#" className=" flex items-center p-3 gap-2">
              {" "}
                🧑‍🎓 Research
            </Link>
            <Link href="#" className=" flex rounded-lg items-center p-3 gap-2">
              {" "}
              ✌️ Personal
            </Link>
            <Link href="#" className=" flex items-center p-3 gap-2">
              {" "}
              👨‍💻 Development
            </Link>
            <Link href="#" className=" flex items-center p-3 gap-2">
              {" "}
              🎨 Paint
            </Link>
            <Link href="#" className=" flex items-center p-3 gap-2">
              {" "}
                🧑‍🎓 Research
            </Link>
            <Link href="#" className=" flex rounded-lg items-center p-3 gap-2">
              {" "}
              ✌️ Personal
            </Link>
            <Link href="#" className=" flex items-center p-3 gap-2">
              {" "}
              👨‍💻 Development
            </Link>
            <Link href="#" className=" flex items-center p-3 gap-2">
              {" "}
              🎨 Paint
            </Link>
            <Link href="#" className=" flex items-center p-3 gap-2">
              {" "}
                🧑‍🎓 Research
            </Link>
            <Link href="#" className=" flex rounded-lg items-center p-3 gap-2">
              {" "}
              ✌️ Personal
            </Link>
            <Link href="#" className=" flex items-center p-3 gap-2">
              {" "}
              👨‍💻 Development
            </Link>
            <Link href="#" className=" flex items-center p-3 gap-2">
              {" "}
              🎨 Paint
            </Link>
            <Link href="#" className=" flex items-center p-3 gap-2">
              {" "}
                🧑‍🎓 Research
            </Link>
          </div>
          <div className=" text-xs font-semibold text-zinc-500 text-center border w-[96%] p-2 absolute bottom-0 rounded-lg mb-2 bg-white">
            Developed with ❤️ By Vinu Code
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftDash;
