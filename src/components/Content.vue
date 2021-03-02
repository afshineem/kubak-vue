<template>
  <div class="flex flex-col w-full mt-10 p-5">
    <div class="text-right">
      <h1 class="text-gray-700 text-3xl">
        مدیریت سفرهای انجام شده
      </h1>
      <p class="text-gray-500 text-xs my-3">
        در این قسمت تمام سفرهای انجام شده مدیریت می شود
      </p>
    </div>
    <div class="w-full bg-white border border-gray-200 rounded-md p-5">
      <div class="flex space-x-3 mb-10">
        <input type="text" class="bg-gray-100 border text-gray-700 border-gray-200 outline-none rounded-md ml-3 w-1/2 p-1">
        <a href="" class="search bg-gray-100 ">جستجو</a>
        <span @click="show = !show" class="search border border-gray-400 hover:border-transparent">فیلتر</span>
      </div>
      <transition name="slide-fade">
        <div v-if="show" class="w-full p-5 border-2 border-gray-200 my-5 text-gray-500 text-xs">
          <div class="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <div class="flex flex-col space-y-1">
              <label>نام راننده</label>
              <select class="border border-gray-300 w-full outline-none rounded-md p-1 bg-gray-100">
                <option value="driver1"></option>
                <option value="driver1">driver1</option>
                <option value="driver1">driver2</option>
                <option value="driver1">driver3</option>
                <option value="driver1">driver4</option>
                <option value="driver1">driver5</option>
              </select>
            </div>
            <div class="flex flex-col space-y-1">
              <label>وضعیت</label>
              <select class="border border-gray-300 w-full outline-none rounded-md p-1 bg-gray-100">
                <option value="driver1"></option>
                <option value="driver1">option</option>
                <option value="driver1">option</option>
              </select>
            </div>
            <div class="flex flex-col space-y-1">
              <label>از تاریخ سفر</label>
              <input class="border border-gray-300 w-full outline-none rounded-md p-1 bg-gray-100" />
            </div>
            <div class="flex flex-col space-y-1">
              <label>تا تاریخ سفر</label>
              <input class="border border-gray-300 w-full outline-none rounded-md p-1 bg-gray-100" />
            </div>
            <div class="flex flex-col space-y-1">
              <label>از تعداد سفر موفق</label>
              <input class="border border-gray-300 w-full outline-none rounded-md p-1 bg-gray-100" />
            </div>
            <div class="flex flex-col space-y-1">
              <label>تا تعداد سفر موفق</label>
              <input class="border border-gray-300 w-full outline-none rounded-md p-1 bg-gray-100" />
            </div>
          </div>
          <div class="flex justify-end gap-5 mt-5">
            <span id="filter-close" class="px-6 md:px-16 py-2 hover:bg-gray-100 rounded-md transition-all duration-150">بستن فیلتر</span>
            <a href="" class="bg-orange text-white px-6 md:px-16 py-2 rounded-md border border-orange hover:bg-white hover:text-orange transition-all duration-150">فیلتر شود</a>
          </div>
        </div>
      </transition>

      <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 text-gray-500">
        <div class="driver-item">
          <div class="flex flex-col space-y-3">
            <span class="text-xs">نام راننده</span>
            <h1 class="font-bold text-gray-700">سید اصغر فراهانی</h1>
          </div>
          <ion-icon class="text-6xl text-gray-100" name="person-circle-outline"></ion-icon>
        </div>
        <div class="driver-item">
          <div class="flex flex-col space-y-3">
            <span class="text-xs">تعداد سفرهای موفق</span>
            <h1 class="font-bold text-gray-700">0 سفر</h1>
          </div>
          <ion-icon class="text-6xl text-gray-100" name="car-outline"></ion-icon>
        </div>
        <div class="driver-item">
          <div class="flex flex-col space-y-3">
            <span class="text-xs">درخواست های قبول شده</span>
            <h1 class="font-bold text-gray-700">0 درخواست</h1>
          </div>
          <ion-icon class="text-6xl text-green-100" name="checkmark-circle"></ion-icon>
        </div>
        <div class="driver-item">
          <div class="flex flex-col space-y-3">
            <span class="text-xs">درخواست های رد شده</span>
            <h1 class="font-bold text-gray-700">0 درخواست</h1>
          </div>
          <ion-icon class="text-6xl text-gray-100" name="close-circle"></ion-icon>
        </div>
        <div class="driver-item">
          <div class="flex flex-col space-y-3">
            <span class="text-xs">مجموع زمان فعالیت</span>
            <h1 class="font-bold text-gray-700">0:0:0</h1>
          </div>
          <ion-icon class="text-6xl text-gray-100" name="time"></ion-icon>
        </div>
        <div class="driver-item">
          <div class="flex flex-col space-y-3">
            <span class="text-xs">مجموع طول سفر</span>
            <h1 class="font-bold text-gray-700">0 کیلومتر</h1>
          </div>
          <ion-icon class="text-6xl text-gray-100" name="speedometer"></ion-icon>
        </div>
        <div class="driver-item">
          <div class="flex flex-col space-y-3">
            <span class="text-xs">مجموع امتیازات</span>
            <h1 class="font-bold text-gray-700">632</h1>
          </div>
          <ion-icon class="text-6xl text-gray-100" name="star"></ion-icon>
        </div>
        <div class="driver-item">
          <div class="flex flex-col space-y-3">
            <span class="text-xs">مجموع گزارشات</span>
            <h1 class="font-bold text-gray-700">42</h1>
          </div>
          <ion-icon class="text-6xl text-gray-100" name="receipt"></ion-icon>
        </div>
      </div>

      <table class="w-full text-xs mt-8">
        <thead>
        <tr  class="flex w-full justify-around bg-gray-100 py-5 font-light border border-gray-200">
          <th>ردیف</th>
          <th>زمان شروع سفر</th>
          <th>زمان پایان سفر</th>
          <th>زمان فعالیت</th>
          <th>طول سفر</th>
          <th>روز هفته</th>
          <th>تاریخ</th>
        </tr>
        </thead>
        <tbody>
        <tr class="flex p-5 pr-10">
          <td>1</td>
        </tr>
        <tr class=" flex p-5 pr-10">
          <td>2</td>
        </tr>
        <tr class=" flex p-5 pr-10">
          <td>3</td>
        </tr>
        <tr class=" flex p-5 pr-10">
          <td>4</td>
        </tr>
        <tr class=" flex p-5 pr-10">
          <td>5</td>
        </tr>
        <tr class="flex p-5 pr-10">
          <td>6</td>
        </tr>
        <tr class=" flex p-5 pr-10">
          <td>7</td>
        </tr>
        </tbody>
      </table>

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
  @apply opacity-0;
}
.slide-fade-leave-to {
  @apply opacity-100;
}
</style>