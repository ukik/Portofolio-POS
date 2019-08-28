import Vue from 'vue'

Vue.directive('pointer', {
  bind(element, binding, vnode) {
    element.style.cursor = "pointer"
  }
})

Vue.directive('image-preview', {
  inserted(element, binding, vnode) {
    if(binding.value == null) {
      element.src = './images/no-menu-1.png'
      return;
    }
    element.src = binding.value;
    return;
  },
  bind(element, binding, vnode) {
    if(binding.value == null) {
      element.src = './images/no-menu-1.png'
      return;
    }
    element.src = binding.value;
    return;
  },
  update(element, binding, vnode) {
    if(binding.value == null) {
      element.src = './images/no-menu-1.png'
      return;
    }
    element.src = binding.value;
    return;
  },
})

Vue.directive('option', {
  bind(element, binding, vnode) {
    // console.log('v-option', binding)
    if(binding.value === ""){
      element.disabled = true;
    }
  }
})

Vue.directive('menu-display', {
  bind(element, binding, vnode) {
    // console.log('v-option', binding)
    
    switch (binding.value) {
      case 'makanan':
        element.className = "zoomin frame border border-primary"
        break;
      case 'minuman':
        element.className = "zoomin frame border border-success"
        break;
      case 'camilan':
        element.className = "zoomin frame border border-danger"
        break;
    }
  }
})

Vue.directive('btn-menu-display', {
  bind(element, binding, vnode) {
    // console.log('v-option', binding)
    
    switch (binding.value) {
      case 'makanan':
        element.className = "btn btn-primary m-2"
        break;
      case 'minuman':
        element.className = "btn btn-success m-2"
        break;
      case 'camilan':
        element.className = "btn btn-danger m-2"
        break;
    }
  }
})

Vue.directive('no-children', {
  bind(element, binding, vnode) {
    if(element.childElementCount <= 0) {
      element.style.display = 'none'
    }
  }
})



