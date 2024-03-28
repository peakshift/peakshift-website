import { serifText } from "@/assets/fonts";
import React from "react";
import QuoteBumi from "@/app/design-sprints/assets/bumi.jpg";
import Image from "next/image";

export default function Quote() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 pb-80 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl md:pb-80">
        <figure className="mt-10">
          <blockquote className="text-center mb-24">
            <h4 className="uppercase text-2xl font-light">Alby</h4>
            <p
              className={`${serifText.className} text-2xl italic font-light leading-8 text-gray-900 sm:text-3xl sm:leading-10`}
            >
              The design sprint organised and lead by PEAK SHIFT was
              instrumental in building what now became Alby. It helped us to
              define the initial product scope, understand user needs and turn
              vague ideas into actionable product goals plus an initial design
              prototype
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              className="mx-auto h-80 w-80 border border-dotted border-black block p-0.5 mb-12"
              src={QuoteBumi}
              alt="Photo of Bumi"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-xl">
              <div className="text-gray-900 uppercase">Michael Bumann</div>
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div className="text-gray-600 uppercase font-light">
                Founder & CTO
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
