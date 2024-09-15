import { ref } from 'vue'

export function borderToggle (e) {
  this.isActive = !this.isActive;
  if (this.isActive === false) {
    e.target.style.border = "solid black";
  }
  else {
    e.target.style.border = "none";
  }
}   