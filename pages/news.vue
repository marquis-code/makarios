<template>
 <main>
  <NavbarSection />
  <div class="makarios-news-container">
    <!-- Hero Section with Animated Title -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="floating-particles">
          <div v-for="i in 20" :key="i" class="particle" :style="{ animationDelay: `${i * 0.3}s` }"></div>
        </div>
      </div>
      
      <div class="hero-content">
        <h1 class="main-title">
          <span class="title-word" :style="{ animationDelay: '0.2s' }">Makarios</span>
          <span class="title-word" :style="{ animationDelay: '0.4s' }">in</span>
          <span class="title-word" :style="{ animationDelay: '0.6s' }">the</span>
          <span class="title-word highlight" :style="{ animationDelay: '0.8s' }">News</span>
        </h1>
        <p class="hero-subtitle">Transforming Education Through Innovation and Excellence</p>
        <div class="hero-badge">
          <span class="badge-text">Educational Excellence Initiative</span>
        </div>
      </div>
    </section>

    <!-- Content Introduction -->
    <section class="intro-section">
      <div class="container">
        <div class="intro-content" ref="introRef">
          <div class="intro-text">
            <h2 class="section-title">Makarios Schools Connect Initiative</h2>
            <p class="intro-description">
              Driven by a passion for educational excellence, the Makarios Schools Connect (MSC) initiative 
              represents a groundbreaking approach to addressing the quality challenges in Nigeria's primary 
              and secondary education system. This NGO-led project brings together like-minded professionals 
              committed to positive change in our schools.
            </p>
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">1000+</div>
                <div class="stat-label">Students Impacted</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">50+</div>
                <div class="stat-label">Schools Connected</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">25+</div>
                <div class="stat-label">Competitions Held</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video News Section -->
    <section class="video-section">
      <div class="container">
        <h2 class="section-title video-title">Latest News Coverage</h2>
        
        <div class="video-grid">
          <!-- Video 1 - Edves Catalyst 2023 -->
          <div class="video-card" ref="video1Ref">
            <div class="video-wrapper">
              <div class="video-placeholder video-thumbnail-1">
                <div class="play-button" @click="openLightbox('/edves-catalyst-2023.mp4', 'Edves Catalyst 2023 Conference')">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div class="video-overlay">
                  <h3>Edves Catalyst 2023 Conference - Lagos</h3>
                  <p>CEO Lauretta speaks about book launch and Makarios program mission</p>
                </div>
              </div>
            </div>
            <div class="video-info">
              <h4>Edves Catalyst 2023 - Book Launch & Vision</h4>
              <p>Watch CEO Mrs. Lauretta Ehioma Patrick-Nwachi at the prestigious Edves Catalyst 2023 conference in Lagos, where she discusses the Makarios program's mission and the launch of educational resources that are transforming Nigeria's academic landscape.</p>
              <div class="video-meta">
                <span class="duration">Live Conference Coverage</span>
                <span class="date">Edves Catalyst 2023</span>
                <span class="location">📍 Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <!-- Video 2 - Student Conference Speech -->
          <div class="video-card" ref="video2Ref">
            <div class="video-wrapper">
              <div class="video-placeholder video-thumbnail-2">
                <div class="play-button" @click="openLightbox('/student-kika-speech.mp4', 'Student Speech on Kika Examination Book')">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div class="video-overlay">
                  <h3>Student Conference Presentation</h3>
                  <p>Inspiring speech about the Kika examination book impact</p>
                </div>
              </div>
            </div>
            <div class="video-info">
              <h4>Student Testimony - Kika Examination Book</h4>
              <p>An inspiring presentation by a student at an educational conference, sharing their experience with the Kika examination book and how it has revolutionized their approach to learning and examination preparation.</p>
              <div class="video-meta">
                <span class="duration">Student Presentation</span>
                <span class="date">Educational Conference</span>
                <span class="location">📚 Academic Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Lightbox Modal -->
    <div v-if="showLightbox" class="lightbox-overlay" @click="closeLightbox">
      <div class="lightbox-container" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        <div class="lightbox-content">
          <video 
            ref="videoPlayer"
            :src="currentVideoSrc" 
            controls 
            autoplay
            class="lightbox-video"
            @loadedmetadata="onVideoLoaded"
          >
            Your browser does not support the video tag.
          </video>
          <div class="lightbox-info">
            <h3>{{ currentVideoTitle }}</h3>
            <p v-if="currentVideoSrc.includes('edves-catalyst')">
              From the Edves Catalyst 2023 conference held in Lagos, featuring CEO Mrs. Lauretta Ehioma Patrick-Nwachi 
              discussing the transformative power of the Makarios Schools Connect initiative and educational innovation.
            </p>
            <p v-else-if="currentVideoSrc.includes('student-kika')">
              A powerful student presentation showcasing the real-world impact of the Kika examination book 
              and how it's helping students build confidence and achieve academic excellence.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- News Article Section -->
    <section class="article-section">
      <div class="container">
        <div class="article-grid">
          <div class="article-content" ref="articleRef">
            <div class="article-header">
              <span class="article-category">Press Release</span>
              <h2 class="article-title">Addressing Educational Challenges Through Innovation</h2>
              <div class="article-byline">
                <span>By Mrs. Lauretta Ehioma Patrick-Nwachi</span>
                <span class="article-date">Published November 2021</span>
              </div>
            </div>

            <div class="article-body">
              <p class="lead-paragraph">
                The Makarios Schools Connect initiative emerges as a beacon of hope in addressing the 
                pervasive challenges plaguing Nigeria's educational system. From cultism and examination 
                malpractices to moral breakdown, the quality of education has been significantly impacted.
              </p>

              <div class="highlight-box">
                <h3>Our Mission</h3>
                <p>
                  To foster academic excellence through competitive learning, ensuring that every student 
                  develops the confidence and skills needed to face examinations and life challenges with 
                  an "I-can-do" mentality.
                </p>
              </div>

              <p>
                The project introduces various competitions among primary school pupils, beginning with 
                debate competitions. Speaking with newsmen recently on the project launch scheduled for 
                Saturday, November 13, Mrs. Patrick-Nwachi emphasized that registration for participation 
                would be free, encouraging schools to prepare their best pupils.
              </p>

              <div class="quote-section">
                <blockquote>
                  "We want to see pupils studying for examinations with the confidence of passing. 
                  Even if a child doesn't proceed after SS3 and goes on in life, that I-can-do spirit 
                  built into him in school can see him through life."
                </blockquote>
                <cite>- Mrs. Lauretta Ehioma Patrick-Nwachi, Founder</cite>
              </div>

              <p>
                The initiative calls upon well-meaning Nigerians, corporations, and government to join 
                hands as partners in transforming our society through quality education and sustainable 
                development.
              </p>
            </div>

            <div class="article-footer">
              <div class="tags">
                <span class="tag">Education</span>
                <span class="tag">Nigeria</span>
                <span class="tag">Innovation</span>
                <span class="tag">Youth Development</span>
              </div>
              <div class="share-buttons">
                <button class="share-btn" @click="shareArticle">Share Article</button>
                <button class="read-more-btn">Read Full Coverage</button>
              </div>
            </div>
          </div>

          <div class="sidebar">
            <div class="impact-card">
              <h3>Key Achievements</h3>
              <ul class="achievement-list">
                <li>Free registration for all participating schools</li>
                <li>Extension to secondary schools planned</li>
                <li>State-wide and national expansion roadmap</li>
                <li>Focus on building student confidence</li>
                <li>Collaboration with education professionals</li>
              </ul>
            </div>

            <div class="contact-card">
              <h3>Get Involved</h3>
              <p>Join the Makarios Schools Connect movement and help transform education in Nigeria.</p>
              <button class="cta-button">Partner With Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
 </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

