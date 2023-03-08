import * as React from 'react'

const IndexPage = () => {
  return (
    <div className="bg-white text-dark raleway">
      {/* Global Navs */}
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:pl-28 py-6 px-6 items-center">
        <div className="text-left">Soundshape</div>
        <div className="hidden lg:block">
          <a href="" className="pr-20">
            Home
          </a>
          <a href="" className="">
            Support
          </a>
          <a href="" className="pl-20">
            Service
          </a>
        </div>
        {/* Product Button */}
        <div className="text-right lg:pr-28">
          <button href="" className="bg-gray-100 px-8 py-3">
            <b>Our Products</b>
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="pt-20 lg:pt-28 grid lg:grid-cols-2 lg:gap-20 lg:pl-20 lg:pr-18">
        {/* Left Side */}
        <div className="px-6">
          <h1 className="michroma text-7xl">
            Collect
            <br /> Your Rare
            <br /> NFT Here! *
          </h1>
          <div className="grid grid-cols-2 pt-20 gap-20">
            <div>
              <b className="text-lg">Set Up Wallet</b>
              <p className="mt-5">
                Set up your own wallet through our protected system.
              </p>
            </div>
            <div>
              <b className="text-lg">Collection</b>
              <p className="mt-5">
                Add your favourite NFT to your collection from now!
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <div className="grid grid-cols-2 pt-20 px-6">
            <img src="" alt="icons" />
            <p className="text-sm">
              <b>800+</b> Users
              <br /> Available Here
            </p>
          </div>
          <p className="pt-8 pb-20 lg:pb-10 px-6">
            Get your own NFT here! We provide best
            <br /> service marketplace 2022
          </p>
          <div className="grid lg:grid-cols-2">
            <div className="bg-lime-300 px-6 lg:px-10 py-20">
              <p className="michroma text-4xl">
                See <br /> Bundle
              </p>
              <p className="uppercase text-sm pt-6">Aprodhium Bundle</p>
            </div>
            <div className="bg-black px-6 lg:px-10 py-28 hidden lg:block"></div>
          </div>
        </div>
      </div>

      {/* Exclusive Bundle */}
      <div className="bg-black grid lg:grid-cols-2 px-6 lg:px-20 py-28 lg:gap-20 text-white">
        {/* Right side */}
        <div className="">
          <p className="michroma text-5xl">
            Aprodhium
            <br /> Exclusive Bundle
          </p>
          <p className="py-10">
            See our new bunding now "Aprodhium". The new NFT collection that
            will go to the moon for the next entire years. See complete package
            containing lot of the type NFT inside.
          </p>
          <div className="">
            <button className="bg-lime-300 text-black py-3 px-8">
              <b>Discover Now</b>
            </button>
            <button className="pl-8 text-lime-300">
              <b>See Other</b>
            </button>
          </div>
        </div>

        {/* Left Side */}
        <div>img</div>
      </div>

      {/* Featured Works */}
      <div className="bg-black grid lg:grid-cols-2 px-6 lg:px-20 py-28 lg:gap-20 text-white">
        {/* Left Side */}
        <div>img</div>

        {/* Right Side */}
        <div className="">
          <p className="michroma text-5xl">
            Featured
            <br /> Works *
          </p>
          <p className="py-10">
            Here is the new NFTs featured works from our top creator this month.
            Check it and place your bid.
          </p>

          {/* Creator */}
          <div className="grid grid-cols-2">
            <div className="py-3">
              <p className="text-xl">
                <b>Pink Kamakuri</b>
              </p>
              <p className="text-sm">14 Edition Marked</p>
            </div>
            <div className="grid grid-cols-2">
              <img src="" alt="icon" />
              <div>
                <p className="text-sm">Creator</p>
                <p className="text-xl">
                  <b>Parjow</b>
                </p>
              </div>
            </div>
          </div>

          {/* Bid */}
          <div className="grid grid-cols-2 items-center py-10">
            <div>
              <p className="text-sm">Starting Bid</p>
              <p className="text-lime-300 text-3xl">
                <b>1.5M</b>
              </p>
            </div>
            <div>
              <button className="bg-lime-300 text-black py-4 px-8">
                <b>Place Bid</b>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Discover Now */}
      <div className="bg-gray-100 pt-28 px-6 lg:px-28">
        <div className="text-center">
          <p className="michroma text-5xl">Discover Now!</p>
          <p className="py-10">
            Discover and find your NFTs collection and bid yours
            <br /> from the list below
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 pt-10 pb-20 gap-16">
          <div>
            <div className="bg-lime-200">
              <img src="" alt="bg-image" />
            </div>
            <div className="bg-white p-6">
              <div className="grid grid-cols-2 items-center">
                <div>
                  <p className="text-lg">
                    <b>Pink Kamakuri</b>
                  </p>
                  <p className="text-sm">14 Edition Marked</p>
                </div>
                <div className="text-right">
                  <p>
                    <b className="text-4xl pr-2">2.5</b>MYR
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 items-center pt-6">
                <div>
                  <img src="" alt="icons" />
                </div>
                <div className="text-right text-sm">
                  <p>14 Edition Marked</p>
                </div>
              </div>
            </div>
          </div>
          <div>2</div> <div>3</div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Test Page</title>
