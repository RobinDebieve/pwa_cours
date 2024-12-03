const version = 1.01

self.addEventListener('install', event => {
    event.waitUntil(
    console.log('sw installé' + version)
    )
})

self.addEventListener('activate',() => {
    console.log('Activation SW' + version)
    return self.clients.claim()
})
