import { Link } from '@inertiajs/react'
import React from 'react'
import LogoWhite from '../../../../public/Frontend/Images/logowhite.png'

function Footer() {
  return (
    <footer className="bg-[#222443] text-white pt-16 pb-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="fade-right">
                    <div className="text-2xl font-bold mb-6">
                       <img src={LogoWhite} alt="" />
                    </div>
                    <p className="text-gray-400 mb-6">World's Leading Industry Corporation providing one-stop manufacturing solutions with uncompromising quality.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div className="fade-right">
                    <h3 className="text-lg font-bold mb-6">Production</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-white">HPDC</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">CNC</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">GDC</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Painting</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Assembly</a></li>
                    </ul>
                </div>

                <div className="fade-left">
                    <h3 className="text-lg font-bold mb-6">Products</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-white">AL. Wheel general</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Light-weight Products</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Green Energy Products</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Agricultural Products</a></li>
                    </ul>
                </div>

                <div className="fade-left">
                    <h3 className="text-lg font-bold mb-6">Contact</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-start">
                            <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                            <span>No 9, Ho Nai Industrial Zone, Ho Nai 3 Hamlet, Trang Bom District, Dong Nai Province, Vietnam</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-phone-alt mr-3"></i>
                            <span>+84 251 3981689 / 983354</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-fax mr-3"></i>
                            <span>Fax: +84 251 - 3982894</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-envelope mr-3"></i>
                            <span>daisy@cqs-tech.com.tw</span>
                        </li>
                    </ul>
                </div>
            </div>
      <div className="border-t border-gray-600 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} CQS. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-300 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-300 hover:text-white text-sm">Terms of Service</Link>
            <Link to="/sitemap" className="text-gray-300 hover:text-white text-sm">Sitemap</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
