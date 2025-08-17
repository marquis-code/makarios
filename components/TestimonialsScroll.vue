<template>
    <div id="testimonials" class="w-full pt-10 overflow-hidden bg-gray-25">
        <section class="pl-10 lg:pl-32">
        <div data-aos="fade-up" class="inline-block px-4 py-2.5 mb-6 bg-gray-50 rounded-full">
        <span class="text-[#284d79] font-medium">Pupils Testimonials</span>
      </div>
      
      <h1 data-aos="fade-up" class="text-4xl md:text-5xl font-medium text-gray-900 mb-4 -mt-2">
        Don’t just take our word for it
      </h1>
      
      <p data-aos="fade-up" class="text-gray-600  mb-16">
        Here is what school pupils are saying about us
      </p>
     </section>
      <div data-aos="fade-up" class="relative">
        <!-- First row - Left to Right -->
        <div 
          class="flex animate-scroll-left"
          :style="{ animationDuration: '40s' }"
           @mouseenter="pauseScroll"
        @mouseleave="resumeScroll"
        >
          <div 
            v-for="testimonial in testimonials1" 
            :key="testimonial.id"
            class="flex-none mx-4"
          >
            <div class="bg-white p-6 rounded-2xl bg-white shadow-sm border-[0.5px] border-gray-50 w-[400px] h-[250px] flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-gray-800 text-lg font-normal leading-relaxed line-clamp-3">
                    <img src="@/assets/icons/quote.svg" class="mb-2" />
                  {{ testimonial.content }}
                </p>
              </div>
              <div class="flex items-center mt-4 flex-shrink-0">
                <img 
                  src="@/assets/icons/avatar.svg" 
                  :alt="testimonial.name"
                  class="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div class="ml-3 flex-shrink-0">
                  <p class="text-gray-900 font-medium">{{ testimonial.name }}</p>
                  <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Second row - Right to Left -->
        <div 
          class="flex animate-scroll-right mt-6"
          :style="{ animationDuration: '40s' }"
           @mouseenter="pauseScroll"
        @mouseleave="resumeScroll"
        >
          <div 
            v-for="testimonial in testimonials2" 
            :key="testimonial.id"
            class="flex-none mx-4"
          >
            <div class="bg-white p-6 rounded-2xl bg-white shadow-sm border-[0.5px] border-gray-50 w-[400px] h-[250px] flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-gray-800 text-lg font-normal leading-relaxed line-clamp-3">
                    <img src="@/assets/icons/quote.svg" class="mb-2" />
                  {{ testimonial.content }}
                </p>
              </div>
              <div class="flex items-center mt-4 flex-shrink-0">
                <img 
                  src="@/assets/icons/avatar.svg" 
                  :alt="testimonial.name"
                  class="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <!-- <img 
                  :src="testimonial.avatar" 
                  :alt="testimonial.name"
                  class="w-12 h-12 rounded-full object-cover flex-shrink-0"
                /> -->
                <div class="ml-3 flex-shrink-0">
                  <p class="text-gray-900 font-medium">{{ testimonial.name }}</p>
                  <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  interface Testimonial {
    id: number;
    content: string;
    name: string;
    role: string;
    avatar: string;
  }

  const testimonials1: Testimonial[] = [
  {
    id: 1,
    content:
      "Since introducing 'Kika's Examination' to our curriculum, we've seen a remarkable 40% reduction in examination malpractices across our schools. Students now understand that integrity is more valuable than grades obtained through shortcuts.",
    name: "Lagos State Government",
    role: "Ministry of Education",
    avatar:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    content:
      "Lauretta Patrick-Nwachi's 'Kika's Examination' has become a cornerstone of our character education program. Teachers report that students actively discuss moral dilemmas and make better ethical choices during examinations.",
    name: "Kano State Government",
    role: "State Universal Basic Education Board",
    avatar:
      "https://images.unsplash.com/photo-1546961329-78bef7c1f2dd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    content:
      "The book 'Kika's Examination' transformed our approach to examination ethics. Students now see Kika as a role model, and our incident reports show significant improvement in honest academic practices across all grade levels.",
    name: "Ebonyi State Government",
    role: "Post Primary Schools Management Board",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    content:
      "After implementing 'Kika's Examination' in our reading curriculum, we've witnessed students voluntarily reporting suspected cheating cases. The book has built a culture of academic integrity that extends beyond the classroom.",
    name: "Lagos State Government",
    role: "Teaching Service Commission",
    avatar:
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    content:
      "Kika's story resonated deeply with our students from rural communities. The book's message about maintaining integrity despite pressure has empowered them to resist examination malpractices and trust in their preparation.",
    name: "Kano State Government",
    role: "Ministry of Education (Rural Schools Division)",
    avatar:
      "https://images.unsplash.com/photo-1542327897-d73f4005b533?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    content:
      "The moral lessons in 'Kika's Examination' have strengthened our students' character foundation. Parents now report their children discussing the importance of honest achievement and refusing to participate in cheating schemes.",
    name: "Ebonyi State Government",
    role: "Ministry of Education and Human Capital Development",
    avatar:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 7,
    content:
      "Since distributing 'Kika's Examination' to all secondary schools, our examination monitoring reports show unprecedented levels of compliance. Students cite Kika's courage as inspiration to face challenges honestly.",
    name: "Lagos State Government",
    role: "Examination Ethics Committee",
    avatar:
      "https://images.unsplash.com/photo-1518749123302-ff97a512b6cf?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 8,
    content:
      "Lauretta Patrick-Nwachi's masterpiece has revolutionized how our students approach examinations. The book's emphasis on preparation over shortcuts has improved both academic performance and moral standards significantly.",
    name: "Kano State Government",
    role: "Senior Secondary Schools Board",
    avatar:
      "https://images.unsplash.com/photo-1523303821445-f2983744a23e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 9,
    content:
      "'Kika's Examination' has become essential reading in our schools. The character development it promotes extends beyond academics—students demonstrate improved integrity in all aspects of their school life.",
    name: "Ebonyi State Government",
    role: "Quality Assurance Unit, Ministry of Education",
    avatar:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 10,
    content:
      "The impact of 'Kika's Examination' on our educational system cannot be overstated. This book has created a generation of students who understand that true success comes from honest effort and moral courage.",
    name: "Lagos State Government",
    role: "Commissioner for Education",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
]

// Second testimonials array focusing on teachers, parents, and school administrators
const testimonials2: Testimonial[] = [
  {
    id: 1,
    content:
      "As a principal, I've seen 'Kika's Examination' transform our school culture. Students now approach me when facing academic pressure, seeking guidance rather than resorting to dishonest practices. It's remarkable.",
    name: "Mrs. Adunni Olatoye",
    role: "Principal, Government Senior Secondary School Lagos",
    avatar:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    content:
      "My daughter came home discussing Kika's choices after reading the book at school. We had meaningful conversations about integrity and pressure. This book opened dialogue I never knew how to start as a parent.",
    name: "Alhaji Musa Ibrahim",
    role: "Parent, Kano State",
    avatar:
      "https://images.unsplash.com/photo-1546961329-78bef7c1f2dd?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    content:
      "Teaching became more impactful after introducing 'Kika's Examination' to my English class. Students connect with Kika's dilemmas and apply her moral reasoning to their own situations. It's educational and transformative.",
    name: "Miss Chioma Okwu",
    role: "English Teacher, Community Secondary School Ebonyi",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    content:
      "Our school's examination misconduct cases dropped by 60% after implementing 'Kika's Examination' in our moral instruction curriculum. Students actively discourage peers from cheating, citing lessons from the book.",
    name: "Dr. Sarah Adebayo",
    role: "Vice Principal, Academics, Lagos Model College",
    avatar:
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    content:
      "As a guidance counselor, I recommend 'Kika's Examination' to students facing academic pressure. The book provides practical examples of how to maintain integrity while pursuing excellence. It's incredibly effective.",
    name: "Mr. Abdullahi Garba",
    role: "Guidance Counselor, Government Day Secondary School Kano",
    avatar:
      "https://images.unsplash.com/photo-1542327897-d73f4005b533?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    content:
      "The book helped my son understand that his character matters more than his grades. After reading Kika's story, he confessed to a mistake he made and committed to honest studying. I'm proud of his growth.",
    name: "Mrs. Grace Eze",
    role: "Parent and PTA Member, Ebonyi State",
    avatar:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 7,
    content:
      "Our literature club discussions became more meaningful after reading 'Kika's Examination.' Students relate to the peer pressure themes and share personal experiences, creating a supportive environment for growth.",
    name: "Mr. Tunde Adeolu",
    role: "Literature Teacher, Ikeja High School Lagos",
    avatar:
      "https://images.unsplash.com/photo-1518749123302-ff97a512b6cf?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 8,
    content:
      "Implementing 'Kika's Examination' in our character education program yielded immediate results. Students demonstrate better decision-making skills and show genuine concern for maintaining academic integrity.",
    name: "Mrs. Hajiya Aisha Usman",
    role: "Head of Character Education, Government Girls College Kano",
    avatar:
      "https://images.unsplash.com/photo-1523303821445-f2983744a23e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 9,
    content:
      "My twins discussed different aspects of Kika's story at dinner, debating what they would do in similar situations. This book sparked family conversations about values that strengthened our household's moral foundation.",
    name: "Chief Emma Nwachukwu",
    role: "Parent, Abakaliki Ebonyi State",
    avatar:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 10,
    content:
      "As a school librarian, I've watched 'Kika's Examination' become one of our most borrowed books. Students request it specifically, and I've observed them recommending it to friends facing similar academic pressures.",
    name: "Mrs. Folake Adeniyi",
    role: "School Librarian, Government Technical College Lagos",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
]

  const pauseScroll = (event: Event) => {
  const row = (event.currentTarget as HTMLElement);
  row.style.animationPlayState = 'paused';
};

const resumeScroll = (event: Event) => {
  const row = (event.currentTarget as HTMLElement);
  row.style.animationPlayState = 'running';
};
  </script>
  
  <style scoped>
  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  @keyframes scroll-right {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
  
  .animate-scroll-left {
    animation: scroll-left linear infinite;
    animation-play-state: running;
  }
  
  .animate-scroll-right {
    animation: scroll-right linear infinite;
    animation-play-state: running;
  }
  
  /* Add subtle hover effect to cards */
  .group:hover .hover\:shadow-md {
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  </style>