useServerSeoMeta({
  title: "Makarios Initiative",
  ogTitle: "Makarios Initiative | News",
  description: "MAKARIOS Initiative is dedicated to Transforming Education Through Innovation and Excellence.",
  ogDescription: "MAKARIOS Initiative is dedicated to Transforming Education Through Innovation and Excellence.",
  ogImage: "https://makariosinitiative.org/og-image.jpg",
  ogImageUrl: "https://makariosinitiative.org/og-image.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "MAKARIOS Initiative is dedicated to Transforming Education Through Innovation and Excellence | Makarios Initiative",
  twitterDescription: "MAKARIOS Initiative is dedicated to Transforming Education Through Innovation and Excellence | Makarios Initiative",
  twitterImage: "https://makariosinitiative.org/og-image.jpg"
})

useSeoMeta({
  title: "Makarios Initiative",
  ogTitle: "Makarios Initiative | News",
  description: "MAKARIOS Initiative is dedicated to Transforming Education Through Innovation and Excellence.",
  ogDescription: "MAKARIOS Initiative is dedicated to Transforming Education Through Innovation and Excellence.",
  ogImage: "https://makariosinitiative.org/og-image.jpg",
  ogImageUrl: "https://makariosinitiative.org/og-image.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "MAKARIOS Initiative is dedicated to Transforming Education Through Innovation and Excellence | Makarios Initiative",
  twitterDescription: "MAKARIOS Initiative is dedicated to Transforming Education Through Innovation and Excellence | Makarios Initiative",
  twitterImage: "https://makariosinitiative.org/og-image.jpg"
  });

