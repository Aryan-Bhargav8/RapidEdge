"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const services = [
    { title: " Custom Брандинг ", 
      desc: "Пълно изграждане на бранд идентичност от нулата, включително лого и визуални материали.",
      icon: "/assets/images/cards images/branding_imgae.png"
    },
    { title: "Брандинг", 
      desc: "Обновяване на съществуващата идентичност на бизнеса с нови лого, визуални елементи и стратегия.",
      icon: "/assets/images/cards images/rebranding_image.png"
    },
    { title: "Custom Уеб / Мобилна разработка", 
      desc: "Създаване на персонализирани уебсайтове и мобилни приложения според вашите нужди.",
      icon: "/assets/images/cards images/web_app_image.png"
    },
    { title: "SEO Оптимизация", 
      desc: " Подобряване на видимостта на уебсайта в търсачките чрез оптимизация на съдържание и линк билдинг.",
      icon: "/assets/images/cards images/seo_image.png"
    },
    { title: " Дигитален Маркетинг", 
      desc: " Управление на платени реклами в социални мрежи и Google за повишаване на ангажираността и продажбите.",
      icon: "/assets/images/cards images/digital_marketing_image.png"
    },
    { title: "Органично Съдържание", 
      desc: " Създаване и управление на неплатени публикации в социалните медии за укрепване на връзката с аудиторията.",
      icon: "/assets/images/cards images/organic_marketing_image.png"
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setShowAllServices(false); // Reset when switching to desktop
      }
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="flex flex-col bg-black text-white font-sans overflow-hidden -z-10">
      {/* Navbar */}
      <header
        className="flex justify-between items-center m-6 relative">
        {/* LOGO */}
        <div>
          <Image
            src="/assets/icons/main-logo.svg"
            alt="Logo"
            width={110}
            height={40}
          />
        </div>
        {/* Side Menu */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center justify-center">
            <button className="text-white text-[10px] font-bold whitespace-nowrap transition md:block border-[1px] border-white rounded-full px-4.5 py-1.5">
              Свържете се с нас
            </button>
          </div>
          <div className="md:hidden flex items-center justify-center">
            <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Image
                src="/assets/icons/mobile/Burger Menu Icon.svg"
                alt="Menu"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50 transition-all">
            <button className="absolute top-6 right-6" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <Image src="/assets/icons/mobile/X icon.svg" alt="Menu" width={24} height={24} />
            </button>
            <ul className="flex flex-col space-y-8 text-white text-2xl font-bold mt-12">
              <li><a href="#" onClick={() => setMenuOpen(false)}>Начало</a></li>
              <li><a href="#" onClick={() => setMenuOpen(false)}>За Нас</a></li>
              <li><a href="#" onClick={() => setMenuOpen(false)}>Услуги</a></li>
              <li><a href="#" onClick={() => setMenuOpen(false)}>Процес</a></li>
              <li><a href="#" onClick={() => setMenuOpen(false)}>Защо Нас</a></li>
              <li><a href="#" onClick={() => setMenuOpen(false)}>Контакти</a></li>
            </ul>
          </div>
        )}
      </header>


      {/* Hero Section */}
      <section
        className="flex flex-col items-center text-center gap-3 p-20"
        style={{
          backgroundImage: 'url("assets/images/background_Images/Main Banner Gradient.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Hero Heading */}
        <div className="flex flex-col items-center justify-center text-nowrap px-4 ">
          <h1 className="text-[2rem] font-[900] leading-10 tracking-[-1px] uppercase">Вашето <br />развитие Е <br />Нашия бизнес</h1>
        </div>
        {/* hero para */}
        <div className="flex flex-col items-center justify-center text-nowrap px-4 text-sm">
          <p className="text-white leading-7">
            Нашата мисия е вашият успех. <br /> Помагаме ви да превърнете идеите <br /> си в реалност и да постигнете <br />устойчиво развитие за вашия <br /> бизнес.
          </p>
        </div>
        {/* Hero button */}
        <div className="flex items-center justify-center gap-7 text-nowrap mt-4 text-sm">
          <button className=" bg-white text-black rounded-full font-bold border-2 border-white hover:bg-transparent hover:text-white transition px-3 py-1.5">Запитване</button>
          <button className=" bg-transparent text-white rounded-full font-bold border-2 border-white hover:bg-white hover:text-black transition px-3 py-1.5">Видео за нас</button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-r from-[#0639377d] to-black relative p-6 z-30">
        <Image
          src="/assets/icons/UI Icons/Backgorund Logo Stroke White.svg"
          alt="Background Stroke"
          width={300}
          height={300}
          className="absolute right-[-120px] bottom-20 w-[1000px] md:w-[900px] lg:w-[1200px] h-auto pointer-events-none select-none z-0"
        />

        <div className="flex flex-col gap-3 mt-2">
          <h2 className="text-sm font-semibold uppercase tracking-wider">За нас</h2>

          <h1 className="text-xl font-[900] text-nowrap leading-8 tracking-wider mt-[-10px]">Ние вдъхваме живот <br />на вашите идеи.</h1>

          <div className="w-24 bg-white h-1 mb-4" />

          <div className="flex flex-col gap-3 w-[80%] font-light text-md mt-[-20px] mb-4 leading-7 z-10">
            <p className="text-gray-300 text-sm">Защо го правим?</p>
            <p> Lorem ipsumNeque porro <br /> quisquam est qui do lorem <br />ipsum quia dolor sit amet, <br /> Neque porro elit NeDque <br /> porro  Lorem ipsum Neque <br />porro Neque porro </p>
            <p>Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Lorem ipsum Neque <br />quis ipsum</p>
          </div>
        </div>

        <Image
          src="/assets/images/background_Images/Plant Image.png"
          alt="Plant"
          width={600}
          height={700}
          className="absolute right-[-180px] bottom-[-90px] w-[500px] md:w-[400px] lg:w-[600px] h-auto object-contain z-30 pointer-events-none select-none"
        />
      </section>







      {/* Services Section */}
      <section className="w-full relative z-10">
        <div className="flex flex-col">
          {/* White Section */}
          <div className="bg-white py-8 px-6 pb-24 relative z-10">
            <Image
              src="/assets/icons/UI Icons/Backgorund Logo Stroke White.svg"
              alt="Gradient"
              width={1000}
              height={1000}
              className="absolute left-[-10px] w-full h-auto object-contain invert"
            />
            <div className="flex flex-col gap-4 relative z-10">
              <h1 className="text-black text-xl font-[900] uppercase">Нашите услуги</h1>
              <button className="bg-black text-white px-4 py-2 w-fit rounded-full">
                Запитване
              </button>
            </div>
          </div>
          {/* Gradient Section */}
          <div className="bg-gradient-to-l from-[#39061d99] to-black pt-0">
            {/* Grid - moved up with negative margin, but not cut off */}
            <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-4 -mt-16 px-4">
              {(isMobile
                ? (showAllServices ? services : services.slice(0, 3))
                : services
              ).map((service, idx) => (
                <div key={idx} className="bg-[#18181b] rounded-3xl shadow-lg flex flex-col gap-4 relative overflow-hidden">
                  {/* Even: Text first, then image. Odd: Image first, then text */}
                  {idx % 2 === 0 ? (
                    <>
                      {/* Text */}
                      <div className="flex flex-col gap-4 p-6">
                        <div className="flex  items-center gap-4">
                        <div className="w-[60px] h-[2px] bg-white mb-2"/>
                        <h1 className="font-bold text-white">{service.title}</h1>
                        </div>
                        <p className="text-gray-300 text-sm max-w-[280px]">{service.desc}</p>

                      </div>
                      {/* Image */}
                      <div className="flex-1 flex items-center mt-6 -ml-[5%] w-[90%]">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={400}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Image */}
                      <div className="flex-1 flex items-center mb-6 -ml-[5%] w-[90%]">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={400}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      {/* Text */}
                      <div className="flex flex-col gap-4 p-6">
                        <div className="flex items-center gap-4">
                        <div className="w-[60px] h-[2px] bg-white mb-2"/>
                        <h1 className="font-bold text-white text-xl">{service.title}</h1>
                        </div>
                        <p className="text-gray-300 text-sm">{service.desc}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
            {/* Show More button only on mobile and only if not all are shown */}
            {!showAllServices && isMobile && (
              <div className="bg-gradient-to-t from-black via-black/50 via-65% to-transparent -mt-16 h-[60px] z-50 relative w-full">
                <button
                className="mt-4 mx-auto block md:hidden text-white underline"
                onClick={() => setShowAllServices(true)}
              >
                 Виж всички услуги 
              </button>
              </div>
            )}
          </div>
        </div>
      </section>



      {/* Work Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -left-[200px] w-[calc(100%+200px)] h-full">
          <Image
            src="/assets/icons/UI Icons/Backgorund Logo Stroke White.svg"
            fill={true}
            alt="Background Logo"
            className="object-cover z-0"
          />
        </div>
        <div className="flex flex-col gap-8 items-center justify-center bg-gradient-to-r from-[#00003099] to-black w-full p-7">
          <h1 className="text-white text-xl font-[900] uppercase text-center">КАКЪВ Е НАШИЯТ<br />КРЕАТИВЕН ПРОЦЕС?</h1>

          <div className="flex flex-col gap-4 justify-center items-center">
            {/* work1 */}
            <div className="flex gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center gap-4">
                <Image
                  src="/assets/icons/UI Icons/Dot.svg"
                  alt="Define"
                  width={13}
                  height={10}
                />
                <Image
                  src="/assets/icons/UI Icons/Line.svg"
                  alt="Define"
                  width={4}
                  height={1}
                  className="w-[30px] h-[140px]"
                />

              </div>
              <div className="flex flex-col justify-items-stretch gap-7">
                <div className="flex gap-4">
                  <Image
                    src="/assets/icons/UI Icons/search_icon.svg"
                    alt="Define"
                    width={60}
                    height={10}
                  />
                  <h3 className="text-white font-bold text-xl leading-tight">Дефиниране<br />На Проблема</h3>

                </div>
                <p className="text-gray-300 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
              </div>
            </div>

            {/* work2 */}
            <div className="flex gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center gap-4">
                <Image
                  src="/assets/icons/UI Icons/Dot.svg"
                  alt="Define"
                  width={13}
                  height={10}
                />
                <Image
                  src="/assets/icons/UI Icons/Line.svg"
                  alt="Define"
                  width={4}
                  height={1}
                  className="w-[30px] h-[140px]"
                />

              </div>
              <div className="flex flex-col justify-items-stretch gap-7">
                <div className="flex gap-4">
                  <Image
                    src="/assets/icons/UI Icons/work_icon.svg"
                    alt="Define"
                    width={60}
                    height={10}
                  />
                  <h3 className="text-white font-bold text-xl leading-tight">Генериране <br />
                    на идеи</h3>

                </div>
                <p className="text-gray-300 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
              </div>
            </div>

            {/* work3 */}
            <div className="flex gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center gap-4">
                <Image
                  src="/assets/icons/UI Icons/Dot.svg"
                  alt="Define"
                  width={13}
                  height={10}
                />
                <Image
                  src="/assets/icons/UI Icons/Line.svg"
                  alt="Define"
                  width={4}
                  height={1}
                  className="w-[30px] h-[140px]"
                />

              </div>
              <div className="flex flex-col justify-items-stretch gap-7">
                <div className="flex gap-4">
                  <Image
                    src="/assets/icons/UI Icons/best_work_icon.svg"
                    alt="Define"
                    width={60}
                    height={10}
                  />
                  <h3 className="text-white font-bold text-xl leading-tight">Подбор на най- <br />
                    добрите идеи</h3>

                </div>
                <p className="text-gray-300 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
              </div>
            </div>

            {/* work4 */}
            <div className="flex gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center gap-4">
                <Image
                  src="/assets/icons/UI Icons/Dot.svg"
                  alt="Define"
                  width={13}
                  height={10}
                />
                <Image
                  src="/assets/icons/UI Icons/Line.svg"
                  alt="Define"
                  width={4}
                  height={1}
                  className="w-[30px] h-[140px]"
                />

              </div>
              <div className="flex flex-col justify-items-stretch gap-7">
                <div className="flex gap-4">
                  <Image
                    src="/assets/icons/UI Icons/testing_icon.svg"
                    alt="Define"
                    width={60}
                    height={10}
                  />
                  <h3 className="text-white font-bold text-xl leading-tight">Прототипиране<br />
                    и тестове</h3>

                </div>
                <p className="text-gray-300 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
              </div>
            </div>

            {/* work5 */}
            <div className="flex gap-4 justify-center items-center">

              <div className="relative w-[50px] h-[20px]">
                <Image
                  src="/assets/icons/UI Icons/Dot.svg"
                  alt="Define"
                  width={10}
                  height={10}
                  className="absolute -top-15"
                />
              </div>
              {/* <Image
                  src="/assets/icons/UI Icons/Line.svg"
                  alt="Define"
                  width={4}
                  height={1}
                  className="w-[30px] h-[140px]"
                /> */}


              <div className="flex flex-col justify-items-stretch gap-7">
                <div className="flex gap-4">
                  <Image
                    src="/assets/icons/UI Icons/final_icon.svg"
                    alt="Define"
                    width={60}
                    height={10}
                  />
                  <h3 className="text-white font-bold text-xl leading-tight">Реализация и <br />
                    финален преглед</h3>

                </div>
                <p className="text-gray-300 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
              </div>
            </div>




          </div>
        </div>
      </section>





      {/* Carousel Section */}
      <section className="bg-white">
        <div className="flex flex-col gap-2 text-black p-6 uppercase">
          <h2 className="text-[0.9rem] mt-4">ЗАщо да изберете нас</h2>
          <div className="w-[80%] bg-black h-[2px] mb-4" />
          <h1 className="text-[1.25rem] font-[900] text-nowrap leading-6 mt-[-10px]"> Персонални решения <br />носещи сигурни <br />резултати</h1>
        </div>


        <div className="flex gap-6 text-black px-6 pb-6 overflow-x-auto scrollbar-hide">
          <div className="bg-black p-6 rounded-4xl w-auto">
            <h3 className="text-white text-lg font-bold mb-2 text-nowrap uppercase">Плюс За Нас</h3>
            <p className="text-white font-light text-[0.8rem] text-nowrap">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt</p>
          </div>
          <div className="bg-black p-6 rounded-4xl w-auto">
            <h3 className="text-white text-lg font-bold mb-2 text-nowrap uppercase">Плюс За Нас</h3>
            <p className="text-white font-light text-[0.8rem] text-nowrap">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt</p>
          </div>
          <div className="bg-black p-6 rounded-4xl w-auto">
            <h3 className="text-white text-lg font-bold mb-2 text-nowrap uppercase">Плюс За Нас</h3>
            <p className="text-white font-light text-[0.8rem] text-nowrap">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt</p>
          </div>
          <div className="bg-black p-6 rounded-4xl w-auto">
            <h3 className="text-white text-lg font-bold mb-2 text-nowrap uppercase">Плюс За Нас</h3>
            <p className="text-white font-light text-[0.8rem] text-nowrap">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt</p>
          </div>
          <div className="bg-black p-6 rounded-4xl w-auto">
            <h3 className="text-white text-lg font-bold mb-2 text-nowrap uppercase">Плюс За Нас</h3>
            <p className="text-white font-light text-[0.8rem] text-nowrap">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt</p>
          </div>

        </div>

      </section>


      {/* Handshake Section */}
      <section className="bg-black">
        <div className="relative w-full h-auto">
          <Image
            src="/assets/images/background_Images/Gradient1.png"
            alt="Gradient"
            width={1000}
            height={1000}
            className="absolute top-0 left-0 h-full"
          />
          <Image
            src="/assets/images/background_Images/Hands Logo Image.png"
            alt="Handshake"
            width={1000}
            height={1000}
            className=" w-full h-auto object-contain"
          />
          <Image
            src="/assets/icons/UI Icons/Backgorund Logo Stroke White.svg"
            alt="Background Logo Stroke Black"
            width={1000}
            height={1000}
            className="w-full h-auto object-contain p-6 -mt-20"
          />

          <div className="flex flex-col gap-4 text-white p-6 -mt-62 ">

            <h2 className="text-[2rem] font-bold uppercase tracking-wider">ВАШЕТО</h2>
            <h1 className="text-[2.5rem] font-[900] text-nowrap leading-8 tracking-wider mt-[-10px]">РАЗВИТИЕ</h1>
            <h2 className="text-[1.5rem] font-[900] uppercase tracking-tight">НАШИЯТ БИЗНЕС</h2>
            <p className="mb-6 text-xs leading-6 font-light tracking-wider">Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque porro  Lorem ipsum</p>
          </div>


        </div>

      </section>

      {/* Chess Image Section */}
      <section className="bg-white ">
        <Image
          src="/assets/images/background_Images/newchessimg.png"
          alt="Chess"
          width={600}
          height={700}
          className="w-[500px] md:w-[400px] lg:w-[600px] h-auto object-contain mt-6"
        />
        <div className="flex flex-col gap-4 text-black m-8">
          <h1 className="text-[1.6rem] font-bold tracking-tight text-nowrap">Свържете се с нас</h1>
          <p className="text-xs font-[500]">Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>

          <form className="flex flex-col gap-4 max-w-md w-full">
            <input
              type="text"
              placeholder="Имена за контакт"
              className="border-b border-gray-700 focus:outline-none py-2 placeholder:text-gray-400 text-sm"
            />
            <input
              type="text"
              placeholder="Телефон за контакт"
              className="border-b border-gray-700 focus:outline-none py-2 placeholder:text-gray-400 text-sm"
            />
            <input
              type="email"
              placeholder="E-mail за контакт"
              className="border-b border-gray-700 focus:outline-none py-2 placeholder:text-gray-400 text-sm"
            />
            <input
              type="text"
              placeholder="Каква е вашата идея?"
              className="border-b border-gray-700 focus:outline-none py-2 placeholder:text-gray-400 text-sm"
            />

            <div className="flex flex-col items-center gap-2">
              <label
                htmlFor="file-upload"
                className="w-[90%] cursor-pointer border-2 border-dashed border-gray-300 py-4 flex flex-col items-center justify-center text-gray-400 hover:border-black transition rounded-full"
              >
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="mb-2">
                  <path d="M12 16V4M12 4L8 8M12 4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 16.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-gray-400 text-xs">Upload Additional file</span>
                <input id="file-upload" type="file" className="hidden" />
              </label>
              <span className="text-xs text-gray-400 mt-1 text-left w-full">
                Прикачете файл. Размерът на документите не трябва да надвишава X MB
              </span>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="consent"
                className="w-5 h-5 border border-gray-400 accent-black "
              />
              <label htmlFor="consent" className="text-xs font-semibold text-black">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing.
              </label>

            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black text-white w-[80%] py-3 rounded-full font-bold text-sm"
              >
                ИЗПРАТИ
              </button>
            </div>


          </form>
        </div>

      </section>

      {/* Footer */}
      <footer className="m-8 bg-black flex flex-col gap-4">
        <div className="flex flex-col gap-8 w-full">
          <Image
            src="/assets/icons/main-logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-[70%] h-auto"
          />
          <p className="text-[12px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium mb-2">
              Абонирайте се, за новини и специални оферти.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Вашият имейл…"
                className="rounded-full px-6 py-2 bg-white text-black w-[90%] focus:outline-none"
              />
              <button
                type="submit"
                className="border border-white rounded-full px-6 py-2 text-white font-bold hover:bg-white hover:text-black transition w-fit"
              >
                Абониране
              </button>
            </form>
          </div>
          {/* Email and Number */}
          <div className="flex justify-between gap-4 text-[14px]">
            <div>
              <span className="block font-bold">Email</span>
              <span>info@rapidedge.agency</span>
            </div>
            <div>
              <span className="block font-bold">Телефон</span>
              <span className="text-nowrap">+359 123 456 789</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div>
              <ul className="flex flex-col gap-2 my-4 text-l">
                <li><a href="#">Начало</a></li>
                <li><a href="#">За Нас</a></li>
                <li><a href="#">Услуги</a></li>
                <li><a href="#">Процес</a></li>
                <li><a href="#">Защо Нас</a></li>
                <li><a href="#">Контакти</a></li>
              </ul>
            </div>
            <div className="flex flex-col justify-around mr-10">
              <Image
                src={"/assets/icons/facebook-icon.svg"}
                alt="Facebook"
                width={45}
                height={45}
              />
              <Image
                src={"/assets/icons/instagram-icon.svg"}
                alt="Instagram"
                width={45}
                height={45}
              />
              <Image
                src={"/assets/icons/linkedin-icon.svg"}
                alt="Linkedin"
                width={45}
                height={45}
              />
            </div>

          </div>
        </div>
        <div className="w-full bg-white h-[1px] mb-2" />
        <div className="flex flex-col gap-4 text-nowrap text-[12px]">
          <p className="text-gray-300 tracking-wider">Правила и условия | Политика за поверителност <br />| Достъпност | Бисквитки</p>
          <p className="text-gray-300 text-[11px]">© RapidEDGE Agency 2024-2025. Всички права запазени.</p>
        </div>

      </footer>
    </main>
  );
}

