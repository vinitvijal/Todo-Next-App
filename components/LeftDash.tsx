"use client";
import { UserExists } from "@/actions/UserAccountDB";
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
  Plus,
  TimerIcon,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AddNewList, FetchListsById } from "@/actions/Lists";
import { toast } from "sonner";
import { ListTable } from '@prisma/client'


function LeftDash({lists}: {lists: ListTable[]}) {
  const router = useRouter();
  const { user } = useUser();
  const [exist, setexist] = useState(false);

  const [listName, setListName] = useState('');
  if (user && !exist) {
    UserExists(
      user?.id,
      user?.fullName || "user",
      user?.primaryEmailAddress?.emailAddress || " "
    ).then((res) => {
      console.log(res);
      if (res === "created user") {
        router.refresh();
      }
      setexist(true);
    });
  }

  async function createList(){
    if (user){
    const res = await AddNewList(user.id, listName);
    if (res === "success") {
      toast.success(`${listName} - List Added Successfully`);
      router.refresh();
    }
    else {
      toast.error('An error occured. Refresh and try again')
    }
  }else{
  toast.error('An error occured. Refresh and try again')
  }
};

  return (
    <section className=" w-1/6  flex flex-col relative">
      <div className=" w-full flex justify-evenly items-center flex-col ">
        <img
          src="/taskify.svg"
          alt="TADA"
          className="w-3/4 h-16  object-cover"
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
            <Link
              href="#"
              className=" flex text-sm  text-white bg-orange-400 rounded-lg items-center p-3 gap-2"
            >
              {" "}
              <LayoutDashboard size={20} /> Overview
            </Link>
            <Link href="#" className=" flex items-center text-sm p-3 gap-2">
              {" "}
              <ListChecks size={20} /> Task List
            </Link>
            <Link href="#" className=" flex items-center text-sm p-3 gap-2">
              {" "}
              <CheckSquare size={20} /> Completed
            </Link>
            <Link href="#" className=" flex items-center text-sm p-3 gap-2">
              {" "}
              <TimerIcon size={20} /> In Progess
            </Link>
          </div>
        </div>

        <div className=" flex w-[96%] flex-col">
          <h1 className=" font-semibold text-zinc-600 p-2 border-t flex justify-between items-center">
            List
            <Dialog>
              <DialogTrigger asChild>
                <button className=" text-xs text-zinc-500 bg-zinc-200 p-1 rounded-md">
                  <Plus size={15} />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create List 📖</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-left col-span-2">
                      Name of your List
                    </Label>
                    <Input
                      id="name"
                      placeholder="🎨 Painting"
                      className="col-span-2"
                      onChange={(e) => setListName(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose>
                    <Button type="submit" onClick={createList}>Create List</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </h1>
          <div className=" flex flex-col text-sm  mx-2 gap-2 max-h-[50vh] pb-10 overflow-y-auto">            
            {lists &&
              lists.toReversed().map((e, i) => {
                return (
                  <Link key={i} href="/bhjb" className=" flex items-center p-3 gap-2">
                    {" "}
                    {e.listName}
                  </Link>
                );
              })
            }
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
