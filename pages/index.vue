<template>
  <main class="bg-white">
  <HeroVideo />
  <section>


    <div class="relative h-32 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-teal-400 via-blue-400 via-green-300 to-yellow-300 bg-[length:400%_400%] animate-gradient-shift overflow-hidden transform -skew-y-1 my-8 shadow-lg">
          <div class="absolute whitespace-nowrap animate-marquee-slant text-2xl md:text-3xl font-black text-white text-shadow-lg top-1/2 transform -translate-y-1/2 skew-y-1 flex items-center">
            <div class="inline-flex items-center gap-4 mr-12">
              <span class="text-3xl md:text-4xl animate-bounce">📚</span>
              <span>NEW BOOK LAUNCH: "KIKA'S EXAMINATION" - Now Available!</span>
            </div>
            <div class="inline-flex items-center gap-4 mr-12">
              <span class="text-3xl md:text-4xl animate-bounce">✨</span>
              <span>Inspiring Stories for Young Minds</span>
            </div>
            <div class="inline-flex items-center gap-4 mr-12">
              <span class="text-3xl md:text-4xl animate-bounce">🎉</span>
              <span>Educational Excellence & Moral Values</span>
            </div>
            <div class="inline-flex items-center gap-4 mr-12">
              <span class="text-3xl md:text-4xl animate-bounce">📖</span>
              <span>Perfect for Ages 8-12</span>
            </div>
            <div class="inline-flex items-center gap-4 mr-12">
              <span class="text-3xl md:text-4xl animate-bounce">🌟</span>
              <span>Get Your Copy Today!</span>
            </div>
          </div>
        </div>

        <MakariosIntro id="about" />
        
   <Subscriptions id="donate" />

   <OurTeam id="testimonials" />
   <TestimonialsScroll id="testimonials" />


   <KikaExamination id="kika" />

  </section>

</main>
</template>

