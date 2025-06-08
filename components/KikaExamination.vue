<template>
  <div
    class="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
  >
    <!-- Background Particles -->
    <div class="fixed top-0 left-0 w-full h-full pointer-events-none z-10">
      <div
        v-for="(particle, index) in particles"
        :key="index"
        class="absolute bg-white/10 rounded-full animate-float"
        :class="particle.class"
        :style="particle.style"
      ></div>
    </div>

    <!-- Floating Book Icons -->
    <div class="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <div
        v-for="(icon, index) in floatingIcons"
        :key="index"
        ref="floatingElements"
        class="absolute text-2xl opacity-10 animate-float-icon"
        :style="icon.style"
      >
        {{ icon.emoji }}
      </div>
    </div>

    <div
      class="relative z-20 min-h-screen bg-white/95 backdrop-blur-lg m-5 rounded-3xl overflow-hidden shadow-2xl"
    >
      <!-- <header
        class="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-8 py-16 text-center overflow-hidden"
      >
        <div
          class="absolute top-0 left-0 w-full h-full opacity-20 animate-background-move"
        ></div>

        <h1
          class="text-5xl md:text-6xl font-black mb-4 relative z-30 animate-slide-in-down"
        >
          MAKARIOS Initiative
        </h1>
        <p
          class="text-xl md:text-2xl font-light opacity-90 mb-8 relative z-30 animate-slide-in-up"
        >
          Building Hope, Transforming Lives
        </p>
        <div
          class="inline-block bg-white/20 px-6 py-2 rounded-full font-semibold backdrop-blur-lg border border-white/30 relative z-30 animate-fade-in-scale"
        >
          Serving Communities Since 2017
        </div>
      </header> -->

      <!-- Animated Book Marquee -->
      <!-- <div
        class="relative h-32 bg-gradient-to-r from-emerald-400 via-blue-400 via-purple-400 to-pink-400 bg-[length:400%_400%] animate-gradient-shift overflow-hidden transform -skew-y-1 my-8 shadow-lg"
      >
        <div
          class="absolute whitespace-nowrap animate-marquee-slant text-2xl md:text-3xl font-black text-white text-shadow-lg top-1/2 transform -translate-y-1/2 skew-y-1 flex items-center"
        >
          <div class="inline-flex items-center gap-4 mr-12">
            <span class="text-3xl md:text-4xl animate-book-flip">📚</span>
            <span
              >NEW BOOK LAUNCH: "KIKA'S EXAMINATION" - Empowering Young
              Minds!</span
            >
          </div>
          <div class="inline-flex items-center gap-4 mr-12">
            <span class="text-3xl md:text-4xl animate-bounce">🌟</span>
            <span>Based on True Story of Moral Courage</span>
          </div>
          <div class="inline-flex items-center gap-4 mr-12">
            <span class="text-3xl md:text-4xl animate-pulse">🎯</span>
            <span>Combat Exam Malpractice - Build Integrity</span>
          </div>
          <div class="inline-flex items-center gap-4 mr-12">
            <span class="text-3xl md:text-4xl animate-spin-slow">💝</span>
            <span>N5,000 Can Change A Child's Life!</span>
          </div>
        </div>
      </div> -->

      <!-- Book Hero Section -->
      <div class="px-8 py-16 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <!-- Book Image with Interactive Elements -->
          <div class="relative group">
            <div
              class="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-2"
            >
              <img
                src="@/assets/img/book-cover.jpeg"
                alt="Kika's Examination Book Cover"
                class="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              <div
                class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <h3 class="text-xl font-bold mb-2">Kika's Examination</h3>
                <p class="text-sm">By Lauretta Patrick-Nwachi</p>
              </div>
            </div>

            <!-- Floating Stats -->
            <div
              class="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-bounce-slow shadow-lg"
            >
              Ages 8-12
            </div>
            <div
              class="absolute -bottom-6 -left-6 bg-gradient-to-r from-pink-400 to-purple-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse shadow-lg"
            >
              ₦5,000
            </div>
          </div>

          <!-- Book Information -->
          <div class="space-y-6">
            <h2
              class="text-4xl md:text-5xl font-black text-gray-800 animate-slide-in-right"
            >
              Empowering Young Minds
            </h2>
            <p class="text-xl text-gray-600 leading-relaxed animate-fade-in-up">
              Join us in inspiring a love of learning and moral resilience in
              children!
              <strong>"Kika's Examination"</strong> is a true-life story of a
              young girl who stood strong against examination malpractice,
              achieving outstanding results through determination and strong
              moral discipline.
            </p>

            <!-- Interactive Goal Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="(goal, index) in bookGoals"
                :key="index"
                class="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border-l-4 border-blue-500 transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                @click="activeGoal = index"
                :class="{
                  'bg-gradient-to-r from-blue-100 to-purple-100 shadow-lg scale-105':
                    activeGoal === index,
                }"
              >
                <div class="flex items-center space-x-3">
                  <span class="text-2xl">{{ goal.icon }}</span>
                  <div>
                    <h4 class="font-bold text-gray-800">{{ goal.title }}</h4>
                    <p class="text-sm text-gray-600">{{ goal.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Video Testimonials Gallery -->
        <div class="mb-16">
          <h2
            class="text-3xl lg:text-4xl font-black text-center text-gray-800 mb-8 animate-slide-in-up"
          >
            Hear From Our Community
          </h2>

          <!-- Video Gallery Container -->
          <div class="relative">
            <!-- Main Video Display -->
            <div class="mb-8 relative">
              <div
                class="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl overflow-hidden shadow-2xl relative group"
              >
                <video
                  ref="mainVideo"
                  :src="activeVideo.src"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  controls
                  :poster="activeVideo.poster"
                >
                  Your browser does not support the video tag.
                </video>

                <!-- Video Overlay Info -->
                <div
                  class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                >
                  <h3 class="text-xl font-bold text-white mb-2">
                    <!-- {{ activeVideo.title }} --> KIKA Examination Book Distribution Event
                  </h3>
                  <p class="text-gray-200 text-sm">
                    <!-- {{ activeVideo.description }} -->
                  </p>
                </div>
              </div>
            </div>

            <!-- Video Thumbnails Carousel -->
            <div class="relative overflow-hidden">
              <div
                class="flex transition-transform duration-500 ease-in-out space-x-4"
                :style="{ transform: `translateX(-${carouselOffset}px)` }"
              >
                <div
                  v-for="(video, index) in videoTestimonials"
                  :key="index"
                  class="flex-shrink-0 w-64 cursor-pointer transform transition-all duration-300 hover:scale-105"
                  @click="selectVideo(index)"
                >
                  <div
                    class="relative aspect-video rounded-xl overflow-hidden shadow-lg border-4 transition-all duration-300"
                    :class="{
                      'border-blue-500 shadow-blue-200':
                        activeVideoIndex === index,
                      'border-transparent': activeVideoIndex !== index,
                    }"
                  >
                    <img
                      :src="video.poster"
                      :alt="video.title"
                      class="w-full h-full object-cover"
                    />
                    <div
                      class="absolute inset-0 bg-black/20 flex items-center justify-center"
                    >
                      <div
                        class="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"
                      >
                        <svg
                          class="w-6 h-6 text-blue-600 ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div
                      class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3"
                    >
                      <!-- <p class="text-white text-sm font-semibold truncate">
                        {{ video.title }}
                      </p> -->
                    </div>
                  </div>
                </div>
              </div>

              <!-- Carousel Navigation -->
              <button
                @click="scrollCarousel('left')"
                class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <svg
                  class="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                @click="scrollCarousel('right')"
                class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <svg
                  class="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Interactive Image Gallery -->
        <div class="mb-16">
          <h2 class="text-2xl lg:text-4xl font-black text-center text-gray-800 mb-8">
            Makarios Schools Connect Book Distribution Gallery
          </h2>

          <ContinousCarousel :testimonials="managementTeam" />

          <!-- <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              v-for="(image, index) in galleryImages"
              :key="index"
              class="relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              @click="openLightbox(index)"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <div class="absolute bottom-2 left-2 right-2 text-white">
                  <p class="text-sm font-semibold">{{ image.title }}</p>
                </div>
              </div>
            </div>
          </div> -->
        </div>

        <!-- Lightbox Modal -->
        <div
          v-if="lightboxOpen"
          class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          @click="closeLightbox"
        >
          <div class="relative max-w-4xl max-h-full">
            <img
              :src="galleryImages[currentLightboxIndex].src"
              :alt="galleryImages[currentLightboxIndex].alt"
              class="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              @click="closeLightbox"
              class="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Why Support Section -->
        <div
          class="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <h2 class="text-4xl font-black text-center text-gray-800 mb-8">
            Why Support This Initiative?
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              v-for="(reason, index) in supportReasons"
              :key="index"
              class="text-center transform transition-all duration-300 hover:scale-105"
            >
              <div
                class="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <span class="text-3xl">{{ reason.icon }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                {{ reason.title }}
              </h3>
              <p class="text-gray-600">{{ reason.description }}</p>
            </div>
          </div>
        </div>

        <!-- Donation Section -->
        <div
          class="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 class="text-4xl font-black mb-4">Make a Difference Today</h2>
          <p class="text-xl mb-8 opacity-90">
            The book is ₦5,000 per copy and a copy can change a child's life!
          </p>

          <!-- Donation Options -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div
              v-for="option in donationOptions"
              :key="option.copies"
              class="bg-white/10 backdrop-blur-lg rounded-xl p-4 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
              @click="selectedDonation = option"
              :class="{
                'bg-white/20 scale-105':
                  selectedDonation.copies === option.copies,
              }"
            >
              <div class="text-2xl font-bold mb-2">
                {{ option.copies }}
                {{ option.copies === 1 ? "Copy" : "Copies" }}
              </div>
              <div class="text-lg">₦{{ option.amount.toLocaleString() }}</div>
            </div>
          </div>

          <!-- Bank Details -->
          <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8">
            <h3 class="text-xl font-bold mb-4">Bank Details</h3>
            <div class="space-y-2 text-left max-w-md mx-auto">
              <div class="flex justify-between">
                <span>Bank:</span>
                <span class="font-semibold">Fidelity Bank</span>
              </div>
              <div class="flex justify-between">
                <span>Account Number:</span>
                <span class="font-semibold">4011401325</span>
              </div>
              <div class="flex justify-between">
                <span>Account Name:</span>
                <span class="font-semibold text-right text-sm"
                  >Makarios Initiative for Health and Humanitarian
                  Development</span
                >
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h4 class="font-bold mb-2">Contact Person</h4>
              <p>Dr. Patrick Nwachi</p>
              <p class="text-sm opacity-90">Central Coordinator @MIHHD</p>
            </div>
            <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h4 class="font-bold mb-2">Contact Details</h4>
              <p>📞 08034080064, 08080232073</p>
              <p>📧 Kika'sexamination@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import home from "@/assets/videos/kika/book/home-video.mp4";
