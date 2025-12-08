import { Card } from "../ui/card";

export function EASVerificationSkeleton() {
  return (
    <Card className="p-6 border-2 border-gray-200 bg-white">
      {/* Header Skeleton */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-6 w-6 bg-gray-200 rounded animate-pulse" />
            <div className="h-6 w-64 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="h-4 w-96 bg-gray-100 rounded animate-pulse" />
        </div>
        <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse" />
      </div>

      {/* Attestations Grid Skeleton */}
      <div className="grid md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-4 border-2 border-gray-200 bg-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <div className="h-5 w-5 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="flex-1">
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="h-5 w-20 bg-gray-100 rounded-full animate-pulse" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Button Skeleton */}
      <div className="mt-4 text-center">
        <div className="inline-block h-10 w-48 bg-gray-200 rounded animate-pulse" />
      </div>
    </Card>
  );
}
