import React from "react";

export default function Content({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-center mt-6 text-lg leading-8 text-gray-600">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
