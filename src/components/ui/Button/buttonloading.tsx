import { Loader2 } from "lucide-react";

import { Button, ButtonProps } from "@/components/ui/Button/button";

interface LoadingButtonProps extends ButtonProps {
  loadingText?: string;
  isLoading?: boolean;
}

export function ButtonLoading({
  loadingText,
  isLoading,
  ...props
}: LoadingButtonProps) {
  if (!isLoading) return <Button {...props} />;

  return (
    <Button disabled {...props}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      {loadingText ?? "wait..."}
    </Button>
  );
}
