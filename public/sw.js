self.addEventListener("install", () => {
  self.skipWaiting()
})

self.addEventListener("activate", () => {
  self.clients.claim()
})

self.addEventListener("fetch", () => {
  // Offline logic will be added on Day 5
})
