<template>
  <div class="hidden lg:block fixed md:relative w-64 shadow-sm border-l border-gray-200 bg-white z-10">
    <div class="md:sticky top-16 py-2 flex flex-col text-sm text-gray-500">
      <div class="block md:hidden space-x-2 mt-16 mb-2">
        <a href="#" class="hover:text-orange transition-all ">داشبورد</a>
        <span class="font-bold font-sans text-lg"> ></span>
        <a href="#" class="hover:text-orange transition-all ">گزارش‌ها</a>
        <span class="font-bold font-sans text-lg"> ></span>
        <a href="#" class="hover:text-orange transition-all text-gray-900">پیام‌ها</a>
      </div>
      <a href="#" class="sidebar-item">
        <ion-icon class="text-2xl ml-4" name="home-outline"></ion-icon>
        <span class="">داشبورد</span>
      </a>
      <a href="#" class="sidebar-item">
        <ion-icon class="text-2xl ml-4" name="desktop-outline"></ion-icon>
        <span class="">پشتیبانی</span>
      </a>
      <a href="#" class="sidebar-item">
        <ion-icon class="text-2xl ml-4" name="server-outline"></ion-icon>
        <span class="">بانک اطلاعات</span>
      </a>
      <a href="#" class="sidebar-item">
        <ion-icon class="text-2xl ml-4" name="settings-outline"></ion-icon>
        <span class="">تنظیمات</span>
      </a>
      <a href="#" class="sidebar-item">
        <ion-icon class="text-2xl ml-4" name="location-outline"></ion-icon>
        <span class="">سرویس‌های فعال</span>
      </a>
      <a @click="show = !show" href="#" class="flex p-4 border-r-4 bg-gray-200 border-orange transition-all duration-150">
        <ion-icon class="text-2xl ml-4" name="grid-outline"></ion-icon>
        <span class="">مدیریت سفر‌</span>
      </a>
      <transition name="slide-fade">
        <div v-if="show" class="pr-8 pb-4 border-r-4 border-orange shadow shadow-sm">
          <div class="submenu p-4 flex flex-col border-r border-gray-400 space-y-6">
            <a href="#" class="relative text-orange">
              سفرهای انجام شده
            </a>
            <a href="#" class="relative hover:text-orange transition-all">
              خدمت دهنده
            </a>
            <a href="#" class="relative hover:text-orange transition-all">
              وسیله نقلیه
            </a>
          </div>
        </div>
      </transition>
      <a href="#" class="sidebar-item">
        <ion-icon class="text-2xl ml-4" name="business-outline"></ion-icon>
        <span class="">دپارتمان</span>
      </a>
      <a href="#" class="sidebar-item">
        <ion-icon class="text-2xl ml-4" name="person-add-outline"></ion-icon>
        <span class="">مدیریت کارکنان</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  @apply transition-all duration-1000
}

.slide-fade-leave-active {
  @apply transition-all duration-1000
}

.slide-fade-enter-from {
  @apply h-0;
}
.slide-fade-leave-to {
  @apply h-full;
}
</style>