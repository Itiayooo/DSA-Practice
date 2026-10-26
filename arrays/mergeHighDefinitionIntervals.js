function mergeHighDefinitionIntervals(intervals) {
    if (intervals.length === 0) return []

    intervals.sort((a, b) => a[0] - b[0])

    let merged = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        let latestMerged = merged[merged.length - 1]
        let current = intervals[i]

        if (current[0] <= latestMerged[1]) {
            latestMerged[1] = Math.max(current[1], latestMerged[1])
        } else {
            merged.push(current)
        }
    }

    return merged
}