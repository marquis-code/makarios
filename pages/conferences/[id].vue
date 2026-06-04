<template>
  <div class="min-h-screen bg-white font-body">

    <LoadingState v-if="loading" class="pt-32" />

    <template v-else-if="conference">

      <!-- ── TOP NAV BAR ── -->
      <div class="bg-white border-b border-slate-100 py-3 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <NuxtLink
            to="/conferences"
            class="inline-flex items-center gap-2 text-[11px] font-bold tracking-[.15em] uppercase text-slate-400 hover:text-[#1d4e89] transition-colors duration-200 no-underline"
          >
            <LucideArrowLeft :size="13" />
            All Events
          </NuxtLink>
          <div class="flex items-center gap-2">
            <button @click="showShareModal = true" class="top-btn">
              <LucideShare2 :size="14" /> Share
            </button>
            <button @click="copyLink" class="top-btn top-btn--accent">
              <LucideLink :size="14" /> Copy Link
            </button>
          </div>
        </div>
      </div>

      <!-- ── HERO ── -->
      <section class="bg-white border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-14 lg:pb-16">
          <div class="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-start">

            <!-- Text -->
            <div class="flex flex-col">
              <div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-[10px] font-bold tracking-[.18em] uppercase px-4 py-2 rounded-full border border-blue-100 mb-6 w-fit">
                {{ conference.status || 'Upcoming' }}
              </div>
              <h1 class="text-[clamp(28px,4vw,52px)] font-bold leading-[1.1] tracking-tight text-slate-900 mb-5">
                {{ conference.title }}
              </h1>
              <p v-if="conference.description" class="text-[15px] leading-[1.8] text-slate-500 mb-8 max-w-[560px]">
                {{ conference.description.slice(0, 200) }}{{ conference.description.length > 200 ? '…' : '' }}
              </p>

              <!-- Chips -->
              <div class="flex flex-wrap gap-2.5">
                <div class="chip">
                  <LucideCalendar :size="13" class="text-[#1d4e89] flex-shrink-0" />
                  <span>{{ conference.startDate ? new Date(conference.startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Date TBA' }}</span>
                </div>
                <div class="chip">
                  <LucideMapPin :size="13" class="text-[#1d4e89] flex-shrink-0" />
                  <span>{{ conference.venue || 'Venue TBA' }}</span>
                </div>
              </div>
            </div>

            <!-- Poster -->
            <div class="flex flex-col items-center gap-3">
              <img
                :src="conference.bannerImage || 'https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg'"
                class="w-full max-w-[300px] max-h-[380px] object-contain rounded-2xl border border-slate-200 bg-slate-50 block"
                :alt="conference.title + ' poster'"
              />
              <button
                @click="selectedImage = conference.bannerImage || 'https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg'"
                class="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-400 hover:text-[#1d4e89] border border-slate-200 hover:border-blue-200 px-3.5 py-1.5 rounded-full bg-transparent transition-all duration-200 cursor-pointer"
              >
                <LucideZoomIn :size="13" /> View Full Poster
              </button>
            </div>

          </div>
        </div>
      </section>

      <!-- ── BODY ── -->
      <section class="bg-white py-14 lg:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-start">

            <!-- Main col -->
            <div class="flex flex-col gap-12">

              <!-- About -->
              <div v-if="conference.description">
                <div class="flex items-center gap-3.5 mb-4">
                  <span class="block w-6 h-px bg-[#1d4e89]"></span>
                  <span class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89]">About</span>
                </div>
                <h2 class="text-[clamp(22px,2.5vw,32px)] font-bold tracking-tight text-slate-900 mb-4">Event Overview</h2>
                <p class="text-[15px] leading-[1.85] text-slate-500 whitespace-pre-wrap">{{ conference.description }}</p>
              </div>

              <!-- Location -->
              <div v-if="conference.location">
                <div class="flex items-center gap-3.5 mb-4">
                  <span class="block w-6 h-px bg-[#1d4e89]"></span>
                  <span class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89]">Venue</span>
                </div>
                <h2 class="text-[clamp(22px,2.5vw,32px)] font-bold tracking-tight text-slate-900 mb-4">Location Details</h2>
                <div class="flex items-start gap-4 bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                  <div class="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <LucideMapPin :size="17" class="text-[#1d4e89]" />
                  </div>
                  <div>
                    <p class="text-[15px] font-bold text-slate-900 mb-1">{{ conference.venue }}</p>
                    <p class="text-[13px] leading-relaxed text-slate-500">{{ conference.location }}</p>
                  </div>
                </div>
              </div>

              <!-- Gallery -->
              <div v-if="allGalleryImages && allGalleryImages.length > 0">
                <div class="flex items-center gap-3.5 mb-4">
                  <span class="block w-6 h-px bg-[#1d4e89]"></span>
                  <span class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89]">Gallery</span>
                </div>
                <h2 class="text-[clamp(22px,2.5vw,32px)] font-bold tracking-tight text-slate-900 mb-5">Program Gallery</h2>
                <div class="gallery-grid">
                  <div
                    v-for="(img, idx) in allGalleryImages"
                    :key="idx"
                    class="gallery-item group"
                    :class="{ 'gallery-item--featured': idx % 4 === 0 }"
                    @click="selectedImage = img"
                  >
                    <img :src="img" :alt="`Gallery image ${idx + 1}`" class="gallery-img" />
                    <div class="gallery-overlay">
                      <LucideZoomIn :size="17" class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <!-- Sidebar -->
            <aside class="flex flex-col gap-4 lg:sticky lg:top-20">

              <!-- Pricing card -->
              <div class="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                <p class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89] mb-1">Registration</p>
                <h3 class="text-[20px] font-bold text-slate-900 mb-5">Pricing</h3>
                <div v-if="conference.pricing && conference.pricing.length" class="border border-slate-200 rounded-xl overflow-hidden">
                  <div
                    v-for="price in conference.pricing"
                    :key="price._id"
                    class="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-100 last:border-0 hover:bg-blue-50/40 transition-colors duration-150"
                  >
                    <span class="text-[13px] font-semibold text-slate-600">{{ price.label || price.category }}</span>
                    <span class="text-[15px] font-extrabold text-slate-900 tracking-tight">
                      {{ (price.label && (price.label.includes('Africa') || price.label.includes('USD'))) ? '$' : '₦' }}{{ price.amount.toLocaleString() }}
                    </span>
                  </div>
                </div>
                <p v-else class="text-[13px] text-slate-400">Pricing details unavailable or this event is free.</p>
              </div>

              <!-- Organizer card -->
              <div class="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-200 relative overflow-hidden">
                <LucideUsers
                  :size="90"
                  class="absolute -right-3 -bottom-3 text-blue-100 pointer-events-none"
                />
                <p class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89] mb-4">Organizer</p>
                <div class="flex items-center gap-3 pb-5 mb-5 border-b border-slate-100">
                  <div class="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <span class="text-[8px] font-black tracking-wide text-[#1d4e89]">SCPSN</span>
                  </div>
                  <div>
                    <p class="text-[14px] font-bold text-slate-900 mb-0.5">SCPSN Nigeria</p>
                    <p class="text-[12px] text-slate-400">Society of Cellular Pathology</p>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-[11px] font-semibold text-slate-400">Share this event</span>
                  <div class="flex gap-2">
                    <button @click="showShareModal = true" class="organizer-share-btn" aria-label="Share">
                      <LucideShare2 :size="13" />
                    </button>
                    <button @click="copyLink" class="organizer-share-btn" aria-label="Copy link">
                      <LucideLink :size="13" />
                    </button>
                  </div>
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>

      <!-- ── LIGHTBOX ── -->
      <Teleport to="body">
        <div v-if="selectedImage" class="lightbox" @click="selectedImage = null">
          <button class="lightbox-close" @click="selectedImage = null" aria-label="Close">
            <LucideX :size="18" />
          </button>
          <img :src="selectedImage" class="lightbox-img" @click.stop />
        </div>
      </Teleport>

      <!-- ── SHARE MODAL ── -->
      <Teleport to="body">
        <div v-if="showShareModal" class="modal-backdrop" @click="showShareModal = false">
          <div class="modal-box" @click.stop>
            <button class="modal-close-btn" @click="showShareModal = false" aria-label="Close">
              <LucideX :size="16" />
            </button>
            <p class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89] mb-1">Spread the word</p>
            <h3 class="text-[22px] font-bold text-slate-900 mb-6">Share Event</h3>

            <div class="grid grid-cols-4 gap-2 mb-4">
              <a :href="`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`" target="_blank" class="share-platform">
                <div class="share-icon-wrap share-icon-wrap--fb"><LucideFacebook :size="17" /></div>
                <span>Facebook</span>
              </a>
              <a :href="`https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodeURIComponent(conference?.title)}`" target="_blank" class="share-platform">
                <div class="share-icon-wrap share-icon-wrap--tw"><LucideTwitter :size="17" /></div>
                <span>X</span>
              </a>
              <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${encodeURIComponent(conference?.title)}`" target="_blank" class="share-platform">
                <div class="share-icon-wrap share-icon-wrap--li"><LucideLinkedin :size="17" /></div>
                <span>LinkedIn</span>
              </a>
              <a :href="`https://api.whatsapp.com/send?text=${encodeURIComponent(conference?.title + ' ' + currentUrl)}`" target="_blank" class="share-platform">
                <div class="share-icon-wrap share-icon-wrap--wa"><LucideMessageCircle :size="17" /></div>
                <span>WhatsApp</span>
              </a>
            </div>

            <button v-if="nativeShareAvailable" @click="invokeNativeShare" class="native-share-btn">
              <LucideSmartphone :size="14" /> Share via Device
            </button>

            <div class="flex items-center border border-slate-200 rounded-xl overflow-hidden">
              <input type="text" readonly :value="currentUrl" class="flex-1 bg-slate-50 px-3 py-2.5 text-[12px] text-slate-500 outline-none min-w-0 border-0" />
              <button @click="copyLink" class="px-3.5 py-2.5 bg-[#1d4e89] hover:bg-blue-800 text-white flex items-center flex-shrink-0 transition-colors duration-200 border-0 cursor-pointer">
                <LucideCopy :size="13" />
              </button>
            </div>
          </div>
        </div>
      </Teleport>

    </template>

    <EmptyState v-else title="Event Not Found" message="The conference details could not be found." class="pt-32" />

  </div>
