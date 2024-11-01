import React from "react";
import bg from "../assets/home/bg-mobile.svg";
import freelance1 from "../assets/home/1.jpg";
import freelance2 from "../assets/home/2.jpg";
import freelance3 from "../assets/home/3.jpg";
import freelance4 from "../assets/home/4.jpg";
import ellipse from "../assets/home/elements/ellipse-kuning.svg";
import vectorungu from "../assets/home/elements/zigzag-ungu.svg";
import vectorbiru from "../assets/home/elements/zigzag-biru.svg";
import centang from "../assets/home/elements/centang-hijau.svg";
import cta from "../assets/home/cta.svg";
import CardSwiper from "../components/molecules/CardSwiper";
import CardRecomendedJobs from "../components/molecules/CardRecomendedJobs";
import CardBestFreelancer from "../components/molecules/CardBestFreelancer";
import CardPopularService from "../components/molecules/CardPopularService";
import CardTestimony from "../components/molecules/CardTestimony";
import AskQuestions from "../components/molecules/AskQuestions";
import CardCta from "../components/molecules/CardCta";
import CardCategory from "../components/molecules/CardCategory";
import CategoryDekstop from "../components/organisms/CategoryDekstop";

const Home = () => {
  return (
    <div className="mx-7 lg:mx-16 pt-32">
      {/* Hero */}
      <div className="flex-col lg:flex-row flex">
        <div>
          <h1 className="font-bold text-3xl md:text-[40px] lg:text-[45px] leading-tight">
            Find Your Dream Jobs. With Your Interest and Skills.
          </h1>
          <p className="text-regular text-secondary mt-2 text-[13px] md:text-[15px] md:max-w-[35rem] lg:max-w-[29rem] leading-relaxed font-poppins">
            Discover your perfect career match with our innovative job portal.
            We connect talented professionals with opportunities that align with
            their unique skills and passions.
          </p>
          <div className="flex items-center gap-5 mt-5">
            <a
              href=""
              className="bg-primary text-white text-sm font-bold py-2 px-6 md:py-3 md:px-10 rounded-md"
            >
              Find More
            </a>
            <div className="flex items-center gap-1">
              <div className="text-2xl font-bold text-primary">10k+</div>
              <div className="text-secondary text-sm mt-2">Jobs Available</div>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="font-semibold text-base mb-2">1k+ Freelancer</h1>
            <div className="flex items-center gap-3">
              <div className="bg-cover w-10 h-10">
                <img
                  src={freelance1}
                  alt=""
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="bg-cover w-10 h-10">
                <img
                  src={freelance2}
                  alt=""
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="bg-cover w-10 h-10">
                <img
                  src={freelance3}
                  alt=""
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="bg-cover w-10 h-10">
                <img
                  src={freelance4}
                  alt=""
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:-mt-8 lg:-mr-12">
          <img
            src={bg}
            alt=""
            className="w-[48rem] md:w-[55rem] lg:w-[77rem] mt-3"
          />
        </div>
      </div>
      {/* Recomended Jobs */}
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold">Recomended Jobs</h1>
            <p className="text-secondary text-sm mt-2 lg:max-w-[23rem]">
              Explore a world of exciting career opportunities tailored to your
              unique skills and interests.
            </p>
          </div>
          <div className="flex items-center gap-5 ">
            <button className="text-sm px-4 py-2 border border-hitam hover:bg-hitam hidden lg:block xl:block hover:text-white transition-all ease-linear duration-200 rounded font-medium">
              Find More Project
            </button>
            <button className="text-sm px-4 py-2 bg-hitam rounded hidden lg:block xl:block text-white font-medium">
              Upload Project
            </button>
          </div>
        </div>
        <CardSwiper />
        <CategoryDekstop />
        <div className="mt-5 lg:hidden">
          <button className="text-base w-full p-3 border border-hitam hover:bg-hitam hover:text-white transition-all ease-linear duration-200 rounded font-medium">
            Find More Project
          </button>
          <button className="text-base w-full p-3 border bg-hitam rounded text-white mt-4 font-medium">
            Upload Project
          </button>
        </div>
      </div>
      {/* Best Freelancer */}
      <div className="mt-12">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold">Best Freelancer</h1>
          <p className="text-secondary text-sm mt-2 lg:max-w-[20rem]">
            Let's discover, our top-tier freelance talent from around the globe.
          </p>
        </div>
        <CardBestFreelancer />
        <div className="flex justify-between items-center mb-2">
          <img src={vectorbiru} alt="" className="w-16 rotate-90" />
          <img src={centang} alt="" className="w-24" />
        </div>
      </div>
      {/* OFFER */}
      <div className="lg:mt-5">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-7">
          <div className="flex justify-center items-center">
            <img src={cta} alt="" className="w-[28rem] lg:w-[35rem]" />
          </div>
          <div>
            <h1 className="text-3xl lg:text-5xl lg:leading-snug lg:max-w-[34rem] font-bold text-justify">
              View Freelancer Profile to Avoid Mistakes.
            </h1>
            <p className="text-secondary text-sm leading-relaxed mt-4 text-justify md:max-w-[37rem]">
              Discover world-class freelancers who transform challenges into
              breakthrough solutions. Our curated network brings together the
              most innovative and skilled professionals across industries, ready
              to elevate your projects with exceptional creativity and expertise
            </p>
            <div className="flex justify-start items-center ml-5 mb-3 mt-2">
            <img src={vectorungu} alt="" className="w-32 -rotate-12" />
          </div>
          </div>
        </div>
      </div>
      {/*Popular Service */}
      <div className="mt-12">
        <h1 className="text-3xl lg:text-4xl font-bold">
          The Most Popular Service
        </h1>
        <p className="text-secondary text-sm mt-2">
          Explore our curated selection of the most sought-after services.
        </p>
        <CardPopularService />
      </div>
      {/* User Testimony */}
      <div className="mt-10">
        <h1 className="text-[27px] lg:text-4xl font-bold">
          Don’t take our word for it.
        </h1>
        <h1 className="text-primary text-3xl lg:text-4xl font-bold">
          trust our customers!
        </h1>
        <CardTestimony />
      </div>
      {/* Asking Questions */}
      <div className="mt-10 text-center">
        <h1 className="text-3xl font-bold lg:text-4xl mb-2">
          You’ve got questions,
        </h1>
        <h1 className="text-primary text-3xl lg:text-4xl font-bold">
          We’ve got answers.
        </h1>
        <AskQuestions />
      </div>
      {/* CTA */}
      <div className="mt-12 mb-7 lg:flex lg:gap-40">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold lg:max-w-[30rem] lg:text-justify lg:leading-tight">
            Our Service have a proven track record of boosting business
          </h1>
          <p className="text-secondary text-sm mt-2 lg:max-w-[30rem]">
            Our services have a demonstrated history of driving significant
            business growth for our clients. Leveraging the expertise of our
            vetted professionals.
          </p>
          <button className="text-lg w-full lg:w-64 lg:text-base py-2 border bg-primary rounded-full text-white mt-4 font-medium">
            Let's Get Started
          </button>
        </div>
        <CardCta />
      </div>
    </div>
  );
};

export default Home;
