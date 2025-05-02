import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/waitlist-form";
import { ArrowRight, Twitter } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* First section - Join the waitlist */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            poster="/placeholder.svg?height=1080&width=1920"
          >
            <source
              src="https://framerusercontent.com/assets/aMPvRVYHFQxBoB0v2qyJln83jI.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-md w-full mx-auto bg-black/40 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-gray-800">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-600 text-xs font-medium px-3 py-1 rounded-full">
              Launch in feb 2025
            </span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Join the waitlist
            </h2>
            <p className="text-gray-300">
              Get exclusive early access to Voyager AI and stay updated on
              launch news.
            </p>
          </div>

          <WaitlistForm />

          <div className="mt-6 text-center">
            {/* Wrap the icon in an anchor tag */}
            <a
              href="https://twitter.com/blank_justblank" // Your Twitter profile URL
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Recommended for security when using target="_blank"
              aria-label="Follow us on Twitter" // Good for accessibility
              className="text-gray-400 hover:text-white inline-block p-2 rounded-full transition-colors duration-200 hover:bg-gray-800" // Added padding/rounding/transition for better hover effect
            >
              {/* Replaced the Lucide icon with your provided SVG */}
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" // This makes the SVG inherit the text color from the parent <a> tag
                className="w-5 h-5" // Apply the size classes directly to the SVG
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Second section - About Voyager AI */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-blue-950/30 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Voyager AI: Seamless, Voice-Powered Exploration
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We&aposre building a mobile-friendly web app that acts as your
            personal, AI-powered tour guide, accessible entirely through natural
            conversation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto mb-10">
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Speak Your Request</h3>
              <p className="text-gray-300">
                &quotFind me a 1-hour walking tour of historic sites
                nearby.&quot
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">AI Plans Instantly</h3>
              <p className="text-gray-300">
                Leverages your location and preferences to create a custom tour
                plan using real-time data.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">Follow Hands-Free</h3>
              <p className="text-gray-300">
                Get turn-by-turn audio guidance and interesting facts about
                points of interest, all via voice.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3">See the Route</h3>
              <p className="text-gray-300">
                A clear map interface displays your route and location, updating
                dynamically.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <span className="bg-blue-900/40 text-blue-200 px-4 py-2 rounded-full text-sm">
              Hands-free
            </span>
            <span className="bg-purple-900/40 text-purple-200 px-4 py-2 rounded-full text-sm">
              Personalized
            </span>
            <span className="bg-indigo-900/40 text-indigo-200 px-4 py-2 rounded-full text-sm">
              Real-time
            </span>
            <span className="bg-violet-900/40 text-violet-200 px-4 py-2 rounded-full text-sm">
              Spontaneous
            </span>
            <span className="bg-fuchsia-900/40 text-fuchsia-200 px-4 py-2 rounded-full text-sm">
              Immersive
            </span>
          </div>

          {/* <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 rounded-full text-lg font-medium">
            Learn more <ArrowRight className="ml-2 h-5 w-5" />
          </Button> */}
        </div>
      </section>
    </main>
  );
}
