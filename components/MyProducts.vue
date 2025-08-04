<script setup lang="ts">
const { width } = useWindowSize({ initialWidth: 0 })
</script>

<template>
  <ClientOnly>
    <div class="overflow-hidden">
      <h4 class="p-4 text-lg font-semibold">
        Products
      </h4>
      <div
        class="
          flex flex-wrap gap-6
          xl:gap-10
        "
      >
        <NuxtLink
          title="A directory site dedicated to geeks."
          to="https://gb1024.com"
          external
          target="_blank"
          class="
            flex h-(--widget-height) w-(--widget-width) flex-col items-start
            rounded-3xl border border-neutral-200 p-5
            min-[401px]:p-6
            min-[428px]:h-[178px] min-[428px]:w-[178px]
            xl:h-[175px] xl:w-[175px]
          "
          :style="{
            '--widget-width': (width - 32) / 2 - 12 + 'px',
            '--widget-height': (width - 32) / 2 - 12 + 'px',
          }"
        >
          <div
            class="
              flex size-10 flex-shrink-0 items-center justify-center rounded-lg
              bg-neutral-900 text-white shadow-[0_1px_2px_rgba(0,0,0,.125)]
            "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.6208 2.04464C11.8563 1.9122 12.1437 1.9122 12.3792 2.04464L20.2742 6.48561L12.0006 11.1396L3.72614 6.48539L11.6208 2.04464ZM2.97656 7.78478V16.6406C2.97656 16.92 3.12728 17.1777 3.37081 17.3147L11.2506 21.7471V12.4388L2.97656 7.78478ZM12.7506 21.7465L20.6292 17.3147C20.8727 17.1777 21.0234 16.92 21.0234 16.6406V7.78521L12.7506 12.4388V21.7465Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div class="mt-3 grow">
            <p class="text-sm font-medium">GeekBox</p>
            <p class="line-clamp-1 text-xs text-[#5E5E5E]">A directory site dedicated to geeks.</p>
          </div>
          <Button
            label="View"
            class="
              cursor-pointer rounded-full bg-neutral-900 px-4 text-xs leading-7
              font-semibold text-white
              max-[389px]:hidden
            "
          />
        </NuxtLink>
      </div>
    </div>
  </ClientOnly>
</template>