import book1 from "@/assets/videos/kika/book/kika-examination1.mp4";
import book2 from "@/assets/videos/kika/book/kika-examination2.mp4";
import book3 from "@/assets/videos/kika/book/kika-examination3.mp4";
import book4 from "@/assets/videos/kika/book/kika-examination4.mp4";
import book5 from "@/assets/videos/kika/book/kika-examination5.mp4";
import book6 from "@/assets/videos/kika/book/kika-examination6.mp4";
import book7 from "@/assets/videos/kika/book/kika-examination7.mp4";
import book8 from "@/assets/videos/kika/book/kika-examination8.mp4";
import book9 from "@/assets/videos/kika/book/kika-examination9.mp4";
import book10 from "@/assets/videos/kika/book/kika-examination10.mp4";
import book11 from "@/assets/videos/kika/book/kika-examination11.mp4";
import book12 from "@/assets/videos/kika/book/kika-examination12.mp4";
import book13 from "@/assets/videos/kika/book/kika-examination13.mp4";
import book14 from "@/assets/videos/kika/book/kika-examination14.mp4";
import book15 from "@/assets/videos/kika/book/kika-examination15.mp4";
import book16 from "@/assets/videos/kika/book/kika-examination16.mp4";
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
import cover from "@/assets/img/book-cover.jpeg"
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
interface Particle {
  class: string;
  style: string;
}