</template>

<script setup>
import {
  LucideCalendar, LucideMapPin, LucideArrowLeft,
  LucideShare2, LucideLink, LucideX, LucideUsers,
  LucideFacebook, LucideTwitter, LucideLinkedin,
  LucideMessageCircle, LucideSmartphone, LucideCopy, LucideZoomIn
} from 'lucide-vue-next'
import { useGetConference } from '@/composables/modules/conferences/useGetConference'
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSeoMeta } from '#imports'
import { useCustomToast } from '@/composables/core/useCustomToast'

const route = useRoute()
const selectedImage = ref(null)
const showShareModal = ref(false)
const currentUrl = ref('')
const nativeShareAvailable = ref(false)

const { showToast } = useCustomToast()
const { loading, conference, getConference } = useGetConference()

useSeoMeta({
  title: () => conference.value?.title || 'SCPSN Event',
  description: () => conference.value?.description || 'Learn more about this upcoming SCPSN event.',
  ogTitle: () => conference.value?.title,
  ogDescription: () => conference.value?.description,
  ogImage: () => conference.value?.bannerImage || 'https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg',
  twitterCard: 'summary_large_image',
})

const allGalleryImages = computed(() => {
  if (!conference.value) return []
  const images = []
  if (conference.value.bannerImage) images.push(conference.value.bannerImage)
  if (conference.value.galleryImages?.length) images.push(...conference.value.galleryImages)
  return images
})

