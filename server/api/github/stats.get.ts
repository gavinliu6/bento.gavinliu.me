interface GitHubStats {
  totalStars: number
  totalCommits: number
  totalPRs: number
  totalIssues: number
  contributedTo: number
}

export default defineEventHandler(async () => {
  const stats: GitHubStats = await $fetch('https://ghstats.gavinliu.me/api/stats?username=gavinliu6')

  return stats
})
