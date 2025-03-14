"use client";

import Image from "next/image";
import karenParcell from "../public/images/karen-parcell.jpg";
import chrmnCircleDiamond from "../public/icons/award-chairmans-circle-diamond.png";
import chrmnCircleGold from "../public/icons/award-chairmans-circle-gold.png";
import presCircle from "../public/icons/award-presidents-circle.png";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const carousel = document.querySelector(".infinite-carousel > div");
    if (carousel) {
      const carouselItems = Array.from(carousel.children);
      carouselItems.forEach((item) => {
        const copy = item.cloneNode(true);
        carousel.appendChild(copy);
        carousel.setAttribute("style", "animation: rotate 45s linear infinite");
      });
    }
  }, []);

  return (
    <div id="homepage">
      <div
        className="parallax img-1"
        title="Photo by Gerson Repreza on Unsplash"
      ></div>

      <div id="about">
        <div>
          <div>
            <Image src={karenParcell} alt="Karen Parcell" />
          </div>
          <div>
            <h1>
              Welcome to <br className="mobile-break" />
              <span>Karen Parcell Homes</span>,
            </h1>
            <p>
              where exceptional service meets luxury real estate. With{" "}
              <strong>over 17 years</strong> of experience in the Los Angeles
              market, Karen is a trusted expert known for her dedication,
              integrity, and personalized approach. As a{" "}
              <strong>top-producing agent with Berkshire Hathaway</strong>, she
              combines deep industry knowledge with a commitment to making every
              real estate experience seamless and rewarding. Whether you’re
              buying or selling, Karen’s expertise, strong negotiation skills,
              and genuine care ensure that{" "}
              <strong>your goals are met with confidence and success.</strong>
            </p>
            {/* <p>
              is a distinguished luxury property specialist with{" "}
              <strong>over 17 years</strong> of experience in the Los Angeles
              real estate market. As one of the{" "}
              <strong>top-producing agents at Berkshire Hathaway</strong>, she
              is recognized for her exceptional dedication, hard work, and
              compassionate approach to client relationships. Karen has built a
              reputation for her expert negotiating skills, attention to detail,
              and deep industry knowledge,{" "}
              <strong>making her an invaluable asset to her clients.</strong>
            </p>
            <p>
              Karen has successfully represented both buyers and sellers in some
              of <strong>Los Angeles' most prestigious neighborhoods</strong>,
              including Pacific Palisades, Malibu, Brentwood, Santa Monica,
              Beverly Hills, Woodland Hills, and Sherman Oaks. Her adaptability
              in an ever-evolving real estate landscape has kept her ahead of
              the competition, earning her membership in the{" "}
              <strong>Chairman’s Circle</strong> and recognition as an{" "}
              <strong>Elite Member of the Diamond Circle</strong>, placing her
              in the <strong>top 1/2 of 1% of sales nationwide.</strong>
            </p>
            <p>
              Karen is deeply committed to her community, as evidenced by her{" "}
              <strong>volunteer work</strong> with Habitat for Humanity, the
              Squid and Squash Foundation, and her role as president of the
              Education Foundation. Her community-centric values and caring
              nature have solidified her reputation as a trusted real estate
              advisor. It is this trust, along with her expertise and
              dedication, that has driven Karen's{" "}
              <strong>
                remarkable success in the luxury real estate market.
              </strong>
            </p> */}
          </div>
        </div>
      </div>

      <div
        className="parallax img-2"
        title="Photo by Carlos Bastias on Unsplash"
      >
        <div className="infinite-carousel">
          <div>
            <div className="carousel-items">
              <Image
                src={chrmnCircleDiamond}
                alt="BHHS Chairman's Circle Diamond Award"
              />
              <div>2019 BHHS CHAIRMAN&apos;S CIRCLE DIAMOND</div>
              <div>Top 0.5% of agents world wide</div>
            </div>

            <div className="carousel-items">
              <Image
                src={chrmnCircleGold}
                alt="BHHS Chairman's Circle Gold Award"
              />
              <div>2020 BHHS CHAIRMAN&apos;S CIRCLE DIAMOND</div>
              <div>Top 2% of agents world wide</div>
            </div>

            <div className="carousel-items">
              <Image
                src={chrmnCircleGold}
                alt="BHHS Chairman's Circle Gold Award"
              />
              <div>2021 BHHS CHAIRMAN&apos;S CIRCLE DIAMOND</div>
              <div>Top 2% of agents world wide</div>
            </div>

            <div className="carousel-items">
              <Image
                src={chrmnCircleGold}
                alt="BHHS Chairman's Circle Gold Award"
              />
              <div>2022 BHHS CHAIRMAN&apos;S CIRCLE DIAMOND</div>
              <div>Top 2% of agents world wide</div>
            </div>

            <div className="carousel-items">
              <Image src={presCircle} alt="BHHS President's Circle Award" />
              <div>2023 BHHS PRESIDENT&apos;S CIRCLE</div>
              <div>Top 5% of agents world wide</div>
            </div>

            <div className="carousel-items">
              {/* <img
              src={chrmnCircleDiamond}
              alt="Chairman's Circle Diamond Award"
            /> */}
              <div>2023 REALTRENDS TOP 1.5%</div>
              <div>of Real Estate Professionals in America</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
