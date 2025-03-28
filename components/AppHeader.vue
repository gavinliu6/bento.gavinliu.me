<template>
  <div
    class="
      px-4
      max-[428px]:px-6
      xl:px-16
    "
  >
    <header
      class="mx-auto h-(--app-header-height) max-w-(--container-max-width)"
    >
      <div class="flex h-full items-center justify-end">
        <div class="flex items-center text-xs">
          <span>
            {{ now() }} <span class="text-[#5E5E5E]"> (UTC +08:00)</span>
          </span>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.15s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
