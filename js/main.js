function delayedPromise() {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve("Готово")
      }, 2000);
   })
}

delayedPromise()
.then((result) => {
   console.log(result);
})
.catch((error) => {
   console.error(error);
})
