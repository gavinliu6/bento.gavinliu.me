<script setup lang="ts">
useHead({
  title: 'Gavin Liu',
})

const { width } = useWindowSize({ initialWidth: 0 })
</script>

<template>
  <ClientOnly>
    <Transition appear>
      <div
        class="
          min-h-[calc(100vh-var(--app-header-height))] px-4
          min-[428px]:px-6
          xl:px-16
        "
      >
        <div
          class="
            relative mx-auto
            min-[428px]:max-w-[380px]
            xl:max-w-(--container-max-width)
          "
        >
          <div
            class="
              flex size-full
              xl:absolute xl:top-0
            "
          >
            <div class="flex flex-1 flex-col">
              <div
                class="
                  mt-10 flex flex-col
                  min-[428px]:mt-12
                  xl:sticky xl:top-16 xl:pb-24
                "
              >
                <Avatar
                  image="https://avatars.githubusercontent.com/u/29831211?v=4"
                  class="
                    inline-flex size-32 items-center justify-center rounded-full
                    bg-white select-none
                    xl:size-42
                  "
                  :pt="{
                    image: 'size-30 xl:size-40 rounded-full',
                  }"
                />
                <div
                  class="
                    mt-8 ml-2
                    xl:max-w-[min(500px,calc(100vw_-_1000px))]
                  "
                >
                  <h1
                    class="
                      text-4xl leading-none font-bold
                      xl:text-6xl
                    "
                  >
                    Hello.
                  </h1>
                  <h2
                    class="
                      mt-3 mb-2.5 text-2xl leading-none font-bold tracking-tight
                      xl:mt-7 xl:mb-6 xl:text-4xl
                    "
                  >
                    My name is Gavin Liu.
                  </h2>
                  <p
                    class="
                      text-lg text-[#5E5E5E]
                      xl:text-xl
                    "
                  >
                    I'm a software engineer and a lifelong learner. And I'm passionate about web development, open source, and creative design.
                  </p>
                  <p
                    class="
                      mt-6 text-lg
                      xl:mt-8 xl:text-xl
                    "
                  >
                    I write my blog and take notes <NuxtLink
                      to="https://gavinliu.me"
                      external
                      target="_blank"
                      class="underline"
                    >here</NuxtLink>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              mx-auto
              min-[428px]:max-w-[380px]
              xl:max-w-(--container-max-width)
            "
          >
            <div
              class="
                flex flex-col pb-24
                xl:flex-row xl:pt-16
              "
            >
              <div
                class="
                  mb-10
                  xl:mr-20 xl:mb-0 xl:flex-1
                "
              />
              <div
                class="
                  z-10 flex flex-col gap-15
                  xl:w-[820px]
                "
              >
                <!-- Let's connect -->
                <div>
                  <h4 class="p-4 text-lg font-semibold">
                    Let's connect 🤝
                  </h4>
                  <div
                    class="
                      flex flex-wrap gap-6
                      xl:gap-10
                    "
                  >
                    <NuxtLink
                      to="https://www.xiaohongshu.com/user/profile/67cd9f3f000000000e013705"
                      external
                      target="_blank"
                      class="
                        flex h-(--widget-height) w-(--widget-width) flex-col
                        items-start rounded-3xl border border-neutral-200 p-5
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
                          flex size-10 flex-shrink-0 items-center justify-center
                          rounded-lg bg-[#FF2442]
                          shadow-[0_1px_2px_rgba(0,0,0,.125)]
                        "
                      >
                        <img
                          height="24"
                          width="24"
                          src="https://cdn.simpleicons.org/xiaohongshu/white"
                        >
                      </div>
                      <div class="mt-3 grow">
                        <p class="text-sm font-medium">小红书</p>
                        <p class="text-xs text-[#5E5E5E]">@奔跑的蜗牛</p>
                      </div>
                      <Button
                        label="关注"
                        class="
                          cursor-pointer rounded-full bg-[#FF2442] px-4 text-xs
                          leading-7 font-semibold text-white
                          max-[389px]:hidden
                        "
                      />
                    </NuxtLink>
                    <NuxtLink
                      to="https://x.com/GavinLiu0606"
                      external
                      target="_blank"
                      class="
                        flex h-(--widget-height) w-(--widget-width) flex-col
                        items-start rounded-3xl border border-neutral-200 p-5
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
                          flex size-10 flex-shrink-0 items-center justify-center
                          rounded-lg bg-[#1D9BF0] text-white
                          shadow-[0_1px_2px_rgba(0,0,0,.125)]
                        "
                      >
                        <IconTwitter />
                      </div>
                      <div class="mt-3 grow">
                        <p class="text-sm font-medium">Twitter</p>
                      </div>
                      <Button
                        label="Follow"
                        class="
                          cursor-pointer rounded-full bg-[#1D9BF0] px-4 text-xs
                          leading-7 font-semibold text-white transition-colors
                          hover:bg-[#1A8CD8]
                          max-[389px]:hidden
                        "
                      />
                    </NuxtLink>
                    <NuxtLink
                      to="https://github.com/gavinliu6"
                      external
                      target="_blank"
                      class="
                        flex h-(--widget-height) w-(--widget-width) flex-row
                        justify-between gap-6 rounded-3xl border
                        border-neutral-200 p-5
                        min-[401px]:p-6
                        min-[428px]:h-[178px] min-[428px]:w-[380px]
                        xl:h-[175px] xl:w-[390px]
                      "
                      :style="{
                        '--widget-width': width < 389 ? (width - 32) / 2 - 12 + 'px' : (width - 32) + 'px',
                        '--widget-height': (width - 32) / 2 - 12 + 'px',
                      }"
                    >
                      <div class="flex h-full flex-col items-start">
                        <div
                          class="
                            flex size-10 flex-shrink-0 items-center
                            justify-center rounded-lg bg-neutral-900
                            shadow-[0_1px_2px_rgba(0,0,0,.125)]
                          "
                        >
                          <img
                            height="24"
                            width="24"
                            src="https://cdn.simpleicons.org/github/white"
                          >
                        </div>
                        <div class="mt-3 grow">
                          <p class="text-sm font-medium">GitHub</p>
                        </div>
                        <Button
                          label="Follow"
                          class="
                            cursor-pointer rounded-md border
                            border-[rgba(27,31,36,.15)] bg-[#f6f8fa] px-4
                            text-xs leading-7 font-semibold transition-colors
                            hover:bg-[#f3f4f6]
                            max-[389px]:hidden
                          "
                        />
                      </div>
                      <GitHubStats class="max-[389px]:hidden" />
                    </NuxtLink>
                    <NuxtLink
                      to="mailto:hi@gavinliu.me"
                      external
                      class="
                        flex h-(--widget-height) w-(--widget-width) flex-col
                        items-start rounded-3xl border border-neutral-200 p-5
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
                          flex size-10 flex-shrink-0 items-center justify-center
                          rounded-lg bg-neutral-900 text-white
                          shadow-[0_1px_2px_rgba(0,0,0,.125)]
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
                            d="M21.25 4.75H22C22 4.33579 21.6642 4 21.25 4V4.75ZM21.25 19.25V20C21.6642 20 22 19.6642 22 19.25H21.25ZM2.75 19.25H2C2 19.6642 2.33579 20 2.75 20V19.25ZM2.75 4.75V4C2.33579 4 2 4.33579 2 4.75H2.75ZM12 13L11.5251 13.5805C11.8013 13.8065 12.1987 13.8065 12.4749 13.5805L12 13ZM20.5 4.75V19.25H22V4.75H20.5ZM21.25 18.5H2.75V20H21.25V18.5ZM3.5 19.25V4.75H2V19.25H3.5ZM2.75 5.5H21.25V4H2.75V5.5ZM12.4749 12.4195L3.47493 5.0559L2.52507 6.21684L11.5251 13.5805L12.4749 12.4195ZM20.5251 5.0559L11.5251 12.4195L12.4749 13.5805L21.4749 6.21684L20.5251 5.0559Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div class="mt-3 grow">
                        <p class="text-sm font-medium">hi@gavinliu.me</p>
                      </div>
                      <Button
                        class="
                          inline-flex cursor-pointer items-center gap-1.5
                          rounded-full bg-neutral-900 px-4 text-xs leading-7
                          font-semibold text-white
                          max-[389px]:hidden
                        "
                      >
                        <span>Email me</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.26003 10.8764L0.84375 3H23.3724L11.824 22.773L8.75259 11.7467L15.681 7.87931L15.1936 7.00613L8.26003 10.8764Z"
                            fill="white"
                          />
                        </svg>
                      </Button>
                    </NuxtLink>
                    <div
                      class="
                        relative h-(--widget-height) w-(--widget-width)
                        rounded-3xl border border-neutral-200 bg-[#F1F1F1]
                        min-[428px]:h-[178px] min-[428px]:w-[178px]
                        xl:h-[175px] xl:w-[390px]
                      "
                      :style="{
                        '--widget-width': (width - 32) / 2 - 12 + 'px',
                        '--widget-height': (width - 32) / 2 - 12 + 'px',
                      }"
                    >
                      <MapContainer class="size-full rounded-[inherit]" />
                      <span
                        class="
                          absolute top-3 left-3 hidden rounded-lg
                          bg-neutral-900/5 px-2 py-1.5 text-xs backdrop-blur-sm
                          select-none
                          xl:inline-block
                        "
                      >
                        Based in Shanghai, China
                      </span>
                    </div>
                  </div>
                </div>

                <!-- My products -->
                <MyProducts />

                <!-- My favorite movies & TV series -->
                <MyFavoriteMoviesAndTvSeries />
              </div>
            </div>
          </div>
        </div>

        <div
          class="
            px-4 py-6
            min-[428px]:px-6
            xl:fixed xl:inset-x-0 xl:bottom-6 xl:px-16 xl:py-0
          "
        >
          <div class="mx-auto max-w-(--container-max-width)">
            <p
              class="
                text-center text-xs text-[#5E5E5E]
                xl:text-left
              "
            >
              ✦ The design of this page is inspired by <NuxtLink
                to="https://bento.me/"
                external
                target="_blank"
                class="
                  inline-flex items-end gap-0.75 underline
                  decoration-neutral-400 underline-offset-[3px]
                  transition-colors
                  hover:decoration-neutral-500
                "
              >Bento <svg
                class="size-3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              </NuxtLink>
              .
            </p>
          </div>
        </div>
      </div>
    </Transition>
    <template #fallback>
      <div
        class="
          flex min-h-[calc(100vh-var(--app-header-height))] items-center
          justify-center
        "
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="animate-spin text-[#5E5E5E]"
        >
          <path
            d="M12.0003 2.75L12 6.25M12.0003 17.75V21.25M2.75 12.0007H6.25M17.75 12.0007H21.25M5.45948 5.45905L7.93414 7.93414M16.0661 16.0656L18.541 18.5405M5.45976 18.5412L7.93463 16.0664M16.0664 7.93463L18.5412 5.45976"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
        <span class="ml-2 text-sm">Loading...</span>
      </div>
    </template>
  </ClientOnly>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(32px);
}
</style>
