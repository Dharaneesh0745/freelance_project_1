import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import TestimonialTeam from "@/components/TestimonialTeam";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="About Our Team" /> <br />
            <br />
            <Title
              title="All doctors treat, but a good doctor lets nature heal!"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="A good teacher can inspire hope, ignite the imagination, and instill a love of learning. - Brad Henry" />
              <p className="desc-p">
                In a medical classroom, a seasoned doctor imparts wisdom to a
                group of eager students. With a blend of expertise and humility,
                the doctor shares anecdotes and insights, making complex medical
                concepts accessible. The lecture becomes a dynamic exchange,
                fostering enthusiasm and respect. Beyond clinical skills, the
                doctor instills values of compassion and ethical responsibility,
                passing the torch of medical knowledge to the next generation.
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">1+</h1>
                  <h3>Year of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">10+</h1>
                  <h3>Successful students</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">2+</h1>
                  <h3>Doctors</h3>
                </div>
              </div>
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/s1.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/s4.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                Our mission as doctors and educators is to empower and guide our
                students on their journey to success in the NEET examination. We
                strive to create an environment where knowledge flourishes,
                curiosity is nurtured, and skills are honed. Our commitment goes
                beyond the curriculum, as we instill in our students the
                resilience and determination needed to overcome challenges. With
                a focus on clarity, understanding, and application, we aim to
                demystify the complexities of medical science, preparing our
                students not only to pass the NEET examination but also to excel
                in their future medical careers. As mentors, we emphasize not
                only the acquisition of knowledge but also the development of a
                compassionate and ethical approach to patient care. Together, we
                embark on this mission with the shared goal of shaping competent
                and compassionate healthcare professionals who will contribute
                meaningfully to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Brand /> */}
      <TestimonialTeam />
      {/* <Banner /> */}
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
