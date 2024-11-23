import React from 'react';
import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">What Laptop Should I Buy? - Quiz</h1>
        <Quiz />
      </section>

      <section id="guide" className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose lg:prose-lg mx-auto space-y-8">
          <div className="mb-8">
            <p className="text-lg">
              If you're wondering, <strong>"What laptop should I buy?"</strong>, you're not alone! Choosing the perfect laptop can be overwhelming with so many options available. From ultrabooks to gaming laptops, processors to graphics cards, finding the best laptop for your needs requires careful consideration. But don't worry – we've got you covered! Our interactive <strong>What Laptop Should I Buy? Quiz</strong> will help you narrow down your choices and find the ideal laptop for your computing needs.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Take the "What Laptop Should I Buy?" Quiz?</h2>
            <p>
              With countless laptops on the market, deciding on the right one can feel overwhelming. Whether you're a student, professional, gamer, or content creator, our <strong>What Laptop Should I Buy? Quiz</strong> is designed to match you with a laptop that fits your lifestyle, budget, and computing requirements.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features Our Quiz Considers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Laptop Type:</strong> Gaming, Ultrabook, Business, or Creative workstation.</li>
              <li><strong>Performance:</strong> Processor, RAM, and graphics capabilities.</li>
              <li><strong>Usage:</strong> Work, gaming, content creation, or everyday tasks.</li>
              <li><strong>Budget:</strong> Find the perfect laptop within your price range.</li>
              <li><strong>Experience Level:</strong> From basic users to power users.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Laptop Categories</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Best for Students:</strong> Affordable, portable laptops with good battery life.</li>
              <li><strong>Best for Professionals:</strong> High-performance laptops with premium build quality.</li>
              <li><strong>Best for Gaming:</strong> Powerful GPUs and high refresh rate displays.</li>
              <li><strong>Best for Content Creation:</strong> Color-accurate displays and strong processing power.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How the "What Laptop Should I Buy?" Quiz Works</h2>
            <p>
              Taking our quiz is quick and easy! Simply answer a few questions about your computing needs, preferred features, and budget, and we'll recommend the best laptops for you. Our recommendations are based on extensive research and real-world testing.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Laptop Buying Tips</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consider Portability:</strong> Think about weight and battery life.</li>
              <li><strong>Future-Proofing:</strong> Choose specs that will last several years.</li>
              <li><strong>Build Quality:</strong> Ensure durability for your usage scenario.</li>
              <li><strong>Connectivity:</strong> Check for necessary ports and features.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust Our Laptop Recommendations?</h2>
            <p>
              Our team consists of tech experts and computer specialists who stay up-to-date with the latest technology. We regularly update our <strong>What Laptop Should I Buy? Quiz</strong> to include new models and features, ensuring you get the most current recommendations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect Laptop?</h2>
            <p>
              Don't waste hours researching – let our <strong>What Laptop Should I Buy? Quiz</strong> guide you to the perfect laptop. Whether you're buying your first laptop or upgrading your current one, we'll help you make an informed decision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}