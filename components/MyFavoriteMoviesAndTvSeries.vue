<script setup lang="ts">
const myFavoriteMoviesAndTvSeries = ref([
  {
    name: '龙猫',
    image: '/posters/my-neighbor-totoro.webp',
  },
  {
    name: 'The Big Bang Theory',
    image: '/posters/tbbt.webp',
  },
  {
    name: 'Reply 1988',
    image: '/posters/reply1988.webp',
  },
])

const { width } = useWindowSize({ initialWidth: 0 })
</script>

<template>
  <ClientOnly>
    <div class="overflow-hidden">
      <h4 class="p-4 text-lg font-semibold">
        My favorite movies & TV series
      </h4>
      <Carousel
        :value="myFavoriteMoviesAndTvSeries"
        :num-visible="2"
        :num-scroll="1"
        :responsive-options="[
          {
            breakpoint: '1279px',
            numVisible: 1,
            numScroll: 1,
          },
        ]"
        :pt="{
          root: {
            class: 'w-(--width) min-[428px]:w-[404px] xl:w-[860px]',
            style: {
              '--width': (width - 32 + 24) + 'px',
            },
          },
          content: 'flex flex-row',
          viewport: 'overflow-hidden w-full',
          itemList: 'flex flex-row',
          pcPrevButton: {
            root: 'hidden',
          },
          pcNextButton: {
            root: 'hidden',
          },
          indicatorList: 'flex flex-row justify-center gap-2 p-6 pr-16',
          indicator: 'inline-flex items-center justify-center group',
          indicatorButton: 'h-1.75 w-6 rounded-full bg-neutral-300 cursor-pointer transition-colors group-data-[p-active=false]:hover:bg-neutral-500 group-data-[p-active=true]:bg-neutral-900',
        }"
      >
        <template #item="slotProps">
          <div
            class="
              mr-6 h-(--height) w-(--width)
              min-[428px]:h-[570px] min-[428px]:w-[380px]
              xl:mr-10 xl:h-[585px] xl:w-[390px]
            "
            :style="{
              '--width': (width - 32) + 'px',
              '--height': (width - 32) * 1.5 + 'px',
            }"
          >
            <Image
              :src="slotProps.data.image"
              :alt="slotProps.data.name"
              :pt="{
                root: 'flex rounded-3xl border border-neutral-200 overflow-hidden',
                image: 'size-full min-[428px]:h-[568px] min-[428px]:w-[378px] xl:h-[583px] xl:w-[388px] object-cover',
              }"
            />
          </div>
        </template>
      </Carousel>
    </div>
  </ClientOnly>
</template>
