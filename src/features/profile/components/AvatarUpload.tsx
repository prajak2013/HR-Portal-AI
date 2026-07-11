import { Camera, User } from "lucide-react";

interface AvatarUploadProps {
  image?: string;
}

export default function AvatarUpload({
  image,
}: AvatarUploadProps) {
  return (
    <div className="relative w-fit">
      {image ? (
        <img
          src={image}
          alt="Profile"
          className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg"
        />
      ) : (
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-200 shadow-lg">
          <User
            size={50}
            className="text-slate-500"
          />
        </div>
      )}

      <button
        className="
          absolute
          bottom-1
          right-1
          rounded-full
          bg-blue-600
          p-2
          text-white
          shadow-md
          transition
          hover:bg-blue-700
        "
      >
        <Camera size={16} />
      </button>
    </div>
  );
}