import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <div className="relative bg-white">
          <div className=" px-4 py-5 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-1 ">
              <nav className=" md:flex space-x-10">
                <div className="relative">
                  <a href="/#/" className="text-base font-medium text-gray-500 hover:text-gray-900"> Trang chủ </a>
                </div>
                <a href="/#/news" className="text-base font-medium text-gray-500 hover:text-gray-900"> Tin Tức </a>
                <a href="/#/products" className="text-base font-medium text-gray-500 hover:text-gray-900"> Sản phẩm </a>
                <div className="relative">
                  <a href="/#/about" className="text-base font-medium text-gray-500 hover:text-gray-900"> Thông tin </a>
                </div>
                <a href="/#/cart" id="cart" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  <img className="h-[30px] w-auto " src="https://res.cloudinary.com/namddph17471/image/upload/v1645069905/add_to_cart_cart_shopping_cart_shopping_cart_icon_icon-1320073116171330767_xybur6.png"  />
                </a>
              </nav>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header