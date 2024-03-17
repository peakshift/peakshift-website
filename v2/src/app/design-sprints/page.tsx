import Container from "@/Components/Container/Container";
import { condensedHeadings, monoText, serifText } from "@/assets/fonts";
import TrackAndFieldImage from "./assets/track-and-field.svg";
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
          — Define problems <span className="inline-block amp">&amp;</span> test
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
          <p className="text-body4 md:text-body1">
            Our flavour of Google Ventures’ Design Sprint. This 8-day workshop
            uses design thinking to produce a realistic prototype that allows us
            to gain insight as an outside contractor, define behavioural
            requirements, and perform User Testing on an early visual prototype
            in order to gather real customer feedback.
          </p>
        </div>
      </section>
<section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
  <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
  <div className="mx-auto max-w-2xl lg:max-w-4xl">
    <Image
      className="mx-auto h-12"
      src={TrackAndFieldImage}
      alt=""
    />
    <figure className="mt-10">
      <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
        <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
      </blockquote>
      <figcaption className="mt-10">
        <Image
          className="mx-auto h-10 w-10 rounded-full"
          alt=""
          src={TrackAndFieldImage}
        />
        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
          <div className="font-semibold text-gray-900">Judith Black</div>
          <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <div className="text-gray-600">CEO of Workcation</div>
        </div>
      </figcaption>
    </figure>
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