onMounted(() => {
  currentUrl.value = window.location.href
  nativeShareAvailable.value = !!navigator.share
  if (route.params.id) getConference(route.params.id)
})

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(currentUrl.value)
    showToast({ title: 'Copied!', message: 'Link copied to clipboard.', toastType: 'success' })
  } catch (e) { console.error(e) }
}

const invokeNativeShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({ title: conference.value?.title, text: conference.value?.description, url: currentUrl.value })
    } catch (e) { console.error(e) }
  }
}
</script>

<style scoped>
.font-body {
  font-family: 'DM Sans', 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
}

/* Top bar buttons */
.top-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  padding: 7px 15px;
  border-radius: 99px;
  border: 1px solid #e2e8f0;
  background: transparent;
  color: #64748b;
  cursor: pointer;
  transition: all .2s;
}
.top-btn:hover { border-color: #cbd5e1; color: #334155; }
.top-btn--accent { background: #1d4e89; border-color: #1d4e89; color: #bfdbfe; }
.top-btn--accent:hover { background: #163d6e; border-color: #163d6e; }

/* Chips */
.chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 9px 15px;
  font-size: 13px;
  font-weight: 600;
  color: #334155;
}

/* Gallery */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 175px;
  gap: 5px;
  border-radius: 16px;
  overflow: hidden;
}
.gallery-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: #f1f5f9;
}
.gallery-item--featured { grid-column: span 2; grid-row: span 2; }
.gallery-img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform .7s cubic-bezier(.16,1,.3,1);
  filter: grayscale(15%);
}
.gallery-item:hover .gallery-img { transform: scale(1.07); filter: none; }
.gallery-overlay {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0);
  display: flex; align-items: center; justify-content: center;
  transition: background .25s;
}
.gallery-item:hover .gallery-overlay { background: rgba(0,0,0,.28); }