<script setup lang="ts">
import kika1 from "@/assets/img/kika/kika1.jpeg"
import kika2 from "@/assets/img/kika/kika2.jpeg"
import kika3 from "@/assets/img/kika/kika3.jpeg"
import kika4 from "@/assets/img/kika/kika4.jpeg"
import kika5 from "@/assets/img/kika/kika5.jpeg"
import kika6 from "@/assets/img/kika/kika6.jpeg"
import kika7 from "@/assets/img/kika/kika7.jpeg"
import kika8 from "@/assets/img/kika/kika8.jpeg"
import kika9 from "@/assets/img/kika/kika9.jpeg"
import kika10 from "@/assets/img/kika/kika10.jpeg"
import kika11 from "@/assets/img/kika/kika11.jpeg"
import kika12 from "@/assets/img/kika/kika12.jpeg"
import kika13 from "@/assets/img/kika/kika13.jpeg"
import kika14 from "@/assets/img/kika/kika14.jpeg"
import kika15 from "@/assets/img/kika/kika15.jpeg"
import kika16 from "@/assets/img/kika/kika16.jpeg"
import kika17 from "@/assets/img/kika/kika17.jpeg"
import ContinousCarousel from "../components/ContinousCarousel.vue"
const managementTeam  = ref([
    {
       image: kika1,
        "name": "Sola Salami",
        "title": "Co-Founder & Chief Executive Officer",
        "bio": "Sola Salami is an accomplished executive with over 30 years of experience spanning IT, real estate, and finance. Formerly the Head of IT at Skye Bank (now Polaris Bank), Sola has a distinguished track record of driving technological innovation and strategic growth. A serial entrepreneur, Sola founded Gold Micro-Finance Bank and successfully led its acquisition by Piggytech Global Ltd. Currently, he manages a dynamic IT firm and serves as CEO of a leading real estate company, overseeing a portfolio exceeding N10 billion in developments and sales. He is known for his conscientious, enthusiastic, and responsible approach to business, consistently demonstrating high initiative and self-motivation. His adaptability to new situations and environments enables him to excel both independently and as a collaborative team member. A committed IT professional with core expertise in network and systems administration and system integration, Sola also excels as a manager of highly skilled professionals, leveraging excellent analytical and problem-solving skills. He holds several certificates and degrees, including an MBA from Lagos Business School and additional qualifications from prestigious institutions such as The Wharton School, University of Pennsylvania, and IESE Business School. These credentials reflect his robust educational foundation and unwavering commitment to continuous professional development."
    },
    {
      image: kika2,
        "name": "Ayobami Adeloye",
        "title": "Co-Founder & Managing Director",
        "bio": "Ayobami Adeloye is a distinguished finance professional with over 23 years of experience in Nigeria’s finance industry. His experience is diverse, including finance, performance management, sales, and leadership roles. Ayobami served as the Ikeja Zonal Manager at Wema Bank for more than a decade, where he managed and expanded the bank's retail and commercial banking business. Following his impactful tenure at Wema Bank, he advanced to Hallmark Finance Company Limited as the Chief Operating Officer (COO) and Acting Chief Executive Officer (CEO). Under his leadership, Hallmark Finance, one of Nigeria’s leading finance companies, saw significant growth and operational improvements across its branches in Lagos, Abuja, Kano, Warri, Asaba, and Port Harcourt. He is an Alumnus of the University of Ilorin, a fellow of the Chartered Institute of Accountants of Nigeria and Certified in International Financial Reporting Standards (IFRS). Ayobami's extensive experience and qualifications make him a key figure in driving strategic growth and excellence in the business."
    },
    {
      image: kika3,
        "name": "Odejobi M. Babajide",
        "title": "Head, Human Resources",
        "bio": "Odejobi M. Babajide is a versatile professional with over 11 years of rich experience in talent management, performance development, organisational structure, strategic planning, and product development across the telecommunications, chemical allied, and oil & gas industries. He excels in leadership, supervision, and communication, demonstrating a strong drive and enthusiasm for achieving organisational growth. He holds a B.Sc. (Ed) and an M.Sc. in Industrial Chemistry and is an esteemed member of several professional organisations, including Chartered Institute of Personnel Management (ACIPM), Institute of Chartered Chemists of Nigeria (MICCON), and Chemical Society of Nigeria (MSCN). Odejobi's leadership prowess is evident in his ability to empower individuals and guide teams toward achieving their full potential. His strategic acumen allows him to translate visionary goals into actionable plans, driving successful business outcomes. He is adept at identifying challenges, crafting innovative solutions, and making informed decisions to enhance efficiency and stimulate growth. Currently, Odejobi serves as the Head of Human Resources & Admin at Loan iQ Limited, where he spearheads initiatives in Talent Management, Employee Engagement & Satisfaction, and Performance Management. His role also encompasses overseeing Training and Development programmes that align with the company’s core values and strategic objectives."
    },
    {
      image: kika4,
        "name": "Temidayo Fowosire",
        "title": "Head, Customer Experience Management and Operations",
        "bio": "Temidayo Fowosire is a seasoned management consultant specialising in banking operations, customer service excellence, and administrative efficiency. With over a decade of experience, she has transformed and fostered high-performance teams through her strategic leadership. Temidayo's career encompasses extensive roles in Customer Service, Funds Transfer, Cash Management, and Operations. She has held pivotal titles, including three years with Finatrust Microfinance Bank and PurpleMoney Microfinance Bank as Head of Operations, Administration, and Customer Experience. She has an impressive educational background, including a Higher National Diploma (HND) in Banking and Finance, a Bachelor of Science (BSc) in Business Management and Entrepreneurship, and an MBA with a Specialisation in Fintech and Blockchain from Nexford University in Washington, D.C., USA. Additionally, she holds several professional certificates in Customer Service and Financial Analysis, rounding out her qualifications in the finance and business sectors. She is currently the Head of Customer Experience Management at Loan iQ Limited, where she drives customer satisfaction and ensures that all customer interactions align with the company’s values and objectives."
    },
    {
      image: kika5,
        "name": "Victoria Tony-Bekederemo",
        "title": "Head, Wealth Management and Business Development",
        "bio": "Victoria Tony-Bekederemo has over 12 years of expertise in the sales of financial products, liability generation, and a strong track record in wealth management, cross-selling, relationship management, and customer base acquisition. She has successfully built and managed client relationships, driving business growth through strategic financial solutions. Victoria holds an HND in Mass Communication and a BSc in Business Administration. She is an Associate Member of the Chartered Institute of Personnel Management (CIPM) and a member of the National Institute of Marketing of Nigeria (NIMN). Victoria has held pivotal roles at notable institutions such as Wema Bank Plc, Canary Point Corporate Services, and FairMoney MFB, where she honed her skills in financial services and customer relationship management. She is currently leading the Wealth Management division at Loan iQ Limited, overseeing the management of high-net-worth client portfolios and contributing to the firm’s financial product sales strategy."
    },
    {
      image: kika6,
        "name": "Victoria Tony-Bekederemo",
        "title": "Head, Wealth Management and Business Development",
        "bio": "Victoria Tony-Bekederemo has over 12 years of expertise in the sales of financial products, liability generation, and a strong track record in wealth management, cross-selling, relationship management, and customer base acquisition. She has successfully built and managed client relationships, driving business growth through strategic financial solutions. Victoria holds an HND in Mass Communication and a BSc in Business Administration. She is an Associate Member of the Chartered Institute of Personnel Management (CIPM) and a member of the National Institute of Marketing of Nigeria (NIMN). Victoria has held pivotal roles at notable institutions such as Wema Bank Plc, Canary Point Corporate Services, and FairMoney MFB, where she honed her skills in financial services and customer relationship management. She is currently leading the Wealth Management division at Loan iQ Limited, overseeing the management of high-net-worth client portfolios and contributing to the firm’s financial product sales strategy."
    },
    {
      image: kika7,
        "name": "Victoria Tony-Bekederemo",
        "title": "Head, Wealth Management and Business Development",
        "bio": "Victoria Tony-Bekederemo has over 12 years of expertise in the sales of financial products, liability generation, and a strong track record in wealth management, cross-selling, relationship management, and customer base acquisition. She has successfully built and managed client relationships, driving business growth through strategic financial solutions. Victoria holds an HND in Mass Communication and a BSc in Business Administration. She is an Associate Member of the Chartered Institute of Personnel Management (CIPM) and a member of the National Institute of Marketing of Nigeria (NIMN). Victoria has held pivotal roles at notable institutions such as Wema Bank Plc, Canary Point Corporate Services, and FairMoney MFB, where she honed her skills in financial services and customer relationship management. She is currently leading the Wealth Management division at Loan iQ Limited, overseeing the management of high-net-worth client portfolios and contributing to the firm’s financial product sales strategy."
    },
    {
      image: kika8,
        "name": "Victoria Tony-Bekederemo",
        "title": "Head, Wealth Management and Business Development",
        "bio": "Victoria Tony-Bekederemo has over 12 years of expertise in the sales of financial products, liability generation, and a strong track record in wealth management, cross-selling, relationship management, and customer base acquisition. She has successfully built and managed client relationships, driving business growth through strategic financial solutions. Victoria holds an HND in Mass Communication and a BSc in Business Administration. She is an Associate Member of the Chartered Institute of Personnel Management (CIPM) and a member of the National Institute of Marketing of Nigeria (NIMN). Victoria has held pivotal roles at notable institutions such as Wema Bank Plc, Canary Point Corporate Services, and FairMoney MFB, where she honed her skills in financial services and customer relationship management. She is currently leading the Wealth Management division at Loan iQ Limited, overseeing the management of high-net-worth client portfolios and contributing to the firm’s financial product sales strategy."
    },
    {
      image: kika9,
        "name": "Victoria Tony-Bekederemo",
        "title": "Head, Wealth Management and Business Development",
        "bio": "Victoria Tony-Bekederemo has over 12 years of expertise in the sales of financial products, liability generation, and a strong track record in wealth management, cross-selling, relationship management, and customer base acquisition. She has successfully built and managed client relationships, driving business growth through strategic financial solutions. Victoria holds an HND in Mass Communication and a BSc in Business Administration. She is an Associate Member of the Chartered Institute of Personnel Management (CIPM) and a member of the National Institute of Marketing of Nigeria (NIMN). Victoria has held pivotal roles at notable institutions such as Wema Bank Plc, Canary Point Corporate Services, and FairMoney MFB, where she honed her skills in financial services and customer relationship management. She is currently leading the Wealth Management division at Loan iQ Limited, overseeing the management of high-net-worth client portfolios and contributing to the firm’s financial product sales strategy."
    },
    {
      image: kika10,
        "name": "Victoria Tony-Bekederemo",
        "title": "Head, Wealth Management and Business Development",
        "bio": "Victoria Tony-Bekederemo has over 12 years of expertise in the sales of financial products, liability generation, and a strong track record in wealth management, cross-selling, relationship management, and customer base acquisition. She has successfully built and managed client relationships, driving business growth through strategic financial solutions. Victoria holds an HND in Mass Communication and a BSc in Business Administration. She is an Associate Member of the Chartered Institute of Personnel Management (CIPM) and a member of the National Institute of Marketing of Nigeria (NIMN). Victoria has held pivotal roles at notable institutions such as Wema Bank Plc, Canary Point Corporate Services, and FairMoney MFB, where she honed her skills in financial services and customer relationship management. She is currently leading the Wealth Management division at Loan iQ Limited, overseeing the management of high-net-worth client portfolios and contributing to the firm’s financial product sales strategy."
    },
    {
      image: kika11,
        "name": "Victoria Tony-Bekederemo",
        "title": "Head, Wealth Management and Business Development",
        "bio": "Victoria Tony-Bekederemo has over 12 years of expertise in the sales of financial products, liability generation, and a strong track record in wealth management, cross-selling, relationship management, and customer base acquisition. She has successfully built and managed client relationships, driving business growth through strategic financial solutions. Victoria holds an HND in Mass Communication and a BSc in Business Administration. She is an Associate Member of the Chartered Institute of Personnel Management (CIPM) and a member of the National Institute of Marketing of Nigeria (NIMN). Victoria has held pivotal roles at notable institutions such as Wema Bank Plc, Canary Point Corporate Services, and FairMoney MFB, where she honed her skills in financial services and customer relationship management. She is currently leading the Wealth Management division at Loan iQ Limited, overseeing the management of high-net-worth client portfolios and contributing to the firm’s financial product sales strategy."
    },
    {
      image: kika12,
        "name": "Victoria Tony-Bekederemo",
        "title": "Head, Wealth Management and Business Development",
        "bio": "Victoria Tony-Bekederemo has over 12 years of expertise in the sales of financial products, liability generation, and a strong track record in wealth management, cross-selling, relationship management, and customer base acquisition. She has successfully built and managed client relationships, driving business growth through strategic financial solutions. Victoria holds an HND in Mass Communication and a BSc in Business Administration. She is an Associate Member of the Chartered Institute of Personnel Management (CIPM) and a member of the National Institute of Marketing of Nigeria (NIMN). Victoria has held pivotal roles at notable institutions such as Wema Bank Plc, Canary Point Corporate Services, and FairMoney MFB, where she honed her skills in financial services and customer relationship management. She is currently leading the Wealth Management division at Loan iQ Limited, overseeing the management of high-net-worth client portfolios and contributing to the firm’s financial product sales strategy."
    },
    {
      image: kika13,
        "name": "Victoria Tony-Bekederemo",
        "title": "Head, Wealth Management and Business Development",
        "bio": "Victoria Tony-Bekederemo has over 12 years of expertise in the sales of financial products, liability generation, and a strong track record in wealth management, cross-selling, relationship management, and customer base acquisition. She has successfully built and managed client relationships, driving business growth through strategic financial solutions. Victoria holds an HND in Mass Communication and a BSc in Business Administration. She is an Associate Member of the Chartered Institute of Personnel Management (CIPM) and a member of the National Institute of Marketing of Nigeria (NIMN). Victoria has held pivotal roles at notable institutions such as Wema Bank Plc, Canary Point Corporate Services, and FairMoney MFB, where she honed her skills in financial services and customer relationship management. She is currently leading the Wealth Management division at Loan iQ Limited, overseeing the management of high-net-worth client portfolios and contributing to the firm’s financial product sales strategy."
    },
    {
      image: kika14,
        "name": "Victoria Tony-Bekederemo",
        "title": "Head, Wealth Management and Business Development",
        "bio": "Victoria Tony-Bekederemo has over 12 years of expertise in the sales of financial products, liability generation, and a strong track record in wealth management, cross-selling, relationship management, and customer base acquisition. She has successfully built and managed client relationships, driving business growth through strategic financial solutions. Victoria holds an HND in Mass Communication and a BSc in Business Administration. She is an Associate Member of the Chartered Institute of Personnel Management (CIPM) and a member of the National Institute of Marketing of Nigeria (NIMN). Victoria has held pivotal roles at notable institutions such as Wema Bank Plc, Canary Point Corporate Services, and FairMoney MFB, where she honed her skills in financial services and customer relationship management. She is currently leading the Wealth Management division at Loan iQ Limited, overseeing the management of high-net-worth client portfolios and contributing to the firm’s financial product sales strategy."
    },
    {
      image: kika15,
        "name": "Victoria Tony-Bekederemo",
        "title": "Head, Wealth Management and Business Development",
        "bio": "Victoria Tony-Bekederemo has over 12 years of expertise in the sales of financial products, liability generation, and a strong track record in wealth management, cross-selling, relationship management, and customer base acquisition. She has successfully built and managed client relationships, driving business growth through strategic financial solutions. Victoria holds an HND in Mass Communication and a BSc in Business Administration. She is an Associate Member of the Chartered Institute of Personnel Management (CIPM) and a member of the National Institute of Marketing of Nigeria (NIMN). Victoria has held pivotal roles at notable institutions such as Wema Bank Plc, Canary Point Corporate Services, and FairMoney MFB, where she honed her skills in financial services and customer relationship management. She is currently leading the Wealth Management division at Loan iQ Limited, overseeing the management of high-net-worth client portfolios and contributing to the firm’s financial product sales strategy."
    },
    {
      image: kika16,
        "name": "Victoria Tony-Bekederemo",
        "title": "Head, Wealth Management and Business Development",
        "bio": "Victoria Tony-Bekederemo has over 12 years of expertise in the sales of financial products, liability generation, and a strong track record in wealth management, cross-selling, relationship management, and customer base acquisition. She has successfully built and managed client relationships, driving business growth through strategic financial solutions. Victoria holds an HND in Mass Communication and a BSc in Business Administration. She is an Associate Member of the Chartered Institute of Personnel Management (CIPM) and a member of the National Institute of Marketing of Nigeria (NIMN). Victoria has held pivotal roles at notable institutions such as Wema Bank Plc, Canary Point Corporate Services, and FairMoney MFB, where she honed her skills in financial services and customer relationship management. She is currently leading the Wealth Management division at Loan iQ Limited, overseeing the management of high-net-worth client portfolios and contributing to the firm’s financial product sales strategy."
    },
    {
      image: kika17,
        "name": "Victoria Tony-Bekederemo",
        "title": "Head, Wealth Management and Business Development",
        "bio": "Victoria Tony-Bekederemo has over 12 years of expertise in the sales of financial products, liability generation, and a strong track record in wealth management, cross-selling, relationship management, and customer base acquisition. She has successfully built and managed client relationships, driving business growth through strategic financial solutions. Victoria holds an HND in Mass Communication and a BSc in Business Administration. She is an Associate Member of the Chartered Institute of Personnel Management (CIPM) and a member of the National Institute of Marketing of Nigeria (NIMN). Victoria has held pivotal roles at notable institutions such as Wema Bank Plc, Canary Point Corporate Services, and FairMoney MFB, where she honed her skills in financial services and customer relationship management. She is currently leading the Wealth Management division at Loan iQ Limited, overseeing the management of high-net-worth client portfolios and contributing to the firm’s financial product sales strategy."
    }
])
</script>

