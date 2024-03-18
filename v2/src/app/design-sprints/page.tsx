import Container from "@/Components/Container/Container";
import { condensedHeadings, monoText, serifText } from "@/assets/fonts";
import Button from "@/Components/Button/Button";
import { FiChevronRight } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import TrackAndFieldImage from "./assets/track-and-field.svg";
import ClientLogos from "./assets/logos.png";
import QuoteBumi from "./assets/bumi.jpg";
import Image from "next/image";

const sprintSchedule = [
  {
    day: "01",
    name: "Define the challenge",
    duration: "3 hours",
    durationISO: "PT3H",
  },
  {
    day: "02",
    name: "Mapping + customer journey + focus",
    duration: "3 hours",
    durationISO: "PT3H",
  },
  {
    day: "03",
    name: "Focus + story board",
    duration: "3 hours",
    durationISO: "PT3H",
  },
  {
    day: "04",
    name: "Prototype",
    duration: "8 hours",
    durationISO: "PT8H",
  },
  {
    day: "05",
    name: "Prototype",
    duration: "8 hours",
    durationISO: "PT8H",
  },
  {
    day: "06",
    name: "Prototype",
    duration: "8 hours",
    durationISO: "PT8H",
  },
  {
    day: "07",
    name: "User testing",
    duration: "2 days",
    durationISO: "P2D",
  },
  {
    day: "10",
    name: "Deliver Report",
    duration: "",
    durationISO: "",
  },
];

