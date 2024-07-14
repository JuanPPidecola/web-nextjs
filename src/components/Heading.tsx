import React from 'react'

function Heading({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="bg-white pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                <h1 className="text-center mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {children}
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Heading