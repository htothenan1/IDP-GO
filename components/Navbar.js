import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
    return (
      <header class="bg-gray-200 text-gray-600 body-font ">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href='/'>
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src="/IDPLogo.jpeg" height={110} width={110} class="rounded-2xl"/>
    </a>
    </Link>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href='/'>
      <a class="mr-5 hover:text-indigo-600	">Home</a>
      </Link>
      
      <Link href='/about'>
      <a class="mr-5 hover:text-indigo-600">About us</a>
      </Link>
      
      <Link href="/order">
      <a class="mr-5 hover:text-indigo-600">Order Now</a>
      </Link>
      
      <Link href="/instructions">
      <a class="mr-5 hover:text-indigo-600">Instructions</a>
      </Link>
      
      <Link href="/faq">
      <a class="mr-5 hover:text-indigo-600">FAQ</a>
      </Link>
      
      <Link href="/contact">
      <a class="mr-5 hover:text-indigo-600">Contact us</a>
      </Link>
    </nav>
  </div>
</header>
    )
  }