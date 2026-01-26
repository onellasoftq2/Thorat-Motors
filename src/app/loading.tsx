import LiquidLoading from "@/components/ui/liquid-loader";

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background">
      <LiquidLoading />
    </div>
  );
}
