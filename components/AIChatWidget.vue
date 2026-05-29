<template>
  <div class="fixed bottom-6 right-6 z-[100] font-sans">
    <!-- WhatsApp-style Toggle Button -->
    <button 
      @click="toggleChat"
      class="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 relative group"
      aria-label="Open Chat"
    >
      <div v-if="unreadCount > 0" class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
        {{ unreadCount }}
      </div>
      <Icon v-if="!isOpen" name="logos:whatsapp-icon" size="32" />
      <Icon v-else name="lucide:x" size="28" />
      
      <!-- Proactive Tooltip -->
      <transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="opacity-0 translate-x-10"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-10"
      >
        <div v-if="showProactiveTooltip && !isOpen" class="absolute right-20 bottom-2 bg-white text-slate-800 px-5 py-3 rounded-2xl text-[11px] font-bold shadow-2xl border border-slate-100 whitespace-nowrap min-w-[200px]">
           <p class="text-[#075E54] mb-1 flex items-center gap-1.5 uppercase tracking-widest text-[9px]">
             <span class="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse"></span>
             Contextual Support
           </p>
           {{ proactiveMessage }}
           <div class="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-t border-r border-slate-100"></div>
        </div>
      </transition>
    </button>

    <!-- WhatsApp-style Chat Window Container -->
    <transition
      enter-active-class="transition duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      enter-from-class="transform translate-y-20 opacity-0 scale-90"
      enter-to-class="transform translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="transform translate-y-0 opacity-100 scale-100"
      leave-to-class="transform translate-y-20 opacity-0 scale-90"
    >
      <div v-if="isOpen" class="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[600px] bg-[#E5DDD5] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden border border-white/20">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://w0.peakpx.com/wallpaper/508/606/HD-wallpaper-whatsapp-l-light-patron-patrones.jpg')] bg-repeat"></div>

        <!-- Header (Classic WhatsApp Teal) -->
        <div class="bg-[#075E54] p-5 text-white flex items-center justify-between z-10 shadow-lg relative shrink-0">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
              <Icon name="lucide:bot" size="24" class="text-white/90" />
            </div>
            <div>
              <h4 class="font-extrabold text-sm leading-tight uppercase tracking-tight">SCPSN Smart Bot</h4>
              <p class="text-[9px] text-white/60 flex items-center gap-1.5 font-black uppercase tracking-[0.2em] mt-0.5">
                <span class="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></span>
                Active & Diagnostic
              </p>
            </div>
          </div>
          <div class="flex gap-1">
            <button @click="requestTransfer" class="text-[9px] font-black uppercase tracking-widest bg-white/20 hover:bg-[#25D366] transition-all px-3 py-1.5 rounded-xl shadow-inner border border-white/10 shrink-0">
               Live Agent
            </button>
          </div>
        </div>

        <!-- Identity Form (Before Chat Starts) -->
        <div v-if="!isIdentified" class="flex-grow z-10 flex flex-col p-8 items-center justify-center bg-white/95 backdrop-blur-md">
           <div class="w-24 h-24 bg-[#075E54]/5 rounded-[2rem] flex items-center justify-center mb-8 shadow-inner border border-black/5 animate-in zoom-in-50 duration-500">
             <Icon name="lucide:user-plus" size="40" class="text-[#075E54]" />
           </div>
           
           <div class="text-center mb-10">
             <h5 class="text-xl font-black text-slate-800 tracking-tight mb-2">Initialize Session</h5>
             <p class="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Please provide your details to<br/>access live administrative support.</p>
           </div>

           <div class="w-full space-y-4">
             <div class="space-y-1.5">
               <label class="text-[10px] font-black text-[#075E54] uppercase tracking-widest ml-1">Full Name</label>
               <input 
                 v-model="guestName"
                 placeholder="e.g. Dr. Adamu"
                 class="form-input"
               />
             </div>
             
             <div class="space-y-1.5">
               <label class="text-[10px] font-black text-[#075E54] uppercase tracking-widest ml-1">Email Address</label>
               <input 
                 v-model="guestEmail"
                 type="email"
                 placeholder="scientific@domain.com"
                 class="form-input"
               />
             </div>

             <button 
               @click="identify"
               :disabled="!isValidIdentity"
               class="btn-premium w-full !py-4 shadow-none mt-6"
             >
               Begin Secure Contact
             </button>
           </div>
           
           <p class="mt-10 text-[9px] font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2">
             <Icon name="lucide:shield-check" size="12" />
             End-to-End Encrypted Handshake
           </p>
        </div>

        <!-- Chat Main Area -->
        <template v-else>
          <!-- Messages Area -->
          <div class="flex-grow overflow-y-auto p-5 pb-8 space-y-4 z-10 scrollbar-thin scroll-smooth" ref="messageArea">
            <div class="flex justify-center my-6">
               <span class="bg-[#D1E9FF]/90 backdrop-blur-sm shadow-md text-[9px] font-black text-[#075E54] px-4 py-1.5 rounded-xl uppercase tracking-[0.2em]">
                 Session Established
               </span>
            </div>

            <div 
              v-for="(msg, i) in messages" 
              :key="i"
              :class="[
                'max-w-[85%] p-4 rounded-2xl text-[13.5px] leading-relaxed relative shadow-lg group', 
                msg.sender === 'user' 
                  ? 'ml-auto bg-[#DCF8C6] text-slate-800 rounded-tr-none' 
                  : 'mr-auto bg-white text-slate-800 rounded-tl-none border border-black/5'
              ]"
            >
              <!-- Message Tail -->
              <div v-if="msg.sender === 'user'" class="absolute -top-0 -right-2 w-4 h-4 text-[#DCF8C6] fill-current">
                <svg viewBox="0 0 16 16"><path d="M16 0H0v16L16 0z"/></svg>
              </div>
              <div v-else class="absolute -top-0 -left-2 w-4 h-4 text-white fill-current">
                <svg viewBox="0 0 16 16"><path d="M0 0h16v16L0 0z"/></svg>
              </div>

              <!-- Attachments Viewer -->
              <div v-if="msg.attachments && msg.attachments.length > 0" class="mb-3 space-y-2">
                 <div v-for="(att, i) in msg.attachments" :key="i" class="rounded-xl overflow-hidden border border-black/5 bg-black/5">
                    <img v-if="att.startsWith('data:image')" :src="att" class="w-full max-h-[300px] object-cover cursor-pointer hover:opacity-90 transition-opacity" />
                    <div v-else class="p-4 flex items-center gap-3 cursor-pointer hover:bg-black/5 transition-colors">
                      <Icon name="lucide:file" size="24" class="text-[#075E54] opacity-80" />
                      <span class="text-[10px] font-bold text-slate-700 uppercase tracking-widest truncate">Attached Document</span>
                    </div>
                 </div>
              </div>

              <!-- Page Source Label (if exists) -->
              <div v-if="msg.pageTitle && msg.sender !== 'admin'" class="text-[8px] font-black text-[#075E54]/40 uppercase tracking-widest mb-2 pb-1 border-b border-black/5 flex items-center gap-1">
                 <Icon name="lucide:globe" size="10" />
                 From: {{ msg.pageTitle }}
              </div>

              <div v-if="msg.sender !== 'user'" class="text-[9px] font-black text-[#075E54]/60 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                 <Icon v-if="msg.sender === 'ai'" name="lucide:bot" size="12" class="text-emerald-500" />
                 {{ msg.senderName || 'SCPSN Intelligence' }}
              </div>

              <p class="font-medium whitespace-pre-wrap tracking-tight">{{ msg.text }}</p>

              <div class="flex items-center justify-end gap-1.5 mt-2 opacity-60">
                <span class="text-[9px] font-bold uppercase tracking-tighter">{{ formatTime(msg.createdAt) }}</span>
                <div v-if="msg.sender === 'user'" class="flex items-center">
                   <Icon v-if="msg.status === 'read'" name="lucide:check-check" size="12" class="text-sky-500" />
                   <Icon v-else-if="msg.status === 'delivered'" name="lucide:check-check" size="12" class="text-slate-400" />
                   <Icon v-else name="lucide:check" size="12" class="text-slate-400" />
                </div>
              </div>
            </div>
          </div>

          <!-- Predefined Questions (FAQ Pills) -->
          <div v-if="predefinedResponses.length > 0 && messages.some(m => m.sender === 'ai')" class="p-3 bg-[#F0F2F5]/80 backdrop-blur-md overflow-x-auto whitespace-nowrap scrollbar-thin border-t border-black/5">
             <div class="flex gap-2">
               <button 
                 v-for="(res, i) in predefinedResponses" 
                 :key="i"
                 @click="sendQuick(res.text)"
                 class="px-4 py-2 border border-[#075E54]/20 bg-white hover:bg-[#DCF8C6] hover:border-[#25D366] rounded-full text-[11px] font-bold text-[#075E54] transition-all whitespace-nowrap shadow-sm"
               >
                 {{ res.label }}
               </button>
             </div>
          </div>

          <!-- Payload Preview -->
          <div v-if="pendingAttachments.length > 0" class="flex items-center gap-2 p-3 bg-white border-t border-black/5 z-20">
            <div v-for="(att, i) in pendingAttachments" :key="i" class="relative group">
              <img v-if="att.startsWith('data:image')" :src="att" class="w-12 h-12 object-cover rounded-xl border border-slate-200" />
              <div v-else class="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200"><Icon name="lucide:file" size="18" class="text-slate-400" /></div>
              <button @click="pendingAttachments.splice(i, 1)" class="absolute -top-2 -right-2 w-5 h-5 bg-rose-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"><Icon name="lucide:x" size="10" /></button>
            </div>
          </div>

          <!-- Input Area -->
          <div class="p-4 bg-[#F0F2F5] flex items-end gap-2 z-10 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] relative">
            <div class="flex items-center gap-1 mb-0.5">
              <div class="relative">
                <button @click="showEmoji = !showEmoji" class="p-3 hover:bg-black/5 rounded-full text-slate-500 transition-colors">
                  <Icon name="lucide:smile" size="24" />
                </button>
                <div v-if="showEmoji" class="absolute bottom-full left-0 mb-4 bg-white border border-slate-100 p-4 rounded-3xl shadow-2xl flex gap-2 w-[280px] flex-wrap z-[100] cursor-default">
                   <button v-for="e in commonEmojis" :key="e" @click="input += e" class="text-2xl hover:scale-125 transition-transform">{{ e }}</button>
                </div>
              </div>
              <button @click="$refs.fileInputClient.click()" class="p-3 hover:bg-black/5 rounded-full text-slate-500 transition-colors">
                <Icon name="lucide:paperclip" size="24" />
              </button>
              <input type="file" ref="fileInputClient" class="hidden" @change="handleClientFileUpload" accept="image/*,.pdf,.doc,.docx" multiple />
            </div>
            
            <div class="flex-grow">
              <textarea 
                v-model="input"
                @keydown.enter.prevent="send"
                rows="1"
                placeholder="Type a message..."
                class="w-full px-5 py-3.5 bg-white border-none rounded-2xl text-[14px] font-medium focus:ring-4 focus:ring-[#075E54]/5 outline-none shadow-sm max-h-32 resize-none transition-all placeholder:text-slate-400"
                @input="adjustTextareaHeight"
              ></textarea>
            </div>

            <button 
              @click="send"
              :disabled="!input.trim() && pendingAttachments.length === 0"
              class="w-12 h-12 bg-[#075E54] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#128C7E] transition-all active:scale-90 disabled:opacity-30 disabled:scale-100 mb-0.5 shrink-0"
            >
              <Icon name="lucide:send" size="20" class="ml-1" />
            </button>
          </div>
        </template>
          <!-- Rating Overlay -->
          <div v-if="showRating" class="absolute inset-0 bg-slate-900/80 backdrop-blur-md z-[200] flex items-center justify-center">
            <div class="bg-white p-8 rounded-3xl m-4 w-full flex flex-col items-center text-center shadow-2xl animate-in zoom-in-95 duration-300">
               <div class="w-16 h-16 bg-[#075E54]/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="lucide:star" size="32" class="text-[#075E54]" />
               </div>
               <h3 class="text-xl font-black text-slate-800 tracking-tight mb-2">Rate Your Session</h3>
               <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">How was the support quality?</p>
               <div class="flex gap-2 mb-8">
                 <button v-for="star in 5" :key="star" @click="submitRating(star)" class="text-4xl text-slate-300 hover:text-yellow-400 hover:scale-110 transition-all focus:text-yellow-400">★</button>
               </div>
               <button @click="closeRating" class="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 underline">Skip & Close</button>
            </div>
          </div>
          
          <!-- Idle Warning Overlay -->
          <div v-if="showIdleWarning" class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm z-[150] flex items-center justify-center">
            <div class="bg-white p-6 rounded-3xl m-6 w-full text-center shadow-2xl">
               <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="lucide:clock-4" size="24" class="text-amber-500" />
               </div>
               <h4 class="text-lg font-black text-slate-800 mb-2">Are you still there?</h4>
               <p class="text-[11px] font-bold text-slate-500 mb-6 uppercase tracking-widest">Your session is inactive.</p>
               <div class="flex gap-3">
                 <button @click="markActive" class="flex-1 py-3 bg-[#075E54] text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#128C7E] transition-all">Continue</button>
                 <button @click="endSession" class="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-200 transition-all">Logout</button>
               </div>
            </div>
          </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted, watch, computed } from 'vue'
