"use client";

import Login from "@/app/ui/login/Login";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const handleClose = (open: boolean) => {
    if (!open) {
      setOpen(false);
      setTimeout(router.back, 200);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogTitle>로그인</DialogTitle>
        <DialogDescription />
        <Login />
      </DialogContent>
    </Dialog>
  );
};

export default Page;
