<template>
  <div class="fixed top-0 w-full shadow-md bg-white z-20">
    <div class="px-6 h-14 flex justify-between items-center">
      <div class="flex items-center text-sm text-gray-400">
        <ion-icon id="toggle" size="large" name="reorder-three-outline"></ion-icon>
        <div class="hidden md:block flex items-center space-x-2 pb-2">
          <a href="#" class="hover:text-orange transition-all ">داشبورد</a>
          <span class="font-bold font-sans text-lg"> ></span>
          <a href="#" class="hover:text-orange transition-all ">گزارش‌ها</a>
          <span class="font-bold font-sans text-lg"> ></span>
          <a href="#" class="hover:text-orange transition-all text-gray-900">پیام‌ها</a>
        </div>
      </div>

      <!--Logo-->
      <a href="#">
        <img src="src/assets/logo.png" alt="" class="h-6">
      </a>

      <!--User-->
      <div class="flex items-center">
        <div class="relative">
          <a href="#" id="notification">
            <ion-icon class="text-2xl text-gray-300" name="notifications"></ion-icon>
          </a>
          <div class="invisible panel divide-y divide-gray-200">
            <a href="#" class="w-full py-3 text-gray-500 hover:text-orange transition-all px-10">
              <span>آیتم ردیو باتن</span>
            </a>
            <a href="#" class="w-full py-3 text-gray-500 hover:text-orange transition-all px-10">
              <span>آیتم ردیو باتن</span>
            </a>
            <a href="#" class="w-full py-3 text-gray-500 hover:text-orange transition-all px-10">
              <span>آیتم ردیو باتن</span>
            </a>
          </div>
        </div>
        <div class="relative mr-8">
          <a href="#" id="user">
            <img src="src/assets/user.png" alt="" class="w-10">
          </a>
          <div id="user-panel" class="invisible panel mt-2">
            <div class="flex flex-col divide-y divide-gray-200">
              <a href="#" class="w-full px-10 py-3 text-gray-500 hover:text-orange transition-all">
                <div class="flex justify-between items-center">
                  <ion-icon name="add-outline"></ion-icon>
                  <span>آیتم پنل جدید</span>
                </div>
              </a>
              <a href="#" class="w-full px-10 py-3 text-gray-500 hover:text-orange transition-all">
                <div class="flex justify-between items-center">
                  <ion-icon name="radio-button-on-outline"></ion-icon>
                  <span>آیتم پنل جدید</span>
                </div>
              </a>
              <a href="#" class="w-full px-10 py-3 text-gray-500 hover:text-orange transition-all">
                <div class="flex justify-between items-center">
                  <ion-icon name="radio-button-off-outline"></ion-icon>
                  <span>آیتم پنل جدید</span>
                </div>
              </a>
            </div>
            <div class="flex justify-around text-lg border-t-2 border-gray-300">
              <a href="#" class="w-full px-10 py-3 text-base text-gray-500 hover:text-orange transition-all">
                <div class="flex justify-between items-center">
                  <ion-icon size="large" name="exit-outline"></ion-icon>
                  <span>خروج از صفحه</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>

</style>