import { io } from 'socket.io-client'
import { useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)
const input = ref('')
const messageArea = ref(null)
const socket = ref(null)
const unreadCount = ref(0)
const predefinedResponses = ref([])

// Smart UI states
const showEmoji = ref(false)
const pendingAttachments = ref([])
const fileInputClient = ref(null)
const commonEmojis = ['👋', '👍', '😊', '✅', '🔬', '🏥', '📅', '💡', '⚠️', '📎', '👏', '🎉']

// Activity Tracking
const showIdleWarning = ref(false)
const showRating = ref(false)
let idleTimer = null
let warningTimer = null

// Identity Management
const guestName = useCookie('chat_guest_name', { default: () => '' })
const guestEmail = useCookie('chat_guest_email', { default: () => '' })
const roomId = useCookie('chat_room_id', { default: () => `guest_${Date.now()}` })
const isIdentified = computed(() => !!guestName.value && !!guestEmail.value)
const isValidIdentity = computed(() => guestName.value.length >= 2 && /^\S+@\S+\.\S+$/.test(guestEmail.value))

// Proactive Engagement logic
const showProactiveTooltip = ref(false)
const proactiveMessage = ref('Hi! Need help with this page?')
const hasInteracted = ref(false)

const config = useRuntimeConfig()
const apiBase = config.public.apiBase || 'http://localhost:3000/api'
const messages = ref([])

