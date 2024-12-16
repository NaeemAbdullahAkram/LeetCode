func clearStars(s string) string {
    chIdx := make([][]int, 26)
    minCh := 0
    bytes := []byte(s)
    
    for i, v := range(bytes) {
        if v != '*' {
            chIdx[v - 'a'] = append(chIdx[v - 'a'], i)
            if minCh > int(v - 'a') {
                minCh = int(v - 'a')
            }
        } else {
            for minCh < 26 {
                if n := len(chIdx[minCh]); n > 0 {
                    minIndex := chIdx[minCh][n - 1]
                    chIdx[minCh] = chIdx[minCh][:n - 1]
                    bytes[minIndex] = '*'
                    break
                }
                minCh++
            }
        }
    }

    var builder strings.Builder
    for _, v := range(bytes) {
        if v != '*' {
            builder.WriteByte(v)
        }
    }
    return builder.String()
}