// Reactive refs for animations
const introRef = ref<HTMLElement>()
const video1Ref = ref<HTMLElement>()
const video2Ref = ref<HTMLElement>()
const articleRef = ref<HTMLElement>()
const videoPlayer = ref<HTMLVideoElement>()

// Lightbox state
const showLightbox = ref(false)
const currentVideoSrc = ref('')
const currentVideoTitle = ref('')

// Methods
const openLightbox = (videoSrc: string, title: string) => {
  currentVideoSrc.value = videoSrc
  currentVideoTitle.value = title
  showLightbox.value = true
  // Prevent body scroll when lightbox is open
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  showLightbox.value = false
  currentVideoSrc.value = ''
  currentVideoTitle.value = ''
  // Restore body scroll
  document.body.style.overflow = 'auto'
  // Pause video if it's playing
  if (videoPlayer.value) {
    videoPlayer.value.pause()
  }
}

const onVideoLoaded = () => {
  // Optional: Add any logic when video metadata is loaded
  console.log('Video loaded successfully')
}

// Close lightbox on Escape key
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && showLightbox.value) {
    closeLightbox()
  }
}

const shareArticle = () => {
  if (navigator.share) {
    navigator.share({
      title: 'Makarios Schools Connect Initiative',
      text: 'Transforming Education Through Innovation and Excellence',
      url: window.location.href
    })
  } else {
    // Fallback for browsers that don't support Web Share API
    navigator.clipboard.writeText(window.location.href)
    alert('Link copied to clipboard!')
  }
}

// Intersection Observer for scroll animations
const setupScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    },
    { threshold: 0.1 }
  )

  // Observe elements
  const elements = [introRef.value, video1Ref.value, video2Ref.value, articleRef.value]
  elements.forEach(el => {
    if (el) observer.observe(el)
  })
}

onMounted(() => {
  nextTick(() => {
    setupScrollAnimations()
  })
  
  // Add event listener for Escape key
  document.addEventListener('keydown', handleKeyDown)
})

// Clean up event listener
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
  // Restore body scroll if component is unmounted while lightbox is open
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
/* Global Styles */
.makarios-news-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d2d5f 100%);
  color: #ffffff;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(120, 100, 255, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 100, 120, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(100, 255, 150, 0.3) 0%, transparent 50%);
}

.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.particle:nth-child(odd) {
  animation: floatReverse 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 1; }
  50% { transform: translateY(-100px) rotate(180deg); opacity: 0.5; }
}

@keyframes floatReverse {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
  50% { transform: translateY(100px) rotate(-180deg); opacity: 0.3; }
}

.hero-content {
  text-align: center;
  z-index: 2;
  position: relative;
}

.main-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
}

.title-word {
  display: inline-block;
  opacity: 0;
  animation: titleReveal 1s ease-out forwards;
  margin-right: 0.3em;
}

.title-word.highlight {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: titleReveal 1s ease-out forwards, colorShift 3s ease-in-out infinite;
}