const identify = () => {
  if (isValidIdentity.value) {
    hasInteracted.value = true
    initSocket()
  }
}

const initSocket = () => {
  if (socket.value) return
  
  const baseUrl = apiBase.replace('/api', '')
  socket.value = io(`${baseUrl}/chat`, {
    transports: ['websocket', 'polling'],
  })

  socket.value.on('connect', () => {
    socket.value.emit('userJoin', { 
      roomId: roomId.value, 
      userName: guestName.value,
      email: guestEmail.value 
    })
    socket.value.emit('getPredefinedResponses')
    trackCurrentPage()
    setupActivityListeners()
  })

  socket.value.on('predefinedResponsesList', (data) => {
    predefinedResponses.value = data
  })

  socket.value.on('roomHistory', ({ messages: history }) => {
    messages.value = history
    scrollToBottom()
  })

  socket.value.on('messageReceived', (msg) => {
    messages.value.push(msg)
    scrollToBottom()
    if (!isOpen.value) {
      unreadCount.value++
      showProactiveTooltip.value = false // Hide proactive if we got a real message
    } else {
      socket.value.emit('messageRead', { messageId: msg._id, roomId: roomId.value })
    }
  })

  socket.value.on('statusUpdated', ({ messageId, status }) => {
    const msg = messages.value.find(m => m._id === messageId)
    if (msg) msg.status = status
  })
}

