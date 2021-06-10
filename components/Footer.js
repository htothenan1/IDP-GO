import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
    return (  
        <footer class="text-gray-600 bg-gray-200 body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href="/" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src="/IDPLogo.jpeg" height={75} width={75} class="rounded-2xl"/>
            </a>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav class="list-none mb-10">
                <li>
                  <Link href="/"><a class="text-gray-600 hover:text-gray-800">Home</a></Link>
                </li>
                <li>
                  <Link href="/about"><a class="text-gray-600 hover:text-gray-800">About Us</a></Link>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav class="list-none mb-10">
                <li>
                  <Link href="/order"><a class="text-gray-600 hover:text-gray-800">Order Now</a></Link>
                </li>
                <li>
                  <Link href="/instructions"><a class="text-gray-600 hover:text-gray-800">Instructions</a></Link>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav class="list-none mb-10">
                <li>
                  <Link href="/faq"><a class="text-gray-600 hover:text-gray-800">FAQ</a></Link>
                </li>
                <li>
                  <Link href="/contact"><a class="text-gray-600 hover:text-gray-800">Contact Us</a></Link>
                </li>
                
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav class="list-none mb-10">
                <li>
                  <Link href="/privacypolicy"><a class="text-gray-600 hover:text-gray-800">Privacy Policy</a></Link>
                </li>
                
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Terms of Service</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center mx-auto">© 2020 IDP GO LLC
            </p>
          </div>
        </div>
      </footer>
    );
}
 
