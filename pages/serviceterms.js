import Head from 'next/head'

const ServiceTerms = () => {
    return (
        <div>
            <Head>
        <title>Terms of Service</title>
        <link rel="icon" href="/IDPLogo.jpeg" />
        <link href="https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap" rel="stylesheet" />
      </Head>

            <div class="sm:w-3/5 m:w-3/5 text-center mx-auto my-7">
            <h1 class="text-4xl">Terms of Service</h1>
            <br />
            <p class="text-1xl">At IDP GO LLC, we have one simple goal: We help get your International Driving Permit, 
                fast and easy! As a registered professional courier service based out of Manhattan, 
                New York, we are singularly committed to making the process of obtaining your IDP 
                as easy as possible. From helping you fill out the application correctly, 
                to submitting the documentation on your behalf, to overnight shipping the permit to you, 
                IDP GO is there every step of the way.
            </p>
            <br />
            <p class="text-1xl">
                Our team is committed to answering any questions you may have about the International Driving 
                Permit process, and getting your permit delivered to your home before you leave on your 
                international trip. By being able to submit all documents entirely via email, our customers 
                can receive their permit quickly, and without leaving the comfort of home.
            </p>
            <br />
            <p class="text-1xl">
                If you are already overseas and need the IDP, our service is perfect for you! By being able to 
                submit all documents entirely via email, our customers abroad can receive their permit quickly, 
                most times in under a week!
            </p>
            <br />
            <p class="text-1xl">
            All of our permits are processed and officially stamped by either AAA or AATA, so rest assured that 
            you will be receiving the ONLY permit that is accepted to drive legally in a different country. 
            </p>
            <br />
            <p class="text-1xl">
            If you hold a US Driver’s License, and plan to drive in a foreign country, give IDP GO LLC a try! 
            </p>
            </div>
        </div>
    )
}

export default ServiceTerms;