// Activity & Idle Management
const resetActivity = () => {
  if (showIdleWarning.value) return // Don't reset if warning is showing
  clearTimeout(idleTimer)
  clearTimeout(warningTimer)
  
  // Custom 3 min idle trigger for demo (could be longer in prod)
  idleTimer = setTimeout(() => {
    showIdleWarning.value = true
    warningTimer = setTimeout(() => {
      endSession() // Auto end after 1 more min of ignoring warning
    }, 60000)
  }, 180000)
}

const setupActivityListeners = () => {
  if (typeof window === 'undefined') return
  window.addEventListener('mousemove', resetActivity)
  window.addEventListener('keydown', resetActivity)
  resetActivity()
}

const cleanupActivityListeners = () => {
  if (typeof window === 'undefined') return
  window.removeEventListener('mousemove', resetActivity)
  window.removeEventListener('keydown', resetActivity)
  clearTimeout(idleTimer)
  clearTimeout(warningTimer)
}

const markActive = () => {
  showIdleWarning.value = false
  resetActivity()
}

const requestTransfer = () => {
  if (!socket.value) return
  socket.value.emit('requestHumanTransfer', { roomId: roomId.value })
}

const endSession = () => {
  showIdleWarning.value = false
  showRating.value = true
}

const submitRating = (val) => {
  if (socket.value) {
    socket.value.emit('rateChatSession', { roomId: roomId.value, rating: val })
  }
  closeRating()
}