/* Organizer share btn */
.organizer-share-btn {
  width: 32px; height: 32px; border-radius: 50%;
  background: #f1f5f9; border: 1px solid #e2e8f0;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  color: #64748b; transition: all .2s;
}
.organizer-share-btn:hover { background: #eff6ff; border-color: #bfdbfe; color: #1d4e89; }

/* Lightbox */
.lightbox {
  position: fixed; inset: 0; z-index: 9999;
  background: rgba(0,0,0,.88);
  display: flex; align-items: center; justify-content: center; padding: 24px;
}
.lightbox-close {
  position: absolute; top: 20px; right: 20px;
  width: 38px; height: 38px; border-radius: 50%;
  background: rgba(255,255,255,.12); border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  color: #fff; transition: background .2s;
}
.lightbox-close:hover { background: rgba(255,255,255,.22); }
.lightbox-img { max-width: 100%; max-height: 90vh; object-fit: contain; border-radius: 14px; }

/* Modal */
.modal-backdrop {
  position: fixed; inset: 0; z-index: 9999;
  background: rgba(0,0,0,.45);
  display: flex; align-items: center; justify-content: center; padding: 24px;
}
.modal-box {
  background: #fff; border-radius: 20px; padding: 32px;
  max-width: 380px; width: 100%; position: relative;
}
.modal-close-btn {
  position: absolute; top: 16px; right: 16px;
  width: 32px; height: 32px; border-radius: 50%;
  background: #f1f5f9; border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  color: #64748b; transition: background .2s;
}
.modal-close-btn:hover { background: #e2e8f0; }

.share-platform { display: flex; flex-direction: column; align-items: center; gap: 6px; text-decoration: none; }
.share-platform span { font-size: 10px; font-weight: 700; color: #64748b; }
.share-icon-wrap {
  width: 44px; height: 44px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; transition: transform .2s;
}
.share-platform:hover .share-icon-wrap { transform: scale(1.1); }
.share-icon-wrap--fb { background: #e8f0fe; color: #1877f2; }
.share-icon-wrap--tw { background: #f0f0f0; color: #0f0f0f; }
.share-icon-wrap--li { background: #e8f0fe; color: #0a66c2; }
.share-icon-wrap--wa { background: #e8f9ee; color: #25d366; }

.native-share-btn {
  width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px;
  padding: 10px; border-radius: 10px; border: 1px solid #e2e8f0;
  background: transparent; font-size: 12px; font-weight: 700; color: #64748b;
  cursor: pointer; margin-bottom: 12px; transition: border-color .2s, color .2s;
}
.native-share-btn:hover { border-color: #1d4e89; color: #1d4e89; }

@media (max-width: 860px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .gallery-item--featured { grid-column: span 2; grid-row: span 1; }
}
@media (max-width: 600px) {
  .top-btn { display: none; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>