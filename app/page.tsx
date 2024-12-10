import MainBackground from "@/components/main-header/main-background";
import Image from "next/image";
import mainImage from "@/components/images/Chat bot-pana.svg"

export default function Home() {
  return (
    <>
      <header className="flex mx-40">
        <div className=""></div>
      </header>
      <main>
        <MainBackground></MainBackground>
        <div className="pt-[10px]">
          <div className="flex flex-col lg:flex-row justify-center gap-2 items-center xl:gap-56">
            <div className="md:mt-[100px]">
              <Image src={mainImage} alt="AI" ></Image>
            </div>

            <div className="pt-[50px] px-10 md:w-[750px]">
              <div className="text-white font-kalameh text-2xl mb-12 text-right font-bold">
                دستیار هوشمند فارسی برای زندگی بهتر
              </div>
              <div
                className="text-justify font-kalameh mt-10 text-xl text-white"
                dir="rtl"
              >
                پرسیس یک دستیار هوشمند فارسی‌زبان است که به‌طور اختصاصی برای
                کاربران فارسی‌زبان طراحی شده است. این دستیار هوشمند می‌تواند با
                استفاده از هوش مصنوعی و پردازش زبان طبیعی، نیازهای روزمره شما را
                برآورده کند و تجربه‌ای راحت‌تر و هوشمندانه‌تر را در زندگی شما به
                ارمغان بیاورد. با هوشا، از ساده‌ترین تا پیچیده‌ترین وظایف روزانه
                خود را می‌توانید به راحتی و با استفاده از صدای خودتان مدیریت
                کنید
              </div>
              <div className="flex flex-col lg:flex-row justify-end gap-6 mt-[46px] ">
                <button className="h-[54px] font-kalameh text-[22px] rounded-lg">
                  <div className="relative group cursor-pointer">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-center">
                      <p>اطلاعات بیشتر</p>
                    </div>
                  </div>
                </button>
                <button className="h-[54px] bg-[#6ecccc] font-kalameh text-[22px] rounded-lg">
                  <div className="relative group cursor-pointer">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-center">
                      <p>چرا پرسیس؟</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