const closeRating = () => {
  showRating.value = false
  isOpen.value = false
  if (socket.value) socket.value.disconnect()
  socket.value = null
  messages.value = []
}

const handleClientFileUpload = (e) => {
  const files = e.target.files
  if (!files || files.length === 0) return

  Array.from(files).forEach((file) => {
    if (file.size > 5 * 1024 * 1024) {
      alert('File too large. Max 5MB allowed.')
      return
    }
    const reader = new FileReader()
    reader.onload = (ev) => {
      pendingAttachments.value.push(ev.target.result)
    }
    reader.readAsDataURL(file)
  })
  
  e.target.value = ''
}

const trackCurrentPage = () => {
  if (!socket.value) return
  socket.value.emit('trackPage', {
    roomId: roomId.value,
    pageTitle: document.title,
    pageUrl: window.location.href
  })
}

// Watch for route changes to track page movement
watch(route, () => {
  trackCurrentPage()
  triggerProactiveEngagement()
})

const triggerProactiveEngagement = () => {
  if (isOpen.value || hasInteracted.value) return
  
  // Custom messages based on route
  if (route.path.includes('conferences')) proactiveMessage.value = 'Interested in our upcoming conferences? I can help with registration.'
  else if (route.path.includes('membership')) proactiveMessage.value = 'Questions about membership? See our requirements here.'
  else if (route.path.includes('abstracts')) proactiveMessage.value = 'Submitting an abstract? Check our guidelines.'
  else proactiveMessage.value = 'Welcome! Any questions about SCPSN?'

  setTimeout(() => {
    if (!isOpen.value && !hasInteracted.value) {
      showProactiveTooltip.value = true
      setTimeout(() => { showProactiveTooltip.value = false }, 10000)
    }
  }, 5000)
}

onMounted(() => {
  if (isIdentified.value) {
    initSocket()
  } else {
    // Show proactive message for new users after delay
    setTimeout(triggerProactiveEngagement, 3000)
  }
})

onUnmounted(() => {
  cleanupActivityListeners()
  if (socket.value) socket.value.disconnect()
})

const scrollToBottom = () => {
  nextTick(() => {
    if (messageArea.value) {
      messageArea.value.scrollTop = messageArea.value.scrollHeight
    }
  })
}

const adjustTextareaHeight = (e) => {
  const el = e.target
  el.style.height = 'auto'
  el.style.height = el.scrollHeight + 'px'
}

const toggleChat = () => {
  isOpen.value = !isOpen.value
  showProactiveTooltip.value = false
  if (isOpen.value) {
    unreadCount.value = 0
    scrollToBottom()
    if (isIdentified.value) {
       // Setup activity when chat actively opened
       resetActivity()
       messages.value.forEach(m => {
        if (m.sender !== 'user' && m.status !== 'read') {
          socket.value?.emit('messageRead', { messageId: m._id, roomId: roomId.value })
        }
      })
    }
  } else {
    // If user explicitly closes chat and session was active, ask for rating
    if (isIdentified.value && messages.value.length > 0 && !showRating.value && socket.value) {
      endSession()
      // We reopen to show the rating
      isOpen.value = true 
    }
  }
}

const formatTime = (ts) => {
  if (!ts) return ''
  return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const send = async () => {
  if ((!input.value.trim() && pendingAttachments.value.length === 0) || !socket.value) return
  
  hasInteracted.value = true
  resetActivity()
  socket.value.emit('sendMessage', {
    roomId: roomId.value,
    message: input.value,
    userName: guestName.value,
    email: guestEmail.value,
    pageTitle: document.title,
    pageUrl: window.location.href,
    attachments: [...pendingAttachments.value]
  })
  
  input.value = ''
  pendingAttachments.value = []
  
  // Reset height
  const ta = document.querySelector('textarea')
  if (ta) ta.style.height = 'auto'
}

const sendQuick = (text) => {
  input.value = text
  send()
}
</script>

<style scoped>
.scrollbar-thin::-webkit-scrollbar {
  width: 5px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.1);
  border-radius: 10px;
}

textarea::-webkit-scrollbar {
  width: 0;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
.animate-bounce {
  animation: bounce 1s infinite;
}
</style>