interface FloatingIcon {
  emoji: string;
  style: string;
}

interface BookGoal {
  icon: string;
  title: string;
  description: string;
}

interface VideoTestimonial {
  src: string;
  poster: string;
  title: string;
  description: string;
}

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

interface SupportReason {
  icon: string;
  title: string;
  description: string;
}

interface DonationOption {
  copies: number;
  amount: number;
}

// Reactive data
const particles = ref<Particle[]>([
  { class: "w-20 h-20", style: "left: 10%; animation-delay: 0s;" },
  { class: "w-15 h-15", style: "left: 20%; animation-delay: 2s;" },
  { class: "w-25 h-25", style: "left: 35%; animation-delay: 4s;" },
  { class: "w-10 h-10", style: "left: 50%; animation-delay: 1s;" },
  { class: "w-30 h-30", style: "left: 65%; animation-delay: 3s;" },
  { class: "w-12 h-12", style: "left: 80%; animation-delay: 5s;" },
]);

const floatingIcons = ref<FloatingIcon[]>([
  { emoji: "📚", style: "top: 10%; left: 85%; animation-delay: 0s;" },
  { emoji: "🎓", style: "top: 30%; left: 5%; animation-delay: 2s;" },
  { emoji: "✨", style: "top: 60%; left: 90%; animation-delay: 4s;" },
  { emoji: "🌟", style: "top: 80%; left: 10%; animation-delay: 6s;" },
]);