export default function DesignSprints() {
  return (
    <Container id="design-sprints" className="overflow-hidden">
      <header className={`min-h-[min(95vh,1440px)] flex flex-col justify-center relative py-16 isolate z-10`}>
        <h1
          className={`${serifText.className} text-primary text-6xl text-center font-serif italic`}
        >
          — Align on vision <span className="inline-block amp">&amp;</span> test
          solutions before touching a line of code
        </h1>
        <Image
          src={TrackAndFieldImage}
          alt="Track & Field"
          className="absolute top-0 left-0 md:translate-x-1/2 md:-translate-y1/2 pointer-events-none"
        />
      </header>
      <section className="py-80">
        <div
          className={`${serifText.className} grid grid-cols-1 md:grid-cols-2 gap-32 mt-24 md:mt-48`}
        >
          <h3 className="font-light italic text-body4 md:text-h1 leading-[1]">
            What is a Design Sprint?
          </h3>
          <p className="text-body4 md:text-body1 font-light">
            Our flavour of Google Ventures’ Design Sprint. This 8-day workshop
            uses design thinking to produce a realistic prototype that allows us
            to gain insight as an outside contractor, define behavioural
            requirements, and perform User Testing on an early visual prototype
            in order to gather real customer feedback.
          </p>
        </div>
      </section>
<section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="mx-auto max-w-2xl lg:max-w-4xl">
    <figure className="mt-10">
      <blockquote className="text-center mb-24">
        <h4 className="uppercase text-2xl font-light">Alby</h4>
        <p className={`${serifText.className} text-3xl italic font-light leading-10 text-gray-900 sm:text-3xl sm:leading-10`}>The design sprint organised and lead by PEAK SHIFT was instrumental in building what now became Alby. It helped us to define the initial product scope, understand user needs and turn vague ideas into actionable product goals plus an initial design prototype</p>
      </blockquote>
      <figcaption className="mt-10">
        <Image
          className="mx-auto h-80 w-80 border border-dotted border-black block p-0.5 mb-12"
          src={QuoteBumi}
          alt="Photo of Bumi"
        />
        <div className="mt-4 flex items-center justify-center space-x-3 text-xl">
          <div className="text-gray-900 uppercase">Michael Bumann</div>
          <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <div className="text-gray-600 uppercase font-light">Founder & CTO</div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>
<section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="mx-auto max-w-2xl lg:max-w-4xl">
    <div className="text-center mb-24">
      <h4 className={`${serifText.className} text-6xl font-light leading-loose italic text-primary`}>Get your vision out fast</h4>
      <p className={`text- uppercase font-light leading-8 text-gray-900 sm:text-2xl sm:leading-9`}>
        We have worked with founders and startups at early stages helping them prepare for fundraising, setup project and product management procedures, align executives and product teams, and helped tech and design teams ship better quality work faster
      </p>
      <p className="flex justify-center">
        <Image src={ClientLogos} alt="" height={120} />
      </p>
      <p className="flex justify-center">
        <Button className="mt-40 max-lg:w-full">
          Launch with the best <FiChevronRight />
        </Button>
      </p>
    </div>
  </div>
</section>
<section className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="mx-auto max-w-2xl lg:max-w-4xl">
    <div className="columns-2">
      <ol>
        <li></li>
      </ol>
    </div>
  </div>
</section>

      <section className="pt-80 mb-100">
          <h2
            className={`${condensedHeadings.className} text-h3 md:text-[48px] uppercase`}
          >
            Ticketing system and graphics
          </h2>
          <div
            className={`${serifText.className} grid grid-cols-1 md:grid-cols-2 gap-32 mt-24 md:mt-48`}
          >
            <p className="font-light italic text-body4 md:text-h1 leading-[1]">
              Aesthetics + functionality
            </p>
            <p className="text-body4 md:text-body1">
              Our comprehensive brand design strategy extended to not only the
              graphics, but the client’s Pretix ticketing system. We designed a
              ticketing system that seamlessly blends crisp design and
              functionality in one.
              <br />
              <br />
              The result is a cohesive and immersive experience for
              participants, streamlining the registration process that goes
              beyond the eye-catching visuals.
            </p>
          </div>
      </section>
      <section className="pt-80">
        <div
          className={`${serifText.className} grid grid-cols-1 md:grid-cols-2 gap-32 mt-24 md:mt-48`}
        >
          <h3 className={`${condensedHeadings.className} text-h2 uppercase`}>
            How It Works?
          </h3>
          <div className="text-body4 md:text-body1">
            <p className="mb-20">
              This 8-day process uses design thinking to produce a realistic
              prototype, define behavioural requirements, and perform User
              Testing on a early visual prototype in order to gather real user
              feedback.
            </p>
            <p className="mb-20">
              The first three days require a couple hours of your involvement
              and focus — it is mandatory to the process and we’ve seen this
              upfront time investment gets everyone in alignment early with the
              project goals and avoids issues during the implementation phase.
            </p>
            <p className="mb-20">
              ‌To preserve time when coming to a decision we will utilise voting
              on suggestions offered by individuals, over lengthy discussions so
              you will have to select a single person on your team as “The
              Decider”. This person is able to veto certain decisions made by
              the group.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-80">
        <article
          itemScope
          itemType="http://schema.org/CreativeWork"
          className={`${serifText.className} grid grid-cols-1 md:grid-cols-2 gap-32 mt-24 md:mt-48`}
        >
          <header className="text-2xl font-bold mb-4">
            <h3
              className={`${condensedHeadings.className} text-h2 uppercase`}
              itemProp="name"
            >
              Timeline
            </h3>
          </header>
          <div>
            <meta
              itemProp="about"
              content="Design Sprint Activities Schedule"
            />
            <ol className="relative border-l border-gray-200 border-dotted">
              {sprintSchedule.map((event, index) => (
                <li
                  key={index}
                  itemProp="event"
                  itemScope
                  itemType="http://schema.org/Event"
                  className="mb-10 ml-4"
                >
                  <span className="flex absolute -left-8 justify-center items-center px-2 bg-white border border-gray-400 rounded text-xs font-mono uppercase">
                    Day {event.day}
                  </span>
                  <div className="ml-12">
                    <h3
                      itemProp="name"
                      className={`${condensedHeadings.className} uppercase text-lg font-normal text-gray-900`}
                    >
                      {event.name}
                    </h3>
                    {event.duration && (
                      <time
                        itemProp="duration"
                        dateTime={event.durationISO}
                        className={`${condensedHeadings.className} uppercase block text-sm font-normal text-gray-500`}
                      >
                        {event.duration}
                      </time>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </article>
      </section>
    </Container>
  );
}