<style scoped>
  /* Custom Animations */
  @keyframes float {
    0%, 100% { 
      transform: translateY(0px) rotate(0deg); 
      opacity: 0.7; 
    }
    50% { 
      transform: translateY(-100px) rotate(180deg); 
      opacity: 0.3; 
    }
  }
  
  @keyframes float-icon {
    0%, 100% { 
      transform: translateY(0px) rotate(0deg); 
    }
    50% { 
      transform: translateY(-20px) rotate(180deg); 
    }
  }
  
  @keyframes background-move {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
  
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes marquee-slant {
    0% { 
      transform: translateX(-100%) translateY(-50%) skew(5deg) rotate(-2deg); 
    }
    100% { 
      transform: translateX(100vw) translateY(-50%) skew(5deg) rotate(-2deg); 
    }
  }
  
  @keyframes slide-in-down {
    from { 
      opacity: 0; 
      transform: translateY(-50px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  @keyframes slide-in-up {
    from { 
      opacity: 0; 
      transform: translateY(50px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  @keyframes fade-in-up {
    from { 
      opacity: 0; 
      transform: translateY(30px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  @keyframes fade-in-scale {
    from { 
      opacity: 0; 
      transform: scale(0.8); 
    }
    to { 
      opacity: 1; 
      transform: scale(1); 
    }
  }
  
  @keyframes count-up {
    from { 
      opacity: 0; 
      transform: scale(0.5); 
    }
    to { 
      opacity: 1; 
      transform: scale(1); 
    }
  }
  
  @keyframes pulse-custom {
    0% { box-shadow: 0 5px 15px rgba(79, 70, 229, 0.3); }
    50% { box-shadow: 0 5px 25px rgba(79, 70, 229, 0.5); }
    100% { box-shadow: 0 5px 15px rgba(79, 70, 229, 0.3); }
  }
  
  /* Animation Classes */
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-icon {
    animation: float-icon 8s ease-in-out infinite;
  }
  
  .animate-background-move {
    background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: background-move 20s linear infinite;
  }
  
  .animate-gradient-shift {
    animation: gradient-shift 8s ease infinite;
  }
  
  .animate-marquee-slant {
    animation: marquee-slant 15s linear infinite;
  }
  
  .animate-slide-in-down {
    animation: slide-in-down 1s ease-out;
  }
  
  .animate-slide-in-up {
    animation: slide-in-up 1s ease-out 0.3s both;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 1s ease-out 0.9s both;
  }
  
  .animate-fade-in-scale {
    animation: fade-in-scale 1s ease-out 0.6s both;
  }
  
  .animate-count-up {
    animation: count-up 2s ease-out 2s both;
  }
  
  .animate-pulse-custom {
    animation: pulse-custom 2s infinite;
  }
  
  /* Goal Card Hover Effect */
  .goal-card {
    transition: all 0.3s ease;
  }
  
  .goal-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  /* Text Shadow Utility */
  .text-shadow-lg {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  /* Additional Tailwind Custom Classes */
  .w-15 { width: 3.75rem; }
  .h-15 { height: 3.75rem; }
  .w-25 { width: 6.25rem; }
  .h-25 { height: 6.25rem; }
  .w-30 { width: 7.5rem; }
  .h-30 { height: 7.5rem; }
</style>