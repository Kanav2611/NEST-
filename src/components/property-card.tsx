import Image from "next/image";
import { Property } from "@/lib/types";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="card overflow-hidden">
      <div className="relative h-52 w-full">
        <Image
          src={property.images[0]}
          alt={property.name}
          fill
          className="object-cover"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{property.name}</h3>
            <p className="text-sm text-slate-500">{property.address}</p>
          </div>
          <span className="badge bg-blue-50 text-blue-700">{property.gender}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {property.amenities.slice(0, 4).map((amenity) => (
            <span key={amenity} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-3">
          <p className="text-sm text-slate-500">{property.universityGateDistanceKm} km from university gate</p>
          <p className="text-base font-semibold text-slate-900">Rs {property.rentInr}/mo</p>
        </div>
      </div>
    </article>
  );
}
