import { Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <div className="pt-16">
      <Loader2Icon
        role="status"
        aria-label="Loading"
        className={cn("size-10 animate-spin flex place-self-center", className)}
        {...props}
      />
    </div>
  );
}

export { Spinner };
