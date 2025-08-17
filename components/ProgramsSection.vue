<template>
  <div
    class="min-h-screen bg-gradient-to-br from-teal-50 via-orange-50 to-yellow-50"
  >
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-16 px-4">
      <div
        class="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-orange-400/20"
      ></div>
      <div class="relative max-w-6xl mx-auto text-center">
        <div class="inline-flex items-center gap-3 mb-6 animate-fade-in">
          <div
            class="w-16 h-16 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full flex items-center justify-center"
          >
            <CheckCircle class="w-8 h-8 text-white" />
          </div>
          <div class="text-left">
            <h1
              class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent"
            >
              Event Success!
            </h1>
            <p class="text-lg text-gray-600 mt-2">IDAC 2025 Book Launch</p>
          </div>
        </div>

        <h2
          class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 animate-slide-up"
        >
          "Kika's Examination" Launch Event
        </h2>
        <p
          class="text-lg text-gray-600 max-w-3xl mx-auto animate-slide-up delay-200"
        >
          A remarkable gathering that brought together educators, leaders, and
          advocates for children's rights
        </p>

        <!-- Event Stats -->
        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
        >
          <div
            class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg animate-slide-up delay-300"
          >
            <div class="text-3xl font-bold text-teal-600 mb-2">500+</div>
            <div class="text-sm text-gray-600">Attendees</div>
          </div>
          <div
            class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg animate-slide-up delay-400"
          >
            <div class="text-3xl font-bold text-orange-600 mb-2">9</div>
            <div class="text-sm text-gray-600">Speakers</div>
          </div>
          <div
            class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg animate-slide-up delay-500"
          >
            <div class="text-3xl font-bold text-yellow-600 mb-2">4.5hrs</div>
            <div class="text-sm text-gray-600">Duration</div>
          </div>
          <div
            class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg animate-slide-up delay-600"
          >
            <div class="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div class="text-sm text-gray-600">Success</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Continuous Image Carousel -->
    <section class="py-12 overflow-hidden">
      <div class="mb-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Event Gallery
        </h2>
        <p class="text-gray-600">
          Capturing the memorable moments from our successful event
        </p>
      </div>

      <!-- First Row - Left to Right -->
      <div class="relative mb-8">
        <div class="flex animate-marquee-left gap-6">
          <div
            v-for="(image, index) in [...eventImages, ...eventImages]"
            :key="`row1-${index}`"
            class="flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            @click="openImageModal(image)"
          >
            <img
              :src="image.url"
              :alt="image.caption"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div class="absolute bottom-4 left-4 text-white">
                <p class="font-medium">{{ image.caption }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Second Row - Right to Left -->
      <div class="relative">
        <div class="flex animate-marquee-right gap-6">
          <div
            v-for="(image, index) in [
              ...eventImages.slice().reverse(),
              ...eventImages.slice().reverse(),
            ]"
            :key="`row2-${index}`"
            class="flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            @click="openImageModal(image)"
          >
            <img
              :src="image.url"
              :alt="image.caption"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div class="absolute bottom-4 left-4 text-white">
                <p class="font-medium">{{ image.caption }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Gallery -->
    <section
      class="py-16 px-4 bg-gradient-to-r from-teal-100/50 to-orange-100/50"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Event Videos
          </h2>
          <p class="text-gray-600">
            Watch highlights and key moments from the event
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(video, index) in eventVideos"
            :key="index"
            class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            @click="openVideoModal(video)"
          >
            <div class="relative aspect-video bg-gray-200">
                <img
                src="@/assets/img/cover-image.jpeg"
                :alt="video.title"
                class="w-full h-full object-cover"
              />
              <!-- <img
                :src="video.thumbnail"
                :alt="video.title"
                class="w-full h-full object-cover"
              /> -->
              <div
                class="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div
                  class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                >
                  <Play class="w-8 h-8 text-gray-800 ml-1" />
                </div>
              </div>
              <div
                class="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm"
              >
                {{ video.duration }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                {{ video.title }}
              </h3>
              <p class="text-gray-600 text-sm mb-4">{{ video.description }}</p>
              <div class="flex items-center gap-2 text-teal-600">
                <Eye class="w-4 h-4" />
                <span class="text-sm">{{ video.views }} views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Event Highlights -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-3xl  font-bold text-center mb-12 text-gray-800"
        >
          Event Highlights
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(highlight, index) in eventHighlights"
            :key="index"
            class="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-teal-400 to-orange-400 rounded-2xl flex items-center justify-center mb-6 mx-auto"
            >
              <component :is="highlight.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">
              {{ highlight.title }}
            </h3>
            <p class="text-gray-600">{{ highlight.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Modal -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      @click="closeImageModal"
    >
      <div class="relative max-w-4xl max-h-full">
        <img
          :src="selectedImage.url"
          :alt="selectedImage.caption"
          class="max-w-full max-h-full object-contain rounded-lg"
        />
        <button
          @click="closeImageModal"
          class="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        >
          <X class="w-6 h-6 text-white" />
        </button>
        <div
          class="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg"
        >
          <p class="font-medium">{{ selectedImage.caption }}</p>
        </div>
      </div>
    </div>

    <!-- Video Modal -->
    <div
      v-if="selectedVideo"
      class="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      @click="closeVideoModal"
    >
      <div class="relative max-w-4xl w-full">
        <div class="aspect-video bg-black rounded-lg overflow-hidden">
          <video
            :src="selectedVideo.url"
            controls
            autoplay
            class="w-full h-full"
            @click.stop
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <button
          @click="closeVideoModal"
          class="absolute -top-12 right-0 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        >
          <X class="w-6 h-6 text-white" />
        </button>
        <div class="mt-4 text-white text-center">
          <h3 class="text-xl font-bold mb-2">{{ selectedVideo.title }}</h3>
          <p class="text-gray-300">{{ selectedVideo.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import content1 from "@/assets/img/kika-lunch1.jpeg";
import content2 from "@/assets/img/kika-lunch2.jpeg";
import content3 from "@/assets/img/kika-lunch3.jpeg";
import content4 from "@/assets/img/kika-lunch4.jpeg";
import content5 from "@/assets/img/kika-lunch5.jpeg";
import content6 from "@/assets/img/kika-lunch6.jpeg";
import content7 from "@/assets/img/kika-lunch7.jpeg";
import content8 from "@/assets/img/kika-lunch8.jpeg";
import content9 from "@/assets/img/kika-lunch9.jpeg";
import content10 from "@/assets/img/kika-lunch10.jpeg";
import content11 from "@/assets/img/kika-lunch11.jpeg";
import content12 from "@/assets/img/kika-lunch12.jpeg";
import content13 from "@/assets/img/kika-lunch13.jpeg";
import content14 from "@/assets/img/kika-lunch14.jpeg";
import content15 from "@/assets/img/kika-lunch15.jpeg";
import content16 from "@/assets/img/kika-lunch16.jpeg";
import content17 from "@/assets/img/kika-lunch17.jpeg";
import content18 from "@/assets/img/kika-lunch18.jpeg";
import content19 from "@/assets/img/kika-lunch19.jpeg";
import content20 from "@/assets/img/kika-lunch20.jpeg";
import content21 from "@/assets/img/kika-lunch21.jpeg";
import content22 from "@/assets/img/kika-lunch22.jpeg";
import content23 from "@/assets/img/kika-lunch23.jpeg";
import content24 from "@/assets/img/kika-lunch24.jpeg";
import content25 from "@/assets/img/kika-lunch25.jpeg";
import content26 from "@/assets/img/kika-lunch26.jpeg";
import content27 from "@/assets/img/kika-lunch27.jpeg";
import content28 from "@/assets/img/kika-lunch28.jpeg";
import content29 from "@/assets/img/kika-lunch29.jpeg";
import content30 from "@/assets/img/kika-lunch30.jpeg";
import content31 from "@/assets/img/kika-lunch31.jpeg";
import content32 from "@/assets/img/kika-lunch32.jpeg";
import content33 from "@/assets/img/kika-lunch33.jpeg";
import content34 from "@/assets/img/kika-lunch34.jpeg";
import content35 from "@/assets/img/kika-lunch35.jpeg";
import content36 from "@/assets/img/kika-lunch36.jpeg";
import content37 from "@/assets/img/kika-lunch37.jpeg";
import content38 from "@/assets/img/kika-lunch38.jpeg";
import content39 from "@/assets/img/kika-lunch39.jpeg";
import content40 from "@/assets/img/kika-lunch40.jpeg";

import videoLunch1 from "@/assets/videos/book-lunch/kika-video1.mp4"
import videoLunch2 from "@/assets/videos/book-lunch/kika-video2.mp4"
import videoLunch3 from "@/assets/videos/book-lunch/kika-video3.mp4"
import videoLunch4 from "@/assets/videos/book-lunch/kika-video5.mp4"
import videoLunch5 from "@/assets/videos/book-lunch/kika-video6.mp4"

import { ref } from "vue";
import {
  CheckCircle,
  Play,
  Eye,
  X,
  Users,
  Award,
  Heart,
  BookOpen,
  Target,
  Sparkles,
} from "lucide-vue-next";

// Types
interface EventImage {
  url: string;
  caption: string;
}

interface EventVideo {
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  duration: string;
  views: string;
}

// Reactive data
const selectedImage = ref<EventImage | null>(null);
const selectedVideo = ref<EventVideo | null>(null);

// Sample event images (replace with your actual images)
const eventImages = ref([
  {
    url: content1,
    caption: "Opening ceremony with distinguished guests",
  },
  {
    url: content2,
    caption: "Keynote speech by Dr Cosmas Maduka CON",
  },
  {
    url: content3,
    caption: "Book launch presentation",
  },
  {
    url: content4,
    caption: "Panel discussion on children's rights",
  },
  {
    url: content5,
    caption: "Audience engagement and Q&A session",
  },
  {
    url: content6,
    caption: "Award presentation ceremony",
  },
  {
    url: content7,
    caption: "Group photo with all speakers",
  },
  {
    url: content8,
    caption: "Networking session with attendees",
  },
  {
    url: content9,
    caption: "Interactive workshop sessions",
  },
  {
    url: content10,
    caption: "Exhibition of children's artwork",
  },
  {
    url: content11,
    caption: "Media interviews with organizers",
  },
  {
    url: content12,
    caption: "Book signing session",
  },
  {
    url: content13,
    caption: "Cultural performances by local artists",
  },
  {
    url: content14,
    caption: "VIP reception dinner",
  },
  {
    url: content15,
    caption: "Breakout sessions on child protection",
  },
  {
    url: content16,
    caption: "Technology demonstration for education",
  },
  {
    url: content17,
    caption: "Community leaders' roundtable",
  },
  {
    url: content18,
    caption: "Youth empowerment discussion",
  },
  {
    url: content19,
    caption: "Resource distribution ceremony",
  },
  {
    url: content20,
    caption: "Closing remarks and vote of thanks",
  },
  {
    url: content21,
    caption: "Certificate presentation to participants",
  },
  {
    url: content22,
    caption: "Documentary screening session",
  },
  {
    url: content23,
    caption: "Health and wellness booth",
  },
  {
    url: content24,
    caption: "Educational games and activities",
  },
  {
    url: content25,
    caption: "Storytelling session for children",
  },
  {
    url: content26,
    caption: "Partnership agreement signing",
  },
  {
    url: content27,
    caption: "Media coverage and press conference",
  },
  {
    url: content28,
    caption: "Volunteer appreciation ceremony",
  },
  {
    url: content29,
    caption: "Fundraising auction event",
  },
  {
    url: content30,
    caption: "Guest speaker presentation",
  },
  {
    url: content31,
    caption: "Interactive learning stations",
  },
  {
    url: content32,
    caption: "Community feedback session",
  },
  {
    url: content33,
    caption: "Special recognition awards",
  },
  {
    url: content34,
    caption: "Musical entertainment segment",
  },
  {
    url: content35,
    caption: "Photo exhibition showcase",
  },
  {
    url: content36,
    caption: "Information booth setup",
  },
  {
    url: content37,
    caption: "Registration and welcome desk",
  },
  {
    url: content38,
    caption: "Catering and refreshment area",
  },
  {
    url: content39,
    caption: "Final group celebration",
  },
  {
    url: content40,
    caption: "Event wrap-up and cleanup",
  },
]);

// Sample event videos (replace with your actual videos)
const eventVideos = ref<EventVideo[]>([
  {
    url: videoLunch1,
    thumbnail: "/placeholder.svg?height=300&width=400",
    title: "NTA News Feature session",
    description:
      "Watch the inspiring opening ceremony and welcome address by our distinguished guests.",
    duration: "12:45",
    views: "1.2K",
  },
  {
    url: videoLunch2,
    thumbnail: "/placeholder.svg?height=300&width=400",
    title: "Keynote Speech Highlights",
    description:
      "Key insights from Dr Cosmas Maduka CON's powerful keynote address.",
    duration: "18:30",
    views: "2.1K",
  },
  {
    url: videoLunch3,
    thumbnail: "/placeholder.svg?height=300&width=400",
    title: "Book Launch Presentation",
    description:
      'Author Lauretta Patrick-Nwachi presents "Kika\'s Examination" to the audience.',
    duration: "15:20",
    views: "1.8K",
  },
  {
    url: videoLunch4,
    thumbnail: "/placeholder.svg?height=300&width=400",
    title: "Panel Discussion on Education",
    description:
      "Engaging panel discussion on curbing examination malpractice in schools.",
    duration: "25:15",
    views: "1.5K",
  },
  {
    url: videoLunch5,
    thumbnail: "/placeholder.svg?height=300&width=400",
    title: "Student Testimonials",
    description:
      "Heartwarming testimonials from students who benefited from the program.",
    duration: "8:45",
    views: "950",
  }
]);

// Event highlights
const eventHighlights = ref([
  {
    icon: Users,
    title: "Community Impact",
    description:
      "Over 500 educators, parents, and community leaders came together to support children's education and moral development.",
  },
  {
    icon: BookOpen,
    title: "Book Launch Success",
    description:
      '"Kika\'s Examination" was officially launched with overwhelming support from attendees and positive media coverage.',
  },
  {
    icon: Award,
    title: "Recognition Ceremony",
    description:
      "Outstanding students and educators were recognized for their commitment to academic integrity and moral excellence.",
  },
  {
    icon: Target,
    title: "Action Plans Developed",
    description:
      "Concrete action plans were established to implement anti-malpractice measures in schools across Lagos State.",
  },
  {
    icon: Heart,
    title: "Inspiring Stories",
    description:
      "Powerful testimonials from students and teachers showcased the positive impact of moral education programs.",
  },
  {
    icon: Sparkles,
    title: "Future Initiatives",
    description:
      "New partnerships and initiatives were announced to expand the program's reach to more schools and communities.",
  },
]);

// Modal functions
const openImageModal = (image: EventImage) => {
  selectedImage.value = image;
};

const closeImageModal = () => {
  selectedImage.value = null;
};

const openVideoModal = (video: EventVideo) => {
  selectedVideo.value = video;
};

const closeVideoModal = () => {
  selectedVideo.value = null;
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes marquee-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}

.animate-marquee-left {
  animation: marquee-left 30s linear infinite;
}

.animate-marquee-right {
  animation: marquee-right 30s linear infinite;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-400 {
  animation-delay: 400ms;
}

.delay-500 {
  animation-delay: 500ms;
}

.delay-600 {
  animation-delay: 600ms;
}

/* Hover effects */
.hover\:scale-110:hover {
  transform: scale(1.1);
}

.hover\:-translate-y-2:hover {
  transform: translateY(-0.5rem);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .text-4xl {
    font-size: 2rem;
  }

  .text-6xl {
    font-size: 3rem;
  }

  .animate-marquee-left,
  .animate-marquee-right {
    animation-duration: 20s;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Modal backdrop blur */
.fixed.inset-0 {
  backdrop-filter: blur(4px);
}
</style>
