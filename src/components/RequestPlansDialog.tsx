import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { showSuccess } from "@/utils/toast";

type FormData = {
  name: string;
  company: string;
  intendedUse: string;
  sfRequirement: string;
  timing: string;
};

export const RequestPlansDialog = ({
  triggerClassName,
  children,
}: {
  triggerClassName?: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Here you would send data to backend or analytics
    setOpen(false);
    reset();
    showSuccess("Request submitted. We'll be in touch soon.");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span className={triggerClassName}>{children}</span>
      </DialogTrigger>
      <DialogContent className="max-w-md w-full rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle>Request Plans & Pricing</DialogTitle>
          <DialogDescription>
            Get the full offering package. All fields required.
          </DialogDescription>
        </DialogHeader>
        <form
          className="space-y-4 mt-2"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              {...register("name", { required: true })}
              placeholder="Your name"
              autoFocus
              disabled={isSubmitting}
            />
            {errors.name && (
              <span className="text-xs text-red-500">Required</span>
            )}
          </div>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              {...register("company", { required: true })}
              placeholder="Company name"
              disabled={isSubmitting}
            />
            {errors.company && (
              <span className="text-xs text-red-500">Required</span>
            )}
          </div>
          <div>
            <Label htmlFor="intendedUse">Intended Use</Label>
            <Input
              id="intendedUse"
              {...register("intendedUse", { required: true })}
              placeholder="Medical, Retail, etc."
              disabled={isSubmitting}
            />
            {errors.intendedUse && (
              <span className="text-xs text-red-500">Required</span>
            )}
          </div>
          <div>
            <Label htmlFor="sfRequirement">SF Requirement</Label>
            <Input
              id="sfRequirement"
              {...register("sfRequirement", { required: true })}
              placeholder="e.g. 4,000"
              disabled={isSubmitting}
            />
            {errors.sfRequirement && (
              <span className="text-xs text-red-500">Required</span>
            )}
          </div>
          <div>
            <Label htmlFor="timing">Timing</Label>
            <Input
              id="timing"
              {...register("timing", { required: true })}
              placeholder="e.g. Q3 2024, Immediate, Flexible"
              disabled={isSubmitting}
            />
            {errors.timing && (
              <span className="text-xs text-red-500">Required</span>
            )}
          </div>
          <div className="flex gap-2 mt-4">
            <Button
              type="submit"
              className="w-full rounded-full"
              disabled={isSubmitting}
            >
              Submit Request
            </Button>
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                className="rounded-full"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};