import React from 'react';
import { Users, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Laptop Guide</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about helping users of all levels find their perfect laptop match.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="text-blue-600" size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
          <p className="text-gray-600">
            Our team consists of tech experts and computer specialists.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="text-blue-600" size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Unbiased Reviews</h3>
          <p className="text-gray-600">
            We provide honest, detailed laptop reviews based on real-world testing.
          </p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="text-blue-600" size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Community First</h3>
          <p className="text-gray-600">
            We're dedicated to helping users find the perfect laptop for their needs.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80"
              alt="Laptop workspace"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-8 md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded by passionate tech enthusiasts, Laptop Guide has helped thousands of
              people find their perfect laptop. We understand that choosing a laptop
              can be overwhelming with all the options available today.
            </p>
            <p className="text-gray-600 mb-4">
              That's why we created our innovative laptop quiz tool - to simplify the
              process and provide personalized recommendations based on your specific
              needs, experience level, and computing goals.
            </p>
            <p className="text-gray-600">
              Our mission is to make laptop shopping easier and help you start your
              computing journey with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}