import React from 'react';

function SignIn() {
  // Reusable components for Social Login Buttons
const SocialLoginButton = ({ provider, providerName, src, alt }) => (
  <button className="flex gap-4 justify-center items-center px-7 py-3 mt-3 max-w-full text-xl font-bold bg-black rounded-xl shadow-sm text-zinc-200 w-[328px] max-md:px-5">
    <img loading="lazy" src={src} alt={alt} className="w-7 aspect-square" />
    <div className="grow my-auto">{providerName}</div>
  </button>
);

  const socialLogins = [
    { 
      provider: 'google', 
      providerName: 'Continue with Google', 
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9af579c11ba3a11bf386bf01c470f8bb8e2abbb4b8d531993499615173c32785?apiKey=516f9c4685e2416792ef9570f076208b&', 
      alt: 'Google logo' 
    },
    { 
      provider: 'github', 
      providerName: 'Continue with Github', 
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dcd19c58e7dae9a5f021ef15035e4aa8c72b4832b86d9d7d940a6c64a8bb6e3b?apiKey=516f9c4685e2416792ef9570f076208b&', 
      alt: 'Github logo' 
    },
  ];


  function AuthButton({ id, src, alt, text }) {
    return (
      <button className="flex gap-4 justify-center px-11 py-3.5 mt-3 max-w-full text-xl font-bold whitespace-nowrap bg-black rounded-xl shadow-sm text-zinc-200 w-[328px] max-md:px-5" tabIndex="0">
        <img loading="lazy" src={src} alt={alt} className="w-7 aspect-square" />
        <span className="grow my-auto">{text}</span>
      </button>
    );
  }
  

  return (
    <div className='w-full h-fit pt-20 flex justify-center items-center bg-custom-dark'>
      <section className="w-fit gap-y-10 flex flex-col justify-center items-center">
      <form className="h-fit flex flex-col justify-center items-center self-stretch px-20 pb-8 max-md:px-5">
      <header className="font-gilroy font-semibold mt-0 text-2xl text-white mb-10">
        Sign In to BRIO
      </header>
      <label htmlFor="emailInput" className="sr-only">Email</label>
        <input id="emailInput" type="email" placeholder="Email" className="mt-1 px-3 max-w-full bg-gray-900 rounded-xl shadow-sm h-[47px] w-[328px]" aria-label="Email" />
        <label htmlFor="passwordInput" className="sr-only">Password</label>
        <input id="passwordInput" type="password" placeholder="Password" className="mt-6 px-3 max-w-full bg-gray-900 rounded-xl shadow-sm h-[47px] w-[328px]" aria-label="Password" />
        <button className="justify-center-center px-16 py-3 mt-6 max-w-full text-xl font-bold text-gray-900 rounded-xl bg-zinc-200 w-[328px] max-md:px-5">
          Sign In
        </button>
        <div className="flex gap-2.5 justify-center items-center px-0.5 mt-6 max-w-full w-[328px]">
        <hr className="self-stretch my-auto bg-zinc-200 bg-opacity-30 w-[146px]" />
        <span className='text-slate-400'>or</span>
        <hr className="self-stretch my-auto bg-zinc-200 bg-opacity-30 w-[145px]" />
      </div>
      {socialLogins.map((login) => (
        <SocialLoginButton 
          key={login.provider} 
          provider={login.provider} 
          providerName={login.providerName} 
          src={login.src} 
          alt={login.alt} 
        />
      ))}
      <a href="/forgot-password" className="mt-3 text-slate-200">
        Forgot Password?
      </a>
      <footer className="mt-36 max-md:mt-10">
        <span className="text-gray-400">Don’t have an account? </span>
        <a href="/sign-up" className="font-semibold text-slate-200">Sign Up</a>
      </footer>
    </form>
    
      </section>
    </div>
  );
}

export default SignIn;