const bookGoals = ref<BookGoal[]>([
  {
    icon: "🎯",
    title: "Shape Values",
    description: "Shape the values and academic journey of children aged 8-12",
  },
  {
    icon: "🛡️",
    title: "Combat Malpractice",
    description: "Combat examination malpractice and promote integrity",
  },
  {
    icon: "💪",
    title: "Build Resilience",
    description: "Empower the next generation with moral resilience",
  },
  {
    icon: "🏆",
    title: "Academic Excellence",
    description: "Foster a culture of integrity and academic excellence",
  },
]);

const videoTestimonials = ref<VideoTestimonial[]>([
  {
    src: home,
    poster: cover,
    title: "Parent Testimonial - Mrs. Johnson",
    description:
      "How Kika's Examination changed my child's perspective on integrity",
  },
  {
    src: book2,
    poster: cover,
    title: "Teacher Review - Mr. David",
    description: "The impact of this book in our classroom discussions",
  },
  {
    src: book3,
    poster: cover,
    title: "School Principal Endorsement",
    description: "Why every school needs this book in their library",
  },
  {
    src: book4,
    poster: cover,
    title: "Student Impact Story",
    description: "Young readers share how Kika inspired them",
  },
  {
    src: book5,
    poster: cover,
    title: "Student Impact Story",
    description: "Young readers share how Kika inspired them",
  },
  {
    src: book6,
    poster:
      cover,
    title: "Student Impact Story",
    description: "Young readers share how Kika inspired them",
  },
  {
    src: book7,
    poster:
      cover,
    title: "Student Impact Story",
    description: "Young readers share how Kika inspired them",
  },
  {
    src: book8,
    poster:
    cover,
    title: "Student Impact Story",
    description: "Young readers share how Kika inspired them",
  },
  {
    src: book9,
    poster:
      cover,
    title: "Student Impact Story",
    description: "Young readers share how Kika inspired them",
  },
  {
    src: book10,
    poster:
      cover,
    title: "Student Impact Story",
    description: "Young readers share how Kika inspired them",
  },
  {
    src: book11,
    poster:
    cover,
    title: "Student Impact Story",
    description: "Young readers share how Kika inspired them",
  },
  {
    src: book12,
    poster:
    cover,
    title: "Student Impact Story",
    description: "Young readers share how Kika inspired them",
  },
  {
    src: book13,
    poster:
      cover,
    title: "Student Impact Story",
    description: "Young readers share how Kika inspired them",
  },
  {
    src: book14,
    poster:
      cover,
    title: "Student Impact Story",
    description: "Young readers share how Kika inspired them",
  },
  {
    src: book15,
    poster:
      cover,
    title: "Student Impact Story",
    description: "Young readers share how Kika inspired them",
  },
  {
    src: book16,
    poster:
      cover,
    title: "Student Impact Story",
    description: "Young readers share how Kika inspired them",
  },
]);

