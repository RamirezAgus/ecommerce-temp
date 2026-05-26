"use client";

import { CldUploadWidget } from "next-cloudinary";

type Props = {
  onUpload: (url: string) => void;
};

export default function ImageUpload({ onUpload }: Props) {
  return (
    <CldUploadWidget
      uploadPreset="ecommerce_upload"
      onSuccess={(result) => {
        if (
          typeof result.info === "object" &&
          result.info !== null &&
          "secure_url" in result.info
        ) {
          onUpload(result.info.secure_url as string);
        }
      }}
    >
      {({ open }) => {
        return (
          <button
            type="button"
            onClick={() => open()}
            className="
                        px-4
                        py-3
                        rounded-xl
                        bg-primary
                        text-white
                    "
          >
            Upload an Image
          </button>
        );
      }}
    </CldUploadWidget>
  );
}
