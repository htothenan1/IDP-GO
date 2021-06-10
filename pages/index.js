import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
        <title>IDP GO</title>
        <link rel="icon" href="/IDPLogo.jpeg" />
        <link href="https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap" rel="stylesheet" />
      </Head>
          <h1 class="text-center mx-auto my-10 text-5xl">Expedited International Driving Permit</h1>
      <section class="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
        <div class="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div class="lg:w-1/2">
                <div class="h-64 bg-cover lg:rounded-lg lg:h-full" style={{backgroundImage : `url("https://images.unsplash.com/photo-1590761697430-e6845a05d987?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxyZW50YWwlMjBjYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`}}></div>
            </div>

            <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2 text-center mx-auto">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">Drive anywhere in the world</h2>
                <p class="mt-4 text-gray-600 dark:text-gray-400">The IDP (International Driving Permit) is an official translation of your valid US Driver’s License. 
                Based on the UN Convention of Road Traffic (19 September 1949), an IDP is the only valid document 
                that is needed, along with your valid US Driver’s License, to legally drive in over 150 countries. 
                If you are driving overseas without an IDP, the risks include not being able to rent the car of 
                your choice, or possible fines from police.</p>
                
                <div class="mt-8">
                    <a href="#" class="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700 ">Order Now</a>
                </div>
            </div>
        </div>
    </section> 
       {/* <div class="text-center my-10">
           <img class="h-100 w-3/4 mx-auto rounded-sm" src="colorfulCars.jpeg" />
           <button class="px-4 py-2 my-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">Order Now!</button>
           </div> */}
           {/* <div class="text-center my-10">
           <h2 class="text-center text-4xl">What is an IDP, and why should I have one?</h2>
           <p class="text-center text-2xl w-3/4 mx-auto">The IDP (International Driving Permit) is an official translation of your valid 
               US Driver’s License. Based on the UN Convention of Road Traffic (19 September 1949), 
               an IDP is the only valid document that is needed, along with your valid US Driver’s License, 
               to legally drive in over 150 countries. If you are driving overseas without an IDP, 
               the risks include not being able to rent the car of your choice, or possible fines from police. 
               For a list of countries that honor the IDP, click below:</p>
               <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">List of Countries</button>
            </div> */}
            <div>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
  <h2 class="text-center text-4xl my-10 px-10 py-2">How to get your Official IDP</h2>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <h1 class="text-6xl">#1</h1>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Place an order and complete IDP application form
</h2>
        <p class="leading-relaxed text-base">Fill out our online order form. Print and fill out the AAA IDP application form.

</p>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Email us your documents!</h2>
        <p class="leading-relaxed text-base">Take a picture (or scan) the necessary documents and send them to DOCUMENTS@IDPGO.COM</p>
      </div>
      <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <h1 class="text-6xl">#2</h1>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <h1 class="text-6xl">#3</h1>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Receive your IDP 2-4 business days later!</h2>
        <p class="leading-relaxed text-base">Sit back, relax. Receive your official IDP 2-4 days later via FedEx Priority Overnight service.</p>
      </div>
    </div>
  </div>
</section>
            </div>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Why Choose IDP GO</h1>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:opacity-100">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Quick Processing</h1>
            <p class="leading-relaxed">We will do everything we can to get you your IDP before you leave on your trip!</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:opacity-100">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Don't leave home</h1>
            <p class="leading-relaxed">Send all of your documents without leaving the comfort of home!</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:opacity-100">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">24/7 availability</h1>
            <p class="leading-relaxed">Our dedicated team is available around the clock!</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:opacity-100">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">International Shipping</h1>
            <p class="leading-relaxed">Already overseas? No problem! We offer shipping to anywhere in the world!</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:opacity-100">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Take your own photo</h1>
            <p class="leading-relaxed">Save money by creating your own passport style photo! We'll print it for you!</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          {/* <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366" /> */}
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:opacity-100">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Drive Legally</h1>
            <p class="leading-relaxed">The IDP allows you to drive legally in over 150 countries worldwide!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        <div class="text-center my-10">
            <img class="mx-auto" src="secure-checkout.jpeg"/>
            <img class="mx-auto" src="fedex.png"/>
        </div>
    </>
  )
}
