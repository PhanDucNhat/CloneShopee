export function nextSlide(current, length) {
  return (current + 1) % length
}

export function prevSlide(current, length) {
  return (current - 1 + length) % length
}

export function goToSlide(index) {
  return index
}