

// карусель ручное перелистывание
// const carouselList = document.querySelector('.carousel-list')
// const carouselItems = carouselList.querySelectorAll('.carousel-item')
// const prevButton = document.querySelector('.carousel-prev')
// const nextButton = document.querySelector('.carousel-next')

// let currentItemIndex = 0

// function updateCarousel() {
// 	carouselItems.forEach((item, index) => {
// 		item.style.display = index === currentItemIndex ? 'block' : 'none'
// 	})
// }

// updateCarousel()

// prevButton.addEventListener('click', () => {
// 	if (currentItemIndex > 0) {
// 		currentItemIndex--
// 	}
// 	updateCarousel()
// })

// nextButton.addEventListener('click', () => {
// 	if (currentItemIndex < carouselItems.length - 1) {
// 		currentItemIndex++
// 	}
// 	updateCarousel()
// })

// карусель цикл
// const carouselList = document.querySelector('.carousel-list')
// const carouselItems = carouselList.querySelectorAll('.carousel-item')

// let currentItemIndex = 0

// function updateCarousel() {
// 	carouselList.style.transform = `translateX(-${
// 		currentItemIndex * carouselItems[0].offsetWidth
// 	}px)`
// }

// updateCarousel()

// setInterval(() => {
// 	currentItemIndex++

// 	if (currentItemIndex === carouselItems.length) {
// 		currentItemIndex = 0
// 	}

// 	updateCarousel()
// }, 4000) // Автоматическое переключение каждые 4 секунды