const galleryImages = ref<GalleryImage[]>([
  {
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=400&fit=crop",
    alt: "Book distribution event",
    title: "Primary School Distribution",
  },
  {
    src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop",
    alt: "Children reading",
    title: "Engaged Young Readers",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop",
    alt: "Book presentation",
    title: "Author Presentation",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop",
    alt: "Classroom reading",
    title: "Classroom Reading Session",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=400&fit=crop",
    alt: "Community event",
    title: "Community Outreach",
  },
  {
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop",
    alt: "Book signing",
    title: "Book Signing Event",
  },
]);

const supportReasons = ref<SupportReason[]>([
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Shape Future Leaders",
    description: "Help mold the next generation with strong moral foundations",
  },
  {
    icon: "🎯",
    title: "Combat Malpractice",
    description: "Actively fight against examination malpractice in schools",
  },
  {
    icon: "🌟",
    title: "Inspire Excellence",
    description: "Motivate children to achieve their full potential honestly",
  },
]);

const donationOptions = ref<DonationOption[]>([
  { copies: 1, amount: 5000 },
  { copies: 5, amount: 25000 },
  { copies: 10, amount: 50000 },
  { copies: 20, amount: 100000 },
]);

// Reactive state
const activeGoal = ref<number>(0);
const activeVideoIndex = ref<number>(0);
const carouselOffset = ref<number>(0);
const lightboxOpen = ref<boolean>(false);
const currentLightboxIndex = ref<number>(0);
const selectedDonation = ref<DonationOption>(donationOptions.value[0]);

// Computed properties
const activeVideo = computed(
  () => videoTestimonials.value[activeVideoIndex.value]
);

// Template refs
const floatingElements = ref<HTMLElement[]>([]);
const mainVideo = ref<HTMLVideoElement>();

// Methods
const selectVideo = (index: number) => {
  activeVideoIndex.value = index;
  if (mainVideo.value) {
    mainVideo.value.load();
  }
};

const scrollCarousel = (direction: "left" | "right") => {
  const cardWidth = 256 + 16; // w-64 + gap
  const maxOffset = (videoTestimonials.value.length - 3) * cardWidth;

  if (direction === "left") {
    carouselOffset.value = Math.max(0, carouselOffset.value - cardWidth);
  } else {
    carouselOffset.value = Math.min(
      maxOffset,
      carouselOffset.value + cardWidth
    );
  }
};

const openLightbox = (index: number) => {
  currentLightboxIndex.value = index;
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
};

// Auto-rotate active goal
const rotateGoals = () => {
  setInterval(() => {
    activeGoal.value = (activeGoal.value + 1) % bookGoals.value.length;
  }, 3000);
};

// Lifecycle
onMounted(() => {
  // Auto-rotate goals
  rotateGoals();

  // Parallax effect for floating elements
  const handleScroll = () => {
    const scrolled = window.pageYOffset;

    floatingElements.value.forEach((element, index) => {
      if (element) {
        const speed = (index + 1) * 0.1;
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${
          scrolled * 0.1
        }deg)`;
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<style scoped>
/* Custom Animations */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-100px) rotate(180deg);
    opacity: 0.3;
  }
}

@keyframes float-icon {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes background-move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
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
</style>
