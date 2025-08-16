import React from "react";
import "../styles/ProfileImage.css";

interface ProfileImageProps {
  src?: string;
  alt?: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src = "/profile-placeholder.jpg",
  alt = "Profile Picture",
  size = "large",
  className = "",
}) => {
  // Create proper URL with base path
  const getImageUrl = (imagePath: string) => {
    if (imagePath.startsWith("http") || imagePath.startsWith("data:")) {
      return imagePath;
    }
    // Remove leading slash and add base URL
    const cleanPath = imagePath.startsWith("/")
      ? imagePath.slice(1)
      : imagePath;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  return (
    <div className={`profile-image-container ${size} ${className}`}>
      <div className="profile-image-wrapper">
        <img
          src={getImageUrl(src)}
          alt={alt}
          className="profile-image"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.currentTarget.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjhGOUZBIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjcwIiByPSIzMCIgZmlsbD0iIzZDNzU3RCIvPgo8cGF0aCBkPSJNNTAgMTcwQzUwIDEzNi44NjMgNzYuODYyOSAxMTAgMTEwIDExMEMxNDMuMTM3IDExMCAxNzAgMTM2Ljg2MyAxNzAgMTcwSDE1MEMxNTAgMTQ3LjkwOSAxMzIuMDkxIDEzMCAxMTAgMTMwQzg3LjkwODYgMTMwIDcwIDE0Ny45MDkgNzAgMTcwSDUwWiIgZmlsbD0iIzZDNzU3RCIvPgo8L3N2Zz4K";
          }}
        />
        <div className="profile-image-border"></div>
        <div className="profile-image-glow"></div>
      </div>
    </div>
  );
};

export default ProfileImage;
