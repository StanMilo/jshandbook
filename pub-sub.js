class SimplePubSub {

  constructor () {
    this.events = []
  }

  on (eventName, callback) {
    this.events[eventName] = this.events[eventName] || []
    this.events[eventName].push(callback)
  }

  trigger (eventName, args) {
    if (this.events[eventName] == undefined) {
      return false;
    }
    this.events[eventName].forEach(callback => callback.apply(this, args))
  }

}

let pubSub = new SimplePubSub()

pubSub.on('EVENT_NAME', (arg1, arg2) => {
  console.log('First callback:', arg1, arg2)
})

pubSub.on('EVENT_NAME', (arg1, arg2) => {
  console.log('Second callback:', arg1, arg2)
})

pubSub.trigger('EVENT_NAME', ['Hello', 'world'])
pubSub.trigger('EVENT_NAME', ['it', 'works'])

pubSub.trigger('NON_EXISTS_EVENT_NAME') // If non-existing event triggers nothing happens