@keyframes titleReveal {
  from {
    opacity: 0;
    transform: translateY(50px) rotateX(-90deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
}

@keyframes colorShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.hero-subtitle {
  font-size: 1.5rem;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1.2s forwards;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
}

.hero-badge {
  display: inline-block;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  backdrop-filter: blur(10px);
  opacity: 0;
  animation: fadeInUp 1s ease-out 1.5s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Intro Section */
.intro-section {
  padding: 100px 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
}

.intro-content {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
}

.intro-content.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #ffffff, #a0a0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.intro-description {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.9);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #4ecdc4;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
}

/* Video Section */
.video-section {
  padding: 100px 0;
  background: rgba(0, 0, 0, 0.2);
}

.video-title {
  text-align: center;
  margin-bottom: 4rem;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;
}

.video-card {
  opacity: 0;
  transform: translateY(50px) scale(0.9);
  transition: all 0.8s ease-out;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.video-card.animate-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.video-wrapper {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.video-thumbnail-1 {
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%);
}

.video-thumbnail-2 {
  background: linear-gradient(135deg, #96ceb4 0%, #ffecd2 50%, #fcb69f 100%);
}

.video-placeholder:hover {
  transform: scale(1.05);
}

.play-button {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  transition: all 0.3s ease;
  z-index: 2;
}

.play-button:hover {
  background: white;
  transform: scale(1.1);
}

.play-button svg {
  width: 24px;
  height: 24px;
  margin-left: 4px;
}

.video-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
}

.video-overlay h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.video-info {
  padding: 2rem;
}

.video-info h4 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #4ecdc4;
}

.video-info p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.video-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

/* Article Section */
.article-section {
  padding: 100px 0;
}

.article-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
}

.article-content {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s ease-out;
}

.article-content.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.article-header {
  margin-bottom: 3rem;
}

.article-category {
  display: inline-block;
  padding: 6px 12px;
  background: #ff6b6b;
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.article-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.article-byline {
  display: flex;
  gap: 2rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
}

.article-body {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
}

.lead-paragraph {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.95);
}

.highlight-box {
  background: linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(69, 183, 209, 0.1));
  padding: 2rem;
  border-radius: 15px;
  border-left: 4px solid #4ecdc4;
  margin: 2rem 0;
}

.highlight-box h3 {
  color: #4ecdc4;
  margin-bottom: 1rem;
}

.quote-section {
  margin: 3rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border-left: 4px solid #ff6b6b;
}

.quote-section blockquote {
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.95);
}

.quote-section cite {
  color: #ff6b6b;
  font-weight: 600;
}

.article-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.tags {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.tag {
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
}

.share-buttons {
  display: flex;
  gap: 1rem;
}

.share-btn, .read-more-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.share-btn {
  background: #4ecdc4;
  color: white;
}

.read-more-btn {
  background: transparent;
  color: #4ecdc4;
  border: 2px solid #4ecdc4;
}

.share-btn:hover, .read-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

/* Sidebar */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.impact-card, .contact-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.impact-card h3, .contact-card h3 {
  color: #4ecdc4;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.achievement-list {
  list-style: none;
  padding: 0;
}

.achievement-list li {
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  padding-left: 1.5rem;
}

.achievement-list li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #4ecdc4;
  font-weight: bold;
}

.cta-button {
  width: 100%;
  padding: 12px 24px;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    height: 80vh;
    padding: 0 20px;
  }
  
  .main-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .video-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .video-card {
    min-width: auto;
  }
  
  .article-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .share-buttons {
    flex-direction: column;
  }
  
  .container {
    padding: 0 15px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .intro-section, .video-section, .article-section {
    padding: 60px 0;
  }
  
  .video-info, .impact-card, .contact-card {
    padding: 1.5rem;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #4ecdc4, #ff6b6b);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #45b7d1, #ff5252);
}

/* Lightbox Styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(20px);
  animation: lightboxFadeIn 0.3s ease-out;
}

@keyframes lightboxFadeIn {
  from {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    backdrop-filter: blur(20px);
  }
}

.lightbox-container {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  animation: lightboxSlideIn 0.4s ease-out;
}

@keyframes lightboxSlideIn {
  from {
    transform: scale(0.8) translateY(50px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.lightbox-close {
  position: absolute;
  top: -50px;
  right: 0;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  z-index: 10001;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.lightbox-close svg {
  width: 20px;
  height: 20px;
}

.lightbox-content {
  background: rgba(0, 0, 0, 0.9);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
}

.lightbox-video {
  width: 100%;
  height: auto;
  max-height: 70vh;
  display: block;
  background: #000;
}

.lightbox-info {
  padding: 2rem;
  color: white;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
}

.lightbox-info h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #4ecdc4;
}

.lightbox-info p {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
}

/* Mobile Lightbox Responsive */
@media (max-width: 768px) {
  .lightbox-container {
    max-width: 95vw;
    max-height: 95vh;
  }
  
  .lightbox-close {
    top: -40px;
    width: 35px;
    height: 35px;
  }
  
  .lightbox-info {
    padding: 1.5rem;
  }
  
  .lightbox-info h3 {
    font-size: 1.2rem;
  }
  
  .lightbox-info p {
    font-size: 0.9rem;
  }
  
  .lightbox-video {
    max-height: 60vh;
  }
}
</style>