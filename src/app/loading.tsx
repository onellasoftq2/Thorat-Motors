import RoadLoader from "@/components/ui/road-loader";

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background">
      <RoadLoader />
    </div>
  );
}
